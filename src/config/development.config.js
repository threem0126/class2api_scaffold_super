/*
 */

export const config = {
    appName: '_no_set_',
    PORT:3002,
    mysql: {
        host: "127.0.0.1",
        port: process.env.SQLPORT || "3306",
        user: "root",
        password: "",
        charset: "utf8_general_ci",
        database: "gankao_demo123",
        reset_key:{
            key1:'123234537569',
            key2:'wrq5hfoiuy12344376'
        }
    },
    redis: {
        host: "127.0.0.1",
        port: 6379,
        cache_prefx: '_no_set_',
        defaultExpireSecond: 10 * 60
    }
}