const arg = process.argv[2];
const size = parseInt(arg);
if (isNaN(size) || size <= 0) {
	console.log("Missing size");
} else {
	const row = "X".repeat(size);
	let i =0;
	while (i < size) {
		console.log(row);
		i++;
	}
}