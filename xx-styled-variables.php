<?php

// This outputs javascript on the page (a variable named "global_named_styles") which is read in the style switcher
// This is perhaps better done using compose/applyWithSelect/applyWithDispatch but this is simplified since it doesn't save metadata

function get_style_array() {

    $args = array(
        'name'        =>  null,
        'post_type'   => 'styled',
        'post_status' => 'publish',
        'posts_per_page' => -1,
        'order' => 'ASC',
        'orderby' => 'title',
      );
      
      $styled_areas = new WP_Query($args);
      $styled_array = array();
      $stlyed_list = array();

      if($styled_areas){
        foreach($styled_areas->posts as $area){
          $post_content = $area->post_content;
          $pieces = explode(' ', $post_content);
          $parsedjson = isset($pieces[2]) ? JSON_DECODE($pieces[2]) : '';
          $cleanjson = (object)[];
          $cleanjson->label = get_the_title($area->ID) ?: 'Style ID ' . $area->ID ;
          $cleanjson->value = get_post_field( 'post_name',$area->ID);
          array_push($styled_array, $cleanjson);
        }
      };

    // Return Style Array
    if(isset($styled_array)){ return $styled_array; } 

}
   

// Print custom JS to the page output within the Admin
function print_styled_adminscripts() { 

  // Read the JSON file 
  $themejson = file_get_contents(get_template_directory_uri().'/theme.json');

  // Decode the JSON file
  $themejson_data = json_decode($themejson,true);

  // Create Font name/label pairs based on theme.json
  $themejson_fontlabels = [];
  foreach($themejson_data['settings']['typography']['fontFamilies'] as $font){
    $selectDropData = (object) array('label' => $font['name'], 'value' => $font['slug']);
    array_push($themejson_fontlabels, $selectDropData);
  }
    
  $style_array = get_style_array();
  // $has_styles = sizeof($style_array) > 0;
  ?>
  
	<script>
		var global_named_styles = <?php echo json_encode($style_array); ?>;
    var global_named_fonts = <?php echo json_encode($themejson_fontlabels); ?>;
    <?php /* this is used to prevent the sidebar from running on styles, which causes a looping error */ ?>
    var global_current_posttype = "<?php echo get_post_type(); ?>";
	</script>
	<?php
  
}
add_action('admin_print_scripts', 'print_styled_adminscripts');