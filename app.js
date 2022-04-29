const restart = document.querySelector("#restart-button");
const world = document.querySelector(".world");
const units = [];
const cols = 20;
const rows = 20;

const allunits = () => {
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      const unit = document.createElement("div");
      unit.classList.toggle("units");
      unit.setAttribute("data-gound", "true");
      units.push(unit);
      world.appendChild(unit);
    }
  }
};
allunits();

for (let i = 300; i < units.length; i++) {
  const image1 = document.createElement("img");
  image1.style.width = "100%";
  image1.style.height = "100%";
  image1.src = "./photos/dirt.jpg";
  units[i].appendChild(image1);
}
for (let i = 280; i < 300; i++) {
  const image2 = document.createElement("img");
  image2.style.width = "100%";
  image2.style.height = "100%";
  image2.src = "./photos/grass.png";
  units[i].appendChild(image2);
}
for (let i = 70; i < 75; i++) {
  const image2 = document.createElement("img");
  image2.style.width = "100%";
  image2.style.height = "100%";

  units[i].style.background = "white";
  units[i].appendChild(image2);
}
for (let i = 91; i < 97; i++) {
  const image2 = document.createElement("img");
  image2.style.width = "100%";
  image2.style.height = "100%";

  units[i].style.background = "white";
  units[i].appendChild(image2);
}
for (let i = 113; i < 114; i++) {
  const image2 = document.createElement("img");
  image2.style.width = "100%";
  image2.style.height = "100%";

  units[i].style.background = "white";
  units[i].appendChild(image2);
}
for (let i = 48; i < 54; i++) {
  const image2 = document.createElement("img");
  image2.style.width = "100%";
  image2.style.height = "100%";
  units[i].style.background = "white";
  units[i].appendChild(image2);
}
const image3 = document.createElement("img");
image3.src = "./photos/wood.jpg";
image3.style.width = "100%";
image3.style.height = "100%";
units[265].appendChild(image3);

for (let i = 277; i < 278; i++) {
  const image3 = document.createElement("img");
  image3.style.width = "100%";
  image3.style.height = "100%";
  image3.src = "./photos/wood.jpg";
  units[i].appendChild(image3);
}
for (let i = 257; i < 258; i++) {
  const image3 = document.createElement("img");
  image3.style.width = "100%";
  image3.style.height = "100%";
  image3.src = "./photos/wood.jpg";
  units[i].appendChild(image3);
}
for (let i = 236; i < 239; i++) {
  const image4 = document.createElement("img");
  image4.style.width = "100%";
  image4.style.height = "100%";
  image4.src = "./photos/leaves.jpg";
  units[i].appendChild(image4);
}
for (let i = 216; i < 219; i++) {
  const image4 = document.createElement("img");
  image4.style.width = "100%";
  image4.style.height = "100%";
  image4.src = "./photos/leaves.jpg";
  units[i].appendChild(image4);
}

for (let i = 243; i < 248; i++) {
  const image4 = document.createElement("img");
  image4.style.width = "100%";
  image4.style.height = "100%";
  image4.src = "./photos/leaves.jpg";
  units[i].appendChild(image4);
}
for (let i = 224; i < 227; i++) {
  const image4 = document.createElement("img");
  image4.style.width = "100%";
  image4.style.height = "100%";
  image4.src = "./photos/leaves.jpg";
  units[i].appendChild(image4);
}
for (let i = 205; i < 206; i++) {
  const image4 = document.createElement("img");
  image4.style.width = "100%";
  image4.style.height = "100%";
  image4.src = "./photos/leaves.jpg";
  //   units[i].style.background = "image4";
  units[i].appendChild(image4);
}

for (let i = 270; i < 275; i++) {
  const image5 = document.createElement("img");
  image5.style.width = "100%";
  image5.style.height = "100%";
  image5.src = "./photos/stone.jpg";
  units[i].appendChild(image5);
}
for (let i = 252; i < 254; i++) {
  const image5 = document.createElement("img");
  image5.style.width = "100%";
  image5.style.height = "100%";
  image5.src = "./photos/stone.jpg";
  units[i].appendChild(image5);
}
for (let i = 260; i < 261; i++) {
  const image5 = document.createElement("img");
  image5.style.width = "100%";
  image5.style.height = "100%";
  image5.src = "./photos/stone.jpg";
  units[i].appendChild(image5);
}
const unit = document.querySelector(".units");
const woodbank = document.querySelector("#bankwood");
units.addEventListener("click", function () {
  unit.prependTo("woodbank");
});
