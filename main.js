let names = document.querySelector("#people_names");
console.log(people.results[1].name);
names.innerHTML = `${people.results[1].name.first}  ${people.results[1].name.last}`;

let peopleImg = document.getElementById("images");
peopleImg.src = `${people.results[1].picture.large}`;

let genders = document.querySelector("#gend");
genders.innerHTML = `${people.results[1].gender}`;


let birth = document.querySelector("#ages");
birth.innerHTML = `${people.results[1].dob.age}`;

let number = document.querySelector("#phone");
number.innerHTML = `${people.results[1].phone}`;

let c = document.querySelector("#City");
c.innerHTML = `${people.results[1].location.city}`;

let postC = document.querySelector("#postal_c");
postC.innerHTML = `${people.results[1].location.postcode}`;

let emails = document.querySelector("#em");
emails.innerHTML = `${people.results[1].email}`




let randomBtn = document.querySelector("#random_btn");
randomBtn.addEventListener("click", pickRandom);

function pickRandom() {
   let num = Math.floor(Math.random() * people.results.length);

   let names = document.querySelector("#people_names");
console.log(people.results[num].name);
names.innerHTML = `${people.results[num].name.first}  ${people.results[num].name.last}`;

let peopleImg = document.getElementById("images");
peopleImg.src = `${people.results[num].picture.large}`;

let genders = document.querySelector("#gend");
genders.innerHTML = `${people.results[num].gender}`;

let birth = document.querySelector("#ages");
birth.innerHTML = `${people.results[num].dob.age}`;

let number = document.querySelector("#phone");
number.innerHTML = `${people.results[num].phone}`;

let c = document.querySelector("#City");
c.innerHTML = `${people.results[num].location.city}`;

let postC = document.querySelector("#postal_c");
postC.innerHTML = `${people.results[num].location.postcode}`;

let emails = document.querySelector("#em");
emails.innerHTML = `${people.results[num].email}`

}

