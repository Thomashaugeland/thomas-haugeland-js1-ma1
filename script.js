const cats = [
  {
    name: "Blob",
    age: 10
  },
  {
    name: "Harold",
  },
  {
    name: "Blurt",
    age: 21
  }
];

//question 1

const cat = {
  type: "complain",
  sayMeow: function () {
    console.log("Meow!")
  }
};

cat.sayMeow();

//question 2

var heading = document.querySelector("h3");

heading.innerHTML = "Updated heading";


//question 3

heading.style.fontSize = "2em";


//question 4

heading.className = "subheading";

//question 5

var paragraphs = document.querySelectorAll("p");

for (var i = 0; i < paragraphs.length; i++) {

  paragraphs[i].style.color = "red";
}

//question 6

var resultsContainer = document.querySelector("div.results");

resultsContainer.innerHTML = "<p>New paragraph</p>";

resultsContainer.style.background = "yellow";

//question 7

function logCatsName(list) {
  console.log(list)
}

for (var i = 0; i < cats.length; i++) {

  console.log("Cat:" + " " + cats[i].name);
}

//question 8

//this is not finished. Could not get it to work.


function createCats(cats) {

  let listName = "";

  for (let i = 0; i < cats.length; i++) {


    listName = listName + "<div>" + cats[i] + "</div>"
  }

  const finalName = "<div>" + cats + "</div>"



  return finalName;
}

const newHtml = createCats(cats);

console.log(newHtml);

const container = document.querySelector(".cat-container");
container.innerHTML = newHtml;