<?php
/**
 * Plugin Name:       Styled Area Block
 * Description:       A full, reusable set of background/foreground CSS for a thematicly styled area.
 * Requires at least: 6.0
 * Requires PHP:      7.0
 * Version:           0.0.1
 * Author:            Scott Carver
 * License:           Protected
 * Text Domain:       styled
 *
 * @package           create-block
 */

// Define 'xx/styled' Block
require( __DIR__ . '/xx-styled-block.php');

// Define Meta Fields
require( __DIR__ . '/xx-styled-meta.php');

// Define 'styled' Posttype
require( __DIR__ . '/xx-styled-posttype.php');

// CSS and JSON Routes 
require( __DIR__ . '/xx-styled-routes.php');

// PHP Variables
require( __DIR__ . '/xx-styled-variables.php');
