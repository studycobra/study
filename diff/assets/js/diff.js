var json = {
    sql: "SELECT * form XXXXXXX",
    headers: [
        "COL1", "COL2", "COL3", "COL4", "COL5", "COL6", "COL7", "COL8", "COL9", "COL10",
        "COL11", "COL12", "COL13", "COL14", "COL15", "COL16", "COL17", "COL18", "COL19", "COL20"
    ],
    records: {
        left: [],
        right: []
    },
};

for (var i = 1; i<=100; i++) {
    var rec = {};
    json.headers.forEach(function(k){
        rec[k] = {};
        rec[k].value = k + "_VALUE_" + i;
        var r = Math.random();
        if (r < 0.1) rec[k].stat = 'only';
        else if (r < 0.2) rec[k].stat = 'diff';
        else rec[k].stat = 'same';
        rec[k].stat = (i%10 == 0) ? 'same' : rec[k].stat;
    });
    json.records.left.push(rec);
    json.records.right.push(rec);
}







$(function(){

});



make('example1');
make('example2');

//console.log(json.records.left);

function make(id) {
    var example = document.getElementById(id);
    var hot1 = new Handsontable(example,{
        data: json.records.left,
        columns: json.headers.map(function(k){return {data: k + '.value'}}),
        height: 320,
        colWidths: 100,
        rowHeights: 23,
        rowHeaders: true,
        colHeaders: json.headers,
        readOnly: true
    });
    hot1.updateSettings({
        cells: function (row, col, prop) {
            var cell = hot1.getCell(row, col);
            if (!cell) return;
            var stat = json.records.left[row][prop.split(".")[0]].stat;
            if (stat != "same") {
                cell.style.backgroundColor = stat == 'only' ? "#EEE" : "#f88";
            }
        }
    });

    var timer;
    $("#" + id + " .ht_master .wtHolder").scroll(function(a, b){
        console.log(id, a, b);
        var self = this;
        clearTimeout( timer );
        //timer = setTimeout(function() {
            var t = (id == "example1") ? "example2" : "example1";
            $("#" + t + " .ht_master .wtHolder").scrollTop($(self).scrollTop());
            $("#" + t + " .ht_master .wtHolder").scrollLeft($(self).scrollLeft());
        //}, 1000);
    });

    clearTimeout( timer );
    timer = setTimeout(function() {
        //処理内容
    }, 300 );

}