<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="stylesheet" href="./css/skills.css" />
    <title>JEYEFENDI</title>
    <link rel="icon" type="image/x-icon" href="./public/favicon.ico">
  </head>
  <body>
  <?php
    include('nav.php');
    ?>
    
    <main>
      
      <div class="toggle" id="toggle" onclick="menu-expand()">
        <img src="./src/skills-menu.png" alt="Skills menu" width="50%" id="knuckle">
      </div>

      
      <div class="menu" id="menu">
        <a href="#"><img src="./src/skills_item1.png" alt="js es" width="50%"></a>
        <a href="#"><img src="./src/skills_item2.png" alt="react redux" width="40%"></a>
        <a href="#"><img src="./src/skills_item3.png" alt="html css" width="50%"></a>
        <a href="#"><img src="./src/skills_item4.png" alt="wp git" width="20%"></a>
      </div>
        
    </main>

  <script src="./wheel.js"></script>
  </body>
</html>
