// imports
const {circle, triangle, square} = require("./shapes");
const inquirer = require('inquirer');
const { writeFile } = require('fs/promises');
const path = require('path');
const svg = require("./svg");
//Generate output file
function makeLogo(data){
    let shape;
    //Impliments Shape selection
    switch (data.shape) {
        case "circle":
            shape = new circle();
            break;

            case "square":
                shape = new square();
                break;

            default:
                shape = new triangle();
                break;
    }
    //Impliments other inputs
    shape.setColor(data.shapeColor);
    const nsvg = new svg();
    nsvg.setText(data.text, data.textColor);
    nsvg.setShape(shape);
    return writeFile(path.join(__dirname, "..", "examples", "logo.svg"), nsvg.render());
}
//Call all functions
class app {
    run(){
        //get inputs
        inquirer
        .prompt([{
            name: "text",
            type: "input",
            message: "Type up to 3 characters that will be displayed in bold on the logo.",
            validate: (text) =>
                text.length <= 3 || "maxiumum of 3 characters on logo",
        },
        {
            name: "textColor",
            type: "input",
            message: "Add text color (Use Hexidecimal code for most reliable results)",
        },
        {
            name: "shape",
            type: 'list',
            message: "Pick a logo shape",
            choices: ["Circle", "Square", "Triangle" ],
        },
        {
            name: "shapeColor",
            type: "input",
            message: "Add Shape color (Use Hexidecimal code for most reliable results)",
        }
    
        ])
        //put inputs into logo creation function
        .then((answers) => makeLogo(answers))
        //Console information
        .then(() =>{
            console.log('Adding logo.svg')
        })
        //Shares errors
        .catch((error) => {
            console.log(error);
            console.log('Somthing went wrong.');
        });
    }
}

module.exports = app;