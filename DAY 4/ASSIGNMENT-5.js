<!DOCTYPE html>
<head>
    <title>Assignment 5</title>
</head>
<body>
 <script>
     var sales=window.prompt("Enter your sales: ")
     if(sales>=0 && sales<=5000)
     {
        console.log("Reward earned 2% ")
     }
     else if(sales>=5001 && sales<=10000)
     {
         console.log("Reward earned 5%")
     }
     else if(sales>=10001 && sales<=20000)
     {
         console.log("Reward earned 7%")
     }
     else
     {
         console.log("Reward earned 10%")
     }
 </script>
</body>
</html>
