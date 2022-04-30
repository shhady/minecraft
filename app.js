const restart = document.querySelector("#restart-button");
const world = document.querySelector(".world");
const units = [];
const cols = 20;
const rows = 20;

const allunits = () => {
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      const unit = document.createElement("div");
      unit.className = "unit";
      unit.setAttribute("data-active", false);
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
  units[i].className = "dirt";
  units[i].appendChild(image1);
  units[i].setAttribute("data-active", "true");
  image1.className = "image1";
}
for (let i = 280; i < 300; i++) {
  const image2 = document.createElement("img");
  image2.style.width = "100%";
  image2.style.height = "100%";
  image2.src = "./photos/grass.png";
  units[i].classList.add("grass");
  units[i].appendChild(image2);
  units[i].setAttribute("data-active", "true");
  image2.className = "image2";
}
for (let i = 70; i < 75; i++) {
  const image2 = document.createElement("img");
  image2.style.width = "100%";
  image2.style.height = "100%";
  units[i].classList.add("clouds");
  units[i].setAttribute("data-active", "true");
  units[i].style.background = "white";
  units[i].appendChild(image2);
  //   image2.className = "cloud";
}
for (let i = 91; i < 97; i++) {
  const image2 = document.createElement("img");
  image2.style.width = "100%";
  image2.style.height = "100%";
  units[i].setAttribute("data-active", "true");
  units[i].classList.add("clouds");
  units[i].style.background = "white";
  units[i].appendChild(image2);
}
for (let i = 113; i < 114; i++) {
  const image2 = document.createElement("img");
  image2.style.width = "100%";
  image2.style.height = "100%";
  units[i].setAttribute("data-active", "true");
  units[i].classList.add("clouds");
  units[i].style.background = "white";
  units[i].appendChild(image2);
}
for (let i = 48; i < 54; i++) {
  const image2 = document.createElement("img");
  image2.style.width = "100%";
  image2.style.height = "100%";
  units[i].classList.add("clouds");
  units[i].style.background = "white";
  units[i].appendChild(image2);
  units[i].setAttribute("data-active", "true");
}
const image3 = document.createElement("img");
image3.src = "./photos/wood.jpg";
image3.style.width = "100%";
image3.style.height = "100%";
units[265].classList.add("wood");
units[265].appendChild(image3);
units[265].setAttribute("data-active", "true");
image3.className = "woood";

for (let i = 277; i < 278; i++) {
  const image3 = document.createElement("img");
  image3.style.width = "100%";
  image3.style.height = "100%";
  image3.src = "./photos/wood.jpg";
  units[i].classList.add("wood");
  units[i].appendChild(image3);
  units[i].setAttribute("data-active", "true");
  image3.className = "woood";
}
for (let i = 257; i < 258; i++) {
  const image3 = document.createElement("img");
  image3.style.width = "100%";
  image3.style.height = "100%";
  units[i].classList.add("wood");
  image3.src = "./photos/wood.jpg";
  units[i].appendChild(image3);
  units[i].setAttribute("data-active", "true");
  image3.className = "woood";
}
for (let i = 236; i < 239; i++) {
  const image4 = document.createElement("img");
  image4.style.width = "100%";
  image4.style.height = "100%";
  image4.src = "./photos/leaves.jpg";
  units[i].classList.add("leaves");
  units[i].appendChild(image4);
  units[i].setAttribute("data-active", "true");
  image4.className = "image4";
}
for (let i = 216; i < 219; i++) {
  const image4 = document.createElement("img");
  image4.style.width = "100%";
  image4.style.height = "100%";
  units[i].classList.add("leaves");
  image4.src = "./photos/leaves.jpg";
  units[i].appendChild(image4);
  units[i].setAttribute("data-active", "true");
  image4.className = "image4";
}

for (let i = 243; i < 248; i++) {
  const image4 = document.createElement("img");
  image4.style.width = "100%";
  image4.style.height = "100%";
  image4.src = "./photos/leaves.jpg";
  units[i].classList.add("leaves");
  units[i].appendChild(image4);
  units[i].setAttribute("data-active", "true");
  image4.className = "image4";
}
for (let i = 224; i < 227; i++) {
  const image4 = document.createElement("img");
  image4.style.width = "100%";
  image4.style.height = "100%";
  image4.src = "./photos/leaves.jpg";
  units[i].classList.add("leaves");
  units[i].appendChild(image4);
  units[i].setAttribute("data-active", "true");
  image4.className = "image4";
}
for (let i = 205; i < 206; i++) {
  const image4 = document.createElement("img");
  image4.style.width = "100%";
  image4.style.height = "100%";
  image4.src = "./photos/leaves.jpg";
  units[i].classList.add("leaves");
  units[i].appendChild(image4);
  units[i].setAttribute("data-active", "true");
  image4.className = "image4";
}

