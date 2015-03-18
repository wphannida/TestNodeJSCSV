/**
 * Created by U0151000 on 3/17/2015.
 */
var csv = require('ya-csv');

//load csv file
var loadCsv = function() {
    var reader = csv.createCsvFileReader('CSRPRAW_Sample.csv', {
        'separator': ',',
        'quote': '"',
        'escape': '"',
        'comment': ''   });
    var allEntries = new Array();
    var fs = require('fs');
   // console.log('reader==> ',reader);
    //reader.setColumnNames([ 'firstName', 'lastName', 'username' ]);
    reader.columnsFromHeader =true;
    reader.addListener('data', function(data) {
        //this gets called on every row load
        allEntries.push(data);
        //writer.writeRecord([ data[0] ]);
        console.log('allEntries==> ',allEntries);


//        fs.writeFile("Tmp/test.txt",data, function(err) {
//            if(err) {
//                return console.log(err);
//            }
//
//            console.log("The file was saved!");
//        });

        fs.writeFile("Tmp/test.txt", JSON.stringify(allEntries), function(err) {

            if(err) {
                return console.log(err);
            }

            console.log("The file was saved!");

        });



//        var stream = fs.createWriteStream("Tmp/test.txt");
//        stream.once('open', function(fd) {
//            stream.write("My first row\n");
//            stream.write("My second row\n");
//            stream.end();
//        });




    });


};

var writer = new csv.CsvWriter(process.stdout);

var myUsers = loadCsv();