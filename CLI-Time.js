//This file will bring all the apps from the apps folder to life
const appTreeRoot = require('./apptree');
const inquirer = require('inquirer');
startTree();

function startTree(){
    branchConnections();
};

function branchConnections(){
    console.log(appTreeRoot)
};