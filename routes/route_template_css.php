<?php  header("Content-type: text/css"); 
$stylename = get_query_var('namedstyle');
$iscompiled = $stylename === 'compiled';
$the_slug = $stylename;
$args = array(
  'name'        =>  $iscompiled  ? null : $the_slug,
  'post_type'   => 'styled',
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
        $rules = explode(';', $styleclean);
        $nonulltext = '';

        // Loop over CSS Rules
        foreach($rules as $rule){
          $keyvalue =  explode(': ', $rule);
          $key = trim($keyvalue[0]);
          $value = isset($keyvalue[1]) ? trim($keyvalue[1]) : '';
          // Not Null, Undefined, Unset
          // Specifically block against null or incomplete data
          if(!str_contains($value, 'null') && ($value != 'undefined') && $value !== ''){
            $nonulltext .= $key . ":" . $value . ";";
          }
        }
        
        $styleformatted = '.styled-' . $post_slug . ', [data-theme="' . $post_slug . '"]{' . $nonulltext . '}';
       array_push($styled_array, $styleformatted);
      }
    }
endif;

foreach($styled_array as $style){ echo($style); }
