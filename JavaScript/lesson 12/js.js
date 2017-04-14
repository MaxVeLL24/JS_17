// var x = document.getElementsByTagName('li');
//
// for (i = 0; i < x.length; i++) {
//     var title = x[i].firstChild.data.trim();
//
//     var subdata = x[i].getElementsByTagName('li').length;
//     console.log(title + ":" + subdata);
// }


function addsuccessMsg(msg) {
    var div = document.createElement('div');
    div.className = "alert";
    div.innerHTML = "<strong>"+ msg +"</strong>";
    var msgarea=document.getElementById('msg');
    msgarea.appendChild(div);
    var div2=div.cloneNode(false);
    document.body.insertBefore(div2,document.body.firstChild)
}