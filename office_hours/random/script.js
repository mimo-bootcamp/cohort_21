// import {greet, helloWorld, goodByeWorld} from './helloworld.js';

// console.log(helloWorld());

// console.log(goodByeWorld());

// console.log(greet('Mimi',null));

const postOffice = {
    location: 'VS Code St 123... NYC',
    phone: '123456789',
    email: 'email@postoffice.com',
    // .....
    delivery : (package,address) => {
        // pickUp(package) 
        // collect(address)
        // findRoute(address)
        // estimateTime(address , weigh(package))
        // costCalc(address , weigh(package))
        // ...
        // ....
        // ......
        if(address.includes('NORTH POLE')) {
            return `package: ${package} shipped, but please expect a delayed delivery of up to 5 days because there are too many packages being sent to the address : ${address}` 
        } 
        return `package: ${package} shipped on time to address : ${address}`
        
    },

   
 
}





console.log(postOffice.delivery('📦', '123 ELF ROAD, NORTH POLE 88888'))


