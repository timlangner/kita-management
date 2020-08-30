const PostCSSPresetEnv = require('postcss-preset-env');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const fs = require('fs');
const webpack = require('webpack');
const AppcacheWebpackPlugin = require('appcache-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const internalName = 'kita management';
const externalName = 'kita management';

const PATH_SOURCE = path.join(__dirname, './src');
const PATH_BUILD = path.join(__dirname, './build');
const PATH_BUILD_QA = path.join(__dirname, './build');

const ssl = {};

// try {
//     ssl.cert = fs.readFileSync(path.join(''));
//     ssl.key = fs.readFileSync(path.join(''));
// } catch (e) {
//     // eslint-disable-next-line no-console
//     console.log('\n-------------\nNo SSL Certificate found.\n-------------\n');
// }

const devServer = {
    host: '0.0.0.0',
    port: 8080,
    historyApiFallback: true,
    compress: true,
    disableHostCheck: true,
    cert: ssl.cert,
    key: ssl.key,
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods':
            'GET, POST, PUT, DELETE, PATCH, OPTIONS',
        'Access-Control-Allow-Headers':
            'X-Requested-With, content-type, Authorization'
    }
};

const envPlugins = {
    general: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src/index.html'),
            title: `${externalName}`
        })
    ],
    development: [],
    staging: [new webpack.NamedModulesPlugin()],
    production: [],
    built: [
        new CleanWebpackPlugin(),
        new AppcacheWebpackPlugin({
            cache: ['https://api.chayns-static.space/js/v4.0/chayns.min.js'],
            output: 'cache.manifest'
        })
    ]
};

module.exports = env => {
    const { environment } = env;
    const isStaging = environment === 'staging';
    const isProduction = environment === 'production';
    const isDevelopment = environment === 'development';

    let devtool;

    if (isDevelopment) {
        devtool = 'source-map';
    } else if (isStaging) {
        devtool = 'hidden-source-map';
    }

    const plugins = [
        new webpack.DefinePlugin({
            _DEV_: isDevelopment,
            _QA_: isStaging,
            _PROD_: isProduction
        }),
        ...envPlugins.general
    ];

    if (isDevelopment) {
        plugins.push(...envPlugins.development);
    } else if (isStaging) {
        plugins.push(...envPlugins.built, ...envPlugins.staging);
    } else if (isProduction) {
        plugins.push(...envPlugins.built, ...envPlugins.production);
    }

    return {
        mode: isDevelopment ? 'development' : 'production',
        entry: [path.join(PATH_SOURCE, './index')],
        resolve: {
            extensions: ['.js', '.jsx']
        },
        output: {
            path: isProduction ? PATH_BUILD : PATH_BUILD_QA,
            filename: `[name].[hash].js`
        },
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    use: [
                        {
                            loader: 'babel-loader',
                            options: {
                                presets: [
                                    [
                                        '@babel/preset-env',
                                        {
                                            useBuiltIns: 'usage',
                                            corejs: 3
                                        }
                                    ],
                                    '@babel/preset-react'
                                ],
                                plugins: [
                                    '@babel/plugin-proposal-class-properties',
                                    'react-hot-loader/babel'
                                ],
                                env: {
                                    production: {
                                        plugins: [
                                            'transform-react-remove-prop-types'
                                        ]
                                    }
                                }
                            }
                        }
                    ]
                },
                {
                    test: /\.(css|scss)$/,
                    use: [
                        {
                            loader: 'style-loader'
                        },
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: true
                            }
                        },
                        {
                            loader: 'postcss-loader',
                            options: {
                                sourceMap: true,
                                plugins: () => [PostCSSPresetEnv()]
                            }
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: true
                            }
                        }
                    ]
                }
            ]
        },
        devServer,
        devtool,
        plugins
    };
};
