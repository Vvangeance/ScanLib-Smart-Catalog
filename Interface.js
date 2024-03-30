// search-box open close js code
let navbar = document.querySelector(".navbar");
let searchBox = document.querySelector(".search-box .bx-search");
// let searchBoxCancel = document.querySelector(".search-box .bx-x");

searchBox.addEventListener("click", () => {
    navbar.classList.toggle("showInput");
    if (navbar.classList.contains("showInput")) {
        searchBox.classList.replace("bx-search", "bx-x");
    } else {
        searchBox.classList.replace("bx-x", "bx-search");
    }
});

// sidebar open close js code
let navLinks = document.querySelector(".nav-links");
let menuOpenBtn = document.querySelector(".navbar .bx-menu");
let menuCloseBtn = document.querySelector(".nav-links .bx-x");
menuOpenBtn.onclick = function () {
    navLinks.style.left = "0";
};
menuCloseBtn.onclick = function () {
    navLinks.style.left = "-100%";
};
// sidebar submenu open close js code
let htmlcssArrow = document.querySelector(".htmlcss-arrow");
htmlcssArrow.onclick = function () {
    navLinks.classList.toggle("show1");
};
let moreArrow = document.querySelector(".more-arrow");
moreArrow.onclick = function () {
    navLinks.classList.toggle("show2");
};
let jsArrow = document.querySelector(".js-arrow");
jsArrow.onclick = function () {
    navLinks.classList.toggle("show3");
};

//sidemenu
var hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click", function () {
    document.querySelector("body").classList.toggle("active");
});

// Function to validate file size and type
function validateImage(event) {
    var fileInput = document.getElementById("imageFile");
    var errorMessage = document.getElementById("errorMessage");
    var file = fileInput.files[0];

    if (file.size > 5 * 1024 * 1024) {
        // 5 MB
        errorMessage.textContent = "File size cannot exceed 5MB";
        errorMessage.style.display = "block";
        event.preventDefault(); // Prevent form submission
    } else if (!file.type.startsWith("image/")) {
        errorMessage.textContent = "Please select an image file";
        errorMessage.style.display = "block";
        event.preventDefault(); // Prevent form submission
    } else {
        errorMessage.style.display = "none";
    }
}

const contactform = document.querySelector(".contact-form");
const container = document.querySelector(".containerm");

contactform.addEventListener("submit", (event) => {
    event.preventDefault();
    container.innerHTML =
        "<p>Thanks for your message,. <br /> We'll respond to you shortly</p>";
});

const connectbtn = document.querySelector(".connect-btn");
const crossbtn = document.querySelector(".cross-btn");
const socialcontainerm = document.querySelector(".social-containerm");

connectbtn.addEventListener("click", () => {
    socialcontainerm.classList.toggle("visible");
});

crossbtn.addEventListener("click", () => {
    socialcontainerm.classList.remove("visible");
});

//Add note
//text-speech
const texttEL = document.getElementById("textt");
const speakEL = document.getElementById("speak");

speakEL.addEventListener("click", speakText);
function speakText() {
    // stop any speaking in progress
    window.speechSynthesis.cancel();

    const textt = texttEL.value;
    const utterance = new SpeechSynthesisUtterance(textt);
    window.speechSynthesis.speak(utterance);
}
