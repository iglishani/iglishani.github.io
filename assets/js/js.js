const day = document.getElementById('day')
const night = document.getElementById('night')
day.addEventListener('click', togglenight)
night.addEventListener('click', toggleday)


function toggleday() {
    var day = document.getElementById('day'); //get sun image
    var night = document.getElementById('night');//get moon image

    night.className = 'hidden'; //hide moon
    day.className = '';//show sun

    // Convert the HTMLCollection to an array to avoid live updates
    var dayelements = Array.from(document.getElementsByClassName('bg-dark'));

    // Replace all instances of the class name in each element
    dayelements.forEach(element => {
        element.classList.remove('bg-dark');
        element.classList.add('bg-light');
    });
}

function togglenight() {
    var day = document.getElementById('day'); //get sun image
    var night = document.getElementById('night');//get moon image

    night.className = ''; //show moon
    day.className = 'hidden';//hide sun

    // Convert the HTMLCollection to an array to avoid live updates
    var dayelements = Array.from(document.getElementsByClassName('bg-light'));

    // Replace all instances of the class name in each element
    dayelements.forEach(element => {
        element.classList.remove('bg-light');
        element.classList.add('bg-dark');
    });
}


 
