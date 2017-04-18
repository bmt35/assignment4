// The anonymous function below will fire on page load

// Some things to consider
// $.ajax(); to make your requests a little easier. Or the vanilla js way, it's up to you.
// $.on(); for event handling
// Remember, selecting elements in jQuery is like selecting them in CSS
// You'll probably have to manipulate some strings
// some jQuery functions to help display results
// $.show(), $.hide(), $.slideup(), $.slidedown(), $.fadein(), $.fadeout()
// Add content from requests with something like
// $.html(), $.text(), etc.
// keyup events could be helpful to get value of field as the user types


$(document).ready(function() {
	$('.flexsearch-input').on("input", function() {
		if($(".flexsearch-input").val().length!=0) //if there is some text in the search box
		{
			var info = $('.flexsearch-input').val();
			info=info.toLowerCase();
			$(".choices").html("");	
			getInfo(info);	
		} 
	});
	
});

function getInfo(info) {
	$.ajax({url:"http://www.mattbowytz.com/simple_api.json?data=all",type:"GET",dataType:"json"}).done(function(json){
		json.data.programming.forEach(function(returned_results){
			returned_results=returned_results.toLowerCase();
			if(returned_results.startsWith(info)){
				$(".choices").append("<p>"+returned_results+"</p");
			}
		});
	})

	$.ajax({url:"http://www.mattbowytz.com/simple_api.json?data=all",type:"GET",dataType:"json"}).done(function(json){
		json.data.interests.forEach(function(returned_results){
			returned_results=returned_results.toLowerCase();
			if(returned_results.startsWith(info)){
				$(".choices").append("<p>"+returned_results+"</p");
			}
		});
	})


	// body...
};