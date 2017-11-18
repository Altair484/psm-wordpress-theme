<?php
//CREATE USER ROLE
/*$result = add_role(
    'basic_contributor',
    __( 'Basic Contributor' ),
    array(
        'read'         => true,  // true allows this capability
        'edit_posts'   => true,
        'delete_posts' => false, // Use false to explicitly deny
    )
);
if ( null !== $result ) {
    echo 'Yay! New role created!';
}
else {
    echo 'Oh... the basic_contributor role already exists.';
}

function add_roles_on_plugin_activation() {
    add_role( 'custom_role', 'Custom Subscriber', array( 'read' => true, 'level_0' => true ) );
}
register_activation_hook( __FILE__, 'add_roles_on_plugin_activation' );

//Delete USER ROLE
/*if( get_role('basic_contributor') ){
    remove_role( 'basic_contributor' );
}*/