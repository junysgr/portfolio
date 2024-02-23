//  Scroll top javascript Showing scrollTop btn
const scrollBtn = document.querySelector(".scrollToTop-btn");
window.addEventListener("scroll", function () {
	scrollBtn.classList.toggle("active", window.scrollY > 500);
});
// javascript to add click event to scroll top
scrollBtn.addEventListener("click", () => {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
});
// Hamburger Nav Bar
function toggle() {
	const menu = document.querySelector(".menu-links");
	const icon = document.querySelector(".hamburger-icon");
	menu.classList.toggle("clicked");
	icon.classList.toggle("clicked");
}

let sections = document.querySelectorAll("section");
// console.log(sections);
let navlinks = document.querySelectorAll("header nav a");
// console.log(navlinks);
// window.onscroll = fun(); No need to call
// window.onscroll = function fun() { No need keep function name
// window.onscroll = function () {
window.onscroll = () => {
	let winY = window.scrollY;
	// console.log("Windows y values " + winY);
	sections.forEach((sec) => {
		let secTop = sec.offsetTop;
		let height = sec.offsetHeight;
		let id = sec.getAttribute("id");

		if (winY >= secTop && winY < secTop + height) {
			navlinks.forEach((links) => links.classList.remove("active"));
			let activeMenu = document.querySelectorAll(
				"header nav a[href*=" + id + "]"
			);
			activeMenu.forEach((link) => link.classList.add("active"));
		}
	});
	// console.log(navlinks);
};

// navlinks.forEach((nav) => nav.classList.remove("active"));
// this.classList.add("active");
//  Night Mode

let dayNight = document.querySelector("#darkmode-toggle");
let wraper = document.querySelector(".wraper");

dayNight.addEventListener("click", () => {
	wraper.classList.toggle("night");
});

// Typed js
var typed = new Typed("#text", {
	strings: ["Developer", "Coder", "Mern Expert", "Bazeegar", "Tabaardaar"],
	loop: true,
	typeSpeed: 50,
	backspeed: 50,
	backdelay: 1000,
});
//  Rotate Text
let text = document.querySelector(".text p");
text.innerHTML = text.innerHTML
	.split("")
	.map((char, i) => `<b style="transform:rotate(${i * 6}deg")>${char}</b></b>`)
	.join("");

// mixitup stuff
const containerEl = document.querySelector(".projects-container");
var mixer = mixitup(containerEl);

mixer.filter("*");
// active project button
const pbtn = document.querySelectorAll(".projbtn");
console.log(pbtn);
pbtn.forEach((clickedbtn) => {
	clickedbtn.addEventListener("click", () => {
		// run loop over all buttons and remove new-btn2 class
		pbtn.forEach((pb) => pb.classList.remove("new-btn2"));
		// add to itself new-btn2 class
		clickedbtn.classList.add("new-btn2");
	});
});

//  scroll reveal
ScrollReveal({
	delay: 200,
	distance: "90px",
	duration: 2000,
});
ScrollReveal().reveal(
	".contact-list,.contact-main-text,.pic-wraper,.skills-left-container,.projects-header",
	{
		origin: "top",
	}
);
ScrollReveal().reveal(".tagline,.text-wraper,.about-left-container", {
	origin: "left",
});
ScrollReveal().reveal(".formBtn,.about-right-container", { origin: "right" });
ScrollReveal().reveal(
	".contact-form,.skills-right-container,.projects-container  ",
	{
		origin: "bottom",
	}
);
