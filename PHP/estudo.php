<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Padrão</title>
    
<!--#region BS-->
   
    
   <link rel="stylesheet" href="bootstrap.min.css">
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous"> 
   <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css">
<!--#endregion BS-->
   

<!--#region SLICK-->
 
<link rel="stylesheet" type="text/css" href="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css"/>

<link rel="stylesheet" href="slick.css"/>
    
<!--#endregion SLICK-->

 
<!--#region FA-->
 
<script src="https://kit.fontawesome.com/dbce8a62cb.js" crossorigin="anonymous"></script>

<!--#endregion FA-->

 </head>
 <body >



  
<!--#region Scripts -->

<!--#region JQuery-->
  <script src="jquery-3.6.0.js"></script>

  <script src="https://code.jquery.com/jquery-3.6.0.min.js"
    integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4="
    crossorigin="anonymous"></script>

<!--#endregion JQuery-->  

<!--#region BS-->
  <script src="bootstrap.min.js" crossorigin="anonymous"></script>
  
<!--#endregion BS-->  

<!--#region Slick-->

  <script src="slick.min.js"></script>
  <script src="slick.js"></script>
  <script type="text/javascript" src="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js">
  </script>

<!--#endregion Slick-->

<!--#region Vue-->

  <script src="https://cdn.jsdelivr.net/npm/vue@2.6.12"></script>

<!--#endregion Vue-->  


<!--#region Mine JS-->
  <script>
  $(document).ready(function(){
    $('.carro').slick({
      infinite:true,
      arrows:true,
      dots:true,
      autoplay:true,
    })
  })
  </script>

<!--#endregion Mine JS-->

<!--#endregion Scripts-->
  </body>
</html>