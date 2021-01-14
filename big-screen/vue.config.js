module.exports = {
    publicPath:'./',
    devServer: {
        proxy: {
            '/ITTest': {
                //target: 'http://10.124.193.151:8082',
                target: 'http://10.161.12.1:8070',
                changeOrigin: true,
                ws: false,
                pathRewrite: { '^/ITTest': '/ITTest' }
            },
            '/webapi': {
                target: 'http://10.161.12.1:8070',
                changeOrigin: true,
                ws: false,
                pathRewrite: { '^/webapi': '/webapi' }
            },
            
        }
    }
}