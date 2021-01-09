module.exports = {
    publicPath:'./',
    devServer: {
        proxy: {
           '/cloudwise': {
                //target: 'http://10.124.193.151:8082',
                target: 'https://tianyan.tg.unicom.local',
                changeOrigin: true,
                ws: false,
                pathRewrite: { '^/cloudwise': '/cloudwise' }
            },
        }
    }
}