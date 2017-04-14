<!DOCTYPE html>
<html lang="en">
    <head>
    <meta charset="UTF-8">
    <style>
.first{
    margin-top: 50px;
}
.intp{
    width: 300px;
    height: 30px;
    border: none;
    font-size: 25px;
    border-bottom: 1px solid darkcyan;
}
</style>
</head>
<body>
<form action="" name="my" class="first">
    <input class="intp" type="text" data-placeholder="Enter your text" value="Enter your text">
    </form>
    <script>
var inp=document.forms[1];
console.dir(inp);
script>
var input = document.getElementById('inp');
input.onblur = function (e) {
    if (!isNaN(this.value)) {
        this.classList.add('error');
        this.nextElementSibling.innerHTML = 'Strannoe u vas imya'
    }
};
input.onfocus = function (e) {
        if (this.classList.contains('error')) {
            this.nextElementSibling.innerHTML = '';
        }
    }
</script>
</body>
</html>