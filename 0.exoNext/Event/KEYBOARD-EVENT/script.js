/* becode/javascript
 *
 * 
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */



(() => {

    document.addEventListener('keydown', (event) => {
        const nameKey = event.key;
    switch(nameKey){
        case "0" :
            document.getElementById("character").style.color = "red";
            break;
        case "1" :
            document.getElementById("character").style.color = "blue";
            break;
        case "2" :
            document.getElementById("character").style.color = "yellow";
            break;
        case "3" :
            document.getElementById("character").style.color = "lightblue";
            break;
        case "4" :
            document.getElementById("character").style.color = "green";
            break;
        case "5" :
            document.getElementById("character").style.color = "cyan";
            break;
        case "6" :
            document.getElementById("character").style.color = "purple";
            break;
        case "7" :
            document.getElementById("character").style.color = "orange";
            break;
        case "8" :
            document.getElementById("character").style.color = "grey";
            break;
        case "9" :
            document.getElementById("character").style.color = "brown";  
            break;   
        case "ArrowUp" :
            document.getElementById("up").setAttribute("class", "highlight");
            break;
        case "ArrowDown" :
            document.getElementById("down").setAttribute("class", "highlight");
            break;
        case "ArrowLeft" :
            document.getElementById("left").setAttribute("class", "highlight");
            break;
        case "ArrowRight" :
            document.getElementById("right").setAttribute("class", "highlight");
            break;
    }
    
    });

    document.addEventListener('keyup', (eventTwo) => {
        const nameKeyTwo = eventTwo.key;
        console.log(nameKeyTwo);
    switch(nameKeyTwo){
        case "ArrowUp" :
                document.getElementById("up").removeAttribute("class", "highlight");
                break;
            case "ArrowDown" :
                document.getElementById("down").removeAttribute("class", "highlight");
                break;
            case "ArrowLeft" :
                document.getElementById("left").removeAttribute("class", "highlight");
                break;
            case "ArrowRight" :
                document.getElementById("right").removeAttribute("class", "highlight");
                break;
    }


    });

     
})();