const http = require('http');
const fs = require('fs');
const port = 3000;
const md = require('markdown-it')();

// markdown을 html 형식으로 변환하는 함수
function toHtml(markdown) {
	return `
	<DOCTYPE html>
	<html lang="ko">
	<head>
	<meta charset="utf-8">
	</head>
	<body>
	${md.render(markdown)}
	</body>
	</html>`;
}
		  
http.createServer((request, response)=> {
	
	console.log('Request received.');

	fs.readFile('view/README.md', 'utf8',(error, data) => {
	console.log('Read file - README.md');
>>>>>>> Stashed changes
	response.writeHead(200, {'Content-Type': 'text/html'});
	response.write(toHtml(data));
	response.end();
	});
}).listen(port);

console.log(`Server has stared - port:${port}`);

});


