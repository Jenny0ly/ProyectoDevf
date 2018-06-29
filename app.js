
// counter
function contando(){
 var i = 1;
    theLabel = document.getElementById("counter");
    var interval = setInterval(function(){ 
        if (i == 10) clearInterval(interval);
        theLabel.innerHTML = i; 
        i++;
    }, 
    1000);
}