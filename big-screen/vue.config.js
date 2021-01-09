module.exports = {
    publicPath:'./',
    devServer: {
        proxy: {
           '/wep-oms': {
                //target: 'http://10.124.193.151:8082',
                target: 'http://10.4.239.238:8000',
                changeOrigin: true,
                ws: false,
                pathRewrite: { '^/wep-oms': '/wep-oms' }
            },
        }
    }
}