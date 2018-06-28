let contador = [1,2,3,4,5,6,7,8,9,10];

// counter
function contando(){
 var i = 0;
    theLabel = document.getElementById("counter");
    var interval = setInterval(function(){ 
        if (i == 10) clearInterval(interval);
        theLabel.innerHTML = i; 
        i++;
    }, 
    2000);
}