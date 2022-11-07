// დავალება N1

let sectionButton = document.querySelector("click");

sectionButton.addEventListener("click", clickOn);

function clickOn() {
  sectionButton.remove();
}

// დავალება N2

let body = document.querySelector("body");
let image = document.createElement("img");
image.setAttribute("src", "https://picsum.photos/id/1/200/300");
image.classList.add("Body-img");

let characters = [
  {
    first_name: "Harry",
    last_name: "Potter",
    house: "Gryffindor",
    image: "https://hp-api.herokuapp.com/images/harry.jpg",
    actor: "Daniel Radcliffe",
  },
  {
    first_name: "Hermione",
    last_name: "Granger",
    house: "Gryffindor",
    image: "https://hp-api.herokuapp.com/images/hermione.jpeg",
    actor: "Emma Watson",
  },
  {
    first_name: "Ron",
    last_name: "Weasley",
    house: "Gryffindor",
    image: "https://hp-api.herokuapp.com/images/ron.jpg",
    actor: "Rupert Grint",
  },
  {
    first_name: "Draco",
    last_name: "Malfoy",
    house: "Slytherin",
    image: "https://hp-api.herokuapp.com/images/draco.jpg",
    actor: "Tom Felton",
  },
];

let appCharac = document.getElementById("characters-list");
