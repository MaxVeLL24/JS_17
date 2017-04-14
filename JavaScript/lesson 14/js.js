var node = null;
table.onclick = function (e) {
    e = e || event;
    // console.log(e.target.parentNode);
    // if (e.target.parentNode.nodeName == 'TD') {
    //     if (node)
    //         node.parentNode.style.backgroundColor = '';
    //     node = e.target.parentNode;
    //     e.target.parentNode.style.backgroundColor = 'red';
    td = e.target;
    while (td != table) {
        if (td.tagName == 'TD') {
            if (node)
                node.style.backgroundColor = '';
            node = td;
            td.style.backgroundColor = 'red';
        }
        td = td.parentNode;
    }
    // if (e.target.nodeName == 'TD') {
    //     if (node)
    //         node.style.backgroundColor = '';
    //     node = e.target;
    //     e.target.style.backgroundColor = 'red';
    //
    // }

};
