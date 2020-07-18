<!DOCTYPE html>
<head>
    <title>Assignment 7</title>
</head>
<body>
 <script>
     var n = window.prompt("Enter limit: ");

    nextPrime:
    for (let i = 2; i <= n; i++)
    { // for each i...

        for (let j = 2; j < i; j++) 
        { // look for a divisor..
            if (i % j == 0) 
            continue nextPrime; // not a prime, go next i
        }

        console.log("Prime number: "+ i ); // a prime
    }
 </script>
</body>
</html>
