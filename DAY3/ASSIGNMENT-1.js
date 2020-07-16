1.Take a number from a user and write a function which checks whether the number is even or
odd. Assign the result to a variable and log that variable in the console.
Example Input: 23
Output: The number entered is 23 and Number is odd

ANS:
 <!DOCTYPE html>
<html>
<head>
<script>
function odd_even(){
var num;
num=Number(document.getElementById("no_input").value);
if(num%2==0)
{
alert("Even Number");
}
else
{
alert("Odd Number");
}
}
</script>
</head>
<body>
Enter Any Number:<input id="num_input"><br />
<button onclick="odd_even()">Click me</button>
</body>
</html>
