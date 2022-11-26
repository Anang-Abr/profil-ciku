const aboutButton = document.getElementById("about_button");

aboutButton.addEventListener("click", function () {
	const aboutCiku = document.querySelector(".about_ciku");
	aboutCiku.classList.toggle("show");
	if (aboutCiku.classList.contains("show")) {
		aboutButton.innerHTML = "Gausah, gapeduli";
	} else {
		aboutButton.innerHTML = "Klik Disini";
	}
});
