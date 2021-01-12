<html>
<body>

Welcome <?php echo 'Hello ' .htmlspecialchars($_POST["name"]). '!'; ?><br>
Your email address is: <?php echo $_POST["email"]; ?>

</body>
</html>