function assign(){
    //length
    console.log(num.length);
   //toString
   console.log(num.toString());
  
   //arrayat
   console.log(num[2]);
  
   //join
   console.log(num.join("+"));
  
   //pop
   console.log(num.pop());
   //push
   console.log(num.push(6));
   //concat
   console.log(num.concat(num1));

   //map
   
   const squaredNums = num.map(number => number * number);
   console.log(squaredNums); 

   const stringNums = num1.map(number => number.toString());
   console.log(stringNums); // Output: ["6", "7", "8", "9", "10"]

   //reduce
   const totalSum = num.concat(num1).reduce((accumulator, number) => accumulator + number, 0);
   console.log(totalSum); 
   const largestNum = num1.reduce((accumulator, number) => Math.max(accumulator, number));
  console.log(largestNum);

  //filter
  const evenNums = num.filter(number => number % 2 === 0);
  console.log(evenNums); 

  const greaterThan5 = num1.filter(number => number > 5);
  console.log(greaterThan5); 

  const slicedArray1 = num.slice(1, 4);
  console.log("Sliced array 1:", slicedArray1);

  // Get the first three elements:
  const slicedArray2 = num.slice(0, 3);
  console.log("Sliced array 2:", slicedArray2); 

  // Get the last two elements:
  const slicedArray3 = num.slice(-2);
  console.log("Sliced array 3:", slicedArray3); 
      
  
  }
  const num=[1,2,3,4,5];
  const num1=[6,7,8,9,10]
  assign(num,num1);