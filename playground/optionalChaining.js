var object = {
	name: "Joy",
	value: {
		obj: 23,
	},
};

const value = object.value.obj;

if (object.value.obj) {
	console.log(object?.value?.obj1);
} else {
	console.log("Undefined Found");
}
