# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @shruthig/lotide`

**Require it:**

`const _ = require('@shruthig/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(array1, array2)`: assertArraysEqual will take in two arrays & compare two object & console.log an appropriate message to the console.
* `assertEqual(actual, expected)`:assertEqual function compare the two values it takes in and print out a message telling us if they match or not
* `assertObjectsEqual(actual, expected)`: assertObjectsEqual will take in two objects & compare two object & console.log an appropriate message to the console.
`countLetters(sentence)`: This function will take in a sentence (as a string) and then return a count of each of the letters in that sentence.
`countOnly(allItems, itemsToCount)`: This function will return an object containing counts of everything that the input object listed.
`eqArrays(array1, array2)`: eqArrays function will takes in two arrays and returns true or false, based on a perfect match
`eqObjects(object1, object2)`:eqObjects  function will take in two objects and returns true or false, based on a perfect match. 
`findKey(array, callback)`: findKey function will takes in an object and a callback and return the first key for which the callback returns a truthy value. If no key is found, then it should return undefined.
`findKeyByValue(array1,searchKeyword)`: findKeyByValue function will take in an object and a value and return the first key which contains the given value. If no key with that given value is found, then it should return undefined.
`head(array)`: head function returns the first item in the array
`letterPositions(sentence)`: letterPositions function will return all the indices (zero-based positions) in the string where each character is found
`map(array, callback)`: map function will iterate into given array and a callback and return the value based on callback condition.
`middle(array)`: middle function will take in an array and return the middle-most element(s) of the given array.
`tail(array)`: tail function will returns the "tail" of an array: everything except for the first item (head) of the provided array
`takeUntil(allItems, itemsToCount)`: takeUntil which will keep collecting items from a provided array until the callback provided returns a truthy value
`without(original, itemsToRemove)`: without function will return a subset of a given array, removing unwanted elements.