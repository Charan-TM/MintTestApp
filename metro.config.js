const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');

const path = require('path');

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('@react-native/metro-config').MetroConfig}
 */
const config = {
    watchFolders: [path.resolve(__dirname, '../mint-wallet-rn-library')],
    resolver: {
        blockList: [
            new RegExp(
                path.resolve(__dirname, '../mint-wallet-rn-library', 'node_modules').replace(/\\/g, '\\\\') + '.*'
            ),
        ],
        nodeModulesPaths: [
            path.resolve(__dirname, 'node_modules'),
        ],
        extraNodeModules: new Proxy(
            {},
            {
                get: (target, name) => path.resolve(__dirname, 'node_modules', name),
            },
        ),
    },
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
