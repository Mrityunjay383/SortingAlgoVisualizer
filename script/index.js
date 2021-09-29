const inpArr = document.getElementById("inpArr");
let arrSize = inpArr.value;

const genArr = document.getElementById("genArr");

const visualCon = document.getElementById("visualCon");


let arr = [];
let bars = [];

genArr.addEventListener("click", genrateNewArray);
inpArr.addEventListener("input", updateArr);

window.onload = updateArr();

function genrateNewArray(){
  visualCon.innerHTML = "";
  arr = Array.from({length: arrSize}, () => Math.floor(Math.random() * 100)+10);

  for(i = 0; i < arrSize; i++){
    bars[i] = document.createElement("p");
    visualCon.appendChild(bars[i]);
    bars[i].style = " margin:0% " + 0.1 + "%; background-color:blue; width:" + (100/arrSize-(2*0.1)) + "%; height:" + (arr[i]) + "%;";
  }
  // console.log(arr);
}

function updateArr(){
  arrSize = inpArr.value;
  genrateNewArray();
}
