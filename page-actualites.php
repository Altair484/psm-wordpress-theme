<?php
/*
* Template Name: Blog
*/

get_header();

$wp_query = new WP_Query();
$wp_query->query('&paged='.$paged);
$max_post_per_page = get_option( 'posts_per_page' );
?>

<section id="page-news-section-news">
	<div class="row last-news">
		<?php

		while ($wp_query->have_posts()) : $wp_query->the_post();
		if ($wp_query->current_post  == $max_post_per_page) break;?>

		<article class="news col-12 col-sm-6 col-xl-3
			<?php /*($wp_query->current_post <= 1) ? _e('col-lg-5') : _e('col-lg	-3')*/?>
			<?php /*($wp_query->current_post == 0 || $wp_query->current_post == 2) ? _e('offset-lg-1') : ''*/?>
			no-padding">

			<div class="thumbnail">
				<figure>
					<a href="<?php the_permalink()?>">
						<img src="http://via.placeholder.com/960x540" alt="">
					</a>
				</figure>
				<span class="line"></span>
			</div>
			<div class="text-news-container col-12">
				<h3><?php the_title() ?></h3>
				<p class="date">9 octobre 2017</p>
				<p class="excerpt"><?php echo get_the_excerpt() ?></p>
			</div>
		</article>
		<?php endwhile; ?>


	</div>
	<div class="row">
		<?php if ($paged > 1) { ?>
			<nav id="nav-posts">
				<div class="prev"><?php next_posts_link('&laquo; Previous Posts'); ?></div>
				<div class="next"><?php previous_posts_link('Newer Posts &raquo;'); ?></div>
			</nav>
		<?php } else { ?>
			<nav id="nav-posts">
				<div class="prev"><?php next_posts_link('&laquo; Previous Posts'); ?></div>
			</nav>
		<?php } ?>
	</div>


	<?php wp_reset_postdata(); ?>
</section>
<?php get_footer() ?>
