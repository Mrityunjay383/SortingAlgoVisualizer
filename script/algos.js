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

function insertionSort(){
  console.log('Working');
}
