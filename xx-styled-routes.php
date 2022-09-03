<?php
   /*
   Plugin Name: WP Enrouter
   Plugin URI: https://github.com/scottcarver/wp-enrouter
   description: Wraps CustomRoute Class in a plugin for reuse, with examples.
   Version: 0.0.1
   Author: Sam, Scott
   */

  // Check that the class exists before trying to use it
  if (!class_exists('CustomRoutes')) { require('routes/CustomRoutes.php');}
  // Instantiate Route Object
  $theme_routes = new CustomRoutes();


  // STYLESHEETS
  //style/unique-name.css or style/compiled.css
  // Create Route with two Regex capture groups
  $theme_routes->addRoute(
      "^style/([^/]*)/?.css",
      'routeapi_csscallback',
      plugin_dir_path(__FILE__) . 'routes/route_template_css.php',
      array('param1' => 1)
  );

  // Make URL Data Available to Template
  function routeapi_csscallback($param1){
    set_query_var('namedstyle', $param1);
  }
  

  
  // JSON DATA
  //style/unique-name.json or style/compiled.json
  $theme_routes->addRoute(
      "^style/([^/]*)/?.json",
      'routeapi_jsoncallback',
      plugin_dir_path(__FILE__) . 'routes/route_template_json.php',
      array('param1' => 1)
  );

  // Make URL Data Available to Template
  function routeapi_jsoncallback($param1){
    set_query_var('namedstyle', $param1);
  }

  // Flush Routes
  $theme_routes->forceFlush();
  

 

// Add backend styles for Gutenberg.
function custom_generated_css() {
	wp_enqueue_style( 'styled-areas', get_site_url().'/style/compiled.css', false );
} 

add_action('wp_enqueue_scripts', 'custom_generated_css');
add_action( 'admin_enqueue_scripts', 'custom_generated_css' );



?>