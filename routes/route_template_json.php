<?php 
// Add JSON Header
header("Content-type: application/json"); 

// Prepare Variables
$stylename = get_query_var('namedstyle');
$iscompiled = $stylename  === 'compiled';
$the_slug = $stylename;
$args = array(
  'name'        =>  $iscompiled  ? null : $the_slug,
  'post_type'   => 'styled',
  'post_status' => 'publish',
  'numberposts' => $iscompiled ? -1 : 1
);
$styled_areas = new WP_Query($args);
$styled_array = array();

// Process JSON
if($styled_areas){
  foreach($styled_areas->posts as $area){
    $post_content = $area->post_content;
    // By exploding the block data, we can get the json stored on the block (the 3rd piece!)
    $pieces = explode(' ', $post_content);
    if(isset($pieces[2])){
      $cleanjson = JSON_DECODE($pieces[2]);
      // Add decoded entry
      if($cleanjson){
        $cleanjson->slug = get_post_field( 'post_name',$area->ID);
        array_push($styled_array, $cleanjson);
      }
    }
  
  }
};

// Output JSON, always return an array
if(isset($styled_array)){ 
  echo(JSON_ENCODE($styled_array));
} 

?>