// Sum of Array Elements: Write a function to calculate the sum of all elements in an array of integers.
// function sumOfElements(Array){
//     let sum=0;
//     for (let i=0;i<Array.length;i++){
//          sum+=Array[i]
//     }
//     return sum;
// }
// console.log(sumOfElements([1,2,3,4,5,6]))

//  Average of Array Elements: Write a function to calculate the average of all elements in an array of integers.

// function AveregeOfElements(Array){
//     let sum=0
//     for (let i=0;i<Array.length;i++){
//         sum+=Array[i]
//     }
//     let ave=sum/Array.length
//     return ave;
// }
// console.log(AveregeOfElements([1,2,3,4,5]))

//  Find Maximum Element: Write a function to find the maximum element in an array of integers.

// function maximumElement(arr){
//     let maximum = arr[0];
//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] > maximum) {
//             maximum = arr[i];
//         }
//     }
//     return maximum;
// }
// console.log(maximumElement([4,6,2,87,3,34]))

// Find Minimum Element: Write a function to find the minimum element in an array of integers.

// function maximumElement(arr){
//     let maximum = arr[0];
//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i]<maximum) {
//             maximum = arr[i];
//         }
//     }
//     return maximum;
// }
// console.log(maximumElement([4,6,2,87,3,34]))

//  Array Search: Write a function to search for a given element in an array and return its index if found, otherwise return -1.
// function ArraySearch(arr,number){
//     for (let i=0 ; i<=arr.length;i++){
//         if (number==arr[i]){
//             return i;
//         }
//     }
//     return -1
// }
// arr=[2,3,5,7,8]
// number=3
// console.log(ArraySearch(arr,number))

// Array Sorting: Write a function to sort an array of integers in non-decreasing order (ascending).

// function sorting(arr) {
//   let temp;
//   for (let i = 0; i < arr.length - 1; i++) {
//     for (let j = 0; j < arr.length - 1 - i; j++) {
//       if (arr[j] > arr[j + 1]) {
//         temp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = temp;
//       }
//     }
//   }
//   return arr;
// }
// console.log(sorting([33, 4, 2, 1, 5]));

//  Array Filtering: Write a function to filter out even numbers from an array of integers and return a new array containing only the even numbers.

// function EvenNumbers(arr){
//     let empty=[]
//     for (let i=0;i<arr.length;i++){
//         if (arr[i]%2==0){
//             empty.push(arr[i]);
//         }
//     }
//     return empty
// }
// console.log(EvenNumbers([2,4,1,76,32,84,21]))

// function EvenNumbers(arr) {
//     return arr.filter(num => num % 2 === 0);
// }
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const result = EvenNumbers(numbers);
// console.log(result); 





// let arr1 = [1,5] 
// let arr2 = [2,4]
// let arr3=[]
// for (let i=0; i<arr1.length;i++){
//     arr3.push(arr1[i])
// }
// for (let j=0; j<arr2.length;j++){
//     arr3.push(arr2[j])
// }
// console.log(arr3)

// // let arr=[2,5,8,4,0,5];
// let table;
// console.log(arr3)
// for (let i=1;i<=10;i++){
//    table=arr3[1]+"*"+i+"="+arr3[1]*i
//     console.log(table)
// }