function Process(){
	const StringText = document.getElementById("inputText").value;
	document.getElementById("Display1").innerText = "Stored:" + StringText;

	const trimmedText = StringText.trim();
	document.getElementById("Display2").innerText = "Trimmed:" + trimmedText;

	const lowerText = trimmedText.toLowerCase();
	document.getElementById("Display3").innerText = "Lower:" + lowerText;

	const capitalText = lowerText.replace(lowerText[0], lowerText[0].toUpperCase());
	//Better way: charAt(0).toUpperCase() + slice(1) — clean, predictable, widely used.
	document.getElementById("Display4").innerText = "Capital:" + capitalText;

	const splitText = capitalText.split("-");
	document.getElementById("Display5").innerText = "Split:" + splitText;

	const replaceText = splitText.map(word => word.replace("js", "Javascript"));
	document.getElementById("Display6").innerText = "Replace:" + replaceText;
	//can use foreach instead of map

	const joinText = replaceText.join(" ");
	document.getElementById("Display7").innerText = "Join:" + joinText;
}