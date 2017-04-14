// console.log(document.body.childNodes);
//
// function empty(id) {
//     var el = document.getElementById(id);
//     if (!el.childNodes.length) {
//         return true
//     } else {
//         return false
//     }
// }
// console.log(empty("vas"));

function drawtable() {
    var tabledimensio = prompt('Paste table dimension');
    var drawingarea = document.getElementById('mytable');
    var output = "<table border='1px solid black'>";
    for (var i = 1; i <= tabledimensio; i++) {
        output += "<tr>";
        for (var j = 1; j <= tabledimensio; j++) {
            output += "<td>";
            output += i + ":" + j;
            output += "</td>"
        }
        output += "</tr>";
    }
    output += "</table>";
    drawingarea.innerHTML = output;
}
function styletable() {
    var drawingarea = document.getElementById('mytable');
    var mytable = drawingarea.children[0];
    for (var i = 0; i < mytable.rows.length; i++) {
        var row = mytable.rows[i];
        row. cells[i].style.backgroundColor='red';
    }
}