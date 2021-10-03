const BASE_URL = "http://localhost:3000/pups";

fetch(BASE_URL)
  .then((resp) => resp.json())
  .then((data) => data.forEach(renderDogs));

function renderDogs(dataObject) {
  const dogBar = document.getElementById("dog-bar");
  const makeEl = (e) => document.createElement(e);
  const span = makeEl("span");

  span.textContent = dataObject.name;
  dogBar.append(span);

  span.addEventListener("click", (e) => showInfomation(e));
}

function showInfomation(e) {
  const targetSpan = e.target.name;

  function showDogs(id) {
    return fetch(BASE_URL + `${id}`)
      .then((resp) => resp.json)
      .then((dataDod) => {
        return dataDod;
      });
  }
  const data = showDogs(targetSpan);

  const makeEl = (e) => document.createElement(e);
  const dogInformation = document.getElementById("dog-info");
  const imgDog = makeEl("img");
  imgDog.src = data.image;
  const h2 = makeEl("h2");
  h2.textContent = data.name;
  const btn = makeEl("button");
  btn.textContent = data.isGoodDog ? " Good Dog 🐶 " : " Bad Dog 🐕‍🦺 ";
  dogInformation.append(imgDog, h2, btn);
}
