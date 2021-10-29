const {shopForBeans, soakTheBeans, cookTheBeans} = require('./library.js');

// calling all the imported functions in a Ansychronous Function
async function cookBeans(){
 let type = await shopForBeans(); // calling first function
 let isSocked = await soakTheBeans(type); // calling second function with the result of first function
 let dinner = await cookTheBeans(isSocked);// calling third function with the result of second function
 console.log(dinner);
}
// calling the async Function
cookBeans();
