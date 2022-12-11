<?php
// Style Meta Keys used in Style Sidebar when WP's "init" action hook is run
add_action('init', 'xxstyled_registermeta');

// Register meta fields used in the SidebarPlugin
function xxstyled_registermeta() {

    register_meta('post', 'poststylemeta_type', array(
        'show_in_rest' => true,
        'single' => true,
        'type' => 'string',
    ));
    
    register_meta('post', 'poststylemeta_headline', array(
        'show_in_rest' => true,
        'single' => true,
        'type' => 'string',
    ));
    
    register_meta('post', 'poststylemeta_copy', array(
        'show_in_rest' => true,
        'single' => true,
        'type' => 'string',
    ));
    
    register_meta('post', 'poststylemeta_captions', array(
        'show_in_rest' => true,
        'single' => true,
        'type' => 'string',
    ));
}