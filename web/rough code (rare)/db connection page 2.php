<?php
require("db_connect.php");
if(isset($_POST['signup'])){sss
                   
$username=$_POST['username'];
$email=$_POST['email'];
$password=$_POST['password'];

//insert query
$query="INSERT INTO users(username,email,password) VALUES('$username','$email','$password')";

if(mysqli_query($conn,$query)){
    echo"Signup Successful!";
}
else
    {
        echo "Error:".
        mysqli_error($conn);
    }
}
?>