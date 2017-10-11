var a = 1,
	b = 0,
	pierwszynawias = a*a,
	druginawias = 2*a*b,
	trzecinawias = b*b,
	value = pierwszynawias - druginawias + trzecinawias;

if (value > 0) {
	console.log('wynik dodatni')
}

else if (0 > value) {
	console.log("wynik ujemny")
}

else {
	console.log("wynik równy 0")
}