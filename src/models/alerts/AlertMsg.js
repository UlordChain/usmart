import * as AlertTypes from './AlertTypes'
import {localized} from '../../localization/locales'
import * as LANG_KEYS from '../../localization/keys'
import {store} from '../../store/store';

const locale = key => localized(key, store.getters.language);

export default class AlertMsg {

    constructor(_type, _header, _description, _list = []){
        this.type = _type;
        this.header = _header;
        this.description = _description;
        this.list = _list;
    }


    /***************************************/
    /*            Error Messages           */
    /***************************************/

    static BadIdentityName(){
        return new AlertMsg(
            AlertTypes.Error,
            ...locale(LANG_KEYS.ALERT_BadIdentityName)
        );
    }

    static NoSuchIdentityName(){
        return new AlertMsg(
            AlertTypes.Error,
            ...locale(LANG_KEYS.ALERT_NoSuchIdentityName)
        );
    }

    static IdentityNameExists(){
        return new AlertMsg(
            AlertTypes.Error,
            ...locale(LANG_KEYS.ALERT_IdentityNameExists)
        );
    }

    static BadKeyPairName(){
        return new AlertMsg(
            AlertTypes.Error,
            ...locale(LANG_KEYS.ALERT_BadKeyPairName)
        );
    }

    static KeyPairExists(){
        return new AlertMsg(
            AlertTypes.Error,
            ...locale(LANG_KEYS.ALERT_KeyPairExists)
        );
    }

    static InvalidPrivateKey(){
        return new AlertMsg(
            AlertTypes.Error,
            ...locale(LANG_KEYS.ALERT_InvalidPrivateKey)
        );
    }

    static NoAccountsFound(){
        return new AlertMsg(
            AlertTypes.Error,
            ...locale(LANG_KEYS.ALERT_NoAccountsFound)
        );
    }

    static PasswordsDoNotMatch(){
        return new AlertMsg(
            AlertTypes.Error,
            ...locale(LANG_KEYS.ALERT_PasswordsDoNotMatch)
        );
    }

    static BadPassword(){
        return new AlertMsg(
            AlertTypes.Error,
            ...locale(LANG_KEYS.ALERT_BadPassword)
        );
    }

    static WrongPassword(){
        return new AlertMsg(
            AlertTypes.Error,
            ...locale(LANG_KEYS.ALERT_WrongPassword)
        );
    }

    static NetworkHostInvalid(){
        return new AlertMsg(
            AlertTypes.Error,
            ...locale(LANG_KEYS.ALERT_NetworkHostInvalid)
        );
    }

    static NetworkExists(){
        return new AlertMsg(
            AlertTypes.Error,
            ...locale(LANG_KEYS.ALERT_NetworkExists)
        );
    }

    static RemovingEndorsedNetwork(){
        return new AlertMsg(
            AlertTypes.Error,
            ...locale(LANG_KEYS.ALERT_RemovingEndorsedNetwork)
        );
    }

    static NoIdentityWithProperties(fields){


        return new AlertMsg(
            AlertTypes.Error,
            ...locale(LANG_KEYS.ALERT_NoIdentityWithProperties)(fields.toFieldsArray())
        );
    }

    static YouMustSelectAnIdentity(){
        return new AlertMsg(
            AlertTypes.Error,
            ...locale(LANG_KEYS.ALERT_YouMustSelectAnIdentity)
        );
    }

    static MSGCopy(){
        return new AlertMsg(
            AlertTypes.Error,
            ...locale(LANG_KEYS.ALERT_Copy)
        );
    }



    /***************************************/
    /*               Prompts               */
    /***************************************/

    static DestroyingScatter(){ //还原作者的真相
        return new AlertMsg(AlertTypes.Prompt,
            // 'Destroying Scatter',
            locale(LANG_KEYS.VIEW_LOGOUT_LAST),
            locale(LANG_KEYS.VIEW_LOGOUT_LASTMSG)
            //'This is your last chance to double check your backups.'
        );
    }

    static RevokingIdentity(domain){
        return new AlertMsg(AlertTypes.Prompt,
            ...locale(LANG_KEYS.PROMPT_RevokingIdentity)(domain)
        );
    }

    static RevokingContract(domain){
        return new AlertMsg(AlertTypes.Prompt,
            ...locale(LANG_KEYS.PROMPT_RevokingContract)(domain)
        );
    }

    static RevokingContractAction(domain){
        return new AlertMsg(AlertTypes.Prompt,
            ...locale(LANG_KEYS.PROMPT_RevokingContractAction)(domain)
        );
    }

    static RemovingIdentity(name){
        return new AlertMsg(AlertTypes.Prompt,
            ...locale(LANG_KEYS.PROMPT_RevokingIdentity)(name)
        );
    }

    static RemovingAccount(formattedIdentity){
        return new AlertMsg(AlertTypes.Prompt,
            ...locale(LANG_KEYS.PROMPT_RemovingAccount)(formattedIdentity)
        );
    }

    static DeletingKeyPair(identities){
        return new AlertMsg(AlertTypes.Prompt,
            ...locale(LANG_KEYS.PROMPT_DeletingKeyPair)(identities)
        );
    }

    static RemovingNetwork(){
        return new AlertMsg(AlertTypes.Prompt,
            ...locale(LANG_KEYS.PROMPT_RemovingNetwork)
        );
    }

    static WhitelistingContractAction(){
        return new AlertMsg(AlertTypes.Prompt,
            ...locale(LANG_KEYS.PROMPT_WhitelistingContractAction)
        );
    }

    static SelectAccount(accounts){
        return new AlertMsg(
            AlertTypes.SelectAccount,
            ...locale(LANG_KEYS.PROMPT_SelectAccount),
            accounts
        );
    }

    static NamedAccount(){
        return new AlertMsg(
            AlertTypes.NamedAccount,
            ...locale(LANG_KEYS.PROMPT_SelectAccount)
        );
    }

    static ClaimIdentity(name){
        return new AlertMsg(
            AlertTypes.ClaimIdentity,
            ...locale(LANG_KEYS.PROMPT_ClaimIdentity),

        );
    }

}