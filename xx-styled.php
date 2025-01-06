<?php
/**
 * Plugin Name:       Styled Area Block
 * Description:       A full, reusable set of background/foreground CSS for a thematicly styled area.
 * Requires at least: 6.0
 * Requires PHP:      7.0
 * Version:           0.0.6
 * Author:            Scott Carver
 * Author:            Scott Carver
 * License:           Protected
 * Text Domain:       styled
 *
 * @package           create-block
 */

// Define 'xx/styled' Block
require( __DIR__ . '/xx-styled-block.php');

// Define Pattern with example content
require( __DIR__ . '/xx-styled-pattern.php');

// Define Meta Fields
require( __DIR__ . '/xx-styled-meta.php');

// Define 'styled' Posttype
require( __DIR__ . '/xx-styled-posttype.php');

// CSS and JSON Routes 
require( __DIR__ . '/xx-styled-routes.php');

// PHP Variables
require( __DIR__ . '/xx-styled-variables.php');


/*
function modify_custom_post_type_rewrite() {
    // Add your custom post type base
    global $wp_post_types;
    $wp_post_types['web-story']->rewrite['slug'] = 'new-base'; // Change 'book' to your custom post type slug
}
add_action('init', 'modify_custom_post_type_rewrite', 9999); // Use a high priority
*/