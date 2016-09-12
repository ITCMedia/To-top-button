Стили: 
.scrollTop{
	display: none; 
	z-index: 9999; 
	position: fixed; 
	bottom: 10px; 
	right: 3%; 
	width: 45px; 
	height: 45px;
	background:url('/images/arrows4.png') 0 0 no-repeat;
}
.scrollTop:hover{ background-position:0 -50px;}

jQuery(document).ready(function($){
	var
	speed = 500,
	$scrollTop = $('<a href="#" class="scrollTop">').appendTo('body');        

	$scrollTop.click(function(e){
		e.preventDefault();
		$( 'html:not(:animated),body:not(:animated)' ).animate({ scrollTop: 0}, speed );
	});

	//появление
	function show_scrollTop(){
		( $(window).scrollTop() > 300 ) ? $scrollTop.fadeIn(600) : $scrollTop.fadeOut(600);
	}
	$(window).scroll( function(){ show_scrollTop(); } );
	show_scrollTop();
});