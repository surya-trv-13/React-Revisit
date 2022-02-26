var object = {
	name: "Joy",
	value: {
		obj: 23,
	},
};

// object.name;
// object.value;

const { name, value } = object;

console.log(name, value);
console.log(object.name, object.value);
console.log(object);

var arr = [1, 2, 4, 5];
var [y, x, r] = arr;

console.log(y, r);
