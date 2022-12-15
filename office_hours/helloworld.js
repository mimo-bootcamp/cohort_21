export function helloWorld() {
	return 'Hello World!';
}

export function goodByeWorld() {
	return 'good bye World!';
}

export function greet(name,lastname) {
	if (lastname === null ){
		return `Hi, ${name}!`;
	} 
	return `Hi, ${name} ${lastname}!`; 	
}


console.log(helloWorld());


