// set initial count
let count = 0;

// select values and buttons
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");
console.log(btns);

// arrow  function to handle click event for each button
btns.forEach((btn) => {
    btn.addEventListener("click", (e)=>{
        // console.log(e.target); check onClick of event target element, get the clicked element
        //console.log(e.target.classList);   check class list of clicked element (DOMTokenList(2) ['btn', 'reset', value: 'btn reset'])

       const styles = e.currentTarget.classList; //const styles classlist returns a collection of classes on an HTML element as a DOMTokenList object.    
       if(styles.contains('decrease')){  // check if decrease class is present in styles
          count--; //  decrement the count
       }else if(styles.contains("increase")){
          count++;   // increment the count
       }else{
          count = 0;   // stop execution if neither increase nor decrease are found
       }
       if(count < 0){
        value.style.color ="red";
       }else if(count > 0 ){
        value.style.color=" green"
       }else{
        value.style.color="black";
       }
       value.textContent = count;
    })
})