$("#cout").click(function	(e){
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