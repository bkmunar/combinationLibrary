/*! combinationlibrary - v0.0.0 - 2014-08-05
* https://github.com//combinationlibrary
* Copyright (c) 2014 Bryan Munar and Chris Dunn; Licensed MIT */
(function (exports) {

    'use strict';

    exports.awesome = function () {
        return 'awesome';
    };

    exports.getCombinations = function (object) {
        if (!object || Object.is(object, {})) {
            throw 'Input is empty or not passed in';
        }
        var keys = Object.keys(object);
        var values = [];
        keys.forEach(function (key) {
            if (!object[key].length) {
                throw key + ' has an empty value array';
            }
            values.push(object[key]);
        });
        var combinations = getCombinationsHelper(values, values.length);
        var newObjectArray = [];
        combinations.forEach(function (element) {
            var newObject = {};
            keys.forEach(function (keyElem, index) {
                newObject[keyElem] = element[index];
            });
            newObjectArray.push(newObject);
        });
        return newObjectArray;
    };

    var getCombinationsHelper = function (arr, n) {

        var totalCombinationsArray = [];
        if (n === 1) {
            arr.forEach(function (element) {
                element.forEach(function (element2) {
                    totalCombinationsArray.push([element2]);
                });
            });
            return totalCombinationsArray;
        }
        else {
            arr.forEach(function () {
                var elem = arr.shift();
                elem.forEach(function (element2) {
                    var childPerm = getCombinationsHelper(arr.slice(), n - 1);
                    childPerm.forEach(function (element3) {
                        totalCombinationsArray.push([element2].concat(element3));
                    });
                });
            });
            return totalCombinationsArray;
        }
    };

}.call(this));
