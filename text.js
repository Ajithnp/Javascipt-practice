const arr = [1, 2, 3, 4]
// Output: [4, 3, 2, 1]
function reverse(arr){
    let move = 0;
    let temp;
   for(let i=arr.length-1; i > move; i--){
       
       temp = arr[move]
       arr[move] = arr[i];
       arr[i] = temp;
       move++
       
   }
   return arr
}
// console.log(reverse(arr))
//====================================================================
/*Find Maximum and Minimum
Find the largest and smallest numbers in an array.
Output: Max: 10, Min: 2 */
const arr1 = [7, 2, 10, 5]

function maxAndMin(){
    return {max:Math.max(...arr1), min: Math.min(...arr1)}
}

function findMaxAndMin(arr1){
    let largest = 0;
    let smallest = Math.max(...arr1)
    for(let i = 0; i < arr1.length; i++){
        if(arr1[i] > largest){
            largest= arr1[i]
        }
        if(arr1[i] < smallest){
            smallest = arr1[i]
        }
    }
    return {largest, smallest}
}

// console.log(findMaxAndMin(arr1))
//=====================================================
/*Remove Duplicates
Remove duplicate elements from an array.
Output: [1, 2, 3, 4, 5]
*/
const arr2 = [1, 2, 2, 3, 4, 4, 5]
function removeDuplicates(arr2){
    const unique = arr2.filter((num, index)=>arr2.indexOf(num) === index)
    console.log(unique)
}

function rDuplicates(arr2){
    for(let i = 0; i< arr2.length; i++){
        for(let j =i+1; j<arr2.length; j++){
            if(arr2[i] === arr2[j]){
                arr2.splice(j,1)
                
            }
        }
    }
    return arr2
}
console.log(rDuplicates(arr2)) 