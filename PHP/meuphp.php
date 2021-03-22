<!DOCTYPE html>
<head>
<meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Meu PHP</title>
    
   <!--BS-->
   
    
   <link rel="stylesheet" href="bootstrap.min.css">
   <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">
 
   <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css">
   <!--BS-->
   
   <!--SLICK-->
 <link rel="stylesheet" href="slick-theme.css">
 <link rel="stylesheet" href="slick.css"/>
    
   <!--SLICK-->

 
<!--FA-->
 <link rel="stylesheet" href="all.css" />
 <link rel="stylesheet" href="all.min.css" />
 
 <script src="https://kit.fontawesome.com/dbce8a62cb.js" crossorigin="anonymous"></script>
<!--FA-->

 
 <!--Fonts-->
 <link rel="stylesheet" type="text/css"
 href="../inicio/Fontes/HomeSchool/style.css"/>

 <link rel="stylesheet" type="text/css"
 href="../inicio/Fontes/gitaluevo-cufonfonts-webfont/style.css">

 
 <link rel="stylesheet" type="text/css"
 href="../inicio/Fontes/miso-cufonfonts-webfont/style.css">
 <!--Fonts-->
<style>

</style>

</head>
<body>


Nome
<input name="nome" >
<button type='submit'>Enviar</button>


</form>
<?php 

$nome = $_POST['nome'];

echo "Olá,".$nome;

?>



    <script src="jquery-3.5.1.min.js"></script>
    <script src="jquery-3.5.1.js"></script>
    <script src="bootstrap.min.js" crossorigin="anonymous"></script>
    
    <script src="slick.min.js"></script>
    <script src="slick.js"></script>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/vue/2.1.10/vue.js"></script>

    
</body>
</html>