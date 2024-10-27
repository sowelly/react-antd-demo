// config-overrides.js
module.exports = function override(config, env) {
    // 添加 LESS 支持
    config.module.rules.push({
        test: /\.less$/,
        use: [
            'style-loader',
            'css-loader',
            {
                loader: 'less-loader',
                options: {
                    lessOptions: {
                        javascriptEnabled: true, // 这个选项对于使用某些 LESS 组件库是必要的
                    },
                },
            },
        ],
    });
    return config;
};
