const inpArr = document.getElementById("inpArr");
let arrSize = inpArr.value;

const inpAlgo = document.getElementById("inpAlgo");
let inpAlgoValue = inpAlgo.value;
const genArr = document.getElementById("genArr");

const visualCon = document.getElementById("visualCon");
const startVis = document.getElementById("startVis");


let arr = [];
let bars = [];

// Event Listeners
genArr.addEventListener("click", genrateNewArray);
inpArr.addEventListener("input", updateArr);
startVis.addEventListener("click", chooseAlgo);


window.onload = updateArr();

function genrateNewArray(){
  visualCon.innerHTML = "";
  arr = Array.from({length: arrSize}, () => Math.floor(Math.random() * 100)+10);

  for(i = 0; i < arrSize; i++){
    bars[i] = document.createElement("p");
    visualCon.appendChild(bars[i]);
    bars[i].style = " margin:0% " + 0.1 + "%; background-color:#0096FF; width:" + (100/arrSize-(2*0.1)) + "%; height:" + (arr[i]) + "%;";
  }
}

function updateArr(){
  arrSize = inpArr.value;
  genrateNewArray();
}

function chooseAlgo(){
  delay = 0;//the should be zero before starting

  inpAlgoValue = inpAlgo.value;

  switch(inpAlgoValue){
    case "select":selectionSort(); break;
    case "insert":insertionSort(); break;
  }
}

// Sorting Algos
function selectionSort(){
  for(i = 0; i < arrSize; i++){
    changeBar("#FF3821", arr[i], bars[i]);

    let minH = i;

    for(j = i+1; j < arrSize; j++){
      changeBar("#FFFF00", arr[j], bars[j]);

      if(arr[minH] > arr[j]){

        if(minH != i){
          changeBar("#0096FF", arr[minH], bars[minH]);
        }
        changeBar("#FF3821", arr[j], bars[j]);
        minH = j;

      }else{
        changeBar("#0096FF", arr[j], bars[j]);
      }

    }

    if(minH != i){

      [arr[i], arr[minH]] = [arr[minH], arr[i]]

      changeBar("#AAFF00", arr[i], bars[i]);
      changeBar("#0096FF", arr[minH], bars[minH]);
    }
    changeBar("#AAFF00", arr[i], bars[i]);
  }
}


//Changing bars
var delay = 0;
function changeBar(color, height, bar){
  window.setTimeout(() => {
    bar.style= "width:" + (100/arrSize-(2*0.1)) + "%; height:" + height + "%; background-color:" + color + "; margin:0% " + 0.1 + "%;";
  }, delay+=10000/(arrSize*100));
}
