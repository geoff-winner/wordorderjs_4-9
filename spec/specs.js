describe('wordorder', function(){

    it("for string 'The Lord of the Rings' return ['THE','LORD', 'OF', 'RINGS']", function(){
        expect(wordorder("The Lord of the Rings")).to.deep.equal(['THE','LORD', 'OF', 'RINGS']);
    });

    it("for string 'The Lord of the Rings Rings Rings' return ['RINGS', 'THE','LORD', 'OF']", function(){
        expect(wordorder("The Lord of the Rings Rings Rings")).to.deep.equal(['RINGS', 'THE','LORD', 'OF']);
    });


});
