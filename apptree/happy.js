const inquirer = require('inquirer');

happy();

function happy (){
inquirer
    .prompt([{
        type: 'list',
        message: 'Are you happy?',
        name: 'happy',
        choices: [
            'Yes',
            'No',
            'I don"t know',
        ]

    }])
    .then((ans) => {
        
        if(ans.happy === 'Yes'){
            trueGlee();
        }
        else{console.log('good for you')}
    })
    .catch((err) => {throw err})
};

function trueGlee(){
    glee()
};


function glee () {
    inquirer.prompt({
        name: 'denial',
        type: 'list',
        message: 'Are you sure?',
        choices: ['No','No','No','Yes', 'No','No','No']
    })
    .then((ans => {
        if (ans.denial === 'Yes'){
            trueGlee();
        }
        else {
            console.log('At least you actually know.')
        }
    }))
    .catch((err) => {throw err})
    }
