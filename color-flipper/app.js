const colors = ["yellow", "red", "blue", "rgba(133,122,200)", "#f15034"];

const btn= document.getElementById("btn");
const color= document.querySelector(".color");

/* btn.addEventListener('click', function(){(Traditional Function)
    btn.addEventListener('click', function() { ... }): This line of code attaches an event listener to an element with the variable name btn.
btn: Likely refers to a button element in your HTML.
addEventListener: A method for adding event listeners to elements.
'click': Specifies that you want to listen for the "click" event on the button.
function() { ... }: An anonymous function that defines what happens when the button is clicked.
})
*/

//using arrow function
btn.addEventListener('click', ()=>{
    //using style property. background color propery and change that value.
    // random number between 0-5 
    // const randomNumber = 3(hardCoded value)
    const randomNumber = getRandomColor();
    // return Math.random(); this will display number from 0 to 1 but will never be 1 (0.9531521693292528)
    console.log(randomNumber);

    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
})

function getRandomColor(){
    // return Math.random();

    // instead can multiple with the length of the colors
      //return Math.random() * colors.length; //produce length till (3.6152064193426057)

    //floor will round up to a nearest integer.
    return Math.floor(Math.random() * colors.length);  //rounds down to the nearest whole number. (0,1,2,3,4
}