module.exports = {
    devServer: {
        proxy: {
            '/screen': {
                target: 'http://210.73.216.2',
                changeOrigin: true,
                ws: false,
                pathRewrite: { '^/screen': '/screen' }
            },
        }
    }
}