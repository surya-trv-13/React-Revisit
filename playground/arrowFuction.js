const func = function (val) {
	console.log(this);
	return;
};

func(34);

const arrowFunc = (val) => console.log(this);

arrowFunc(34);

var x = {
	value: (val) => console.log("Value is here", val),
	value2: function () {
		console.log("Value inside value");
	},
};

x.value(23);
x.value2();
