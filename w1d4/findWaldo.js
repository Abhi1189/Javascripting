function findWaldo(arr, found) {
  // for (var i = 0; i < arr.length; i++) {
  //   if (arr[i] === "Waldo") {
  //     found(i);   // execute callback
  //   }
  // }
  arr.forEach(function(element, i){
    if(element === "Waldo"){
      found(i);
    }
  });
}

function actionWhenFound(n) {
  console.log("Found him at index: ", n);
}


findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);
