const Hapi = require('@hapi/hapi');
// const routes = require('./routes');
 
const init = async () => {
    const server = Hapi.server({
        port: 5000,
        host: 'localhost',
    });
    // server.route(routes);
    await server.start();
    console.log(`Server berjalan pada ${server.info.uri}`);
};
 
init();


//SEBELUMNYA
// const http = require('http');
// const requestListener = (request, response) => {
//     response.setHeader('Content-Type', 'text/html');
 
//     response.statusCode = 200;
//     response.end('<h1>Halo HTTP Server!</h1>');
// };
 
 
// const server = http.createServer(requestListener);
 
// const port = 5000;
// const host = 'localhost';
 
// server.listen(port, host, () => {
//     console.log(`Server berjalan pada http://${host}:${port}`);
// });


