// Global Variables
var links = document.querySelectorAll(".navbar a");
var data = [];

// Here I changed the 1 to i so the code can has start and end loop
for (i = 0; i < links.length; i++) {
  links[i].addEventListener("click", function (e) {
    console.log(e.target.text);
    // displayData(e.target.text)
    getData(e.target.text);
  });
}

async function getData(meal) {
  var response = await fetch(
    `https://forkify-api.herokuapp.com/api/search?q=${meal}`
  );
  var recipiesData = await response.json();
  await displayData(recipiesData);
}

function displayData(recipiesData) {
  data = recipiesData.recipes;
  var recipes = ``;
  for (i = 0; i < data.length; i++) {
    recipes += `<div class="col-md-4 my-5">
    <div>
      <img class="w-100 edit" src="${data[i].image_url}" alt="">
      <h2 class="text-center">${data[i].title}</h2>
      <div class='text-center'>
      <a href="${data[i].source_url}" class="btn btn-primary my-2" target="_blank">Get the Reciepe</a>

      </div>
    </div>
  </div>
    `;
  }
  document.getElementById("add").innerHTML = recipes;
  console.log(recipes)
}


