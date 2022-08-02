// Write your JavaScript code here!


//1. Set up window load handler
window.addEventListener("load", function () {

   //Generates random planet 
   const randomButton = document.getElementById("randomButton");

   //JSON fetch
   fetch("https://handlers.education.launchcode.org/static/planets.json").then(function (response) {
      response.json().then(function (target) {
         const missionTarget = document.getElementById("missionTarget");
         randomButton.addEventListener("click", () => {
            let random = [Math.floor(Math.random() * target.length)];

            missionTarget.innerHTML = `
         <h2>Mission Destination</h2>
         <ul>
             <li>Name: ${target[random].name}</li>
             <li>Diameter: ${target[random].diameter}</li>
             <li>Star: ${target[random].star}</li>
             <li>Distance from Earth: ${target[random].distance}</li>
             <li>Number of Moons: ${target[random].moons}</li>
         </ul>
             <img src="${target[random].image}"></img>`

         })
      })
   })

   //2. Set up submit handler.
   const button = document.getElementById("submitForm");

   //3. event.preventDefault()
   button.addEventListener("click", function (event) {
      event.preventDefault();
   });
   //4. All inputs have data.

   button.addEventListener("click", function () {
      const pilotName = document.getElementById("pilotName");
      const copilotName = document.getElementById("copilotName");
      const fuelLevel = document.getElementById("fuelLevel");
      const cargoMass = document.getElementById("cargoMass");
      const pilotStatus = document.getElementById("pilotStatus");
      const copilotStatus = document.getElementById("copilotStatus");
      const fuelStatus = document.getElementById("fuelStatus");
      const cargoStatus = document.getElementById("cargoStatus");
      const launchStatus = document.getElementById("launchStatus");
      const itemStatus = document.getElementById("itemStatus");
      let fuelReady = false
      let cargoReady = false

      if (pilotName.value === "" || copilotName.value === "" || fuelLevel.value === "" || cargoMass.value === "") {
         alert('You must enter every field.');
         itemStatus.style.visibility = "hidden";
         launchStatus.innerHTML = 'Awaiting Information Before Launch';
         launchStatus.style.color = 'black';
         return
      }
      if (!isNaN(pilotName.value) || pilotName.value === "") {
         alert('Please enter a valid pilot name using letters only.');
         return
      } else if (!isNaN(copilotName.value)) {
         alert('Please enter a valid co-pilot name using letters only.');
         return
      } else if (isNaN(fuelLevel.value)) {
         alert('Please enter fuel level using numbers only.');
         itemStatus.style.visibility = "hidden";
         launchStatus.innerHTML = 'Shuttle not ready for launch.';
         launchStatus.style.color = "red";
         return
      } else if (isNaN(cargoMass.value)) {
         alert('Please enter cargo mass using numbers only.');
         itemStatus.style.visibility = "hidden";
         launchStatus.innerHTML = 'Shuttle not ready for launch.';
         launchStatus.style.color = "red";
         return
      }

      pilotStatus.innerHTML = `Our pilot, ${pilotName.value}, is ready.`;
      copilotStatus.innerHTML = `Our co-pilot, ${copilotName.value}, is ready.`;
      launchStatus.style.color = "red";
      launchStatus.innerHTML = 'Shuttle not ready for launch.';

      //if statements validating levels and input typeof

      if (Number(fuelLevel.value) < 10000) {
         itemStatus.style.visibility = "visible";
         fuelStatus.innerHTML = `Not enough fuel.`;
         launchStatus.style.color = "red";
         launchStatus.innerHTML = `Shuttle not ready for launch`;
      } else {
         fuelStatus.innerHTML = "Fuel levels optimal."
         fuelReady = true
      }


      if (Number(cargoMass.value) > 10000) {
         itemStatus.style.visibility = "visible";
         cargoStatus.innerHTML = `Payload too heavy.`;
         launchStatus.style.color = "red";
         launchStatus.innerHTML = `Shuttle not ready for launch`;
      } else {
         cargoStatus.innerHTML = "Payload within weight range."
         cargoReady = true
      }


      if (pilotName.value === "" || copilotName.value === "" || Number(pilotName.value) === 'number' || Number(copilotName.value) === 'number') {
         launchStatus.style.color = "red";
         launchStatus.innerHTML = `Shuttle not ready for launch`;
         itemStatus.style.visibility = "hidden";
         return
      } if (fuelReady && cargoReady) {
         launchStatus.style.color = "green";
         launchStatus.innerHTML = `Shuttle is ready for launch`;
         itemStatus.style.visibility = "visible";
      };
   });
});

