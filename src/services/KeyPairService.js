import {BlockchainsArray, Blockchains} from '../models/Blockchains';
import PluginRepository from '../plugins/PluginRepository'
import AlertMsg from '../models/alerts/AlertMsg'
import * as Actions from '../store/constants';
import KeyPair from '../models/KeyPair';

export default class KeyPairService {

    /***
     * Tries to make a keypair in place from a private key
     * @param keypair
     * @returns {Promise.<void>}
     */
    static async makePublicKey(keypair){
        return new Promise((resolve) => {
            setTimeout(() => {
                if(keypair.privateKey.length < 50) {
                    resolve(false);
                    return false;
                }

                let publicKey = keypair.publicKey //坑

                BlockchainsArray.map(blockchainKV => {
                    try {
                        if(!publicKey.length) {
                            const blockchain = blockchainKV.value;
                            // console.log(`keypair.blockchain ${keypair.blockchain} blockchain ${blockchain}`)
                            if(blockchain == keypair.blockchain) { //【2018.12.22】新增加 当前类型匹配map里类型才进行私转公
                                const plugin = PluginRepository.plugin(blockchain);
                                if (plugin && plugin.validPrivateKey(keypair.privateKey)) {
                                    // console.log(`---||${JSON.stringify(keypair)}`)
                                    // console.log(blockchain)
                                    publicKey = plugin.privateToPublic(keypair.privateKey);
                                    keypair.blockchain = blockchain;
                                    // console.log(keypair)
                                }
                            }
                        }
                    } catch(e){}
                });

                if(publicKey) keypair.publicKey = publicKey;
                resolve(true);
            },100)
        })
    }

    static async generateKeyPair(keypair){
        const plugin = PluginRepository.plugin(keypair.blockchain);
        // console.log("执行次数------1")
        // console.log(plugin)
        if(!plugin) return false;

        plugin.randomPrivateKey().then(privateKey => {
            // console.log("执行次数------2")
            const publicKey = plugin.privateToPublic(privateKey);
            if(plugin.validPublicKey(publicKey) && plugin.validPrivateKey(privateKey)){
                // console.log("执行次数------3")
                // console.log(`new:key:${privateKey} pubkey:${publicKey}  obje:${JSON.stringify(keypair)}`)
                //  const gos=KeyPair.placeholder();
                //  gos.blockchain=keypair.keychain
                //  gos.privateKey=keypair.privateKey
                //  gos.publicKey=keypair.publicKey
                //  gos.name=keypair.name
                 //vue.keypair=gos
                keypair.publicKey = publicKey;
                keypair.privateKey = privateKey;
            }
        });

        return true;
    }

    static saveKeyPair(keypair, context, callback){
        if(!keypair.name.length) return context[Actions.PUSH_ALERT](AlertMsg.BadKeyPairName());

        const scatter = context.scatter.clone();
        if(scatter.keychain.getKeyPair(keypair))
            return context[Actions.PUSH_ALERT](AlertMsg.KeyPairExists());
        if(scatter.keychain.getKeyPairByName(keypair.name))
            return context[Actions.PUSH_ALERT](AlertMsg.KeyPairExists());

        scatter.keychain.keypairs.push(keypair);
        context[Actions.UPDATE_STORED_SCATTER](scatter).then(() => callback());
    }
    
}