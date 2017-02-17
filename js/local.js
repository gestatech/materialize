$(document).ready(function(){
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    $('.modal').modal();
  });
  
   $(document).ready(function(){
    $('.collapsible').collapsible();
  });

   // Initialize collapse button
   $(".button-collapse").sideNav();
   // Initialize collapsible (uncomment the line below if you use the dropdown variation)
   //$('.collapsible').collapsible();        
   
   var $toastContent;
   
   
   function updateButtons(){
	   if (document.getElementById('play-button-text').innerHTML == "play_circle_outline"){
		   document.getElementById('play-button-text').innerHTML = "pause_circle_outline";
		   $toastContent = $('<span>Play</span>');
	   }
	   else{
		   document.getElementById('play-button-text').innerHTML = "play_circle_outline";
		   $toastContent = $('<span>Pause</span>');
	   }
	   Materialize.toast($toastContent, 1000);		  
   }