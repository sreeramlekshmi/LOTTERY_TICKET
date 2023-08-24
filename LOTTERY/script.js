function choose() {
	let random = Math.floor(Math.random() * (10000 - 1000)) + 1000;
	document.getElementById("value").value = random;
	console.log(random)
	document.getElementById("popup").innerHTML = random;
    document.getElementById("textcolor").innerHTML = random;
	document.getElementById("textcolor").style.color = "red";
}