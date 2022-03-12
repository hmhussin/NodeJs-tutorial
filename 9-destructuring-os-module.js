//destructuring os module
const {uptime,type,release,totalmem,freemem,userInfo}=require('os');
//info about user
const user=userInfo()
console.log(user);
//method return system uptime
console.log(`the system uptime ${uptime} seconds`);
//return os information
const currentOS={
osName:type(),
release:release(),
totalmem:totalmem(),
freemem:freemem()
};
console.log(currentOS);