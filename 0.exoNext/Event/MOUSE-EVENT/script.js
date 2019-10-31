/* becode/javascript
 *
 * 
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */



(() => {

    //Div Une
    document.getElementsByClassName("hoverMe")[0].onmouseover = function () {
        document.getElementsByClassName("hoverMe")[0].style.opacity = "0";
    }


    //Div Deux
    document.getElementsByClassName("hoverMe")[1].onmouseover = function () {
        document.getElementsByClassName("hoverMe")[1].style.opacity = "0";
    }


    //Div Trois
    document.getElementsByClassName("hoverMe")[2].onmouseover = function () {
        document.getElementsByClassName("hoverMe")[2].style.opacity = "0"; // efface l'element class
    }


    document.getElementById("run").addEventListener("click", () => {
        
            document.getElementsByClassName("hoverMe")[0].style.opacity = "1";
            document.getElementsByClassName("hoverMe")[0].style.transition = "opacity 500ms";
            document.getElementsByClassName("hoverMe")[1].style.opacity = "1";
            document.getElementsByClassName("hoverMe")[1].style.transition = "opacity 1000ms";
            document.getElementsByClassName("hoverMe")[2].style.opacity = "1";
            document.getElementsByClassName("hoverMe")[2].style.transition = "opacity 1500ms";

    });

    document.onmousemove = function(){
    let x = event.clientX;
    let y = event.clientY;
    document.getElementById("axe-x").innerHTML = "axe x : " + x;
    document.getElementById("axe-y").innerHTML = "axe y : " + y;
    }

})();