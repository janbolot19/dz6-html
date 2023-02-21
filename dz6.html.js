<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

</head>
<body>


<input class="int" min="-10" max="10" type="number"  id="int" value="0">


<style>
    .int {
        height: 80px;
        width: 200px;
        font-size: 60px;
        color: blue;
        text-align: center;
        
    }
</style>
<script>
var data=0;
document.getElementById('int').inputMode=data;
function minus(){
    data=data-1;
    
    document.getElementById('int').inputMode=data;
}
function plus() {
    data=data+1;
    document.getElementById('int').inputMode=data;
    
}


</script>
</body>
</html>

