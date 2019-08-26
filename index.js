const http = require('http');
const fs = require('fs');
const port = 3000;
<<<<<<< Updated upstream

http.createServer((request, response)=> {
	
	console.log('Request received.');

	fs.readFile('view/README.md', (error, data) => {
	console.log('Read file - README.md');
>>>>>>> Stashed changes
	response.writeHead(200, {'Content-Type': 'text/html'});
	response.write(data);
	response.end();
<<<<<<< Updated upstream
}).listen(port);

console.log(`Server has stared - port:${port}`);
=======
});

>>>>>>> Stashed changes
