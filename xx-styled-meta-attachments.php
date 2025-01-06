<?php
// Add metabox for geodatas
function add_geodata_metabox() {
    add_meta_box(
        'geodata_metabox',
        'Geodata',
        'render_geodata_metabox',
        'attachment',
        'normal',
        'high'
    );
}
add_action('add_meta_boxes', 'add_geodata_metabox');

// Render the content of the geodata metabox
function render_geodata_metabox($post) {

    /*
    // Make sure it's an audio attachment
    $mime_type = get_post_mime_type($post->ID);
    if (strpos($mime_type, 'audio') === false) {
        echo 'This metabox is only available for audio attachments.';
        return;
    }
        */

    // Get existing values
    $translation_provider = get_post_meta($post->ID, '_translation_provider', true);
    $status = get_post_meta($post->ID, '_geodata_status', true);
    $request_transcript = get_post_meta($post->ID, '_request_transcript', true);
    $get_transcript = get_post_meta($post->ID, '_get_transcript', true);
    

    // Output form fields
    wp_nonce_field(basename(__FILE__), 'geodata_metabox_nonce');

    // echo '<label for="translation_provider">Translation Provider:</label>';
    // echo '<input type="text" id="translation_provider" name="translation_provider" value="' . esc_attr($translation_provider) . '" /><br />';

    echo '<label for="translation_provider">Provider:</label>';
    echo '<select id="translation_provider" name="translation_provider">';
    
    $translation_providers = array('Happy Scribe', 'Rev', 'Temi', 'Descript');
    foreach ($translation_providers as $provider) {
        $selected = selected($provider, $translation_provider, false);
        echo '<option value="' . esc_attr($provider) . '" ' . $selected . '>' . esc_html($provider) . '</option>';
    }

    echo '</select><br /><br />';

    // echo '<label for="geodata_status">Status:</label>';
    // echo '<input type="text" id="geodata_status" name="geodata_status" value="' . esc_attr($status) . '" /><br />';

    echo '<label>Status:</label><br />';
    $status_options = array('Pending Transcription', 'Pending Export', 'Completed', 'Expired');
    foreach ($status_options as $option) {
        $checked = checked($option, $status, false);
        echo '<label><input type="radio" name="geodata_status" value="' . esc_attr($option) . '" ' . $checked . '> ' . esc_html($option) . '</label><br />';
    }
    ?>

    <br /><hr /><br />
    <style type="text/css">
        .usable-statusflow{
            position:relative;
        }
        .usable-statusflow__process{
            display:flex;
            flex-direction:column;
            width:100%;
            max-width:300px;
        }
        .usable-statusflow__step{
            padding:5px 10px;
            /*
            width:20%;
            padding:5px 0px;
            writing-mode: vertical-rl;
            display:flex;
            align-items:center;
            border:solid 1px red; */
        }

        .usable-statusflow__range{
         
        }
     </style>

    <div class="usable-statusflow">
        <div class="usable-statusflow__header">
            <h3 style="padding: 0 10px;text-decoration: underline;">Transcription Process:</h3>
        </div>
        <div class="usable-statusflow__process">
            <div class="usable-statusflow__step"><span>Requested</span></div>
            <div class="usable-statusflow__step" style="background:#3582c4;color:white;"><span>Transcript Processing</span></div>
            <div class="usable-statusflow__step"><span>Exporting</span></div>
            <div class="usable-statusflow__step"><span>Exported</span></div>
            <div class="usable-statusflow__step"><span>Completed</span></div>
        </div>
    </div>
    <?php
    echo '<br />';

    echo '<label for="request_transcript">Request Transcript:</label>';
    echo '<input type="text" id="request_transcript" name="request_transcript" value="' . esc_attr($request_transcript) . '" /><br />';

    echo '<br />';

    echo '<label for="get_transcript">Get Transcript:</label>';
    echo '<input type="text" id="get_transcript" name="get_transcript" value="' . esc_attr($get_transcript) . '" /><br />';
}

// Save the geodata metabox data
function save_geodata_metabox($post_id) {

    // Verify nonce
    if (!isset($_POST['geodata_metabox_nonce']) || !wp_verify_nonce($_POST['geodata_metabox_nonce'], basename(__FILE__))) {
        return $post_id;
    }

   
    // Check if it's not an autosave
    if (defined('DOING_AUTOSAVE') && DOING_AUTOSAVE) {
        return $post_id;
    }

    // Check post type and permissions
    if ('attachment' === get_post_type($post_id) && current_user_can('edit_post', $post_id)) {
        // Save data
        update_post_meta($post_id, '_translation_provider', sanitize_text_field($_POST['translation_provider']));
        update_post_meta($post_id, '_geodata_status', sanitize_text_field($_POST['geodata_status']));
        update_post_meta($post_id, '_request_transcript', sanitize_text_field($_POST['request_transcript']));
        update_post_meta($post_id, '_get_transcript', sanitize_text_field($_POST['get_transcript']));
    }
}
add_action( 'edit_attachment', 'save_geodata_metabox', 10, 1 );

