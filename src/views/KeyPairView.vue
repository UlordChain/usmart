<template>
    <section class="network scroller">
        <section class="panel">
            <figure class="header">{{locale(langKeys.KEYPAIR_Header)}}</figure>
            <figure class="sub-header">{{locale(langKeys.KEYPAIR_Description)}}</figure>
            <figure class="sub-header" style="color:red; font-weight:bold; font-size:13px;">{{locale(langKeys.KEYPAIR_Important)}}</figure>
            <sel :selected="keypair.blockchain.toUpperCase()" :options="blockchains" :parser="blockchain => blockchain.key.toUpperCase()" v-on:changed="blockchainChanged" :key="1"></sel>
            <cin :placeholder="locale(langKeys.PLACEHOLDER_Name)" :text="keypair.name" v-on:changed="changed => bind(changed, 'name')"></cin>
            <!-- <cin :placeholder="locale(langKeys.PLACEHOLDER_PublicKey)" :disabled="true"  @changed="makePublicKey"  :text="keypair.publicKey" v-on:changed="changed => bind(changed, 'publicKey')"></cin> -->
            <cin :placeholder="locale(langKeys.PLACEHOLDER_PublicKey)" :disabled="true"   :text="keypair.publicKey" v-on:changed="changed => bind(changed, 'publicKey')"></cin>
            <cin type="password" :placeholder="locale(langKeys.PLACEHOLDER_PrivateKey)" @changed="makePublicKey" :text="keypair.privateKey" v-on:changed="changed => bind(changed, 'privateKey')"></cin>
            <btn :text="locale(langKeys.BUTTON_GenerateKeyPair)" @click.native="generateKeyPair()" margined="true"></btn>
            <btn :text="locale(langKeys.GENERIC_Save)" :is-blue="true" half="true" @click.native="saveKeyPair()" margined="true"></btn>
            <btn :text="locale(langKeys.BUTTON_Copy)" half="true" @click.native="copyKeyPair()" margined="true"></btn>
        </section>

        <!-- INPUT FIELD USED FOR COPYING -->
        <input tabindex="-1" type="text" ref="copier" class="copier" />

    </section>
</template>

<script>
    import { mapActions, mapGetters, mapState } from 'vuex'
    import * as Actions from '../store/constants';
    import {RouteNames} from '../vue/Routing'
    import Network from '../models/Network'
    import Scatter from '../models/Scatter'
    import AlertMsg from '../models/alerts/AlertMsg'
    import * as AlertTypes from '../models/alerts/AlertTypes'
    import IdentityService from '../services/IdentityService'
    import {BlockchainsArray, Blockchains} from '../models/Blockchains';
    import KeyPair from '../models/KeyPair';
    import ecc from 'eosjs-ecc';
    import PluginRepository from '../plugins/PluginRepository'
    import KeyPairService from '../services/KeyPairService'

    export default {
        data(){ return {
            blockchains:BlockchainsArray,
            keypair:KeyPair.placeholder(),
            isValid:false,
        }},
        computed: {
            ...mapState([
                'scatter'
            ]),
            ...mapGetters([
                'networks'
            ])
        },
        methods: {
            bind(changed, field) {
                 // console.log(`changed:${changed.trim()} | keypair.blockchain:${this.keypair.blockchain}`)
                 this.keypair[field] = changed.trim()
                  },
            blockchainChanged(blockchainObject){
                const blockchain = blockchainObject.value;
                const clearAndChange = () => {
                    //    console.log("+------clear -----+")
                    this.keypair.blockchain = blockchain;
                    this.keypair.privateKey = '';
                    this.keypair.publicKey = '';
                };
                    // console.log("this.keypair "+JSON.stringify(this.keypair)) //上次选择
                    // console.log("blockchain "+blockchain) //本次选择
                // this.keypair.blockchain = blockchain;
                if(this.keypair.blockchain==blockchain) return;
               clearAndChange();
                // if(this.keypair.privateKey.length){ //privatekey is not empty
                //     console.log("this.keypair.privateKey.length is ??")
                //     if(PluginRepository.plugin(this.keypair.blockchain).convertsTo().includes(blockchain)){// pre select is eos and this time select is eth
                //          console.log("privateKey "+this.keypair.privateKey)
                //        //  console.log(PluginRepository.plugin(blockchain)['from_'+this.keypair.blockchain])
                //         this.keypair.privateKey =
                //             PluginRepository.plugin(blockchain)
                //                 ['from_'+this.keypair.blockchain](this.keypair.privateKey);

                //         console.log(this.keypair)

                //     }else clearAndChange();
                // } else clearAndChange();
            },
            copyKeyPair(){
                const copier = this.$refs.copier;
                copier.value = `Private Key: ${this.keypair.privateKey} Public Key: ${this.keypair.publicKey}`;
                copier.select();
                document.execCommand("copy");
                copier.value = '';

                
            //    this[Actions.PUSH_ALERT](AlertMsg.MSGCopy());
            },
            async makePublicKey(){//私钥改变 直接替换 公钥 输入框内容
                //  console.log("mkchange---"+this.keypair.blockchain)
                setTimeout(async () => {
                    if(this.keypair.privateKey.length < 50) return false;

                    // Special handling for malformatted ETH keypairs.
                    if(this.keypair.privateKey.indexOf('0x') === 0)
                        this.keypair.privateKey.replace('0x', '');

                    this.isValid = false;

                    await KeyPairService.makePublicKey(this.keypair);

                    if(this.keypair.publicKey) this.isValid = true;
                    else this[Actions.PUSH_ALERT](AlertMsg.InvalidPrivateKey());

                // console.log("mkchange-2--"+this.keypair.blockchain)

                }, 100)
            },
            async generateKeyPair(){

                this.keypair.publicKey = '';
                this.keypair.privateKey = '';
               
                // console.log("generateKeyPair=--------------=1")
                // console.log(JSON.stringify(this.keypair)+" "+new Date().getTime())
                //   console.log("generateKeyPair=--------------=2")
                // console.log(this.keypair)
                // console.log(new Date().getTime())
                 await  KeyPairService.generateKeyPair(this.keypair);
                //  console.log("generateKeyPair=--------------=3")
                //  console.log(this.keypair)
                //  console.log(new Date().getTime())

                if(this.keypair.publicKey.length) this.isValid = true;
            },
            saveKeyPair(){
                if(!this.isValid) return this[Actions.PUSH_ALERT](AlertMsg.InvalidPrivateKey());
                KeyPairService.saveKeyPair(this.keypair, this, () => {
                    this.$router.back();
                })
            },
            ...mapActions([
                Actions.UPDATE_STORED_SCATTER,
                Actions.PUSH_ALERT
            ])
        }
    }
</script>

<style lang="scss">
    .network {
        font-family:'Open Sans', sans-serif;



        .panel {
            padding:20px;

            &:not(:last-child){
                border-bottom:1px solid #eaeaea;
            }

            .header {
                color:#cecece;
                font-size:11px;
                padding-bottom:5px;
                margin-top:-5px;
                margin-bottom:10px;
                border-bottom:1px solid #eaeaea;
            }

            .sub-header {
                color:#aeaeae;
                font-size:9px;
                margin-bottom:20px;

                &.blue {
                    color:blue;
                }

                &.red {
                    color:red;
                }
            }
        }
    }
</style>