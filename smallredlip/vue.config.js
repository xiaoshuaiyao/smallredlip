

module.exports = {
    devServer:{
        proxy:{
            "/api":{
                target:"http://localhost:3000",
                changeOrigin:true,
                pathRewrite:{
                    "^/api":""
                }            
            }
        }
    }
}

//http://localhost:3000/xiaoredlip