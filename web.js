/**
 * Created by U0151000 on 3/17/2015.
 */
var http = require("http");
function process_request(req, res) {
    var body = 'Thanks for calling!\n';
    var content_length = body.length ;
    res.writeHead(200, {
        'Content-Length': content_length,
        'Content-Type': 'text/plain'
    });
    res.end(body);
}
var s = http.createServer(process_request);
s.listen(8080);