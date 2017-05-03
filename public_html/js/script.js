
      
    /*JavaScript & JQuery*/
    
    $(document).ready(function()
    {
      //1st bloc #social
      $("div#social a i span").mouseover(function()
      {
          $(this).css("color","#79d5ca");
      });
      
       $("div#social a i span").mouseout(function()
      {
          $(this).css("color","#b6b6b6");
      });
      
       $("div#social #network a i").hover(function()
      {
          $(this).css("color","#79d5ca");
          
      },
      function()
      {
          $(this).css("color","#b6b6b6");
      }
              );
      
      /*NAVIGATION*/
    
    
    
      
      $("nav ul li a").hover(
      function()
      {
          $(this).css("color","#79d5ca");
          
          
          
      },
      function()
      {
          $(this).css("color","#2a2a30");
         
      }); 
      
      /*different list 
       * 
       */
      
        $("nav ul li#home-drop ul").css("top","+=4px");
       $("nav ul li#home-drop").hover(function()
       {
            $("i#drop1").css("color","#79d5ca");
              $("i#drop1").css("transition","transform 0.5s");
           $("i#drop1").css("transform","rotate(-180deg)");
           
           
            $("nav ul li#home-drop ul").css("display","none");
            
            $("nav ul li#home-drop ul").fadeIn();
             $("nav ul li#home-drop ul").css("transition","top 0.5s");
             $("nav ul li#home-drop ul").css("top","10px");
              $("nav ul li#home-drop ul").css("display","block");
            
       },
       function()
       {
           
            $("nav ul li#home-drop ul").css("top","+=70px");
            $("nav ul li#home-drop ul").fadeOut();
             $("nav ul li#home-drop ul").css("display","none");
            $("i#drop1").css("color","#2a2a30");
             $("i#drop1").css("transform","rotate(0deg)");
       });
       
       
        $("nav ul li#service-drop ul").css("top","+=4px");
        $("nav ul li#service-drop").hover(function()
       {
            $("i#drop2").css("color","#79d5ca");
              $("i#drop2").css("transition","transform 0.5s");
           $("i#drop2").css("transform","rotate(-180deg)");
           
            $("nav ul li#service-drop ul").css("display","none");
            
            $("nav ul li#service-drop ul").fadeIn();
             $("nav ul li#service-drop ul").css("transition","top 0.5s");
             $("nav ul li#service-drop ul").css("top","10px");
               $("nav ul li#service-drop ul").css("display","block");
            
       },
       function()
       {
            $("nav ul li#service-drop ul").css("top","+=70px");
            $("nav ul li#service-drop ul").fadeOut();
              $("nav ul li#service-drop ul").css("display","none");
            $("i#drop2").css("color","#2a2a30");
             $("i#drop2").css("transform","rotate(0deg)");
       });
        $("nav ul li#event-drop ul").css("top","+=4px");
        $("nav ul li#event-drop").hover(function()
       {
            $("i#drop3").css("color","#79d5ca");
              $("i#drop3").css("transition","transform 0.5s");
           $("i#drop3").css("transform","rotate(-180deg)");
           
            $("nav ul li#event-drop ul").css("display","none");
            
            $("nav ul li#event-drop ul").fadeIn();
             $("nav ul li#event-drop ul").css("transition","top 0.5s");
             $("nav ul li#event-drop ul").css("top","10px");
              $("nav ul li#event-drop ul").css("display","block");
            
       },
       function()
       {
            $("nav ul li#event-drop ul").css("top","+=70px");
            $("nav ul li#event-drop ul").fadeOut();
             $("nav ul li#event-drop ul").css("display","none");
            $("i#drop3").css("color","#2a2a30");
             $("i#drop3").css("transform","rotate(0deg)");
       });
       
       
       $("nav ul li#news-drop ul").css("top","+=4px");
        $("nav ul li#news-drop").hover(function()
       {
            $("i#drop4").css("color","#79d5ca");
              $("i#drop4").css("transition","transform 0.5s");
           $("i#drop4").css("transform","rotate(-180deg)");
           
            $("nav ul li#news-drop ul").css("display","none");
            $("nav ul li#news-drop ul").fadeIn();
             $("nav ul li#news-drop ul").css("transition","top 0.5s");
             $("nav ul li#news-drop ul").css("top","10px");
              $("nav ul li#news-drop ul").css("display","block");
       },
       function()
       {
            $("nav ul li#news-drop ul").css("top","+=70px");
            $("nav ul li#news-drop ul").fadeOut();
             $("nav ul li#news-drop ul").css("display","none");
            $("i#drop4").css("color","#2a2a30");
             $("i#drop4").css("transform","rotate(0deg)");
       });
       $("nav ul li#pages-drop ul").css("top","+=4px");
        $("nav ul li#pages-drop").hover(function()
       {
            $("i#drop5").css("color","#79d5ca");
              $("i#drop5").css("transition","transform 0.5s");
           $("i#drop5").css("transform","rotate(-180deg)");
           
            $("nav ul li#pages-drop ul").css("display","none");
            $("nav ul li#pages-drop ul").fadeIn();
             $("nav ul li#pages-drop ul").css("transition","top 0.5s");
             $("nav ul li#pages-drop ul").css("top","10px");
              $("nav ul li#pages-drop ul").css("display","block");
       },
       function()
       {
            $("nav ul li#pages-drop ul").css("top","+=70px");
            $("nav ul li#pages-drop ul").fadeOut();
             $("nav ul li#pages-drop ul").css("display","none");
            $("i#drop5").css("color","#2a2a30");
             $("i#drop5").css("transform","rotate(0deg)");
       });
    
           
      
     
       $("#menu i.fa-search").click(function()
       {
           $("#header div#input").css("display","block");
       });  
       
       $("#menu i.fa-search").dblclick(function()
       {
           $("#header div#input").css("display","none");
           
       });
      
    
      
      /*
       * Slides show
       */
          var dot1 = $(" div#dot i#dot1");
          var dot2 = $(" div#dot i#dot2");
           var dot3 = $(" div#dot i#dot3");
      
      $(" div#dot i").click(function()
      {
        
        
           
           
           if($(this).attr("id") === dot1.attr("id"))
           {
               dot1.addClass("true");
                dot2.removeClass("true");
                dot3.removeClass("true");
           }
           else if($(this).attr("id") === dot2.attr("id"))
           {
               dot2.addClass("true");
                dot1.removeClass("true");
                dot3.removeClass("true");
           }
           else
           {
               dot3.addClass("true");
                dot1.removeClass("true");
                dot2.removeClass("true");
           }
           
            
      });
      
      var bg =  $("div#wrapper header#header section#header-content");
      dot2.click(function()
      {
         bg.css("transition","background-position 2.5s");
         bg.css("background-position","-1700px 0,0 0,0 0");
        
             bg.css("opacity","0.8"); 
         
        
         
         setTimeout(function()
         {
             bg.css("transition","opacity 1.5s");
             bg.css("opacity","1"); 
         },2000);
         
      });
      
       dot3.click(function()
      {
        
          bg.css("transition","background-position 2.5s");
         bg.css("background-position","-1700px 0,-1700px 0,0 0");
         
                   bg.css("opacity","0.8"); 
         
        
         
         setTimeout(function()
         {
             bg.css("transition","opacity 1.5s");
             bg.css("opacity","1"); 
         },2000);

         
      });
        dot1.click(function()
      {
         bg.css("transition","background-position 2.5s");
         bg.css("background-position","0px 0,0px 0,0 0");
         
           bg.css("opacity","0.8"); 
         
        
         
         setTimeout(function()
         {
             bg.css("transition","opacity 1.5s");
             bg.css("opacity","1"); 
         },2000);
         
      });
      
      
      /*
       * Aside box
       */
      
      $(" aside div").hover(function()
      {
          $(this).css("background-color","#5e3a9f");
          $(this).css("cursor","pointer");
      },
      function()
      {
          $(this).css("background-color"," #764ebe");
      });
      
      
      /*
       * liens
       */
      $("#few-learn").hover(function()
      {
          $(this).css("background-color","#5e3a9f");
      },
       function()
      {
          $(this).css("background-color"," #764ebe");
      }
      );
      
       $("#event-learn1, #event-learn2 ").hover(function()
      {
          $(this).css("background-color","#764ebe");
          $(this).css("color","white");
      },
       function()
      {
         
          $(this).css("background-color","white");
          $(this).css("color","#764ebe");
      }
      );
      
       $("#event-view").hover(function()
      {
          $(this).css("background-color","#67b5ac");
          $(this).css("color","white");
        
      },
       function()
      {
         
          $(this).css("background-color"," #79d5ca");
          
      }
      );
      
        $("#news-view").hover(function()
      {
         $(this).css("background-color","#5e3a9f");
          $(this).css("color","white");
        
      },
       function()
      {
         
          $(this).css("background-color","#764ebe");
          
      }
      );
      
      $("footer ul li a").hover(function()
      {
         $(this).css("text-decoration","underline");
          
        
      },
       function()
      {
         
           $(this).css("text-decoration","none");
          
      }
      );
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
    });
    
    
    
    
    
    
    
   


















    
    
    
    
    
    
    
    
    
    
    
    
    
    