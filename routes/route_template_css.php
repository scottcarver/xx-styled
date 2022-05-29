<?php  header("Content-type: text/css"); 
$stylename = get_query_var('namedstyle');
$iscompiled = $stylename  == 'compiled';
$the_slug = $stylename;
$args = array(
  'name'        =>  $iscompiled  ? null : $the_slug,
  'post_type'   => 'style',
  'post_status' => 'publish',
  'numberposts' => $iscompiled ? -1 : 1
);
$styled_areas = get_posts($args);
$styled_array = array();
if($styled_areas) :
    foreach($styled_areas as $area){
      $post_slug = get_post_field( 'post_name',$area->ID);
      $post_content = $area->post_content;
      $pieces = explode('style="', $post_content);
      if(isset($pieces[1])){
        $styledbit = explode('" ', $pieces[1]);
        $styleclean = $styledbit[0];
        $styleformatted = '[data-theme="' . $post_slug . '"]{' . $styleclean . '}'; 
        array_push($styled_array, $styleformatted);
      }
    }
    /* Works!
    $post_content = $styled_areas[0]->post_content;
    $pieces = explode('style="', $post_content);
    $styledbit = explode('" ', $pieces[1]);
    $styleclean = $styledbit[0];
    */
    // echo 'ID on the first post found ' . $styled_areas[0]->ID;
endif;

foreach($styled_array as $style){ echo($style); }
// var_dump($styled_array);


/*
<?php if($styleclean){ ?>.xx-styled--<?php echo($stylename); ?>{ <?php echo($styleclean); ?> } <?php } ?>
*/