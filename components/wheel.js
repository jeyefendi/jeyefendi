  var i=0;
      function expand(){
        if(i==0){
          document.getElementById("menu").style.transform="scale(2)";
          document.getElementById("knuckle").style.transform="rotate(-90deg)";
          i=1;
        }
        else{
          document.getElementById("menu").style.transform="scale(0)";
          document.getElementById("knuckle").style.transform="rotate(0deg)";
          i=0;          
        }
      }