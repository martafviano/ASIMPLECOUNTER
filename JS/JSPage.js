let more = document.getElementById ("increase");

let less = document.getElementById ("decrease");

let counter = document.getElementById ("currentNumber"); 

let number = 0;

more.addEventListener("click", function(incr){

    number++;
    counter.innerHTML = number;

})


less.addEventListener("click", function(decr){
   
    number--;
    counter.innerHTML= number;
})