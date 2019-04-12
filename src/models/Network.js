import {Blockchains} from './Blockchains';

export default class Network {
    constructor(_name = '', _protocol = 'https', _host = '', _port = 0, blockchain = Blockchains.UOS, chainId = ''){
        this.name = _name;
        this.protocol = _protocol;
        this.host = _host;
        this.port = _port;
        this.blockchain = blockchain;
        this.chainId = chainId.toString();
    }

    static placeholder(){ return new Network(); }

    static fromJson(json){
        const p = Object.assign(Network.placeholder(), json);
        p.chainId = p.chainId ? p.chainId.toString() : '';
        return p;
    }

    static fromUnique(netString){
        const blockchain = netString.split(':')[0];
        if(netString.indexOf(':chain:') > -1)
                                            //  uos   ,24c2ffcaeef8f222cf658e7d66dd6df9b25da829c006bff00e4c33c3d02df1c5
            return new Network('', '', '','',blockchain, netString.replace(`${blockchain}:chain:`,''));

        const splits = netString.replace(`${blockchain}:`, '').split(':');
        return new Network('', '', splits[0], parseInt(splits[1] || 80), blockchain)
    }
    //此方法同上方法要一致 否则查询不到数据
    unique(){ return (`${this.blockchain}:` + (this.chainId.length ? `chain:${this.chainId}` : `${this.host}:${this.port}`)).toLowerCase(); }
    hostport(){ return `${this.host}${this.port ? ':' : ''}${this.port}` }
    fullhost(){ return `${this.protocol}://${this.host}${this.port ? ':' : ''}${this.port}` }
    clone(){ return Network.fromJson(JSON.parse(JSON.stringify(this))) }
    isEmpty(){ return !this.host.length; }
    isValid(){ return (this.host.length && this.port) || this.chainId.length }
}