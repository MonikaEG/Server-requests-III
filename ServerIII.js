//At starte en server med Node.js og vise HTML5 med den
//Med inspiration fra youtube.com/watch?v=BBOUfdUZIVo
'use strict';

const http = require('http') //Variabel for at få adgang til http i Node library.
const port = 3000 //Variabel til hvilken port, serveren skal stå i.
var fs = require('fs'); //File system module. Styrer asynkrone og synkrone file operations(?)

 //Herunder kalder jeg createServer funktionen, som har request og response parametre.
//Det er i denne funktion, alt req/res aktiviteten på serveren kommer til at foregå.
const server = http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'}); //Behandler HTML'en som en HTML-fil og viser den til brugeren.
    var readStream = fs.createReadStream(__dirname + '/aboutIII.html', 'utf8');
    readStream.pipe(res);
    res.end() //For at fortælle serveren, at den har givet det response, jeg har sat den til.
})

//Sætter serveren til at lytte til vores port 3000 + kigger efter, om der er en fejl.
server.listen(port, function(error) {
    if (error) {
        console.log('Something went wrong', error)
    } else {
        console.log('Server is listening on port ' + port)
    }
})

//i Visual Studio Code: Højreklik på ServerIII.js og åben i "integrated terminal" og skriv derefter "node ServerIII.js" for at tjekke, om det virker.
//Skriv derefter localhost:3000 i browseren