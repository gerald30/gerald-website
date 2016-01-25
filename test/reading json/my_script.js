$("button").click(function(){
$.getJSON("json_data.json", function(anyname){
$.each(anyname, function(key, value){
	$("ul").append("<li>"+value.name+"<li>")
});
 });
});