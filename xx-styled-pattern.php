<?php
 
/*
Plugin Name: Custom Block Patterns
Description: Adds a custom block pattern to the Gutenberg block editor.
Version: 1.0
Author: Your Name
Author URI: https://learn.wordpress.org
*/
 
function my_custom_wp_block_patterns()
{
    
    register_block_pattern(
        'example-content/styledarea-content',
        array(
            'title'       => __('Styled Area Sample Content', 'styledarea-samplecontent'),
            'description' => _x('Includes sample content for testing Styled Areas', 'Block pattern description', 'page-intro-block'),
 
            // This is an inlined and json-escaped version of register_styled_template
            // to achieve this, I copy/pasted from the editor, then used https://jsonformatter.org/json-escape.
            // As a future improvement, call that function here instead of manually inlining it
            'content'     => "<!-- wp:xx/styled {\"clientUUID\":\"2789f377-7601-4dd3-9923-6c032fccc395\",\"align\":\"full\",\"backgroundColor\":\"#DDDDDD\"} -->\n<div class=\"alignfull xx-styled xx-styled--block 2789f377-7601-4dd3-9923-6c032fccc395\" style=\"--backgroundColor: #DDDDDD;\"><!-- wp:spacer -->\n<div style=\"height:100px\" aria-hidden=\"true\" class=\"wp-block-spacer\"></div>\n<!-- /wp:spacer -->\n\n<!-- wp:heading {\"textAlign\":\"center\",\"level\":1} -->\n<h1 class=\"wp-block-heading has-text-align-center\">Welcome to Your Styled Area</h1>\n<!-- /wp:heading -->\n\n<!-- wp:paragraph {\"dropCap\":true} -->\n<p class=\"has-drop-cap\">Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit.<strong> Vivamus magna justo,</strong> lacisssnia eget <a href=\"#\">consectetur</a> sed, convallis at tellus. Donec sollicitudin <em>molestie malesuada.</em> Cras ultricies ligula sed magna dictum porta. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>\n<!-- /wp:paragraph -->\n\n<!-- wp:image {\"align\":\"full\",\"className\":\"alignfull\"} -->\n<figure class=\"wp-block-image alignfull\"><img src=\"https://via.placeholder.com/1200x700\" alt=\"\"/><figcaption class=\"wp-element-caption\">An Image Example</figcaption></figure>\n<!-- /wp:image -->\n\n<!-- wp:separator {\"align\":\"center\",\"className\":\"is-style-wide\"} -->\n<hr class=\"wp-block-separator aligncenter has-alpha-channel-opacity is-style-wide\"/>\n<!-- /wp:separator -->\n\n<!-- wp:paragraph -->\n<p>ultricies ligula sed magna dictum porta. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Donec sollicitudin <a href=\"https://wikipedia.org\">molestie malesuada</a>. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Nulla quis lorem ut libero malesuada feugiat.</p>\n<!-- /wp:paragraph -->\n\n<!-- wp:quote -->\n<blockquote class=\"wp-block-quote\"><!-- wp:paragraph -->\n<p>Cras ultricies ligula sed magna dictum porta. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Donec sollicitudin molestie malesuada. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Nulla quis lorem ut libero malesuada feugiat.</p>\n<!-- /wp:paragraph --><cite>Great Person</cite></blockquote>\n<!-- /wp:quote -->\n\n<!-- wp:separator {\"align\":\"center\"} -->\n<hr class=\"wp-block-separator aligncenter has-alpha-channel-opacity\"/>\n<!-- /wp:separator -->\n\n<!-- wp:paragraph -->\n<p>ras ultricies ligula sed magna dictum porta. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Donec sollicitudin molestie malesuada. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Nulla quis lorem ut libero malesuada feugiat.</p>\n<!-- /wp:paragraph -->\n\n<!-- wp:spacer {\"height\":\"50px\"} -->\n<div style=\"height:50px\" aria-hidden=\"true\" class=\"wp-block-spacer\"></div>\n<!-- /wp:spacer -->\n\n<!-- wp:table -->\n<figure class=\"wp-block-table\"><table><thead><tr><th>Film</th><th>Director</th><th>Producer</th><th>Actors</th></tr></thead><tbody><tr><td>Lorem Ipsum</td><td>Lorem Ipsum</td><td>Lorem Ipsum</td><td>Lorem Ipsum</td></tr><tr><td>Lorem Ipsum</td><td>Lorem Ipsum</td><td>Lorem Ipsum</td><td>Lorem Ipsum</td></tr><tr><td>Lorem Ipsum</td><td>Lorem Ipsum</td><td>Lorem Ipsum</td><td>Lorem Ipsum</td></tr></tbody></table><figcaption class=\"wp-element-caption\">A Table Example</figcaption></figure>\n<!-- /wp:table -->\n\n<!-- wp:spacer {\"height\":\"50px\"} -->\n<div style=\"height:50px\" aria-hidden=\"true\" class=\"wp-block-spacer\"></div>\n<!-- /wp:spacer --></div>\n<!-- /wp:xx/styled -->",
 
 
            'categories'  => array('example-content'),
        )
    );
}

function register_layout_category( $categories ) {
	
	$categories[] = array(
		'slug'  => 'example-content',
		'title' => 'Example Content'
	);

	return $categories;
}


add_filter( 'block_categories_all', 'register_layout_category' );


add_action('init', 'my_custom_wp_block_patterns');