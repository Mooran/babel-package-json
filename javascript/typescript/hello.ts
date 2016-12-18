class Greeter {
	data: string;
	constructor(data: string) {
		this.data = data;
	}
	run() {
		console.log(this.data);	 
	}
}

	var greeter = new Greeter("Clark");
	greeter.run();