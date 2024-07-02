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
    // This is the contents of paintbrush-small.svg

    'menu_icon' => 'data:image/svg+xml;base64,' . base64_encode('<svg xmlns="http://www.w3.org/2000/svg" width="18.87" height="15.61" viewBox="0 0 18.87 15.61"><path fill="black" d="M12.46,15s0-2,0-2.22l-1.62-.08A1.45,1.45,0,0,1,9.38,11.3V5.22c0-.2-.13-.73-.47-.81a7.83,7.83,0,0,0-1.6-.17A6.9,6.9,0,0,0,2.45,6.31h0a6.88,6.88,0,0,0-2,4.83v.07A6.9,6.9,0,0,0,7.37,18C9.28,18,12.54,16.91,12.46,15ZM4.14,10A.83.83,0,1,1,5,9.18.83.83,0,0,1,4.14,10Zm-.37,2.23a.8.8,0,0,1,0-1.6.8.8,0,0,1,0,1.6Zm1,2.09a.79.79,0,0,1-.79-.8.79.79,0,0,1,.79-.79.79.79,0,0,1,.8.79A.8.8,0,0,1,4.79,14.33ZM6,8.41A.84.84,0,1,1,6,6.73.84.84,0,0,1,6,8.41Zm3.72,7.84A1.32,1.32,0,1,1,11,14.94,1.32,1.32,0,0,1,9.67,16.25Z" transform="translate(-0.47 -2.43)"/><path fill="black" d="M14.69,4.67V2.43H10.5a.46.46,0,0,0-.47.45V8.7h9.31V2.88a.46.46,0,0,0-.47-.45H17.48V5.57a.47.47,0,0,1-.93,0V2.43h-.93V4.67a.46.46,0,0,1-.47.45.45.45,0,0,1-.46-.45M19.34,9.6H10v.9a1.83,1.83,0,0,0,1.86,1.79h1.4v3.14a1.4,1.4,0,0,0,2.79,0V12.29h1.4a1.82,1.82,0,0,0,1.86-1.79Z" transform="translate(-0.47 -2.43)"/></svg>'),
    // This is the contents of paintbrush-small.svg
    /* 'menu_icon' => 'data:image/svg+xml;base64,' . base64_encode('<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100"><path fill="black" d="M72.2 26.1V15.5H52.4c-1.2 0-2.2.9-2.2 2.1v27.5h44V17.7c0-1.2-1-2.1-2.2-2.1h-6.6v14.8c0 1.2-1 2.1-2.2 2.1s-2.2-1-2.2-2.1V15.5h-4.4v10.6c0 1.2-1 2.1-2.2 2.1-1.2.1-2.2-.9-2.2-2.1m22 23.3h-44v4.3c0 4.7 3.9 8.5 8.8 8.5h6.6V77c0 3.5 3 6.4 6.6 6.4s6.6-2.8 6.6-6.4V62.2h6.6c4.9 0 8.8-3.8 8.8-8.5v-4.3z"/><path fill="black" d="M54.1 64c-1.6 0-3.8-1.4-4.9-2.3.5 1.4 1.3 3.7 1.3 5.4 0 5.4-2.9 12-14.8 17.2C36.7 69 26.4 70.8 24 66c.5-4 2.9-7.5 6.6-9.3-5.7-1-10.9-3.5-15.3-7.3.2 1.7 1 3.3 2.3 4.4-2.9-1.1-5.3-3-7.1-5.5 3.6-11.8 14.2-20 26.5-20.6-3.1 5-5.5 15.1 0 20.3-5.6.9-9.2-6.4-12.3-3.5-4.1 3.9 1.2 9.2 12.5 11.2 5.2.9 9 3.3 10.9 4.8-.3-.7-1.1-2.6-1.1-3.5V28.4c0-.9-.6-3.5-2.2-3.8-2.5-.6-5-.8-7.6-.8-8.7.1-17 3.6-23 9.8-1.5 1.5-2.7 3.1-3.9 4.7-.4.6-.8 1.3-1.2 1.9-.1.2-.2.3-.3.5-2.6 4.8-4.1 10.2-4.1 15.7v.3c.3 18 14.9 32.5 32.8 32.5h.9c.4 0 .7 0 1.1-.1 4.7-.2 9-1.4 13-3.4.3-.1.6-.3.9-.4 0 0 .1 0 .1-.1 1.7-.9 3.3-1.9 4.6-3 2.3-2 3.7-4.5 3.6-7.2 0 0 .1-9.7.1-10.5 0-.1-7.7-.5-7.7-.5z"/></svg>'), */
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

