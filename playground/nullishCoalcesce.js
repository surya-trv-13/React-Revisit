var object = {
	name: "Joy",
	value: {
		obj: 23,
	},
};

const x = object.value.obj ?? 123;

console.log(x);
