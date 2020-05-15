function findMinAndRemoveSorted(array) {
    let minIdx;
    let min = array[0];
    for(let i = 0; i < array.length; i++) {
        if(array[i] < min) {
            min = array[i]
            minIdx = i
        }
    }
    array.splice(minIdx, 1)
    return min
}

function compareAndRemoveMin(arr1, arr2) {
    if(arr1[0] < arr2[0]) {
        return arr1.shift()
    } else {
        return arr2.shift()
    }
}

function merge(arr1, arr2) {
    let sorted = [];
    while(arr1.length !== 0 && arr2.length !== 0) {
        sorted.push(compareAndRemoveMin(arr1, arr2))
    }
    return sorted.concat(arr1).concat(arr2)
}

function mergeSort(array) {
    let midpoint = array.length/2
    let arr1 = array.slice(0, midpoint)
    let arr2 = array.slice(midpoint, array.length)

    if(array.length < 2) {
        return array
    } else {
        return merge(mergeSort(arr1), mergeSort(arr2))
    }
}
