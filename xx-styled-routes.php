<?php
// Run addnewrouts function
xxstyled_addnewroutes();
// Add CSS to the Frontend of the site
add_action('wp_enqueue_scripts', 'xxstyled_creategeneratedcss');
// Add CSS to the Frontend of the site
add_action( 'admin_enqueue_scripts', 'xxstyled_creategeneratedcss' );



// Enqueue compiled.css stylesheet to both the frontend and admin ara
function xxstyled_creategeneratedcss() {
	wp_enqueue_style( 'styled-areas', get_site_url().'/styled/compiled.css', false );
} 


// Create new URLs which provide CSS and JSON to the theme
function xxstyled_addnewroutes(){

  // Check that the class exists before trying to use it
  if (!class_exists('CustomRoutes')) { require('routes/CustomRoutes.php');}

  // Instantiate Route Object
  $plugin_routes = new CustomRoutes();

  // 1) Create CSS file dynamically (styled/unique-slug.css or styled/compiled.css)
  $plugin_routes->addRoute(
      "^styled/([^/]*)/?.css",
      'routeapi_csscallback',
      plugin_dir_path(__FILE__) . 'routes/route_template_css.php',
      array('param1' => 1)
  );

  // Make URL Data Available to Template
  function routeapi_csscallback($param1){ set_query_var('namedstyle', $param1); }

  // 2) Create JSON data dynamically (styled/unique-slug.json or styled/compiled.json)
  $plugin_routes->addRoute(
      "^styled/([^/]*)/?.json",
      'routeapi_jsoncallback',
      plugin_dir_path(__FILE__) . 'routes/route_template_json.php',
      array('param1' => 1)
  );

  // Make URL Data Available to Template
  function routeapi_jsoncallback($param1){ set_query_var('namedstyle', $param1); }

  // Flush Routes
  $plugin_routes->forceFlush();

}