<?php
/**
 * Scripts and Styles loads
 */
require_once(__DIR__ . '/includes/config/theme-setup.php');

/**
 * Custom Post Types
 */
require_once(__DIR__ . '/includes/post-type/projects-post-types.php');
require_once(__DIR__ . '/includes/post-type/compagny-post-types.php');
require_once(__DIR__ . '/includes/post-type/school-subject-post-type.php');

/**
 * wp-job-manager plugin - Customizing and overriding
*/
require_once(__DIR__ . '/includes/wp-job-manager/customize-wp-job-manager.php');

/**
 * Users Roles
 */
require_once(__DIR__ . '/includes/users-managment/user-roles.php');

/**
 * Theme administration
 */

/**
 * Register and Login custom page
 */
require_once(__DIR__ . '/includes/auth/register-user.php');
require_once (__DIR__ . '/includes/auth/login-user.php');

/**
 * Administration
 */
require_once(__DIR__ . '/includes/admin/admin-settings.php');









