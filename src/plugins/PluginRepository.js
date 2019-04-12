import * as PluginTypes from './PluginTypes';
import EOS from './defaults/eos';
import ETH from './defaults/eth';
import UOS from './defaults/uos';

/***
 * Setting up for plugin based generators,
 * this will add more blockchain compatibility in the future.
 */

class PluginRepositorySingleton {

    constructor(){
        this.plugins = [];
        this.loadPlugins();
    }

    loadPlugins(){
        // console.info("tag","----")
        this.plugins.push(new UOS());
        this.plugins.push(new EOS());
        this.plugins.push(new ETH());
      
    }

    signatureProviders(){
        return this.plugins.filter(plugin => plugin.type === PluginTypes.BLOCKCHAIN_SUPPORT);
    }

    supportedBlockchains(){
        return this.signatureProviders().map(plugin => name)
    }

    plugin(name){

        // console.log("find============== "+name)

        return this.plugins.find(plugin => plugin.name === name);
    }

    async endorsedNetworks(){
      //  this.signatureProviders().map( plugin => console.log("plugn",JSON.stringify(plugin)))

        return await Promise.all(this.signatureProviders().map(async plugin => await plugin.getEndorsedNetwork()));
    }
}

const PluginRepository = new PluginRepositorySingleton();
export default PluginRepository;