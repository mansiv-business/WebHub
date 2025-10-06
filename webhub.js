let body = document.querySelector("body");

let icons = body.querySelectorAll("i");

let instagram = body.querySelector(".instagram");
let twitter = body.querySelector(".twitter");
let gmail = body.querySelector(".gmail");
let website = body.querySelector(".website");

icons[0].addEventListener("mouseover" , () =>  instagram.classList.add("show"));
icons[0].addEventListener("mouseout" , () =>  instagram.classList.remove("show"));

icons[1].addEventListener("mouseover" , () =>  twitter.classList.add("show"));
icons[1].addEventListener("mouseout" , () =>  twitter.classList.remove("show"));

icons[2].addEventListener("mouseover" , () =>  gmail.classList.add("show"));
icons[2].addEventListener("mouseout" , () =>  gmail.classList.remove("show"));

icons[3].addEventListener("mouseover" , () =>  website.classList.add("show"));
icons[3].addEventListener("mouseout" , () =>  website.classList.remove("show"));


