<?php

// Run a function to register the block when WP's "init" action hook is run
add_action( 'init', 'xxstyled_block' );

// Registers the block using the metadata loaded from the `block.json` file.
function xxstyled_block() { 
	register_block_type( __DIR__ . '/build' );
}