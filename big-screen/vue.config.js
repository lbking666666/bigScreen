module.exports = {
    devServer: {
        proxy: {
            '/bigScreen': {
                target: 'http://10.124.193.151:8082/wep-oms',
                changeOrigin: true,
                ws: false,
                pathRewrite: { '^/bigScreen': '/screen' }
            },
        }
    }
}