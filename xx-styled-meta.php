<?php
// Style Meta Keys used in Style Sidebar
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

/*
function myprefix_register_meta() {
    register_meta('post', 'post_preferredstyle', array(
        'show_in_rest' => true,
        'single' => true,
        'type' => 'string',
    ));
}


add_action('init', 'myprefix_register_meta');
*/