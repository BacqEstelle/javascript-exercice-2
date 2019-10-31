async function returnCharacter(){ 
    try{
        let response = await fetch("https://thatsthespir.it/api"); // On attend de récupérer le fetch du localhost qui renvoie une 'response'
        let character = await response.json(); // on transforme la response du fetch en json
        console.log(character); // on affiche les valeurs}

        let quote = document.getElementById("quote");
        let text = document.createElement("blockquote");
        quote.appendChild(text);
        let image = document.createElement("img");
        image.setAttribute("class","photo");
        quote.appendChild(image);
        let autor = document.createElement("a");
        autor.setAttribute("href", character.permalink);
        quote.appendChild(autor);
        let comment = document.createElement("p");
        comment.setAttribute("class", "ui-title");
        quote.appendChild(comment);
        
            text.innerHTML = character.quote;
            image.innerHTML = image.setAttribute("src", character.photo ); 
            autor.innerHTML = "<br>" +character.author + "</br><small>" +character.total_quotes +" quotes</small>";
            comment.innerHTML = "#" +character.id + "";


    } catch(e){
        console.log(e);
    }
}
returnCharacter();
