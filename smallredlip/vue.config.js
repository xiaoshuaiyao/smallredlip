module.exports = {
    devServer:{
        proxy:{
            "/api":{
                target:"https://napi.xiaohongchun.com",
                changeOrigin:true,
                pathRewrite:{
                    "^api":""
                }            
            }
        }
    }
}

