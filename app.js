function mergeSort(arr=[]) {
    //Base condition
    if (arr.length <= 1) return arr;

    //Finding out the midpoint of Array.
    let arrHalfIndex = (arr.length) / 2
    if (arrHalfIndex != 1 && arrHalfIndex % 2 != 0) arrHalfIndex -= 0.5;

    //Slicing the arrays into two halves
    let left = makeArr(arr, 0, arrHalfIndex);
    let right = makeArr(arr, arrHalfIndex, arr.length);

    //Recurssive function
    return (merge(mergeSort(left), mergeSort(right)));

}


function merge(left, right) {
    let finalArr = [];


    let leftIndex = 0;
    let rightIndex = 0;

    //While (current)checking index number is less than that of the array length in both arrays.
    while (leftIndex < left.length && rightIndex < right.length) {

        // Increase index number only whose element is lower. 
        if (left[leftIndex] < right[rightIndex]) {
            finalArr.push(left[leftIndex]);
            leftIndex++;
        } else {
            finalArr.push(right[rightIndex])
            rightIndex++;
        }
    }

    //While (current)checking index number is less than that of the array length in right array but in left array still has some elements to be compared.
    while (leftIndex < left.length) {
        finalArr.push(left[leftIndex]);
        leftIndex++
    }

    //While (current)checking index number is less than that of the array length in left array but in right array still has some elements to be compared.
    while (rightIndex < right.length) {
        finalArr.push(right[rightIndex]);
        rightIndex++
    }

    return finalArr;
}

function makeArr(arr, start, length) {
    arrHalf = [];
    for (let i = start; i < length; i++) {
        arrHalf.push(arr[i]);
    }
    return arrHalf
}

console.log(mergeSort([77,55,66,121,32,55,756,23,765,1,7,2,4,2,0]));
