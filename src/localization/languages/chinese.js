import * as KEYS from '../keys';
import * as AlertTypes from '../../models/alerts/AlertTypes';

export default {
    [KEYS.GENERIC_New]:`新建`,
    [KEYS.GENERIC_Save]:`保存`,
    [KEYS.GENERIC_Ignored]:`已取消`,
    [KEYS.GENERIC_Identity]:`身份`,
    [KEYS.GENERIC_Contract]:`合约`,
    [KEYS.GENERIC_Action]:`操作`,
    [KEYS.GENERIC_Removed]:`已删除`,
    [KEYS.GENERIC_Name]:`名字`,
    [KEYS.GENERIC_Search]:`搜索`,
    [KEYS.GENERIC_VerifyPassword_Header]:`核对密码`,
    [KEYS.GENERIC_VerifyPassword_Description]:`您需要先验证您的当前密码，然后才能执行此操作`,
    [KEYS.GENERIC_Host]:'主机',
    [KEYS.GENERIC_Port]:'端口',
    [KEYS.GENERIC_Requires]:'需要',
    [KEYS.GENERIC_RequiredProperties]:'需要提供的信息',
    [KEYS.GENERIC_Import]:'导入',
    [KEYS.GENERIC_ChainID]:'Chain ID',
    [KEYS.GENERIC_Blockchain]:'区块链',
    [KEYS.GENERIC_Account]:'帐户',

    [KEYS.PLACEHOLDER_Name]:'名称',
    [KEYS.PLACEHOLDER_PublicKey]:'公钥',
    [KEYS.PLACEHOLDER_PrivateKey]:'私钥',
    [KEYS.PLACEHOLDER_FirstName]:'名字',
    [KEYS.PLACEHOLDER_LastName]:'姓',
    [KEYS.PLACEHOLDER_Email]:'Email',
    [KEYS.PLACEHOLDER_BirthDate]:'生日',
    [KEYS.PLACEHOLDER_LocationName]:'地址名称',
    [KEYS.PLACEHOLDER_DefaultLocationName]:'家庭地址',
    [KEYS.PLACEHOLDER_Phone]:'手机',
    [KEYS.PLACEHOLDER_Address]:'地址',
    [KEYS.PLACEHOLDER_City]:'市',
    [KEYS.PLACEHOLDER_Postal]:'邮政编码',
    [KEYS.PLACEHOLDER_Country]:'国家',
    [KEYS.PLACEHOLDER_State]:'州',
    [KEYS.PLACEHOLDER_Password]:'请输入密码',
    [KEYS.PLACEHOLDER_ConfirmPassword]:'确认密码',
    [KEYS.PLACEHOLDER_NewPassword]:'输入密码(最少8位)',
    [KEYS.PLACEHOLDER_ConfirmNewPassword]:'再次输入新密码',
    [KEYS.PLACEHOLDER_DomainOrIP]:'域名或 IP 地址',

    [KEYS.BUTTON_CreateIdentity]:'创建账户',
    [KEYS.BUTTON_ImportAccount]:'导入帐号',
    [KEYS.BUTTON_ImportKeychain]:'导入密钥',
    [KEYS.BUTTON_SelectFile]:'选择文件',
    [KEYS.BUTTON_AddNewLocation]:'增加地址',
    [KEYS.BUTTON_SetAsDefaultLocation]:'设置默认地址',
    [KEYS.BUTTON_RemoveLocation]:'删除地址信息',
    [KEYS.BUTTON_ChangePassword]:'更改密码',
    [KEYS.BUTTON_DestroyScatter]:'删除 Usmart',
    [KEYS.BUTTON_CreateNewScatter]:'创建新的 Usmart',
    [KEYS.BUTTON_LoadFromBackup]:'导入已有的Usmart备份',
    [KEYS.BUTTON_Unlock]:'解锁',
    [KEYS.BUTTON_ExportScatter]:'导出 Usmart',
    [KEYS.BUTTON_GenerateKeyPair]:'生成密钥对',
    [KEYS.BUTTON_Validate]:'验证',
    [KEYS.BUTTON_Copy]:'复制',
    [KEYS.BUTTON_ChangeLanguage]:'切换语言',
    [KEYS.BUTTON_Cancel]:'取消',
    [KEYS.BUTTON_Accept]:'接受',
    [KEYS.BUTTON_Deny]:'拒绝',
    [KEYS.BUTTON_Yes]:'Yes',
    [KEYS.BUTTON_No]:'No',
    [KEYS.BUTTON_UseSelectedAccount]:'使用选择的帐户',
    [KEYS.BUTTON_SelectIdentity]:'选择账户',
    [KEYS.BUTTON_ChangeName]:'更改名称',
    [KEYS.BUTTON_ClaimIdentity]:'确认账户',
    [KEYS.BUTTON_RegisterIdentity]:'注册账户',
    [KEYS.BUTTON_AutoLock]:'确认',                  //新添加
    [KEYS.VIEW_LOGOUT_LAST]:'确认注销Usmart账户',  //新添加
    [KEYS.VIEW_LOGOUT_LASTMSG]:'这是最后一次确认你已经备份了密钥文件',  //新添加

    [KEYS.MAINMENU_Identities]:'账户',
    [KEYS.MAINMENU_Keys]:'密钥对',
    [KEYS.MAINMENU_Permissions]:'权限',
    [KEYS.MAINMENU_History]:'事件',
    [KEYS.MAINMENU_Lock]:'锁定',

    [KEYS.IDENTITIES_Header]:`您目前尚未建立账户。`,
    [KEYS.IDENTITIES_Description]:`
        账户包含个人信息，包括姓名，地址和多个区块链帐号/密钥对。
        账户包括能证明其所有权的密钥对，无需输入密钥，即可验证。
    `,

    [KEYS.IDENTITY_DisablingHeader]:`禁用账户意味着什么?`,
    [KEYS.IDENTITY_DisablingDescription]:`
        禁用账户，与此账户关联的应用都不能使用。
       一旦第三方应用账户丢失，可禁用此账户，来解除该应用的使用权限。
    `,

    [KEYS.IDENTITY_NameHeader]:`账户名`,
    [KEYS.IDENTITY_NameDescription]:`
        应用程序可能选择使用此名称作为您的用户名，因为它在所有网络中是唯一的。
        如果您未在 RIDL 注册，将会分配随机用户名。
    `,
    [KEYS.IDENTITY_NoKeyPairsHeader]:`没有密钥对!`,
    [KEYS.IDENTITY_NoKeyPairsDescription]:`
        在将区块链账户添加到此账户之前，您需要添加密钥对！ 请选择主菜单设置：
    `,
    [KEYS.IDENTITY_AccountHeader]:`帐户`,
    [KEYS.IDENTITY_AccountDescription]:`
        账户存有您的资产，且此账户可以执行区块链上的合约。
        账户可以随时更改。
    `,
    [KEYS.IDENTITY_PersonalHeader]:`个人信息`,
    [KEYS.IDENTITY_PersonalDescription]:`
        个人信息可以添加到需要它的应用程序的帐户中。
        此信息可以作为第三方应用的个人信息，比如购物网站的收件人信息
    `,
    [KEYS.IDENTITY_LocationHeader]:`地址信息`,
    [KEYS.IDENTITY_LocationDescription]:`
        地址信息可以添加到需要它的应用程序的帐户中。
        例如，成为您购买的商品的送货地点，购物网站可能
        需要这些信息。
     `,

    [KEYS.PERMISSIONS_Header]:`没有授权的内容.`,
    [KEYS.PERMISSIONS_Description]:`
        显示您已授权此应用账户，或把合约行为列入白名单，
        使其能无需经过弹出窗口确认就能够签署授权。
    `,
    [KEYS.PERMISSION_RevokeIdentity]:`删除账户`,
    [KEYS.PERMISSION_RevokeContract]:`撤消合约`,
    [KEYS.PERMISSION_RevokeAction]:`取消操作`,

    [KEYS.HISTORIES_Header]:`没有历史纪录.`,
    [KEYS.HISTORIES_Description]:`
        在此您能看到所有 Usmart 的历史列表.
        但您的 Usmart 以外的帐户上的记录不会显示.
     `,
    [KEYS.HISTORIES_Note]:`
        注意：当从设置面板中的备份选项中导出您的 Usmart 数据时，该数据不会备份。
        所以当您再次导入时，您的历史记录是空的。如果您想导出这些历史记录，
        将来您可以使用此面板中导航栏上的操作按钮来完成此操作。
    `,

    [KEYS.SETTINGSMENU_Networks]:'网络',
    [KEYS.SETTINGSMENU_Keypairs]:'密匙对',
    [KEYS.SETTINGSMENU_Language]:'语言',
    [KEYS.SETTINGSMENU_AutoLock]:'锁定',
    [KEYS.SETTINGSMENU_Password]:'密码',
    [KEYS.SETTINGSMENU_Backup]:'备份',
    [KEYS.SETTINGSMENU_Destroy]:'退出',

    [KEYS.BACKUP_Header]:`导出备份(加密)`,
    [KEYS.BACKUP_Description]:`
        导出您的 Usmart 后，您将可将其导入其他设备。导出文件将被加密，
        所以请备份您的助记符和密码。否则无法导入。
        导出的文件中将只保留您的账户私钥。
    `,

    [KEYS.IMPORT_Header]:`导入备份`,
    [KEYS.IMPORT_Description]:`
        导入您的文件，将恢复您的 Usmart 账户信息，但是它不会导入您原有的网络
        或帐户设置
    `,

    [KEYS.PASS_Header]:`设置新密码`,
    [KEYS.PASS_Description]:`
        您的账户信息将会被重新加密。
    `,

    [KEYS.NETWORK_Header]:`添加网络`,
    [KEYS.NETWORK_Description]:`
        应用通常会使用自己特定的网络，并非全网运行。
        例如，为了使用尚未发布的新功能，
        应用有可能使用测试网络，为了能使用该网络，
        需要这个网络上的帐号。
    `,

    [KEYS.DESTROY_Header]:`退出 Usmart`,
    [KEYS.DESTROY_Description]:`
        您即将删除您的整个 Usmart 内容。恢复 Usmart 的唯一方法是
        导入以前导出的 Usmart JSON 文件。 否则您将无法使用您的账户。
        请确保操作前，已经从备份中导出了您的 Usmart。
    `,

    [KEYS.LANGUAGE_Header]:`选择语言`,

    [KEYS.KEYPAIRS_NoKeyPairsHeader]:`没有密钥对。`,
    [KEYS.KEYPAIRS_NoKeyPairsDescription]:`
        点击右上方的按钮来建立或导入密钥。
    `,

    [KEYS.KEYPAIR_Header]:`生成新的密钥对`,
    [KEYS.KEYPAIR_Description]:`
        您可以通过此界面来生成 UOS 密钥对。密钥对在您本机上生成，且只存在于本机。
        您可以输入密钥对，检测私钥是否与公钥匹配，
        注意，这些密钥是依据您本机信息生成。
    `,
    [KEYS.KEYPAIR_Validation_Header]:`生成新的密钥对`,
    [KEYS.KEYPAIR_Validation_Valid]:`私钥有效，并且由其生成的公钥与提供的公钥相匹配。`,
    [KEYS.KEYPAIR_Validation_Invalid]:`由私钥生成的公钥与提供的公钥不匹配！`,


    [KEYS.LOCK_Header]:`自动锁定设置`,
    [KEYS.LOCK_Description]:`
        自动锁定功能能在您离开时自动锁定 Usmart
    `,
    [KEYS.LOCK_Minute]:`分`,
    [KEYS.LOCK_Minutes]:`分`,
    [KEYS.LOCK_Hour]:`小时`,
    [KEYS.LOCK_Hours]:`小时`,
    [KEYS.LOCK_NeverLock]:`不锁定`,


    [KEYS.MNEMONIC_Header]:`助记词`,
    [KEYS.MNEMONIC_Description]:`助记词是可以用来生成密钥的一组单词。`,
    [KEYS.MNEMONIC_Note]:`
        请妥善保存。如果您忘记了密码，
        这是恢复对 Usmart 的访问和解密您的个人信息的唯一途径。
    `,

    [KEYS.ERROR_MustSelectItem]:`必须选择选项`,
    [KEYS.ALERT_Copy]:`已复制公钥和密钥到剪贴版`,
    [KEYS.ALERT_Type]:(type) => {
        switch(type){
            case AlertTypes.Error:              return '错误';
            case AlertTypes.Prompt:             return '提示';
            case AlertTypes.SelectAccount:      return '选择帐户';
        }
    },

    //2
    [KEYS.ALERT_BadIdentityName]:[
        '错误的账户名',

        `账户名的长度必须在3到20个字符之间。
         它们必须是字母数字，但也可以包含空格，破折号和下划线。`
    ],
    //2
    [KEYS.ALERT_IdentityNameExists]:[
        '账户名已存在',

        '此账户名已被注册。'
    ],
    //2
    [KEYS.ALERT_NoSuchIdentityName]:[
        '此账户名不存在',

        '此账户名在 RIDL 中未注册。'
    ],
    //2
    [KEYS.ALERT_KeyPairExists]:[
        '密钥对已存在',

        '此密钥对已在您的 Usmart 上注册。'
    ],
    //2
    [KEYS.ALERT_BadKeyPairName]:[
        '错误的密钥对名称',

        '密钥对名称不能重复。'
    ],
    //2
    [KEYS.ALERT_InvalidPrivateKey]:[
        '私钥不正确',

        `您输入的私钥不正确，请检查后重试。`
    ],
    //2
    [KEYS.ALERT_NoAccountsFound]:[
        '在区块链上未找到您的帐户',

        `没有找到与此私钥相关联的帐户。
         如果您导入的不是 Usmart 生成的私钥，
         需要在导入前，为该私钥建立帐户`

    ],
    //2
    [KEYS.ALERT_PasswordsDoNotMatch]:[
        '密码不匹配',

        `您输入的密码有误。`
    ],
    //2
    [KEYS.ALERT_BadPassword]:[
        '密码无效',

        '密码长度至少 8 个字符'
    ],
    //2
    [KEYS.ALERT_WrongPassword]:[
        '密码错误',

        '您输入的密码错误。'
    ],
    //2
    [KEYS.ALERT_NetworkHostInvalid]:[
        '主机无效',

        `您输入的主机无效。
         主机应该为域名( 例: testnet.uos.io ) 或者 IP 地址 ( 如: 192.168.0.1 ).`
    ],
    //2
    [KEYS.ALERT_NetworkExists]:[
        '此网络地址已被注册',

        '此网络或端口已存在。'
    ],
    //2
    [KEYS.ALERT_RemovingEndorsedNetwork]:[
        '不能删除主网络',

        `您不能删除 Usmart 的主网络。`
    ],
    //2
    [KEYS.ALERT_NoIdentityWithProperties]:fields => [
        '未发现账户',

        `此应用正在请求您的账户所没有的信息： '${fields.join(', ')}'`
    ],
    //2
    [KEYS.ALERT_YouMustSelectAnIdentity]:[
        '您需要选择账户',

        `如果您不想公开账户，您可以按拒绝按钮，
         否则必须选择账户以接受此请求。`
    ],
    //2
    [KEYS.PROMPT_DestroyingScatter]:[
        '退出 Usmart',

        '请确保您已经备份了账户信息。'
    ],
    //2
    [KEYS.PROMPT_RevokingIdentity]:domain => [
        '删除账户',

        `您即将删除账户： ${domain} 。
        这将删除账户本身权限及其相关合约的权限。`
    ],
    //2
    [KEYS.PROMPT_RevokingContract]:domain => [
        '撤销合约',

        `您即将从 ${domain} 中撤销合约，包括合约中的所有操作的权限。`
    ],
    //2
    [KEYS.PROMPT_RevokingContractAction]:domain => [
        '撤销合约操作',

        `您即将从 ${domain} 中撤销合约操作`
    ],
    //2
    [KEYS.PROMPT_RemovingIdentity]:name => [
        '删除账户',

        `您即将删除名称为 '${name}' 的账户。 此操作不可逆
        相关权限也将删除。 如果在应用中使用此账户，建议禁用。`
    ],
    //2
    [KEYS.PROMPT_DeletingKeyPair]:identities => [
        '删除密钥对',

        identities.length ? `密钥对使用在: '${identities.join(', ')}'` : `该密钥对未被使用。`
    ],
    //2
    [KEYS.PROMPT_RemovingAccount]:formattedAccountName => [
        '删除帐户',

        `您将从此账户中删除 ${formattedAccountName} 帐户`
    ],
    //2
    [KEYS.PROMPT_RemovingNetwork]:[
        '删除网络',

        `您即将删除网络。 删除该网络后
         您将不能再在该网络上创建新帐户，但您可以重新添加此网络。
         已经使用此网络的帐户将不会被修改或删除。`
    ],
    //2
    [KEYS.PROMPT_WhitelistingContractAction]:[
        '您将把此智能合约列入白名单',

        `将货币支付相关的合约列入白名单是危险的，请不要进行此操作。
         但我们不能阻止您这么做，您确定想将此列入白名单吗？`
    ],
    //2
    [KEYS.PROMPT_SelectAccount]:[
        '选择帐户',

        '选择一个帐户和权限。'
    ],
    //2
    [KEYS.PROMPT_ClaimIdentity]:[
        //'Claim Identity',
        '找回账户',
        '通过输入私钥找回您的公钥！'
       // 'Put in the private key that matches the public key on file for your identity name.'
    ],

    //3
    [KEYS.REQUEST_AddNetwork]:[
        /*{DOMAIN}*/ '将网络添加到 USmart。',

        '某些第三方应用使用自己的网络。',
        `应用不应该允许访问您的 USmart。
         通过此界面添加网络。
         仅是为了在控制面板中添加更方便`
    ],
    //5
    [KEYS.REQUEST_Identity]:[
        /*{DOMAIN}*/ '当前应用正在请求您的信息。',

        `有时，应用会需要更多信息，
         例如您的电子邮件或出生日期。
         右侧的身份标识就是您在网络上可用的特定信息。`,

        `如果您提供了未被请求的标识信息，
         应用可能不会保存此信息。`,

        `只有账户的公钥和名称会提供给应用。`,

        /*{DOMAIN}*/ `没有请求任何附加信息。 他们唯一需要的是账户的哈希值和名称。`
    ],
    //2
    [KEYS.REQUEST_IdentityNoIdentities]:[
        `此应用无法找到它需要的标识信息。`,

        `如果您希望将账户用于此域，您需要更新标识。
         您可在左侧面板上看到它所需要的信息。`
    ],
    //4
    [KEYS.REQUEST_SignatureWhitelist]:[
        `您想把这个合约操作列入白名单吗？`,

        `您可以将此操作列入白名单，下次无须操作。
         如果单选按钮对应的属性可以更改，那么您可以允许
         此事务的某些属性被更改。
        `,

        `不会删除账户对应的权限。`,

        `如果您设有多个地址，当应用需要时，将会提示您选择！`
    ],
    //4
    [KEYS.REQUEST_ScatterIsLocked]:[
        `Usmart 已锁定!`,

        `解锁后才能继续操作。`,

        `我们绝不会显示需要您登录的提示/弹出窗口。`,

        `如果您看到提示/弹出窗口，需要您输入密码，它肯定是一个恶意网站。
         请注意只能通过chrome浏览器托盘程序解锁。`
    ],
    //4
    [KEYS.REQUEST_UpdateVersion]:[
        `Usmart 需要更新版本!`,

        /*{DOMAIN}*/ `要求使用更新后的版本。`,

        `当前应用需要使用新版本的功能，您安装的版本暂不支持。`,

        `请注意，第三方应用可以指定 Usmart 版本，请确保您是从chrome浏览器商店下载 Usmart。`
    ],

}
