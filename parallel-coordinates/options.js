$(function() {
  if (localStorage['hidden'] === "true") {
	$('.intro').hide();
	$('#show_instructions').show();
  }
  
  $('#hide_instructions').click(function() {
	if (localStorage)
	  localStorage['hidden'] = "true";
    $('.intro').hide();
	$('#show_instructions').show();
	return false;
  });
    
  $('#show_instructions').click(function() {
	  if (localStorage)
	    localStorage['hidden'] = "false";
    $('.intro').fadeIn();
  	$('#show_instructions').hide();
	  return false; 
  });
  
  toggleCSS('inverted');
  toggleCSS('no_ticks');
  toggleCSS('no_background_lines');
  toggleCSS('full_width', function() {
    $('#parallel').trigger('resize');
  });
  
  function toggleCSS(key, func) {
    // initialize on load
    if (localStorage[key] === "true") {
      $('body').addClass(key);
    }
  
    // alter state
    $('#' + key).click(function() {
      if (localStorage && localStorage[key] != "true") {
	      localStorage[key] = "true";
        $('body').addClass(key);
        if (func)
          func();
    	} else {
	      if (localStorage) {
	      	localStorage[key] = "false";
        }
        $('body').removeClass(key);
        if (func)
          func();
	    }
    	return false;
    });
  }
  
});