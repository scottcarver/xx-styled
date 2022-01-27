<?php
/**
 * Plugin Name:       XX - Styled Area
 * Description:       A Styled Area with InnerBlocks
 * Requires at least: 5.8
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            Scott Carver
 * Text Domain:       xx-styled
 *
 * @package           create-block
 */


// 1) Inititalize a block using this function
add_action( 'init', 'custom_blockinit_xxstyled' );


// 2) Register a block using block.json
function custom_blockinit_xxstyled() { 
	register_block_type( 
		__DIR__,
		array(
			// 'render_callback' => 'xxstyled_render_callback',
		)
	); 
}

/*
array(
	'name' => __DIR__,
	'render_callback' => 'xxstyled_render_callback'
);
*/

// 3) Render the output with a php render callback function
function xxstyled_render_callback( $attributes, $content ) {
	// var_dump($attributes);
	// var_dump($content);
    // echo 'This is my block content';
	echo($content);
}


