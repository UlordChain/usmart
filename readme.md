
第三方应用使用案例

## 1.检测
```
var usmart;
document.addEventListener('usmartLoaded', usmartExtension => {
    usmart = window.usmart;
    if(usmart == null){
        alert_message("请先安装并配置好usmartLoaded!");
        return
    }
    if(navigator.userAgent.includes("MdsApp")){
        window.usmart = null;
    }else{
        delete window.usmart;
    }
});
```
## 2.请求账户
```
    usmart.getIdentity({accounts:[net]}).then(identity => {

        返回内容
        {hash: "xxxxxx", publicKey: "UOSxxxxx", name: "RandomRobin25xxx", kyc: false, accounts: [{name: "huqinghuqing", authority: "active", blockchain: "uos"}]}

    });

```

## 3.请求转账
```
            options = {
                authorization: account.name+'@'+account.authority,
                broadcast: true,
                sign: true
            }
            
            // 返回的是 自己定义的 UOS 对象 【构建对象】
            const usmartUOS = usmart.uos(net, Uos, options, net.protocol);
            const requiredFields = {
                accounts:[net]
            }


            //转账【】
            scatterUOS.contract(contractAccount,{requiredFields}).then(contract => {

                    console.log("转账",`"from":"转账人","to":"接收人", "quantity":"1.0000 UOS", "memo":"备注信息"`)
          
                    contract.transfer(account.name, toaccount, "1.0000 UOS", "备注信息").
                    then(trx => {
                        console.log(`Transaction ID: ${trx.transaction_id}`);
                    }).catch(e => {
                        alert_message("转账失败 ：" + e.message);
                        console.error(e);
                    });
            }).catch(e => {
                alert_message("usmart操作失败 : " + e.message);
                console.log("usmart操作失败 : " + e.message);
            });
```

##


