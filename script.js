function cloneObject(obj) {
	let clone = {};

	for (let key in obj) {
		if (typeof obj[key] == "object") {
			clone[key] = cloneObject(obj[key]);
		} else {
			clone[key] = obj[key];
		}
	}

	return clone;
}