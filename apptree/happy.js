const inquirer = require('inquirer');
var random = ['No','No','No','Yes', 'No','No','No'];

//starts the good times
// happy();

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
        else if (ans.happy === 'No'){
            theJourney();
        }
        //this else is for the idk
        else{console.log('good for you')}
    })
    .catch((err) => {throw err})
};

//Function to call glee repeatedly w/o nesting issues
function trueGlee(){
    glee()
};

//shuffle lists to make random arrays credits https://javascript.info/task/shuffle
function shuffle (list){
    return(list.sort(() => Math.random() - 0.5))
};


function glee () {
    inquirer.prompt({
        name: 'denial',
        type: 'list',
        message: 'Are you sure?',
        choices: shuffle(random)    
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

function theJourney(){
    inquirer.prompt([{
        type: 'list',
        message: '.... Why?',
        name: 'stepOne',
        choices: [
            'I don"t deserve to be happy',
            'Not really sure',
            'Feeling unhappy in all honesty feels great',
            'It"s only temporary',
            'No one to make me feel valued',
            'I don"t see the value in myself',
            'Too gone'
        ]
    }])
    .then((ans) => {
        if(ans){
            console.log('Hope you find the path you truly need to follow soon')
        } else{ console.loglog(' ERROR ERROR ERROR ERROR ERROR')}
    })
};

module.exports = happy;
