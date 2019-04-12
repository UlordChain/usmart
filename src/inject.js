import IdGenerator from './util/IdGenerator';
import {EncryptedStream} from 'extension-streams';
import * as PairingTags from './messages/PairingTags'
import * as NetworkMessageTypes from './messages/NetworkMessageTypes'
import Scatterdapp from './scatterdapp'

/***
 * This is the javascript which gets injected into
 * the application and facilitates communication between
 * Scatter and the web application.
 */
class Inject {

    constructor(){
        // Injecting an encrypted stream into the
        // web application.
        const stream = new EncryptedStream(PairingTags.INJECTED, IdGenerator.text(64));
        // alert(JSON.stringify(stream))
        //   alert("0.1")
        // Waiting for scatter to push itself onto the application
        //构建scatter对象给 注册 ###injectedus### 
        stream.listenWith(msg => { //通过异步事件 注册 usmart 对象到window 
            if(msg && msg.hasOwnProperty('type') && msg.type === NetworkMessageTypes.PUSH_SCATTER)
                //window.scatter = new Scatterdapp(stream, msg.payload);
                window.usmart = new Scatterdapp(stream, msg.payload);
                // console.log("window.scatter",window.scatter)
        });
        // Syncing the streams between the
        // extension and the web application
        //# console.log("Inject",stream.key)
        //没有这里
        //失去的不仅仅是远方的召唤
        //一切归于沉静
        // console.log("应答:",stream.key)
        stream.sync(PairingTags.SCATTER, stream.key);
    }

}

new Inject();




