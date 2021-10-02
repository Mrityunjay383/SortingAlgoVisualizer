//Getting HTML ELements
const inpArr = document.getElementById("inpArr");
const inpAlgo = document.getElementById("inpAlgo");
const genArr = document.getElementById("genArr");
const visualCon = document.getElementById("visualCon");
const startVis = document.getElementById("startVis");

// Variables
let arrSize = inpArr.value;
let inpAlgoValue = inpAlgo.value;
let arr = [];//To store random numbers
let bars = [];//To store para elements
var delay = 0;//To give delay between visualization

// Event Listeners
genArr.addEventListener("click", genrateNewArray);//For genration new Array
inpArr.addEventListener("input", updateArr);//For Updationg the size of Array
startVis.addEventListener("click", chooseAlgo);


// Functions
window.onload = updateArr();//gerrating Array on page load

// Genating New array
function genrateNewArray(){
  visualCon.innerHTML = "";
  arr = Array.from({length: arrSize}, () => Math.floor(Math.random() * 100)+10);//Pussing random number between 10-110 in array

  for(i = 0; i < arrSize; i++){
    bars[i] = document.createElement("p");//Creating para elements with acts like bars
    visualCon.appendChild(bars[i]);//Rendering para elements in container
    bars[i].style = " margin:0% " + 0.1 + "%; background-color:#0096FF; width:" + (100/arrSize-(2*0.1)) + "%; height:" + (arr[i]) + "%;";
  }
}

//Updating Array size by range element(inpArr)
function updateArr(){
  arrSize = inpArr.value;
  genrateNewArray();
}

//Chooing Which algo to apply by user
function chooseAlgo(){
  delay = 0;//delay should be zero before starting

  inpAlgoValue = inpAlgo.value;

  switch(inpAlgoValue){
    case "select":selectionSort(); break;
    case "insert":insertionSort(); break;
  }
}


//Changing bars used by algos
function changeBar(color, height, bar){
  window.setTimeout(() => {
    bar.style= "width:" + (100/arrSize-(2*0.1)) + "%; height:" + height + "%; background-color:" + color + "; margin:0% " + 0.1 + "%;";
  }, delay+=10000/(arrSize*100));
}
