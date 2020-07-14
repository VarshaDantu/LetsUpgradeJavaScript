1.Explore and explain the various methods in console function
  Explain them
  Ex. console.log()
  console.warn().
  etc...
ANS:In JavaScript,the console is an object which provides access to the browser debugging console.The console object can be accessed from any global object.
    Window on browsing scopes and WorkerGlobalScope as specific variants in workers via the property console. 
    It's exposed as Window.console, and can be referenced as simply console.
    There are several types of console functions/methods. They are:
-------console.assert():
           The method writes an error message to the console if the assertion is false. If the assertion is true, nothing happens.
       Syntax:console.assert(assertion, obj1 [, obj2, ..., objN]);
              console.assert(assertion, msg [, subst1, ..., substN]);
-------console.clear():
          The method clears the console if the environment allows it.
       Syntax:console.clear();
-------console.count():
          The method logs the number of times that this particular call to count() has been called.
       Syntax:console.count([label]);
-------console.debug():
          The  method outputs a message to the web console at the "debug" log level.
          The message is only displayed to the user if the console is configured to display debug output.
       Syntax:console.debug(obj1 [, obj2, ..., objN]);
              console.debug(msg [, subst1, ..., substN]);
-------Console.error():
            Outputs an error message to the Web Console.
       Syntax:console.error(obj1 [, obj2, ..., objN]);
              console.error(msg [, subst1, ..., substN]);
              console.exception(obj1 [, obj2, ..., objN]);
              console.exception(msg [, subst1, ..., substN]);
              
2.Write the difference between var, let and const with code examples.
 ___________________________________________________________________________________________________________________________________________________________
| ________var_______________________________|_____________let_____________________________________|_____________const_______________________________________|
|The scope of a variable defined with the   |The scope of a variable defined with the keyword     |The scope of a variable defined with the keyword “const” |
| keyword “var” is limited to the “function”|“let” or “const” is limited to the “block”defined    |is limited to the block defined by curly braces. However |
| within which it is defined.               |by curly braces i.e. {} .“let” and “const” are“block |if a variable is defined with keyword const, it cannot be|
| If it is defined outside any function,    |scoped”.“let” and “const” are“block scoped”.         |reassigned.“const” cannot be re-assigned to a new value. |
|  the scope of the variable is global.     |                                                     | However it CAN be mutated.                              |
|  var is “function scoped”.                |                                                     |                                                         |
|___________________________________________|_____________________________________________________|_________________________________________________________|
|CODE::::::::                               |CODE::::                                             |CODE::::::                                               |
|___________________________________________|_____________________________________________________|_________________________________________________________|
| function nodeSimplified(){                |function nodeSimplified(){                           |function nodeSimplified(){                               |
|  var a =10;                               | let a =10;                                          | let a =10;                                              | 
| console.log(a);                           | console.log(a);                                     |  console.log(a);                                        |
|  if(true){                                | if(true){                                           |  if(true){                                              |
|   var a=20;                               |   let a=20;                                         |   let a=20;                                             |
|   console.log(a);                         |  console.log(a);                                    |   console.log(a);                                       |
|  }                                        |  }                                                  |  }                                                      |
|  console.log(a);                          | console.log(a);                                     |  console.log(a);                                        |
|}                                          |}                                                    |}                                                        |
|                                           |                                                     |                                                         |
|___________________________________________|_____________________________________________________|_________________________________________________________|

3.Write a brief intro on available data types in Javascript.
Ans:
Data types basically specify what kind of data can be stored and manipulated within a program.
There are six basic data types in JavaScript which can be divided into three main categories:
primitive (or primary), composite (or reference), and special data types. String, Number, and
Boolean are primitive data types. Object, Array, and Function (which are all types of objects) 
are composite data types. Whereas Undefined and Null are special data types.
Primitive data types can hold only one value at a time, whereas composite data types can hold
collections of values and more complex entities.
-----The String Data Type:
      The string data type is used to represent textual data (i.e. sequences of characters).
      Strings are created using single or double quotes surrounding one or more characters.
   EG: var a = 'Hi there!'; 
------The Number Data Type:
        The number data type is used to represent positive or negative numbers with or without 
        decimal place, or numbers written using exponential notation.
   EG: var b = 23;
-------The Boolean Data Type:
          The Boolean data type can hold only two values: true or false. It is typically used
          to store values like yes (true) or no (false), on (true) or off (false)
   EG: var isWriting = true;   // yes, I'm writing
-------The Undefined Data Type:
          The undefined data type can only have one value-the special value undefined. If a var
          -iable has been declared, but has not been assigned a value, has the value undefined.
  EG:  var c;
       alert(c);  //OUTPUT IS UNDEFINED
--------The Null Data Type:
            This is another special data type that can have only one value-the null value.
    EG: var a = NULL;
         alert(a);  //OUTPUT IS "NULL"
--------The Object Data Type:
           The object is a complex data type that allows you to store collections of data.
    EG: var emptyObject = {};
        var person = {"name": "Clark", "surname": "Kent", "age": "36"};
--------The Array Data Type:
           An array is a type of object used for storing multiple values in single variable. 
           Each value (also called an element) in an array has a numeric position, known as its index,
           and it may contain data of any data type-numbers, strings, booleans, functions, objects, 
           and even other arrays. The array index starts from 0, so that the first array element is 
           arr[0] not arr[1].
    EG: var colors = ["Red", "Yellow", "Green", "Orange"];
        alert(colors[2]);  //OUTPUT IS GREEN
HERE ARE SOME OF THE TYPES OF DATA TYPES.....



             

