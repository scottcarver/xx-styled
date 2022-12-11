<?php // Add JSON Header
header("Content-type: application/json"); 
$stylename = get_query_var('namedstyle');
$iscompiled = $stylename  === 'compiled';
?>
<?php
$the_slug = $stylename;
$args = array(
  'name'        =>  $iscompiled  ? null : $the_slug,
  'post_type'   => 'styled',
  'post_status' => 'publish',
  'numberposts' => $iscompiled ? -1 : 1
);

$styled_areas = new WP_Query($args);
$styled_array = array();
// var_dump($styled_areas);
if($styled_areas){
  foreach($styled_areas->posts as $area){
    $post_content = $area->post_content;
    // By exploding the block data, we can get the json stored on the block (the 3rd piece!)
    $pieces = explode(' ', $post_content);
    if(isset($pieces[2])){
      $cleanjson = JSON_DECODE($pieces[2]);
      // var_dump($cleanjson);
      if($cleanjson){
        $cleanjson->slug = get_post_field( 'post_name',$area->ID);
        array_push($styled_array, $cleanjson);
      }
    }
  
  }
};

/*
$routeArgs = array(
  'path' => 'my-unique-route/(.+?)/(.+?)/?$',
  'params' => array('param_1','param_2'),
  'template' => '/public/path_to_template_file.php',
  'rebuild' => false,
)
new Custom_Route('my-unique-route/(.+?)/(.+?)/?$',array('param_1','param_2'),'/public/path_to_template_file.php',true);
*/

?>
<?php if(isset($styled_array)){ 
  // Always return an array
  echo(JSON_ENCODE($styled_array));
 } ?>