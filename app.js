// 1. Two Sum
//
// Basic Approach
// const nums = [2,7,11,15]
// const target = 9
//
// const twoSum = function(nums, target) {
//     for(let i = 0; i < nums.length - 1; i++) {
//         for(let j = i + 1; j < nums.length; j++) {
//             if(nums[i] + nums[j] === target) return [i,j]
//         }
//     }
//     return false
// }
//
// console.log(twoSum(nums, target));
// Time Complexity 0n2
// Space Complexity 0(1)


// Revised Approach 

// const nums = [2,7,11,15]
// const target = 9 

// function twoSum(nums, target) {
//     let passedNums = {}
//     for(let i = 0; i < nums.length; i++) {
//         let numberNeeded = target - nums[i]
//         if(passedNums.hasOwnProperty(numberNeeded)) {
//             return [passedNums[numberNeeded], i]
//         } 
//         passedNums[nums[i]] = i
//     }
//     return false
// }

// console.log(twoSum(nums,target));

// time complexity 0n 
// space complexity 0n

//////////////////////////////////////////////////////////////////////////