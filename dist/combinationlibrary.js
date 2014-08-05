/*! combinationlibrary - v0.0.0 - 2014-08-04
* https://github.com//combinationlibrary
* Copyright (c) 2014 Bryan Munar and Chris Dunn; Licensed MIT */
(function (exports) {

    'use strict';

    exports.awesome = function () {
        return 'awesome';
    };
//
//    exports.getCombinations = function (object) {
//        var values = _.values(object);
//        var combinations = getCombinationsHelper(values, values.length);
//        var newObjectArray = [];
//        var keys = _.keys(object);
//        _.each(combinations, function (combination) {
//            var newObject = {};
//            for (var i = 0; i < keys.length; i++) {
//                newObject[keys[i]] = combination[i];
//            }
//        });
//        return newObjectArray;
//    };
//
//    var getCombinationsHelper = function (arr, n) {
//        if (n == 1) {
//            var ret = [];
//            for (var i = 0; i < arr.length; i++) {
//                for (var j = 0; j < arr[i].length; j++) {
//                    ret.push([arr[i][j]]);
//                }
//            }
//            return ret;
//        }
//        else {
//            var ret = [];
//            for (var i = 0; i < arr.length; i++) {
//                var elem = arr.shift();
//                for (var j = 0; j < elem.length; j++) {
//                    var childperm = getCombinationsHelper(arr.slice(), n - 1);
//                    for (var k = 0; k < childperm.length; k++) {
//                        ret.push([elem[j]].concat(childperm[k]));
//                    }
//                }
//            }
//            return ret;
//        }
//    };

}(typeof exports === 'object' && exports || this));
