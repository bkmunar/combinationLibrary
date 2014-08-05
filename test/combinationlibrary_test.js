'use strict';

var combinationlibrary = require('../src/combinationlibrary.js');

/*
 ======== A Handy Little Nodeunit Reference ========
 https://github.com/caolan/nodeunit

 Test methods:
 test.expect(numAssertions)
 test.done()
 Test assertions:
 test.ok(value, [message])
 test.equal(actual, expected, [message])
 test.notEqual(actual, expected, [message])
 test.deepEqual(actual, expected, [message])
 test.notDeepEqual(actual, expected, [message])
 test.strictEqual(actual, expected, [message])
 test.notStrictEqual(actual, expected, [message])
 test.throws(block, [error], [message])
 test.doesNotThrow(block, [error], [message])
 test.ifError(value)
 */

exports['awesome'] = {
    setUp: function (done) {
        // setup here
        done();
    },
    'no args': function (test) {
        test.expect(1);
        // tests here


        test.equal(combinationlibrary.awesome(), 'awesome', 'should be awesome.');
        test.done();
    }
};

exports.testGetCombinationsAlgorithm = function (test) {
    //given an object with a property of an array of integers
    //when you call getCombinations on it
    //then you get an array of objects such that all values in the integer array are represented
    var intObject = {
        number: [1, 2, 3]
    };
    var combinationsArray = combinationlibrary.getCombinations(intObject);
    test.deepEqual(combinationsArray, [
        {number: 1},
        {number: 2},
        {number: 3}
    ], 'tests getCombinations');

    var intObject2 = {
        number: [1, 2],
        letter: ['a', 'b']
    };

    var combinationsArray2 = combinationlibrary.getCombinations(intObject2);
    test.deepEqual(combinationsArray2, [
        {number: 1, letter: 'a'},
        {number: 1, letter: 'b'},
        {number: 2, letter: 'a'},
        {number: 2, letter: 'b'}
    ], 'tests getCombinations');

    var intObject3 = {
        number: [1, 2, 3],
        letter: ['a', 'b'],
        symbol: ['*']
    };
    var combinationArray3 = combinationlibrary.getCombinations(intObject3);
    test.deepEqual(combinationArray3, [
        {
            number: 1,
            letter: 'a',
            symbol: '*'
        },
        {
            number: 1,
            letter: 'b',
            symbol: '*'
        },
        {
            number: 2,
            letter: 'a',
            symbol: '*'
        },
        {
            number: 2,
            letter: 'b',
            symbol: '*'
        },
        {
            number: 3,
            letter: 'a',
            symbol: '*'
        },
        {
            number: 3,
            letter: 'b',
            symbol: '*'
        }
    ]);

    test.done();
};

exports.testEdgeCasesForGetCombinations = function (test) {
    var emptyObj = {
        number: [1],
        letters: []
    };
    test.throws(function () {
        combinationlibrary.getCombinations(emptyObj);
    }, 'Empty Values', 'error message woohoo');

    test.throws(function () {
        combinationlibrary.getCombinations();
    }, 'Input is empty or not passed in', 'error message woohoo');

    test.throws(function () {
        combinationlibrary.getCombinations({name: 'Bryan'});
    }, 'idk the error', 'error message');

    test.throws(function () {
        combinationlibrary.getCombinations(['hello']);
    }, 'not an object input', 'error message');
    test.done();
};

