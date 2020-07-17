//2.Write a program which will take OS name and version from the user separated by a space. Then
// log the OS name and version on the console. Input: "Android 9"
 //Output: The OS name is Android and version is 9
 
 let str=prompt("Enter OS and version");

let str1=str.split(' ');
console.log("The OS name is "+str1[0]+" and version is "+str1[1]);
 
