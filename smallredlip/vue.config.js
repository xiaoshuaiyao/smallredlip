module.exports = {
<<<<<<< HEAD
        devServer: {
            proxy: {
                "/api": {
                    target: "http://localhost:3000",
                    changeOrigin: true,
                    pathRewrite: {
                        "^/api": ""
                    },
                    "/api": {
                        target: "http://localhost:3000",
                        changeOrigin: true,
                        pathRewrite: {
                            "^/api": ""
                        }

                    }
                }
            }
        }
    }
=======
    devServer:{
        proxy:{
            "/api":{
                target:"http://localhost:3000",
                changeOrigin:true,
                pathRewrite:{
                    "^api":""
                }            
            }
        }
    }
}
//http://localhost:3000/page
>>>>>>> yuan
