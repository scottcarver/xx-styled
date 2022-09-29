<?php
// Create Post Type
function my_custom_post_styles() {
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
    // 'parent_item_colon'  => ’,
    'menu_name'          => 'Styled Areas',
  );
  $args = array(
    'labels'        => $labels,
    'description'   => 'Holds our Styles and Style specific data',
    'public'        => true,
    'menu_icon' => 'dashicons-art',
    'menu_position' => 5,
    'supports'      => array( 'title', 'editor', 'thumbnail', 'excerpt', 'comments', 'editor', 'custom-fields'),
    'has_archive'   => true,
    'show_in_rest' => true
  );
  register_post_type( 'style', $args ); 
}
add_action( 'init', 'my_custom_post_styles' );

// Create Style Posttype Template
function register_style_template() {
  $post_type_object = get_post_type_object( 'style' );
  $post_type_object->template = array(
      array( 'xx/styled', array(), array(
        array( 'core/heading', array('align'=>'center', 'content' => 'Welcome to Your Styled Area' )),
        array( 'core/paragraph', array('dropCap'=>true, 'content' => 'Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit.<strong> Vivamus magna justo,</strong> lacisssnia eget <a href="#">consectetur</a> sed, convallis at tellus. Donec sollicitudin <em>molestie malesuada.</em> Cras ultricies ligula sed magna dictum porta. Lorem ipsum dolor sit amet, consectetur adipiscing elit.' )),
        array( 'core/image', array('url' => wp_get_attachment_url(2182))),
        array( 'core/paragraph', array('content' => 'Cras ultricies ligula sed magna dictum porta. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Donec sollicitudin <a href="https://wikipedia.org">molestie malesuada</a>. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Nulla quis lorem ut libero malesuada feugiat.')),
        array( 'core/quote', array('value'=>'<p>Cras ultricies ligula sed magna dictum porta. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Donec sollicitudin <a href="https://oregon.gov">molestie malesuada</a>. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Nulla quis lorem ut libero malesuada feugiat</p>', 'citation'=>'Great Person')),
        array( 'core/paragraph', array('content' => 'Cras ultricies ligula sed magna dictum porta. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Donec sollicitudin molestie malesuada. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Nulla quis lorem ut libero malesuada feugiat.'))
      )
    )
  );
  $post_type_object->template_lock = 'all';
}
add_action( 'init', 'register_style_template' );




// Add tags to <html> using the language_attributes hook
function new_language_attributes($lang){
  // Allow the user to add some additional classes (by adding this constant)
  $customstyles = CUSTOM_CLASSES_HTML ? CUSTOM_CLASSES_HTML : '';
  $bodystyles = 'xx-styled ' . $customstyles;
  
  if (function_exists('get_field')) {
      $namedstyle= get_field("poststylemeta_type");
      $headlineTypography = get_field("poststylemeta_headline");
      $copyTypography  = get_field("poststylemeta_copy");
      $captionTypography = get_field("poststylemeta_captions");
      $style = '';
      if($headlineTypography !== null && $headlineTypography !== 'inherit'){
        $style .= '--foregroundHeadlineFont: var(--'.$headlineTypography.');';
        $bodystyles .= ' xx-styled--headlinefont-'.$headlineTypography;
      }
      if($copyTypography !== null && $copyTypography !== 'inherit'){
        $style .= '--foregroundCopyFont: var(--'.$copyTypography.');';
        $bodystyles .= ' xx-styled--foregroundfont-'.$copyTypography;
      }
      if($captionTypography !== null && $captionTypography !== 'inherit'){
        $style .= '--foregroundCaptionFont: var(--'.$captionTypography.');';
        $bodystyles .= ' xx-styled--captionfont-'.$captionTypography;
      }

      // $style = '';
  } else {
      $namedstyle= "NONE";
  }


  // if(is_admin()){$bodystyles="xx-styled";}

  // if(is_single()) {
  //     $ar = get_the_category();
  //     foreach($ar as $c) {
  //         if($c->slug=='in-italiano') {
  //             return "lang=\"it\"";
  //         }
  //     }
  // }
  // return $lang;
  return $lang . ' class="'.$bodystyles.'"' . ' data-theme="'.$namedstyle.'"' . ' style="'.$style.'"';
}
if(!is_admin()){
  add_filter('language_attributes', 'new_language_attributes');
}
