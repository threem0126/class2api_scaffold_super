/**
 * 这个类是权限中心的实现，供客户方class2api中的权限认证函数来请求，通常会暴露出API地址，并配置到客户方的class2api.config.js中
 */
import {GKSUCCESS} from "class2api";

class GKRuleManager {
    constructor() {
        throw '静态业务功能类无法实例化'
    }

    /**
     * 验证身份，根据req中的jwtoken的header，解析出后台人员身份
     *
     */
    static async auth({req}) {
        let jwtoken = req.headers['jwtoken'] || ''
        //TODO: ...解析jwtoken
        return {uID: 123, name: "huangyong", age: 23, roles: []}
    }

    static async validate({sysName, jwtoken, ruleCategory, ruleName, ruleDesc, codePath}) {
        //...
        console.log(`validate: ...`)
        console.log({sysName, jwtoken, ruleCategory, ruleName, ruleDesc, codePath})

        //TODO:这里替换为具体的权限表判断逻辑

        if (ruleName === '编辑文章') {
            return {canAccess: false, resean: '未授权'}
        } else {
            return {canAccess: true}
        }
    }

    /**
     * 接受各后台模块系统上传来的权限配置表信息，保存到权限中心的数据表中
     *
     * @returns {Promise.<void>}
     */
    static async register() {
        return GKSUCCESS();
    }
}

export default GKRuleManager