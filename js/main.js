
toogle_form = 1;

$('.join_us').click(function(){
	if (toogle_form == 0){
		$('.join_us').addClass('white_text').removeClass('black_text');
		$('.sign_in').addClass('black_text').removeClass('white_text');
		$('#join_us').removeClass('visible_forms');
		$('#sign_in').addClass('visible_forms');
		$('.form_login').addClass('form_height_big').removeClass('form_height_small');
		toogle_form = 1;
	}
});

$('.sign_in').click(function(){
	if (toogle_form == 1){
		$('.sign_in').addClass('white_text').removeClass('black_text');
		$('.join_us').addClass('black_text').removeClass('white_text');
		$('#sign_in').removeClass('visible_forms');
		$('#join_us').addClass('visible_forms');
		$('.form_login').addClass('form_height_small').removeClass('form_height_big');
		toogle_form = 0;
	}
});

$('.t_blue').click(function(){
	$('.all').removeClass('switch_color_green');
	$('.all').removeClass('switch_color_yellow');
	$('.all').removeClass('switch_color_magenta');
	$('.all').removeClass('switch_color_black');
	$('.all').addClass('switch_color_blue');
});

$('.t_green').click(function(){
	$('.all').removeClass('switch_color_blue');
	$('.all').removeClass('switch_color_yellow');
	$('.all').removeClass('switch_color_magenta');
	$('.all').removeClass('switch_color_black');
	$('.all').addClass('switch_color_green');
});

$('.t_yellow').click(function(){
	$('.all').removeClass('switch_color_blue');
	$('.all').removeClass('switch_color_green');
	$('.all').removeClass('switch_color_magenta');
	$('.all').removeClass('switch_color_black');
	$('.all').addClass('switch_color_yellow');
});

$('.t_magenta').click(function(){
	$('.all').removeClass('switch_color_blue');
	$('.all').removeClass('switch_color_green');
	$('.all').removeClass('switch_color_yellow');
	$('.all').removeClass('switch_color_black');
	$('.all').addClass('switch_color_magenta');
});

$('.t_black').click(function(){
	$('.all').removeClass('switch_color_blue');
	$('.all').removeClass('switch_color_green');
	$('.all').removeClass('switch_color_yellow');
	$('.all').removeClass('switch_color_magenta');
	$('.all').addClass('switch_color_black');
});