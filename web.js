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

    var fs = require('fs');
    fs.writeFile("Tmp/test.txt", "Hey there!", function(err) {
        if(err) {
            return console.log(err);
        }

        console.log("The file was saved!");
    });

}
var s = http.createServer(process_request);
s.listen(8080);


