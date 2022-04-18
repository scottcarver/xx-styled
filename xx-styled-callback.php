<?php
// This serverside equivilent allows us to get the attribues in a PHP render
$string = file_get_contents("/home/michael/test.json");
$json_a = json_decode($string, true);

 register_block_type('xx/styled', array(
            'render_callback' => 'xxstyled_callback',
            'attributes' => array(
                'images' => array(
                    'type' => 'array'
                )
            )
        )
    );

function xxstyled_callback( $attributes ){
    $images = $attributes[ 'images' ];
    return '<div><!-- put image gallery here--></div>';
}