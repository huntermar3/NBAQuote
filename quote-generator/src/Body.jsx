import React, { useState } from 'react';

//const[quote, setQuote] = useState("") ;



function Body() {

    let quotes = 
        [
        '“You can\'t be afraid to fail. It\'s the only way you succeed - you\'re not gonna succeed all the time, and I know that.” - LeBron James' ,
        '”My message to myself is always, If you don\'t believe in yourself, who will?” - Ja Morant',
        '"Life is not hard. Life is very simple" -Ben Wallace',
        '"In Memphis we don\'t talk. We ball. - Mike Conley',
        '"Dream big, anything\'s possible once you have that dream. You just have to work at it every single day" - Gordon Hayward',
        '"Fortnite\'s definitely huge in the NBA." - Josh Hart',
        '"Even if I\'m the worst player in the NBA, I\'m one of the best players in the world." - Spencer Dinwiddie',
        '"God don\'t like ugly." - Jermaine ONeal',
        '"I live a life that I never regret any decision." - Ricky Rubio',
        '"This life is like a swimming pool. You dive into the water, but you can\'t see how deep it is" - Dennis Rodman',
        '"I can distribute, I can lock up on defense." - Jrue Holiday',
       '"Chris Paul will never win a ring" - Rajon Rondo',
        '"An assist makes two people happy. A point makes one guy happy." - Nikola Jokic' ,
        '"They love to talk when they\'re up." - Luka Doncic ' ,
        '"AKRON THIS IS FOR YOU!" - LeBron James' ,
        '"TRASH ASS N***A!" - Kevin Garnett ' ,
        '"LeBron James Still Gets Criticism. Jesus Still Gets Criticized" - D\'Angelo Russell' ,
        '"Me freak in sheets " - Giannis Antekoumpo '
        ];


    function quoteButton() {
        let randomQuoteNumber = Math.floor(Math.random() * quotes.length) ;

        let output_string = document.getElementById("output_string") ;

        output_string.innerHTML = quotes[randomQuoteNumber];

      // setQuote(quotes[randomQuoteNumber]);


    }

    function reset() {
        let output_string = document.getElementById("output_string") ;
        output_string.innerHTML = "";
        
        //setQuote("") ;

    }


    return(
        <div>
            <div className = "buttons-container">
            <button onClick = {quoteButton} className =  "quote-button">
                Generate Quote!</button>
            <button onClick = {reset} className = "reset-button">
                Reset Quote</button> 
                </div>
                <br></br>

            <div id = "output_string" >""</div>
            
        </div>
    ) ;
}

export default Body
