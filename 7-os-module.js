const os=require('os');
//info about user
const user=os.userInfo()
console.log(user);
//method return system uptime
console.log(`the system uptime ${os.uptime} seconds`);
//return os information
const currentOS={
osName:os.type(),
release:os.release(),
totalmem:os.totalmem(),
freemem:os.freemem()
};
console.log(currentOS);