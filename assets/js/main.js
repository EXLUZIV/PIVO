$(document).ready(function(){
        $("#form_error_message_frontend + div > div:last-child label").addClass("last");
    })
$("#cout").click(function (e){
  document.getElementById('out').value = "";
  var text = ("input[name*='name']");
  var a = $("input[name*='in']");
  var b = $("input[name*='after']");
  var c = $("input[name*='rate']");
  if(b>a){
    b = (b - a)* c;
      $('#out').append(b);
  }
  else{
    $('#out').append("Введите правильные числа");
  }
});   