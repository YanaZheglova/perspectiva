<?php

add_action( 'wp_enqueue_scripts', 'theme_add_scripts' );

function theme_add_scripts() {


	// подключаем js файл темы
	wp_enqueue_script( 'script-accordion', get_template_directory_uri().'/js/accordion.js', array(), '1.0', true );
	wp_enqueue_script( 'script-maim', get_template_directory_uri().'/js/main.js', array(), '1.0', true );
	wp_enqueue_script( 'script-scrolltop', get_template_directory_uri().'/js/scrolltop', array(), '1.0', true );

}