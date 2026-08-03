<!DOCTYPE html>
<html>
<head>
    <title>Signup</title>

    <style>
        body {
            font-family: Arial, sans-serif;
            background: linear-gradient(to right, #74ebd5, #9face6);
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
        }

        .form-container {
            background: #fff;
            padding: 30px;
            border-radius: 10px;
            width: 300px;
            box-shadow: 0px 5px 15px rgba(0,0,0,0.2);
            text-align: center;
        }

        h2 {
            margin-bottom: 20px;
        }

        input {
            width: 100%;
            padding: 10px;
            margin: 10px 0;
            border: 1px solid #ccc;
            border-radius: 5px;
        }

        input:focus {
            border-color: #6c63ff;
            outline: none;
        }

        input[type="submit"] {
            background: #6c63ff;
            color: white;
            border: none;
            cursor: pointer;
            transition: 0.3s;
        }

        input[type="submit"]:hover {
            background: #574fd6;
        }
    </style>

</head>

<body>

<div class="form-container">
    <h2>Signup Form</h2>

    <form action="process.php" method="POST">
        <input type="text" name="username" placeholder="Enter Username" required>
        <input type="email" name="email" placeholder="Enter Email" required>
        <input type="password" name="password" placeholder="Enter Password" required>
        
        <input type="submit" name="signup" value="Sign Up">
    </form>
</div>

</body>
</html>