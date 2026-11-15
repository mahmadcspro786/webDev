<?php
$conn=mysqli_connect("localhost","root","","Mart International");
if(!$conn){
    die("Connsssection failed:".
    mysqli_connect_error());
}
?>