$(document).ready(function(){
  $("form#stress_survey").submit(function(event){
    event.preventDefault();
    $("#stress-responses").show();
    $("input:checkbox[name=stress-test]:checked").each(function(){
      var stressTestMode = $(this).val();
      $('#stress-responses').append(stressTestMode + "<br>");
    });

     $("#health-responses").show();
     $("input:checkbox[name=health-test]:checked").each(function(){
       var healthTestMode = $(this).val();
       $('#health-responses').append(healthTestMode + "<br>");
    });
    $('#stress_survey').hide();
  });
});
