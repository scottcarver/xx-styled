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
    'edit_item'          => __( 'Edit Styled Area' ),
    'new_item'           => __( 'New Styled Area' ),
    'all_items'          => __( 'All Styled Areas' ),
    'view_item'          => __( 'View Styled Area' ),
    'search_items'       => __( 'Search Styled Areas' ),
    'not_found'          => __( 'No Styled Areas found' ),
    'not_found_in_trash' => __( 'No Styled Areas found in the Trash' ), 
    'menu_name'          => 'Styled Areas',
  );
  // Prepare Arts

  $args = array(
    'labels'        => $labels,
    'description'   => 'Holds our Styles and Style specific data',
    'public'        => true,
		'publicly_queryable' => true,
    'menu_icon' => 'dashicons-art',
    'show_in_admin_bar'   => true,
    'menu_position' => 5,
    // 'supports'      => array( 'title', 'editor', 'custom-fields'),
    'supports'           => array( 'title', 'editor', 'author', 'thumbnail', 'excerpt', 'custom-fields'),
    'has_archive'   => false,
    'show_in_rest' => true,
        'show_ui'            => true,
    'show_in_menu'       => true,
  );
  /*
  $args = array(
    'labels'             => $labels,
    'public'             => true,
    'publicly_queryable' => true,
    'show_ui'            => true,
    'show_in_menu'       => true,
    'query_var'          => true,
    'rewrite'            => array( 'slug' => 'book' ),
    // 'capability_type'    => 'post',
    'has_archive'        => true,
    'hierarchical'       => false,
    'menu_position'      => null,
    'supports'           => array( 'title', 'editor', 'author', 'thumbnail', 'excerpt', 'comments' )
);
  */
  // Register Posttype
  register_post_type( 'styled', $args ); 
}

// Extend the 'styled' posttype Template
function register_styled_template() {
  $post_type_object = get_post_type_object( 'styled' );
  $post_type_object->template = array(
      // Styled Area
      array( 'xx/styled', array('align'=>'full', 'backgroundColor'=>'#DDDDDD'), array(
        // Spacer
        array( 'core/spacer', array('align'=>'center', 'content' => 'Welcome to Your Styled Area' )),
        // Heading
        array( 'core/heading', array('level' => 1, 'textAlign'=>'center', 'content' => 'Welcome to Your Styled Area' )),
        // Paragraph
        array( 'core/paragraph', array('dropCap' => true, 'content' => 'Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit.<strong> Vivamus magna justo,</strong> lacisssnia eget <a href="#">consectetur</a> sed, convallis at tellus. Donec sollicitudin <em>molestie malesuada.</em> Cras ultricies ligula sed magna dictum porta. Lorem ipsum dolor sit amet, consectetur adipiscing elit.' )),
        // Image
        array( 'core/image', array('className'=>'alignfull', 'align'=>'full', 'caption'=>'An Image Example', 'url' => 'https://via.placeholder.com/1200x700')), // wp_get_attachment_url(2182)
        // Separator
        array( 'core/separator', array('align'=>'center','className'=>'is-style-wide')),
        // Paragraph
        array( 'core/paragraph', array('content' => 'ultricies ligula sed magna dictum porta. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Donec sollicitudin <a href="https://wikipedia.org">molestie malesuada</a>. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Nulla quis lorem ut libero malesuada feugiat.')),
        // Quote
        array( 'core/quote', array( 'citation' => 'Great Person' ), array(array(  'core/paragraph', array( 'content' => 'Cras ultricies ligula sed magna dictum porta. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Donec sollicitudin molestie malesuada. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Nulla quis lorem ut libero malesuada feugiat.' )))),
        // Separator
        array( 'core/separator', array('align'=>'center')),
        // Paragraph
        array( 'core/paragraph', array('content' => 'ras ultricies ligula sed magna dictum porta. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Donec sollicitudin molestie malesuada. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Nulla quis lorem ut libero malesuada feugiat.')),
        // Spacer
        array( 'core/spacer', array('height'=>'50px')),
        // Table (see example here https://www.calliaweb.co.uk/table-block-in-block-template/)
        array( 'core/table', array(
          'caption'=>'A Table Example',
          'head' => array(
              array('cells' => array(array('tag' => 'th','content' => 'Film'), array('tag' => 'th','content' => 'Director'), array('tag' => 'th','content' => 'Producer'), array('tag' => 'th','content' => 'Actors'))),
          ),
          'body' => array(
             array('cells' => array(array('tag' => 'td','content' => 'Lorem Ipsum'), array('tag' => 'td','content' => 'Lorem Ipsum'), array('tag' => 'td','content' => 'Lorem Ipsum'), array('tag' => 'td','content' => 'Lorem Ipsum'))),
             array('cells' => array(array('tag' => 'td','content' => 'Lorem Ipsum'), array('tag' => 'td','content' => 'Lorem Ipsum'), array('tag' => 'td','content' => 'Lorem Ipsum'), array('tag' => 'td','content' => 'Lorem Ipsum'))),
             array('cells' => array(array('tag' => 'td','content' => 'Lorem Ipsum'), array('tag' => 'td','content' => 'Lorem Ipsum'), array('tag' => 'td','content' => 'Lorem Ipsum'), array('tag' => 'td','content' => 'Lorem Ipsum'))),
          ),
         )),
         // Spacer
         array( 'core/spacer', array('height'=>'50px')),
      )
    )
  );

  // Causes the template to be locked (although content can still be edited)
  // $post_type_object->template_lock = 'all';
}



// <p style="background-image:var(--keyGradient);"> was causing an error within a post template

// Add tags to <html> using the language_attributes hook
function new_language_attributes($lang){

  // Needed to introspect inside
  global $post;

  // Do not attempt to alter the wp-admin area
  if(is_admin()){ return $lang; }

  // Allow the user to add some additional classes (by adding this constant)
  $customstyles = '';
  
  // Allow the theme or plugin to add html classes
  if(defined('CUSTOM_CLASSES_HTML')){ $customstyles .= CUSTOM_CLASSES_HTML; }

  $bodystyles = 'xx-styled xx-styled--html ' . $customstyles;
  $style = '';

  if (function_exists('get_field') && isset($post)) {

     
     $namedstyle= get_post_meta($post->ID, 'poststylemeta_type', true);
     $headlineTypography = get_post_meta(get_the_ID(), 'poststylemeta_headline', true);
     $copyTypography  = get_post_meta(get_the_ID(), 'poststylemeta_copy', true);
     $captionTypography = get_post_meta(get_the_ID(), 'poststylemeta_captions', true);

    /*
      $namedstyle= get_field("poststylemeta_type");
      $headlineTypography = get_field("poststylemeta_headline");
      $copyTypography  = get_field("poststylemeta_copy");
      $captionTypography = get_field("poststylemeta_captions");
      */

      if($headlineTypography !== null && $headlineTypography !== '' && $headlineTypography !== 'inherit'){
        $style .= '--foregroundHeadlineFont: var(--'.$headlineTypography.');';
        $bodystyles .= ' xx-styled--headlinefont-'.$headlineTypography;
      }
      if($copyTypography !== null && $copyTypography !== '' && $copyTypography !== 'inherit'){
        $style .= '--foregroundCopyFont: var(--'.$copyTypography.');';
        $bodystyles .= ' xx-styled--copyfont-'.$copyTypography;
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
      // Include a warning that no style has been set
      $namedstyle= " data-nostyle";
  }

  return $lang . ' class="'.$bodystyles.'"' . $namedstyle . $style;
}

