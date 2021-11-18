const inquirer = require('inquirer');
var random = ['No','No','No','Yes', 'No','No','No'];

//starts the good times
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
