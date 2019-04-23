$('nav a').on('click', function(event){
$('nav li.current').removeClass('current');
$(this).parent().addClass('current');
});
