define(function (require) {
    'use strict';

    describe('Car model tests', function () {

        var CarModel = require('CarModel');
        var carModel = new CarModel();

        it('Should be defined when we created it', function () {
            expect(carModel).toBeDefined();
        });

        it('Should return JSON with isFavorite field', function(){
            expect(carModel.getUnitedJSON().isFavorite).toMatch('false');
            expect(carModel.getUnitedJSON({}).isFavorite).toMatch('true');
        });


    });

});
