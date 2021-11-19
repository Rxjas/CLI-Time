//This file will bring all the apps from the apps folder to life
const appTreeRoot = require('./appTree');
const inquirer = require('inquirer');
const root2Branch = ['Happy','Test']

branchConnections();

function controller (ans){
    switch(ans){
        case 'Happy': appTreeRoot.happy(); break;
        case 'Test': console.log('Test branch activated'); break;
    }

};

function branchConnections(){
    inquirer.prompt([{
        type: 'list',
        message: 'The tree brings new life to your command line. What do you choose?',
        name: 'path',
        choices: root2Branch
    }])
    .then((ans) => {
        controller(ans.path);
    })
};