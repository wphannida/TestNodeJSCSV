/**
 * Created by U0151000 on 3/17/2015.
 */
var csv = require('ya-csv');

//load csv file
var loadCsv = function() {
    var reader = csv.createCsvFileReader('CSRPRAW.csv', {
        'separator': ',',
        'quote': '"',
        'escape': '"',
        'comment': ''   });
    var allEntries = new Array();

   // console.log('reader==> ',reader);
    //reader.setColumnNames([ 'firstName', 'lastName', 'username' ]);
    reader.columnsFromHeader =true;
    reader.addListener('data', function(data) {
        //this gets called on every row load
        allEntries.push(data);
        //writer.writeRecord([ data[0] ]);
        console.log('allEntries==> ',allEntries);

    });


};

var writer = new csv.CsvWriter(process.stdout);

var myUsers = loadCsv();