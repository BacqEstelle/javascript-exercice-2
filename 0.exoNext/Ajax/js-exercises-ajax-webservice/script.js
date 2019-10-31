/*async function returnCharacter(){ 
    try{
        let response = await fetch("https://thatsthespir.it/api"); 
        let valueGraphic = await response.json();
        console.log(valueGraphic);

        let title = document.getElementById("firstHeading");
        let addGraphic = document.createElement("p");
        addGraphic.setAttribute("class","graphique");
        title.appendChild(addGraphic);
        
            addGraphic.innerHTML = "~"+valueGraphic.value+"~";



    } catch(e){
        console.log(e);
    }
}
returnCharacter();
*/