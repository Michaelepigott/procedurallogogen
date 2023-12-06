//defines Image export
class svg {
    constructor() {
        this.textElement
        this.shapeElement
    }
    //Creates Image
    render(){
        return `<svg version="1.1" width="300" height="200" xmlns = "http://www.w3.org/2000/svg">${this.shapeElement}${this.textElement}</svg>`
    }
    //Adds text to image
    setText(message, color){
        if (message.lengh > 3){
            throw new Error("Text must be 3 char or less");
        }
        this.textElement = `<text x ="150" y = "125" font-size="60" text-anchor="middle" fill="${color}">${message}</text>`;
    }
        //puts shape in Image
    setShape(shape){
        this.shapeElement = shape.render();
    }
}

module.exports = svg;