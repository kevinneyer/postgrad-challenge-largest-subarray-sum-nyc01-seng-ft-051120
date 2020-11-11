function largestSubarraySum(array){
    let sum = 0
    let sumArray;

    for(let i = 0; i < array.length; i++){
        for(let j = array.length; j > i; j--){
            sumArray = array.slice(i, j)
            let total = sumArray.reduce((a,b) => ( a + b ), 0)
            if(total > sum){
                sum = total
            }
        }
    }
    return sum
}

// function largestSubarraySum(array){
//     let left;
//     let right;
//     let answer = 0;

//     let i = 0;
//     let j = array.length 
//     while(i < array.length){
//         left = i
//         right = j
//         let sum = array.reduce((a,b) => (a + b), 0)
//         if( sum > answer ){
//             answer = sum
//         }; i++
//     }
//     return answer
// }