for (let i = 270; i < 275; i++) {
  const image5 = document.createElement("img");
  image5.style.width = "100%";
  image5.style.height = "100%";
  image5.src = "./photos/stone.jpg";
  units[i].classList.add("stone");
  units[i].appendChild(image5);
  units[i].setAttribute("data-active", "true");
  image5.className = "image5";
}
for (let i = 252; i < 254; i++) {
  const image5 = document.createElement("img");

  image5.style.width = "100%";
  image5.style.height = "100%";
  units[i].className = "stone";
  image5.src = "./photos/stone.jpg";
  units[i].appendChild(image5);
  units[i].setAttribute("data-active", "true");
  image5.className = "image5";
}
for (let i = 260; i < 261; i++) {
  const image5 = document.createElement("img");
  image5.style.width = "100%";
  image5.style.height = "100%";
  image5.src = "./photos/stone.jpg";
  units[i].className = "stone";
  units[i].appendChild(image5);
  units[i].setAttribute("data-active", "true");
  image5.className = "image5";
}

const woody = document.querySelector("#bankwood");
const leavy = document.querySelector("#bankleaves");
const stony = document.querySelector("#bankstone");
const grassy = document.querySelector("#bankgrass");
const dirtbank = document.querySelector("#bankdirt");
const worldy = document.querySelector(".world");
const menu = document.querySelector(".menu");
const dirtCount = document.querySelector(".dirtCount");
const woodCount = document.querySelector(".woodCount");
const stoneCount = document.querySelector(".stoneCount");
const leavesCount = document.querySelector(".leavesCount");
const grassCount = document.querySelector(".grassCount");
const dirtAtt = document.querySelector(".dirt");
const grassAtt = document.querySelector(".grass");
const woodAtt = document.querySelector(".wood");
const leavesAtt = document.querySelector(".leaves");
const stoneAtt = document.querySelector(".stone");

let countDirt = 0;
let countGrass = 0;
let countWood = 0;
let countStone = 0;
let countLeaves = 0;

worldy.addEventListener("click", handleEvent);
function handleEvent(e) {
  if (e.target.className === "image1") {
    dirtbank.appendChild(e.target).removeChild;
    dirtAtt.setAttribute("data-active", "false");
    if (e.target) {
      countDirt++;
      dirtCount.innerHTML = countDirt;
      console.log(world);
    }
  } else if (e.target.className === "image2") {
    grassy.appendChild(e.target).removeChild;
    grassAtt.setAttribute("data-active", "false");
    if (e.target) {
      countGrass++;
      grassCount.innerHTML = countGrass;
    }
  } else if (e.target.className === "image5") {
    stony.appendChild(e.target).removeChild;
    stoneAtt.setAttribute("data-active", "false");

    if (e.target) {
      countStone++;
      stoneCount.innerHTML = countStone;
    }
  } else if (e.target.className === "image4") {
    leavy.appendChild(e.target).removeChild;
    leavesAtt.setAttribute("data-active", "false");
    if (e.target) {
      countLeaves++;
      leavesCount.innerHTML = countLeaves;
    }
  } else if (e.target.className === "woood") {
    woody.appendChild(e.target).removeChild;
    woodAtt.setAttribute("data-active", "false");
    if (e.target) {
      countWood++;
      woodCount.innerHTML = countWood;
    }
  }
}

// menu.addEventListener("click", handleEvent);
// function handleEvent(e) {
//   if (e.target.className === "image1") {
//     e.target.appendChild(dirtbank);
//   }
//    else if (e.target.className === "image2") {
//     e.target.appendChild(grassy);
//   } else if (e.target.className === "image5") {
//     stony.appendChild(e.target);
//   } else if (e.target.className === "image4") {
//     leavy.appendChild(e.target);
//   } else if (e.target.className === "woood") {
//     woody.appendChild(e.target);
//   }
// }

//   return count;

// const grassy = document.querySelector("#bankgrass");
// dirty.addEventListener("click", handleEvent);
// function handleEvent(e) {
//   if (e.target.className === "image2") {
//     grassy.appendChild(e.target);
//   }
// }
