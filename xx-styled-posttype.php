<?php

// 1) Initilize 'styled' posttype upon WP init action hook
add_action( 'init', 'initialize_styled_posttype' );
// 2) Initilize Posttype Template upon WP init action hook
add_action( 'init', 'register_styled_template' );
// 3) Filter Language attributes (and body tag) with WP language_attributes filter hook
add_filter('language_attributes', 'new_language_attributes');


// Create Post Type
function initialize_styled_posttype() {
  // Prepare Labels
  $labels = array(
    'name'               => _x( 'Styled Areas', 'post type general name' ),
    'singular_name'      => _x( 'Style Area', 'post type singular name' ),
    'add_new'            => _x( 'Add New', 'book' ),
    'add_new_item'       => __( 'Add New Style' ),
    'edit_item'          => __( 'Edit Style' ),
    'new_item'           => __( 'New Style' ),
    'all_items'          => __( 'All Styles' ),
    'view_item'          => __( 'View Style' ),
    'search_items'       => __( 'Search Styles' ),
    'not_found'          => __( 'No Styles found' ),
    'not_found_in_trash' => __( 'No Styles found in the Trash' ), 
    'menu_name'          => 'Styled Areas',
  );
  // Prepare Arts
  $args = array(
    'labels'        => $labels,
    'description'   => 'Holds our Styles and Style specific data',
    'public'        => true,
    'menu_icon' => 'dashicons-art',
    'menu_position' => 5,
    'supports'      => array( 'title', 'editor'),
    'has_archive'   => false,
    'show_in_rest' => true
  );
  // Register Posttype
  register_post_type( 'styled', $args ); 
}


// Extend the 'styled' posttype Template
function register_styled_template() {
  $post_type_object = get_post_type_object( 'styled' );
  $post_type_object->template = array(
      array( 'xx/styled', array('align'=>'full'), array(
        array( 'core/spacer', array('align'=>'center', 'content' => 'Welcome to Your Styled Area' )),
        array( 'core/heading', array('level' => 1, 'textAlign'=>'center', 'content' => 'Welcome to Your Styled Area' )),
        array( 'core/paragraph', array('dropCap'=>true, 'content' => 'Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit.<strong> Vivamus magna justo,</strong> lacisssnia eget <a href="#">consectetur</a> sed, convallis at tellus. Donec sollicitudin <em>molestie malesuada.</em> Cras ultricies ligula sed magna dictum porta. Lorem ipsum dolor sit amet, consectetur adipiscing elit.' )),
        array( 'core/image', array('align'=>'center', 'caption'=>'An Image Example', 'url' => 'https://via.placeholder.com/1200x700')), // wp_get_attachment_url(2182)
        array( 'core/separator', array('align'=>'center')),
        array( 'core/paragraph', array('content' => 'ultricies ligula sed magna dictum porta. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Donec sollicitudin <a href="https://wikipedia.org">molestie malesuada</a>. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Nulla quis lorem ut libero malesuada feugiat.')),
        array( 'core/quote', array('value'=>'<p>Cras ultricies ligula sed magna dictum porta. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Donec sollicitudin <a href="https://oregon.gov">molestie malesuada</a>. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Nulla quis lorem ut libero malesuada feugiat</p>', 'citation'=>'Great Person')),
        array( 'core/paragraph', array('content' => 'Cras ultricies ligula sed magna dictum porta. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Donec sollicitudin molestie malesuada. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Nulla quis lorem ut libero malesuada feugiat.'))
      )
    )
  );
  $post_type_object->template_lock = 'all';
}



// Add tags to <html> using the language_attributes hook



function new_language_attributes($lang){

  // Do not attempt to alter the wp-admin area
  if(is_admin()){ return $lang; }

  // Allow the user to add some additional classes (by adding this constant)
  $customstyles = '';
  
  // Allow the theme or plugin to add html classes
  if(defined('CUSTOM_CLASSES_HTML')){ $customstyles .= CUSTOM_CLASSES_HTML; }

  $bodystyles = 'wp-site-xx-styled xx-styled ' . $customstyles;
  
  if (function_exists('get_field')) {
      $namedstyle= get_field("poststylemeta_type");
      $headlineTypography = get_field("poststylemeta_headline");
      $copyTypography  = get_field("poststylemeta_copy");
      $captionTypography = get_field("poststylemeta_captions");
      $style = '';

      if($headlineTypography !== null && $headlineTypography !== '' && $headlineTypography !== 'inherit'){
        $style .= '--foregroundHeadlineFont: var(--'.$headlineTypography.');';
        $bodystyles .= ' xx-styled--headlinefont-'.$headlineTypography;
      }
      if($copyTypography !== null && $copyTypography !== '' && $copyTypography !== 'inherit'){
        $style .= '--foregroundCopyFont: var(--'.$copyTypography.');';
        $bodystyles .= ' xx-styled--foregroundfont-'.$copyTypography;
      }
      if($captionTypography !== null && $captionTypography !== '' && $captionTypography !== 'inherit'){
        $style .= '--foregroundCaptionFont: var(--'.$captionTypography.');';
        $bodystyles .= ' xx-styled--captionfont-'.$captionTypography;
      }

      if($namedstyle){
        $namedstyle = ' data-theme="'.$namedstyle.'"';
      }

      if($style){
        $style = ' style="'.$style.'"';
      }

  } else {
      $namedstyle= "NONE";
  }

  return $lang . ' class="'.$bodystyles.'"' . $namedstyle . $style;
}

