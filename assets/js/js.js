var day=document.getElementById('day') //get sun image
var night=document.getElementById('night')//get moon image
 
day.addEventListener("click",toggleday) //add eventlistener for click
night.addEventListener("click",togglenight)//calls function to make changes

function togglenight(){
    night.style.visibility='hidden' //set visibility to hidden. sun hides.
    day.style.visibility=''         //removes hidden, moon shows
    var nightelements = document.getElementsByClassName('bg-dark')//get all elements with current class bg-dark
    for(let element of nightelements){      //iterates the array of elements, replacing each class acordingly.
        element.classList.replace('bg-dark','bg-light')
    }
}

function toggleday(){

    night.style.visibility=''
    day.style.visibility='hidden'
    var dayelements = document.getElementsByClassName('bg-light')
    for(let element of dayelements){
        element.classList.replace('bg-light','bg-dark')
    }
}

var images = document.getElementsByClassName('carousel-item')
console.log(images)
const total=images.length




 