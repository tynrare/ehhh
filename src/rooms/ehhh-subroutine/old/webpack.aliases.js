const path = require('path');

module.exports = 
{
    '@app': path.resolve(__dirname, './src/'),
    '@res': path.resolve(__dirname, './res'),
    '@core': path.resolve(__dirname, './src/core'),
    '@rooms': path.resolve(__dirname, './src/rooms'),
    '@test': path.resolve(__dirname, './src/test'),
    '@lib': path.resolve(__dirname, './lib/')
}
