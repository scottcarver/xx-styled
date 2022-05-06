
<?php

// This outputs javascript on the page (a variable named "global_named_styles") which is read in the style switcher
// This is perhaps better done using compose/applyWithSelect/applyWithDispatch but this is simplified since it doesn't save metadata

function get_style_array() {
    /**
     * frontend ajax requests.
     */

    $args = array(
        'name'        =>  null,
        'post_type'   => 'style',
        'post_status' => 'publish',
        'numberposts' => -1
      );
      
      $styled_areas = new WP_Query($args);
      $styled_array = array();
      $stlyed_list = array();

      if($styled_areas){
        foreach($styled_areas->posts as $area){
          $post_content = $area->post_content;
          $pieces = explode(' ', $post_content);
          $parsedjson = JSON_DECODE($pieces[2]);
          $cleanjson = (object)[];
          $cleanjson->label = get_the_title($area->ID) ?: 'Untitled Style ' . $area->ID ;
          $cleanjson->value = get_post_field( 'post_name',$area->ID);
          array_push($styled_array, $cleanjson);
        }
      };

    
    if(isset($styled_array)){ 
       return $styled_array;
    } 
  

}
    /*

 wp_enqueue_script( 'frontend-ajax', '/frontend-ajax.js', array('jquery'), null, true );
    wp_localize_script( 'frontend-ajax', 'frontend_ajax_object',
        array( 
            'ajaxurl' => admin_url( 'admin-ajax.php' ),
            'data_var_1' => 'value 1',
            'data_var_2' => 'value 2',
            'styled-areas' => $styled_array,
        )
    );

add_action( 'admin_enqueue_scripts', 'theme_enqueue_scripts' ); // wp_enqueue_scripts
*/


// inline script via wp_print_scripts
function shapeSpace_print_scripts() {  ?>
	
	<script>
		var global_named_styles = <?php echo json_encode(get_style_array()); ?>;
	</script>
	
	<?php
	
}
add_action('admin_print_scripts', 'shapeSpace_print_scripts');