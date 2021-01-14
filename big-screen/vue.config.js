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
            '/screenapi': {
                target: 'http://10.161.67.41:9002',
                changeOrigin: true,
                ws: false,
                pathRewrite: { '^/screenapi': '/screenapi' }
            },
            '/screenapi': {
                target: 'http://10.161.67.41:9002',
                changeOrigin: true,
                ws: false,
                pathRewrite: { '^/screenapi': '/screenapi' }
            },
            '/BaseUrlB': {
                target: 'http://10.161.12.1:9099',
                changeOrigin: true,
                ws: false,
                pathRewrite: { '^/BaseUrlB': '/BaseUrlB' }
            },
            '/BaseUrlC': {
                target: 'http://10.161.12.101:8622',
                changeOrigin: true,
                ws: false,
                pathRewrite: { '^/BaseUrlC': '/BaseUrlC' }
            },
        }
    }
}