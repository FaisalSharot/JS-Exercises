/* JavaScript code here */
//Task 1
console.log("External JS");
//task 2
function sumArray(arry){
    var sum = 0;
    arry.forEach(function(value, index){
        sum =sum+ value;
    });
    return sum ;
}
console.log(sumArray([9,4,1,3,6]));

 //task 3
function checkEmail(emailString){
    var emailFormat=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var match = emailFormat.test(emailString);
    return match;
}
console.log(checkEmail("faisal@smith.com"));
console.log(checkEmail("faisalsmith.com"));

//task 4

var library = [ 
   {
       author: 'Bill Gates',
       title: 'The Road Ahead',
       readingStatus: true
   },
   {
       author: 'Steve Jobs',
       title: 'Walter Isaacson',
       readingStatus: true
   },
   {
       author: 'Suzanne Collins',
       title:  'Mockingjay: The Final Book of The Hunger Games', 
       readingStatus: false
   }];
   function getReadingStatus(index){
       return library[index].readingStatus;
   }
   console.log(getReadingStatus(2));
   
   //task 5

var cart = [ 
   {
       name: 'Shoes',
       price: 560,
       quantity: 4
   },
   {
       name: 'Regular Tees',
       price: 455.50,
       quantity: 6
   },
   {
       name: 'Socks',
       price: 65.99,
       quantity: 2
   }];
   
   //task 5 a
   console.log('5/a');
   function addItem(newItem){
       cart.push(newItem);
       return cart;
   }
   var newItem = {name: 'Belt', price: 40, quantity: 1};
   console.log(addItem(newItem));
   
   //task 5 b
   console.log('5/b');
   function sortByProperty(){
       cart.sort(function(obj1,obj2){
           return obj1.price - obj2.price;
       });
       return cart;
   }
   console.log(sortByProperty());
   
   //task 5/c
   console.log('5/c');
   function findByName(name){
       var result = cart.map(function(obj){
           if(obj.name == name){
                return obj;
           }
       }).filter(item => item);
       return result;
   }
   console.log(findByName('Socks'));
   
   //task 5/d
   
   console.log("5/d");
   function totalCost(){
       var result = 0;
       cart.forEach(function(obj){
          result = result + obj.price;
         
       });
       return result;
   }
   
   console.log("Total cost of items : " + totalCost());
