module.exports = {
    devServer: {
        proxy: {
            '/wep-oms': {
                target: 'http://10.124.193.151:8082',
                changeOrigin: true,
                ws: false,
                pathRewrite: { '^/wep-oms': '/wep-oms' }
            },
        }
    }
}