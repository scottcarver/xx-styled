<?php

/**
 * Tie into WP's 'admin_print_scripts' action hook to add adminscripts
 * in support of the styled block/posttype
 */
add_action('admin_print_scripts', 'xxstyled_printadminscripts');


/**
 * Print Styled Admin Scripts 
 * 
 * Print custom JS to the page output within the Admin
 *
 * @return string Outputs text directly to the page of the admin area. Specifically
 * outputs a <script> tag with three variables defined relating to styles/fonts/posttype
 */

function xxstyled_printadminscripts() { 
  // Read the JSON file 
  $themejson = file_get_contents(get_template_directory_uri().'/theme.json');
  // Decode the JSON file
  $themejson_data = json_decode($themejson,true);
  // Retrieve the style array
  $style_array = xxstyle_getstylearray();

  // Create Font name/label pairs based on theme.json
  $themejson_fontlabels = [];

  // Inquire about Font families
  if(isset($themejson_data['settings']['typography']['fontFamilies'])){
    // And then process them
    foreach($themejson_data['settings']['typography']['fontFamilies'] as $font){
      $selectDropData = (object) array('label' => $font['name'], 'value' => $font['slug']);
      array_push($themejson_fontlabels, $selectDropData);
    }
  }
  ?>
	<script>
		var global_named_styles = <?php echo json_encode($style_array); ?>;
    var global_named_fonts = <?php echo json_encode($themejson_fontlabels); ?>;
    var global_current_posttype = "<?php echo get_post_type(); ?>";
	</script>
	<?php
}


/**
 * Get Style Array
 * 
 * get_style_array() returns an array (the $styled_array) 
 * based on entries of the 'styled' posttype. 
 * 
 * @return array The key/value format is used in the ComboBox control.
 */
function xxstyle_getstylearray() {

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
 