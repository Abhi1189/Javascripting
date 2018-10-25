
// backwards(['array', 'of', 'words'])
//print out the array in reverse
//take in array
// Loop over the array, starting at the end
// Log out each word from back to front. 

function backwards(list, cb) {
    var length = list.length;
    while(length--){
	cb(list[length]);
    }


backwards(["good", "morning", "it's", "friday"], function(word) {
    console.log(word);
});



