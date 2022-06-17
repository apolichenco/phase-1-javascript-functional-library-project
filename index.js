function objectToArray(collection) {
    if (Array.isArray(collection)) {
        return collection
    }
    else {
        let nowItsAnArray = Object.values(collection);
        return nowItsAnArray
    }
}

function myEach(collection, callback) {
    let arrayed = objectToArray(collection)
    arrayed.forEach(val => {callback(val)})
    return collection
}

function myMap(collection, callback) {
    let arrayed = objectToArray(collection);
    let newArrayed = arrayed.map(val => callback(val))
    return newArrayed
}

function myReduce(collection, callback, acc) {
    let arrayed = objectToArray(collection);
    let addedUp = []
    if (acc) {addedUp = arrayed.reduce(callback, acc)}
    else {addedUp = arrayed.reduce(callback)}
    return addedUp
}
function myFind(collection, predicate) {
    let arrayed = objectToArray(collection);
    let foundPredicate = arrayed.find(predicate)
    return foundPredicate
}
function myFilter(collection, predicate) {
    let arrayed = objectToArray(collection);
    let foundPredicate = arrayed.filter(predicate)
    return foundPredicate
}
function mySize(collection) {
    let arrayed = objectToArray(collection);
    let arrayLength = arrayed.length
    return arrayLength
}
function myFirst(array, n) {
    if (n) {
        return array.slice(0, n)
    }
    else {return array[0]}
}
function myLast(array, n) {
    if (n) {
        return array.slice(-n)
    }
    else {
        let size = array.length;
        return array[size - 1]
    }
}
function myKeys(obj) {
    return Object.keys(obj);
}
function myValues(obj){
    return Object.values(obj)
}