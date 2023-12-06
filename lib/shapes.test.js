const { triangle, square, circle } = require('./shapes.js');


describe('triangle', () => {
    test(('test for triangle generation with a blue color'), () => {
        const expectedSvg = '<polygon points="150, 18 244, 182 56, 182" fill="blue" />';
        const ntriangle = new triangle();
        ntriangle.setColor('blue');
        const actualSvg = ntriangle.render();
        expect(actualSvg).toEqual(expectedSvg);
    });
});

describe('square', () => {
    test(('test for square generation with a grey color'), () => {
        const expectedSvg = '<rect x="90" y="40" width="120" height="120" fill="grey" />';
        const nsquare = new square();
        nsquare.setColor('grey');
        const actualSvg = nsquare.render();
        expect(actualSvg).toEqual(expectedSvg);
    });
});

describe('cirlce', () => {
    test(('test for circle generation with a hexidecimal color'), () => {
        const expectedSvg = '<circle cx="150" cy="100" r="80" fill="#b098a4" />';
        const ncircle = new circle();
        ncircle.setColor('#b098a4');
        const actualSvg = ncircle.render();
        expect(actualSvg).toEqual(expectedSvg);
     });
});