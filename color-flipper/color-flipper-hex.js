// this represents 0-9 values and A=10, B=11 ... F=15 ex: #f15025
const hex =[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById("btn")
const color = document.querySelector(".color");


//arrow function
btn.addEventListener("click", function (){
    //to hold the hashtag in the beginning #f15025
    let hexColor = "#"; 
    
    for( let i = 0 ; i < 6; i++){
        //hard coded value as in taking the index from the hex 
        //hexColor += hex[11]  +=  you are generating string that will consist of  '#' + '0', then '0'+'1' etc... so six values from hex array and just adding = to will override each and every iteration.
        hexColor += hex[getRandomColorHexNumber()];
    }
    color.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
});

function getRandomColorHexNumber() {
    return Math.floor(Math.random() * hex.length);
}