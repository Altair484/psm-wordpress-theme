<?php
/**
 * Declare Styles and Scripts
 */
function wp_enqueue_styles_and_scripts(){
	/*Register and enqueue Styles*/
	wp_register_style('theme-psm-bootstrap-min', get_template_directory_uri().'/css/bootstrap.min.css' );
	wp_register_style('theme-psm-font-awesome-min', get_template_directory_uri().'/css/font-awesome.min.css' );
	wp_register_style('theme-psm-main', get_template_directory_uri().'/css/main.css' );
	wp_enqueue_style('theme-psm-bootstrap-min');
	wp_enqueue_style('theme-psm-font-awesome-min');
	wp_enqueue_style('theme-psm-main');
	/*register and enqueue Scripts*/
	wp_register_script( 'theme-psm-jquery-min', get_template_directory_uri().'/js/vendor/jquery-3.2.1.min.js','','1.1', true );
	wp_register_script( 'theme-psm-touch-swipe-min', get_template_directory_uri().'/js/vendor/jquery.touchSwipe.min.js','','1.1', true );
	wp_register_script( 'theme-psm-tweenmax-min', get_template_directory_uri().'/js/vendor/tweenmax.min','','1.1', true );
	wp_register_script( 'theme-psm-tweenMax-min', get_template_directory_uri().'/js/vendor/scrollMagic.min.js','','1.1', true );
	wp_register_script( 'theme-psm-animation-gsap-min', get_template_directory_uri().'/js/vendor/animation.gsap.min.js','','1.1', true );
	wp_register_script( 'theme-psm-addIndicators.min.js', get_template_directory_uri().'/js/vendor/debug.addIndicators.min.js','','1.1', true );
	wp_register_script( 'theme-psm-general.js', get_template_directory_uri().'/js/general.js','','1.1', true );
	wp_register_script( 'theme-psm-menu.js', get_template_directory_uri().'/js/menu.js','','1.1', true );
	wp_enqueue_script( 'theme-psm-jquery-min');
	wp_enqueue_script( 'theme-psm-touch-swipe-min');
	wp_enqueue_script( 'theme-psm-tweenmax-min');
	wp_enqueue_script( 'theme-psm-tweenMax-min');
	wp_enqueue_script( 'theme-psm-animation-gsap-min');
	wp_enqueue_script( 'theme-psm-addIndicators.min.js');
	wp_enqueue_script( 'theme-psm-general.js');

	if( is_home() || is_front_page()){
		wp_register_script( 'theme-psm-home.js', get_template_directory_uri().'/js/home.js','','1.1', true );
		wp_enqueue_script( 'theme-psm-home.js');
	}else if( is_page('master') ){
		wp_register_script( 'theme-psm-master.js', get_template_directory_uri().'/js/master.js','','1.1', true );
		wp_enqueue_script( 'theme-psm-master.js');
	}
	wp_enqueue_script( 'theme-psm-menu.js');
}
add_action( 'wp_enqueue_scripts', 'wp_enqueue_styles_and_scripts' );

/**
 * Let WordPress manage the document title.
 * By adding theme support, we declare that this theme does not use a
 * hard-coded <title> tag in the document head, and expect WordPress to
 * provide it for us.
 */
add_theme_support( 'title-tag' );

/**
 * Enable support for Post Thumbnails on posts and pages.
 *
 * @link https://developer.wordpress.org/themes/functionality/featured-images-post-thumbnails/
 */
add_theme_support( 'post-thumbnails' );

/**
 * This theme uses wp_nav_menu() in two locations.
 */
register_nav_menus( array(
	'top'    => __( 'Top Menu', 'theme-psm' )
));

/**
 * Get nav items to do specific modifications on each items in navbar
 */
function nav_items( $items, $menu, $args )
{
	foreach( $items as $item )
	{
		if( 'Master' == $item->title){
			$item->url .= '?formation=m1';
		}

		if((is_page('master') || is_page('licence')) && 'Formations' == $item->title){
			$item->classes = 'current-menu-item';
		}

		if((is_page('connexion') || is_page('inscription')) && 'dropdownLogs' == $item->classes[0]){
			$item->classes = 'current-menu-item';
		}

	}
	return $items;
}
add_filter( 'wp_get_nav_menu_items','nav_items', 11, 3 );

/**
 * Switch default core markup for search form, comment form, and comments
 * to output valid HTML5.
 */
add_theme_support( 'html5', array(
	'comment-form',
	'comment-list',
	'gallery',
	'caption',
) );

/**
 * Enable support for Post Formats.
 *
 * See: https://codex.wordpress.org/Post_Formats
 */
add_theme_support( 'post-formats', array(
	'aside',
	'image',
	'video',
	'quote',
	'link',
	'gallery',
	'audio',
) );

// Add theme support for Custom Logo.
add_theme_support( 'custom-logo', array(
	'width'       => 250,
	'height'      => 250,
	'flex-width'  => true,
) );

// Add theme support for selective refresh for widgets.
add_theme_support( 'customize-selective-refresh-widgets' );
