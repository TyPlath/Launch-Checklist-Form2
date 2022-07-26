// Write your JavaScript code here!


//1. Set up window load handler
window.addEventListener("load", function(){

//2. Set up submit handler.
const button = document.getElementById("formSubmit");

//3. event.preventDefault()
button.addEventListener("click"), function(event) {
    event.preventDefault();
}
//4. All inputs have data.

button.addEventListener("click", function() {
         const pilotName = document.getElementById("pilotName");
         const copilotName = document.getElementById("copilotName");
         const fuelLevel = document.getElementById("fuelLevel");
         const cargoMass = document.getElementById("cargoMass");

         if (pilotName.value === "" || copilotName.value === "" || fuelLevel.value === "" || cargoMass.value === ""){
            alert("You must enter every field.");
         }

      });
});

/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ul>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ul>
<img src="${}">
*/