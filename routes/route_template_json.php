<?php // Add CSS Header
header("Content-type: application/json"); 
$stylename = get_query_var('namedstyle');
$iscompiled = $stylename  == 'compiled';
?>
<?php
$the_slug = $stylename;
$args = array(
  'name'        =>  $iscompiled  ? null : $the_slug,
  'post_type'   => 'style',
  'post_status' => 'publish',
  'numberposts' => $iscompiled ? -1 : 1
);

$styled_areas = new WP_Query($args);
$styled_array = array();
if($styled_areas){
  foreach($styled_areas->posts as $area){
    $post_content = $area->post_content;
    $pieces = explode(' ', $post_content);
    $cleanjson = JSON_DECODE($pieces[2]);
    $cleanjson->slug = get_post_field( 'post_name',$area->ID);
    array_push($styled_array, $cleanjson);
  }
};

/*
$styled_areas = get_posts($args);
$styled_array = array();
if($styled_areas) :

    foreach($styled_areas as $area){
           $post_slug = get_post_field( 'post_name',$area->ID);
      $post_content = $area->post_content;
      $pieces = explode('style="', $post_content);
      $styledbit = explode('" ', $pieces[1]);
      $styleclean = $styledbit[0];
      $styleformatted = '.xx-styled--' . $post_slug . '{' . $styleclean . '}'; 
      array_push($styled_array, $styleformatted);
    }

    // Works!
    $post_content = $styled_areas[0]->post_content;
    $pieces = explode('style="', $post_content);
    $styledbit = explode('" ', $pieces[1]);
    $styleclean = $styledbit[0];
    *

    // echo 'ID on the first post found ' . $styled_areas[0]->ID;
endif;
*/
?>
<?php if(isset($styled_array)){ ?>
    <?php echo(JSON_ENCODE($iscompiled ? $styled_array : $styled_array[0])); ?>
<?php } ?>