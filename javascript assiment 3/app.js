// chapter //


// STRING METHODS //


// qwestion  1 //
// answer //
// var firstName = "virginia ";
// var lastName = "CHUBO";
// var firstName, lastName, fullName;
// firstName = 'virginia';
// lastName = 'CHUBO';
// fullName = 'firstName' + 'lastName';


// question 2 //
// answer //
// var today = new Date();
//   var day = today.getDay();
//   var daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
//   console.log("Today is : " + daylist[day] + ".");
//   var hour = today.getHours();
//   var minute = today.getMinutes();
//   var second = today.getSeconds();
//   var prepand = (hour >= 12)? " PM ":" AM ";
//   hour = (hour >= 12)? hour - 12: hour;
//   if (hour===0 && prepand===' PM ') 
//   { 
//   if (minute===0 && second===0)
//   { 
//   hour=12;
//   prepand=' Noon';
//   } 
//   else
//   { 
//   hour=12;
//   prepand=' PM';
//   } 
//   } 
//   if (hour===0 && prepand===' AM ') 
//   { 
//   if (minute===0 && second===0)
//   { 
//   hour=12;
//   prepand=' Midnight';
//   } 
//   else
//   { 
//   hour=12;
//   prepand=' AM';
//   } 
//   } 
// console.log("Current Time : "+hour + prepand + " : " + minute + " : " + second);


// question 7 //
// answer //
// #include<stdio.h>
// #include<string.h>
// #include<stdlib.h>
// void cond(char *a,int n,char k,char l,char m)
// {
//     printf("The word is\n");
//     int i,count=0,max=0;
//     switch(m)
//     {
//         case 'A':
//         for(i=0;i<n;i++)
//         {
//             if(a[i]==k)
//             {
//                 a[i]=l;
//                 count++;
//             }
//         }
//         if(count==0)
//         {
//             printf("No such character present in the word.");
//         }
//         else
//         for(i=0;i<n;i++)
//         {
//             printf("%c",a[i]);
//         }
//         break;
//         case 'F':
//         for(i=0;i<n;i++)
//         {
//             while(max<1)
//             {
//                 if(a[i]==k)
//                 {
//                     a[i]=l;
//                     max++;
//                 }
//             }
//         }
//         if(max==0)
//         {
//             printf("No such character present in the word.");
//         }
//         else
//         for(i=0;i<n;i++)
//         {
//             printf("%c",a[i]);
//         }
//         break;
//     }
// }
// int main()
// {
//     char a[20],b,e,p;
//     printf("Enter the word:\n");
//     scanf("%s",a);
//     printf("Enter the character to be find:\n");
//     scanf("%c\n",&b);
//     printf("Enter the character to be replaced:\n");
//     scanf("%c\n",&e);
//     printf("Enter the 'A'/'F':\n");
//     scanf("%c\n",&p);
//     int n=strlen(a);
//     cond(a,n,b,e,p);
//     return 0;
// }



// question 9 //
// answer //
// s = input('Enter a sequence of strings: ')
// lst = []

// for i in range(0, len(s)):
//  if s[i].isdigit() == True:
//   lst.append(s[i])

// print(lst)


// question 10 //
// answer //
// let A = [ 1,2,3,4,5,6,7,8];
//         let n =3 ;
//         print(A, n);
// function print(array, sum)
//     {
//         let n = new Set();
//         for (let i = 0; i < array.length; ++i)
//         {
//             let p = sum - array[i];
//              if (n.has(p)) {
//                 document.write(
//                     "("+ array[i]
//                     + ", " + p + ")");
//             }
//             n.add(array[i]);
//         }
//     } 




// question 11 //
// answer //
// let A = [ 1,2,3,4,5,6,7,8];
// let n =3 ;
// print(A, n);
// function print(array, sum)
// {
// let n = new Set();
// for (let i = 0; i < array.length; ++i)
// {
//     let p = sum - array[i];
//      if (n.has(p)) {
//         document.write(
//             "("+ array[i]
//             + ", " + p + ")");
//     }
//     n.add(array[i]);
// }
// } 







// question 12 //
// answer //
// const num = 35.36;
// const without = num.toString().replace(".", ""); 


// question 13 //
// answer //
// var userName=prompt("Enter your Input: ");
// checkValidName(userName);
// function checkValidName(un)
// {
//     var message;
//     var split=[];
//     var arr=[];
//     for(var i=0;i<un.length;i++)
//     {
//         split[i]=un.split("&nbsp;");
//         arr[i]=un.charCodeAt(i);
//         if(arr[i]!=33||arr[i]!=44||arr[i]!=46||arr[i]!=64)
//         {
//                 message="Correct User Name";
//         }
//         while(arr[i]==33||arr[i]==44||arr[i]==46||arr[i]==64)
//         {
//             alert("please enter a valid userName");                                                                                                                   
//             userName=prompt("Enter your Input: ");
//             split[i]=un.split("&nbsp;");
//             arr[i]=un.charCodeAt(i);
//             if(arr[i]!=33||arr[i]!=44||arr[i]!=46||arr[i]!=64)
//             {
//                 message="correct in";
//                 break;
//             }
//         }

//     }
//     alert(message);
// }








// question 14 //
// answer //
// var cookie = ["cake", "apple pie", "cookies", "chips", "patties"];
// var isMatch = false;

// for (var i = 0; i < cookie.length; i++) {
//   if (usercookie === cookie[i]) {
//     alert(" available");
//     isMatch = true;
//     break;
//   }
// }

// if (isMatch === false) {
//   alert("not available");
// }


// question 15 //
// answer //
// function CheckPassword(inputtxt) 
// { 
// var paswd=  /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;
// if(inputtxt.value.match(paswd)) 
// { 
// alert('Correct, try another...')
// return true;
// }
// else
// { 
// alert('Wrong...!')
// return false;
// }
// }  



// question 17 //
// answer //
// function myGeeks() {
//     var str = "GeeksforGeeks";
//     var res = str.slice(-1);
      
//     document.getElementById("GFG").innerHTML
//             = res;
// }





// question 18 //
// answer //
// def word_count(str):
// counts = dict()
// words = str.split()

// for word in words:
//     if word in counts:
//         counts[word] += 1
//     else:
//         counts[word] = 1

// return counts

// print( word_count('the quick brown fox jumps over the lazy dog.'))