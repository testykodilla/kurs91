function getTriangleArea(a, h) {
	if ((a <= 0) || (h <= 0)) {
		console.log('złe dane')
	}
	else {
		return a*h/2
	}
}

console.log(getTriangleArea(10,6))
console.log(getTriangleArea(10,2))
console.log(getTriangleArea(10,1))



