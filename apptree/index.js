//The root of the apptree bringing all apps together to export to cli-time file
const happy = require('./happy.js');

const appTreeRoot = {
    happy: happy,
    test: 'test'
};

module.exports = appTreeRoot;