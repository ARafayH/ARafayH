// chapter 1

// Alert

// question 1
// answer
// alert();


// question 2
// answer
// alert("Error! Please enter a valid password");


// question 3
// answer
// alert("Welcome to JS Land...Happy Coding!" );


// question 4
// answer
// alert("Welcome to JS Land..." );


// question 4
// answer
// alert("Happy Coding!" );


// question 5
// answer
// alert("Hello... I can JS through my web browser’s console" );


// question 7
// answer
// d.


// chapter 2

// VARIABLES FOR STRINGS



// question 1
// answer
// var username ;


// question 2
// answer
// var myName = "rafay";


// question 3
// answer
// var message = "Hello World";
// alert(message);


// question 4
// answer
// var age = 15 +  + "years old" 
// alert(age)


// question 5
// answer
// var message = <h1> PIZZA </h1> +  + <h2> PIZZ </h2> +  + <h3> PIZ </h3> +  + <h4> PI </h4> +  + <h5> P </h5> 
// alert(message)

// question 6
// answer
// var email = "My email address is (arafay990086@gmail.com)"
// alert(email)


// question 7
// answer
// var book = "I am trying to learn from the Book A smarter way to learn JavaScript"
// alert(book)


// question 8
// answer
// var message = "Yah! I can write HTML content through Javascript"
//  document.write(message)


// chapter 3


// VARIABLES FOR NUMBERS



// question 1
// answer
// var age = "I am 15 year old"
// alert(age)


// question 2
// answer
// var webpage = "you have visited this 14 time"
// alert(webpage)


// question 3
// answer
// var birthYear = "My birth year is 2003 " + <br> + "Data type of my ddeclared variable is number"
// document.write(birthYear)


// question 4
// answer
// var massage = "John Doe ordered 5 T-shirt(s) on XYZ Clothing store"
// document.write(massage)



// chapter 4


// VARIABLE NAMES: LEGAL & ILLEGAL 


// question 1
// answer
// var message1 = ""
// var message2 = ""
// var message3 = ""
// var totle = message1 + message2 + message3


// chapter 5


// MATH EXPRESSIONS


// question 1
// answer
// var num1 = 3
// var num2 = 5
// var sum = num1 + num2
// document.write(sum)


// question 2
// answer
// var num1 = 3
// var num2 = 5
// var subtraction = num1 - num2
// document.write(subtraction)


// question 2
// answer
// var num1 = 3
// var num2 = 5
// var multiplication = num1 * num2
// document.write(multiplication)


// question 2
// answer
// var num1 = 3
// var num2 = 5
// var modulus = num1 \ num2
// document.write(modulus)


// question 4
// answer
// var num1 = 600
// var num2 = 5
// var totle = num1 + num2
// document.write(totle)


// question 5
// answer
// document.write(Table of 4)

// var num1 = 4
// var num2 = 1
// var multiplication = num1 * num2
// document.write(multiplication)

// var num1 = 4
// var num2 = 2
// var multiplication = num1 * num2
// document.write(multiplication)

// var num1 = 4
// var num2 = 3
// var multiplication = num1 * num2
// document.write(multiplication)

// var num1 = 4
// var num2 = 4
// var multiplication = num1 * num2
// document.write(multiplication)

// var num1 = 4
// var num2 = 5
// var multiplication = num1 * num2
// document.write(multiplication)

// var num1 = 4
// var num2 = 6
// var multiplication = num1 * num2
// document.write(multiplication)

// var num1 = 4
// var num2 = 7
// var multiplication = num1 * num2
// document.write(multiplication)

// var num1 = 4
// var num2 = 8
// var multiplication = num1 * num2
// document.write(multiplication)

// var num1 = 4
// var num2 = 9
// var multiplication = num1 * num2
// document.write(multiplication)

// var num1 = 4
// var num2 = 10
// var multiplication = num1 * num2
// document.write(multiplication)


// question 7
// answer
// var priceitem1 = 650
// var quantityitem1 = 3
// var totleitem1 = priceitem1 * quantityitem1
// var priceitem2 = 100
// var quantityitem2 = 7
// var totleitem2 = priceitem2 * quantityitem2
// var totle = totleitem1 + totleitem2 
// document.write(totle)


// question 8
// answer
// var totalmarks = 980
// var obtainedmarks = 804
// var percentage = obtainedmarks * 100 / 980
// document.write(percentage)



// question 9
// answer
// 
// var doller = 104.80
// var sudia = 28
// var total = doller + sudia


// question 11
// answer
// var current year = 2022
// var birth year = 2003
// var age is = 18

// chapter 6-9


// MATH EXPRESSIONS 


// question 2
// answer
// var x = 1;

// if (x === 1) {
//   var x = 2;

//   console.log(x);
//   // expected output: 2
// }

// console.log(x);
// // expected output: 2



// chapter 12-13 

// question 6
// answer
// var greeting;
//  var hour = new Date().getHours();

// if (hour < 18) {
//     greeting = "Good day";
// else
//     greeting = "Good evening";
// }

// document.getElementById("demo").innerHTML = greeting;


// question 7
// answer
// function print24(str)
// {
//     // Get hours
//     var h1 = Number(str[1] - '0');
//     var h2 = Number(str[0] - '0');
//     var hh = (h2 * 10 + h1 % 10);
  
//     // If time is in "AM"
//     if (str[8] == 'A')
//     {
//         if (hh == 12)
//         {
//             document.write("00");
//             for (var i = 2; i <= 7; i++)
//                 document.write(str[i]);
//         }
//         else
//         {
//             for (var i = 0; i <= 7; i++)
//                 document.write(str[i]);
//         }
//     }
  
//     // If time is in "PM"
//     else
//     {
//         if (hh == 12)
//         {
//             document.write("12");
//             for (var i = 2; i <= 7; i++)
//                 document.write(str[i]);
//         }
//         else
//         {
//             hh = hh + 12;
//             document.write(hh);
//             for (var i = 2; i <= 7; i++)
//                 document.write(str[i]);
//         }
//     }
// }
  
// // Driver code
 
//     var str = "07:05:45PM";
//     print24(str);











