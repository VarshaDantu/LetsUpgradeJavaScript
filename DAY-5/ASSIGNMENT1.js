<!DOCTYPE html>
<html>
<head>
<script>
while(1)
{
var n=+window.prompt("Enter a positive number",0);
var arr=[];
if(n>=0){
for(var i=0;i<n;i++)
{
arr[i]=i;
}
var odd=arr.filter(num=>num%2!=0);
console.log(`The odd numbers are:`);
console.log(odd);
var cubeodd=odd.map(num=>num**3);
console.log('cubes of these odd numbers are:');
console.log(cubeodd);
//document.write(cubeodd);
document.write("<br>check console!");
break;
}
}
</script>
</head>
<body>
<h3 style="color:seagreen">a program which does the following things: <br>
1. Takes a positive number from the user. <br>
2. Makes an array of numbers till the number given by user <br>
3. Use higher order function to filter the odd numbers <br>
4. Generate and array of the cubes of the filtered numbers <br></h3>

</body>
</html>
