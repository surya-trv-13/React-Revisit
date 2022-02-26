var obj = {
	name: "Surya",
	class: "12th",
};

console.log(obj);

var obj2 = { ...obj, rollNo: 23 };

console.log(obj2);

var array = [1, 2, 3];

var array2 = [...array, 4, 5];

array = [7, 8, 9];
console.log(array2);
