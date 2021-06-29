jQuery(document).ready(function(){
  
   function runOperation(){
      $(".byte1 .circle").each(function(){
          $(".byte2").removeClass("inactive");
          var bitIndex = $(this).attr("bit");
          var bitValue1 = $(this).attr("bit-value");

          var bitValue2 = $(".byte2 .circle:nth-child(" + (Number(bitIndex)+1).toString() + ")").attr("bit-value");

          //AND Operator
          if($(".operations .operation.and").hasClass("selected")){
            if(bitValue1 == "true" && bitValue2 == "true" ){
              $(".result .circle:nth-child(" + (Number(bitIndex)+1).toString() + ")").css({"background-color":"white"});
            }else{
              $(".result .circle:nth-child(" + (Number(bitIndex)+1).toString() + ")").css({"background-color":"transparent"});
            }
          }
          //OR
          else if($(".operations .operation.or").hasClass("selected")){
            
            if(bitValue1 == "true" || bitValue2 == "true" ){
              $(".result .circle:nth-child(" + (Number(bitIndex)+1).toString() + ")").css({"background-color":"white"});
            }else{
              $(".result .circle:nth-child(" + (Number(bitIndex)+1).toString() + ")").css({"background-color":"transparent"});
            }
          }
          //XOR
          else if($(".operations .operation.xor").hasClass("selected")){
            if(bitValue1 != bitValue2 ){
              $(".result .circle:nth-child(" + (Number(bitIndex)+1).toString() + ")").css({"background-color":"white"});
            }else{
              $(".result .circle:nth-child(" + (Number(bitIndex)+1).toString() + ")").css({"background-color":"transparent"});
            }
          }
          //NOT
          else if($(".operations .operation.not").hasClass("selected")){
            $(".byte2").addClass("inactive");
            if(bitValue1 != "true"){
              $(".result .circle:nth-child(" + (Number(bitIndex)+1).toString() + ")").css({"background-color":"white"});
            }else{
              $(".result .circle:nth-child(" + (Number(bitIndex)+1).toString() + ")").css({"background-color":"transparent"});
            }
          }
          
          //Update explaination
          $(".explanation").html($(".operations .operation.selected").attr("explain-text"));
        });
    }

  $(".circle").on("click",function(){
    if($(this).hasClass("active")){
      $(this).removeClass("active");
      $(this).attr({"bit-value":"false"});
    }else{
      $(this).addClass("active");
      $(this).attr({"bit-value":"true"})
    }
    runOperation();
  });
  
  $(".operation").on("click",function(){
    $(".operation").each(function(){
      $(this).removeClass("selected");
    });
    $(this).addClass("selected");
    runOperation();
  });
  runOperation();
});