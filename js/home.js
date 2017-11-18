/*alert('Bonour, cette page est en cours de développement. Celle-ci peut comporter des problèmes d\'affichages sur les' +
    'navigateurs récents. Le 9/');*/
jQuery(document).ready(function( $ ) {
    /* ==========================================================================
     WELCOME PAGE - SECTION WELCOME
     ========================================================================== */
    /**
     * IDEE TWEEN MAX ANIMATION
     *
     * @description Set movements of each svg IDEE childs
     * This animation is infinite.
     *
     * @author Federico Borsoi
     * */

        //Each objects animated in the SVG
    var idee = $('#idee'),
        tete_idee = $('#tete_idee'),
        ampoule = $('#ampoule_idee'),
        tung_al = $('#tung_al_idee'),
        tung_et = $('#tung_et_idee'),
        eteinte = $('#eteinte_idee'),
        allumee = $('#allumee_idee'),
        bras_droit_idee = $('#avant-bras_droit'),
        bras_gauche_idee = $('#avant-bras_gauche_idee');

    //Timeline
    var tl_idee = new TimelineMax;
    tl_idee.to(tete_idee, 0.5, {rotation: 30, transformOrigin: "90% 100%"})
        .to(bras_droit_idee, 0.3, {rotation: 70, transformOrigin: "15% 90%"}, 0.5)
        .to(bras_gauche_idee, 0.3, {rotation: 120, transformOrigin: "90% 30%"}, 0.5)
        .set(tung_al, {className: "+=show"}, 0.7)
        .set(tung_et, {className: "+=hidden"}, 0.7)
        .set(eteinte, {className: "+=hidden"}, 0.7)
        .set(allumee, {className: "+=show"}, 0.7)
        .fromTo(ampoule, 0.15, {rotation: -10, transformOrigin: "50%, 50%"}, {
            rotation: 10,
            transformOrigin: "50%, 50%",
            repeat: -1,
            ease: Power0.easeNone,
            yoyo: true
        });
    //END IDEE TWEEN MAX ANIMATION

    /**
     * REUNION TWEEN MAX ANIMATION
     *
     * @description Set movements of each svg REUNION childs
     * This animation is infinite.
     *
     * @author Federico Borsoi
     * */
        //Each objects animated in the SVG
    var reunion = $('#reunion'),
        bras_reunion = $('#avant-bras_gauche_reunion'),
        ar_bras_reunion = $('#arriere-bras_gauche_reunion'),
        ombre = $('#ombre_reunion'),
        feuille_diagramme = $('#feuille_diagramme_reunion'),
        feuille_maquette = $('#feuille_maquette_reunion');

    //Timeline
    var tl_reunion = new TimelineMax({repeat: -1});
    tl_reunion.to([bras_reunion, ombre], 0.5, {y: -47, x: 30})
        .to(ar_bras_reunion, 0.5, {rotation: -50, x: 10, y: 10, transformOrigin: "0% 20%"}, 0)
        .to([bras_reunion, ombre], 0.5, {y: 0, x: 0}, 0.5)
        .to(ar_bras_reunion, 0.5, {rotation: 0, x: 0, y: 0, transformOrigin: "0% 20%"}, 0.5)
        .to([bras_reunion, ombre], 0.5, {rotation: 40, x: -2, transformOrigin: "12% 80%"})
        .to([bras_reunion, ombre], 0.5, {rotation: 0, x: 2, transformOrigin: "12% 80%"})
        .to([bras_reunion, ombre], 0.5, {rotation: 40, x: -2, transformOrigin: "12% 80%"})
        .to(feuille_diagramme, 0.5, {rotation: -30, transformOrigin: "100% 0%"})
        .to(feuille_diagramme, 0.5, {y: 500})
        .to([bras_reunion, ombre], 0.5, {rotation: 0, transformOrigin: "12% 80%"})
        .to([bras_reunion, ombre], 0.5, {rotation: 10, transformOrigin: "12% 80%"})
        .to([bras_reunion, ombre], 0.5, {rotation: 30, transformOrigin: "12% 80%"})
        .to([bras_reunion, ombre], 0.5, {y: 3, rotation: 50, transformOrigin: "12% 80%"})
        .to([bras_reunion, ombre], 0.5, {y: 0, rotation: 0, transformOrigin: "12% 80%"}, 6.5)
        .to(feuille_diagramme, 0.5, {y: 0, rotation: 0}, 6.5);
    //END REUNION TWEEN MAX ANIMATION

    /**
     * TRAVAIL TWEEN MAX ANIMATION
     *
     * @description Set movements of each svg TRAVAIL childs
     * This animation is infinite.
     *
     * @author Federico Borsoi
     * */
        //Each objects animated in the SVG
    var travail = $('#travail'),
        com_tr = $('#com_travail'),
        tete_com = $('#tete_com_travail'),
        bras_com = $('#bras_com_travail'),
        fb_com = $('#facebook_travail'),
        tw_com = $('#twitter_travail'),
        mus_tr = $('#musique_travail'),
        graph_tr = $('#graphisme_travail'),
        dev_tr = $('#developpement_travail'),
        vol_droit = $('#volume-son-droit_mus_travail'),
        vol_gauche = $('#volume-son-gauche_mus_travail'),
        pied_mus = $('#chaussure-gauche_mus_travail'),
        tete_mus = $('#tete_mus_travail'),
        bras_d_mus = $('#bras-droit_mus_travail'),
        avantb_mus = $('#avant-bras-g_mus_travail'),
        arriereb_mus = $('#arriere-bras-g_mus_travail'),
        main_mus = $('#arriere-main_mus_travail'),
        ill_1 = $('#p1_ill_graph_travail'),
        ill_2 = $('#p4_ill_graph_travail'),
        ill_3 = $('#p5_ill_graph_travail'),
        ill_4 = $('#p6_ill_graph_travail'),
        ill_5 = $('#p2_ill_graph_travail'),
        ill_6 = $('#p8_ill_graph_travail'),
        ill_7 = $('#p9_ill_graph_travail'),
        ill_8 = $('#p10_ill_graph_travail'),
        ill_9 = $('#p7_ill_graph_travail'),
        ill_10 = $('#p3_ill_graph_travail'),
        ill_11 = $('#p11_ill_graph_travail'),
        boule_pap = $('#boule_pap_graph'),
        main_graph = $('#main_graph_travail'),
        bras_graph = $('#bras-droit_graph_travail'),
        brasg_graph = $('#bras-gauche_graph_travail'),
        code_dev = $('#code_dev_travail rect'),
        brasd_dev = $('#bras-droit_dev'),
        brasg_dev = $('#bras-gauche_dev');

    //Timeline
    var tl_travail = new TimelineMax({repeat: -1});
    tl_travail.from(bras_com, 1, {rotation: 150, transformOrigin: "90% 90%"})
        .to(tete_com, 0.3, {rotation: 10, transformOrigin: "50% 100%"}, 1.5)
        .to(tete_com, 0.3, {rotation: 0, transformOrigin: "50% 100%"})
        .set(tw_com, {className: "-=transparent"}, 2.5)
        .to(tete_com, 0.3, {rotation: 10, transformOrigin: "50% 100%"}, 3)
        .to(tete_com, 0.3, {rotation: 0, transformOrigin: "50% 100%"})
        .set(com_tr, {className: "+=transparent"}, 5)
        .set(mus_tr, {className: "-=transparent"}, 5)
        .to(pied_mus, 0.5, {rotation: 10, transformOrigin: "100% 100%", repeat: 10})
        .from(tete_mus, 0.5, {rotation: -5, transformOrigin: "50% 100%", yoyo: true, repeat: 10}, 5)
        .from(bras_d_mus, 0.2, {y: -2, x: 3, repeat: 25, yoyo: true}, 5)
        .to(vol_droit, 0.5, {y: 15}, 5)
        .to(vol_gauche, 0.5, {y: -5}, 5.5)
        .to([avantb_mus, main_mus], 0.5, {y: 2, x: 5}, 5.5)
        .to(arriereb_mus, 0.5, {rotation: -4, transformOrigin: "50%, 0%"}, 5.5)
        .to(vol_droit, 0.5, {y: -5}, 6)
        .to(vol_gauche, 0.5, {y: 15}, 6)
        .to(vol_droit, 0.5, {y: 15}, 6.5)
        .to(vol_gauche, 0.5, {y: 0}, 6.5)
        .to([avantb_mus, main_mus], 0.5, {y: 0, x: 0}, 6.5)
        .to(arriereb_mus, 0.5, {rotation: 0, transformOrigin: "50%, 0%"}, 6.5)
        .to(vol_droit, 0.5, {y: 0}, 7)
        .to(vol_gauche, 0.5, {y: 10}, 7)
        .to(vol_droit, 0.5, {y: 10}, 7.5)
        .to(vol_gauche, 0.5, {y: -2}, 7.5)
        .to([avantb_mus, main_mus], 0.5, {y: 3.5, x: 9}, 8)
        .to(arriereb_mus, 0.5, {rotation: -7, transformOrigin: "50%, 0%"}, 8)
        .to(vol_droit, 0.5, {y: -2}, 8)
        .to(vol_gauche, 0.5, {y: 8}, 8)
        .to(vol_droit, 0.5, {y: 8}, 8.5)
        .to(vol_gauche, 0.5, {y: 20}, 8.5)
        .to(vol_droit, 0.5, {y: 20}, 9)
        .to(vol_gauche, 0.5, {y: -5}, 9)
        .to([avantb_mus, main_mus], 0.5, {y: 4, x: 15}, 9)
        .to(arriereb_mus, 0.5, {rotation: -10, transformOrigin: "50%, 0%"}, 9)
        .to(vol_droit, 0.5, {y: -5}, 9.5)
        .to(vol_gauche, 0.5, {y: 0}, 9.5)
        .to([avantb_mus, main_mus], 0.5, {y: -3, x: -15}, 9.5)
        .to(arriereb_mus, 0.5, {rotation: 9, transformOrigin: "50%, 0%"}, 9.5)
        .to(vol_droit, 0.5, {y: 0})
        .set(mus_tr, {className: "+=transparent"}, 10)
        .set(graph_tr, {className: "-=transparent"}, 10)
        .fromTo(main_graph, 0.4, {x: -20}, {x: 10, repeat: 4, yoyo: true, repeatDelay: 0.5}, 10)
        .fromTo(bras_graph, 0.4, {rotation: 2, transformOrigin: "0% 30%"}, {
            rotation: -5,
            transformOrigin: "0% 30%",
            yoyo: true,
            repeat: 4,
            repeatDelay: 0.5
        }, 10)
        .fromTo(brasg_graph, 0.5, {rotation: 2, transformOrigin: "100% 30%"}, {
            rotation: -2,
            transformOrigin: "100% 30%",
            yoyo: true,
            repeat: 3
        }, 10.4)
        .from(ill_1, 0.1, {opacity: 0}, 10.4)
        .from(ill_2, 0.1, {opacity: 0}, 10.8)
        .from(ill_3, 0.1, {opacity: 0}, 11.2)
        .from(ill_4, 0.1, {opacity: 0}, 11.6)
        .from(ill_5, 0.1, {opacity: 0}, 12)
        .from(boule_pap, 0.6, {x: 6, y: -85, ease: Bounce.easeOut}, 12)
        .from(ill_6, 0.1, {opacity: 0}, 12.4)
        .from(ill_7, 0.1, {opacity: 0}, 12.8)
        .from(ill_8, 0.1, {opacity: 0}, 13.2)
        .from(ill_9, 0.1, {opacity: 0}, 13.6)
        .from(ill_10, 0.1, {opacity: 0}, 14)
        .from(ill_11, 0.1, {opacity: 0}, 14.4)
        .set(graph_tr, {className: "+=transparent"}, 15)
        .set(dev_tr, {className: "-=transparent"}, 15)
        .to(code_dev, 5, {y: -50, ease: Linear.easeNone})
        .to(brasd_dev, 0.2, {
            rotation: -6,
            transformOrigin: "0% 30%",
            repeat: 25,
            yoyo: true,
            ease: Linear.easeNone
        }, 15)
        .from(brasg_dev, 0.2, {
            rotation: 6,
            transformOrigin: "100% 30%",
            repeat: 25,
            yoyo: true,
            ease: Linear.easeNone
        }, 15);
    //END TRAVAIL TWEEN MAX ANIMATION

    /**
     * DEPLOIEMENT TWEEN MAX ANIMATION
     *
     * @description Set movements of each svg DEPLOIEMENT childs
     * This animation is infinite.
     *
     * @author Federico Borsoi
     * */
        //Each objects animated in the SVG
    var deploiement = $('#deploiement'),
        tete_mere = $('#tete_mere'),
        tete_pere = $('#tete-pere'),
        tete_fils = $('#tete_fils'),
        tete_fille1 = $('#tete_fille1'),
        tete_fille2 = $('#tete_fille2'),
        tetes_levees = $('#tetes_levees_depl'),
        bouche_pere = $('#bouche-pere_depl'),
        bouche_mere = $('#bouche-mere_depl'),
        bouche_fils = $('#bouche-fils_depl'),
        bouche_fille1 = $('#bouche-fille1_depl'),
        bouche_fille2 = $('#bouche-fille2_depl'),
        fleche1 = $('#fleche1_depl'),
        fleche2 = $('#fleche2_depl'),
        fleche3 = $('#fleche3_depl');

    //Timeline
    var tl_depl = new TimelineMax({repeat: -1, repeatDelay: 2});
    tl_depl.to(tetes_levees, 0, {opacity: 0}, -1)
        .from([fleche1, fleche2, fleche3], 2, {scale: 4, y: -400}, 1)
        .to(tetes_levees, 0, {opacity: 1}, 3.5)
        //.to([tete_pere, tete_mere, tete_fils, tete_fille1, tete_fille2], 0, {opacity:0},3.5)
        .to([bouche_pere, bouche_mere, bouche_fils, bouche_fille1, bouche_fille2], 0.5, {y: 5}, 4);
    //END DEPLOIEMENT TWEEN MAX ANIMATION

    /*---- SVG SLIDING ANIMATIONS ----*/

    //Set the initial state of animation to active
    var active = "idee";

    //Set the elements to animate
    var animations = $('#animations_home'),
        animation = $('#animations_home').find('div').find('svg');

    var slider_texts = $('#text-slider-container'),
        slider_text = $('#svg-slider-texte').find('.text-slider');

    /**
     * IDEE OPEN
     *
     * @description This function will create the same animation for each sliders (text and svg one)
     * When this function is called, the IDEE slider will be shown with a slide animation
     *
     * @author Federico Borsoi/Jeff Jardon
     */
    function idee_open() {
        var timeLine_svg_idee_animation = new TimelineMax;
        var timeLine_text_slider_idee_animation = new TimelineMax;

        //SVG Slider animation
        timeLine_svg_idee_animation.to(animation, 0.2, {scale: 0.8, transformOrigin: "50% 50%"})
            .to(animations, 0.5, {x: "0%", ease: Power1.easeInOut})
            .add(function () {
                reset_animations()
            })
            .to(animation, 0.2, {scale: 1, transformOrigin: "50% 50%"})
            .add(tl_idee.play(), 1.5);

        //Text Slider animation
        timeLine_text_slider_idee_animation.to(slider_text, 0.2, {scale: 0.8, transformOrigin: "50% 50%"})
            .to(slider_texts, 0.5, {x: "0%", ease: Power1.easeInOut})
            .add(function () {
                reset_animations()
            })
            .to(slider_text, 0.2, {scale: 1, transformOrigin: "50% 50%"})
            .add(tl_idee.play(), 1.5);

        active = "idee";
        //Select state of the navigation (bulls and arrows class)
        select_state();
    }
    //END IDEE OPEN

    /**
     * REUNION OPEN
     *
     * @description This function will create the same animation for each sliders (text and svg one)
     * When this function is called, the REUNION slider will be shown with a slide animation
     *
     * @author Federico Borsoi/Jeff Jardon
     */
    function reunion_open() {
        var timeLine_svg_reunion_animation = new TimelineMax;
        var timeLine_text_slider_reunion_animation = new TimelineMax;

        //SVG Slider animation
        timeLine_svg_reunion_animation.to(animation, 0.2, {scale: 0.8, transformOrigin: "50% 50%"})
            .to(animations, 0.5, {x: "-100%", ease: Power1.easeInOut})
            .add(function () {
                reset_animations()
            })
            .to(animation, 0.2, {scale: 1, transformOrigin: "50% 50%"})
            .add(tl_reunion.play());

        //Text Slider animation
        timeLine_text_slider_reunion_animation.to(slider_text, 0.2, {scale: 0.8, transformOrigin: "50% 50%"})
            .to(slider_texts, 0.5, {x: "-100%", ease: Power1.easeInOut})
            .add(function () {
                reset_animations()
            })
            .to(slider_text, 0.2, {scale: 1, transformOrigin: "50% 50%"})
            .add(tl_idee.play(), 1.5);
        active = "reunion";
        //Select state of the navigation (bulls and arrows class)
        select_state();
    }

    //END REUNION OPEN

    /**
     * TRAVAIL OPEN
     *
     * @description This function will create the same animation for each sliders (text and svg one)
     * When this function is called, the TRAVAIL slider will be shown with a slide animation
     *
     * @author Federico Borsoi/Jeff Jardon
     */
    function travail_open() {
        var timeLine_svg_travail_animation = new TimelineMax;
        var timeLine_text_slider_travail_animation = new TimelineMax;

        //SVG Slider animation
        timeLine_svg_travail_animation.to(animation, 0.2, {scale: 0.8, transformOrigin: "50% 50%"})
            .to(animations, 0.5, {x: "-200%", ease: Power1.easeInOut})
            .add(function () {
                reset_animations()
            })
            .to(animation, 0.2, {scale: 1, transformOrigin: "50% 50%"})
            .add(tl_travail.play());

        //Text Slider animation
        timeLine_text_slider_travail_animation.to(slider_text, 0.2, {scale: 0.8, transformOrigin: "50% 50%"})
            .to(slider_texts, 0.5, {x: "-200%", ease: Power1.easeInOut})
            .add(function () {
                reset_animations()
            })
            .to(slider_text, 0.2, {scale: 1, transformOrigin: "50% 50%"})
            .add(tl_idee.play(), 1.5);
        active = "travail";
        //Select state of the navigation (bulls and arrows class)
        select_state();
    }

    //TRAVAIL OPEN

    /**
     * DEPLOIEMENT OPEN
     *
     * @description This function will create the same animation for each sliders (text and svg one)
     * When this function is called, the DEPLOIEMENT slider will be shown with a slide animation
     *
     * @author Federico Borsoi/Jeff Jardon
     */
    function deploiement_open() {
        var timeLine_svg_deploiement_animation = new TimelineMax;
        var timeLine_text_slider_deploiement_animation = new TimelineMax;

        //SVG Slider animation
        timeLine_svg_deploiement_animation.to(animation, 0.2, {scale: 0.8, transformOrigin: "50% 50%"})
            .to(animations, 0.5, {x: "-300%", ease: Power1.easeInOut})
            .add(function () {
                reset_animations()
            })
            .to(animation, 0.2, {scale: 1, transformOrigin: "50% 50%"})
            .add(tl_depl.play());

        //Text Slider animation
        timeLine_text_slider_deploiement_animation.to(slider_text, 0.2, {scale: 0.8, transformOrigin: "50% 50%"})
            .to(slider_texts, 0.5, {x: "-300%", ease: Power1.easeInOut})
            .add(function () {
                reset_animations()
            })
            .to(slider_text, 0.2, {scale: 1, transformOrigin: "50% 50%"})
            .add(tl_idee.play(), 1.5);
        active = "deploiement";
        //Select state of the navigation (bulls and arrows class)
        select_state();
    }

    //END DEPLOIEMENT OPEN

    /**
     * RESET ANIMATIONS
     *
     * @description When a new state of animation is selected (active var) all animations are reset to start
     * @author Federido Borsoi
     */
    function reset_animations() {
        if (active != "idee") {
            tl_idee.restart();
            tl_idee.pause();
        }
        if (active != "reunion") {
            tl_reunion.restart();
            tl_reunion.pause();
        }
        if (active != "travail") {
            tl_travail.restart();
            tl_travail.pause();
        }
        if (active != "deploiement") {
            tl_depl.restart();
            tl_depl.pause();
        }
    }

    //END RESET ANIMATIONS

    /*---- END SVG SLIDING ANIMATIONS ----*/

    /**
     * SVG SLIDER NAVIGATION CLICK
     *
     * @description When the user choose to click on bulls or next/prev arrows, events are fired to change animation states
     *
     * @author Jeff Jardon
     *
     */
    $('#svg-slider-nav').find('li').find('i').click(function () {
        switch ($(this).attr("id")) {
            case "prev":
                precedent()
                break;
            case "sel_idee":
                idee_open();
                break;
            case "sel_reunion":
                reunion_open();
                break;
            case "sel_travail":
                travail_open();
                break;
            case "sel_deploiement":
                deploiement_open();
                break;
            case "next":
                suivant();
                break;
        }
    });
    //END SVG SLIDER NAVIGATION CLICK

    /**
     * SUIVANT
     *
     * @description This function will check the current state of the animation
     * When this function is called, the animation state will be set with the next one
     *
     * @author Federico Borsoi
     */
    function suivant() {
        if (active == "idee") {
            reunion_open();
        } else if (active == "reunion") {
            travail_open();
        } else if (active == "travail") {
            deploiement_open();
        }
    }

    //END SUIVANT

    /**
     * PRECEDENT
     *
     * @description This function will check the current state of the animation
     * When this function is called, the animation state will be set with the previous one
     *
     * @author Federico Borsoi
     */
    function precedent() {
        if (active == "reunion") {
            idee_open();
        } else if (active == "travail") {
            reunion_open();
        } else if (active == "deploiement") {
            travail_open();
        }
    }

    // END PRECEDENT

    /**
     * SWIPE FUNCTION
     *
     * Reproduce the swipe event on any screens, so sliders can be swiped right, left and down
     * @link http://labs.rampinteractive.co.uk/touchSwipe/demos/
     *
     * @author Jeff Jardon
     */
    $(function () {
        //Enable swiping...
        $("#text-slider-container, #animations_home").swipe({
            //Generic swipe handler for all directions
            swipe: function (event, direction, distance, duration, fingerCount, fingerData) {
                switch (active) {
                    case "idee":
                        if (direction == "left") {
                            reunion_open();
                        }
                        break;
                    case "reunion":
                        if (direction == "right") {
                            idee_open();
                        }
                        if (direction == "left") {
                            travail_open();
                        }
                        break;
                    case "travail":
                        if (direction == "right") {
                            reunion_open();
                        }
                        if (direction == "left") {
                            deploiement_open();
                        }
                        break;
                    case "deploiement":
                        if (direction == "right") {
                            travail_open();
                        }
                        break;
                }
                /* if (direction == "down") {
                 $('html, body').animate({
                 scrollTop: '-=300'
                 }, 500);
                 }
                 if (direction == "up") {
                 $('html, body').animate({
                 scrollTop: '+=300'
                 }, 500);
                 }*/
            },
            allowPageScroll: "vertical",
            //Default is 75px, set to 0 so any distance triggers swipe
            threshold: 75
        });
    });
    //END SWIPE FUNCTION

    /**
     * SELECT STATE
     *
     * @description each time the sliders change slides, bulls and arrow from navigation get active or selected classes
     * @author Federico Borsoi/Jeff Jardon
     */
    function select_state() {
        var bull_idee = $('#sel_idee');
        var bull_reunion = $('#sel_reunion');
        var bull_travail = $('#sel_travail');
        var bull_deploiement = $('#sel_deploiement');
        var prev = $('#prev');
        var next = $('#next')

        bull_idee.removeClass('selected');
        bull_reunion.removeClass('selected');
        bull_travail.removeClass('selected');
        bull_deploiement.removeClass('selected');
        next.removeClass('inactive');
        prev.removeClass('inactive');
        switch (active) {
            case "idee":
                bull_idee.addClass('selected');
                prev.addClass('inactive');
                break;
            case "reunion":
                bull_reunion.addClass('selected');
                break;
            case "travail":
                bull_travail.addClass('selected');
                break;
            case "deploiement":
                bull_deploiement.addClass('selected');
                next.addClass('inactive');
                break;
        }
    }

    //END SELECT STATE

    /* ==========================================================================
     WELCOME PAGE - SECTION PRENSENTATION
     ========================================================================== */
    /**
     * PRESENTATION BACKGROUND ELEMENTS ANIMATION
     *
     * @description trigger a Scroll animation on background elements (losanges)
     * Only displayed on devices greater thant 768 width px (tablet landscape and more)
     * @author Jeff Jardon
     * */
    var controllerPresentationSection = new ScrollMagic.Controller();
    if ($(window).width() > 768) {
        // Declade timelines for each geometrics
        var tl_losange1_presentation = new TimelineMax,
            tl_losange2_presentation = new TimelineMax,
            tl_losange3_presentation = new TimelineMax,
            tl_losange4_presentation = new TimelineMax;

        //Find each geometrics elements in html
        var losange_presentation_1 = $('#presentation-section').find('.losange:nth-child(1)'),
            losange_presentation_2 = $('#presentation-section').find('.losange:nth-child(2)'),
            losange_presentation_3 = $('#presentation-section').find('.losange:nth-child(3)'),
            losange_presentation_4 = $('#presentation-section').find('.losange:nth-child(4)');

        //Set the animation they will execute
        tl_losange1_presentation.to(losange_presentation_1, 0.5, {scale: 3, ease: Linear.easeNone});
        tl_losange2_presentation.to(losange_presentation_2, 0.5, {top: "-100px", ease: Linear.easeNone});
        tl_losange3_presentation.to(losange_presentation_3, 0.5, {top: "-75px", ease: Linear.easeNone});
        tl_losange4_presentation.to(losange_presentation_4, 1, {bottom: "0px", ease: Linear.easeNone})
            .to(losange_presentation_4, 1, {rotation: 180, transformOrigin: "50%",ease: Linear.easeNone}, '-=1');


        //Geometric 1 Scene
        new ScrollMagic.Scene({
            triggerElement: "#presentation-section",
            duration: '400',
            triggerHook: 0.5
        })
            .setTween(tl_losange1_presentation)
            .addIndicators({name: "losange 1 scale"}) // add indicators (requires plugin)
            .addTo(controllerPresentationSection);

        //Geometric 2 Scene
        new ScrollMagic.Scene({
            triggerElement: "#presentation-section",
            duration: "100%",
            triggerHook: 0.5
        })
            .setTween(tl_losange2_presentation)
            .addIndicators({name: "losange 2 translate", indent: 200}) // add indicators (requires plugin)
            .addTo(controllerPresentationSection);

        //Geometric 3 Scene
        new ScrollMagic.Scene({
            triggerElement: "#presentation-section",
            duration: "100%",
            triggerHook: 0.5
        })
            .setTween(tl_losange3_presentation)
            .addIndicators({name: "losange 3 translate", indent: 300}) // add indicators (requires plugin)
            .addTo(controllerPresentationSection);

        //Geometric 4 Scene
        new ScrollMagic.Scene({
            triggerElement: "#presentation-section",
            duration: "100%",
            triggerHook: 0.5
        })
            .setTween(tl_losange4_presentation)
            .addIndicators({name: "losange 4 translate", indent: 500}) // add indicators (requires plugin)
            .addTo(controllerPresentationSection);
    }
    // END PRESENTATION BACKGROUND ELEMENTS ANIMATION

    /**
     * ANIMATION WRITING KEYWORD GUY
     *
     * @author Federico Borsoi
     * */

    var objets_anac1 = $("#items-anac1"),
        costume_anac1 = $("#costume-anac1"),
        avantbras_g_anac1 = $("#avantbras-g-anac1"),
        avantbras_d_anac1 = $("#avantbras-d-anac1"),
        bras_g_anac1 = $("#bras-g-anac1"),
        bras_d_anac1 = $("#bras-d-anac1"),
        bouche_anac1 = $('#bouche-anac1');

    var tl_anac1 = new TimelineMax/*({repeat:-1})*/;

    var comptxP = -600,
        comptxI = 500,
        comptx = comptxP,
        compty = 0,
        compteur = 0,
        quand = 0;

    tl_anac1.to(avantbras_g_anac1, 0.2, {rotation:10, repeat:55, yoyo:true, transformOrigin:"100% 0", ease:Power0.easeNone},0);
    tl_anac1.to(avantbras_d_anac1, 0.2, {rotation:-10, repeat:55, yoyo:true, ease:Power0.easeNone}, 0.2);

    tl_anac1.to(bras_d_anac1, 0.5, {rotation:-5, transformOrigin:"50% 0"}, 2);
    tl_anac1.to(bras_g_anac1, 0.5, {rotation:5}, 4);
    tl_anac1.to(bras_g_anac1, 0.5, {rotation:-5}, 7);
    tl_anac1.to(bras_d_anac1, 0.5, {rotation:0, transformOrigin:"50% 0"}, 10);
    tl_anac1.to(bras_g_anac1, 0.5, {rotation:0}, 11);

    tl_anac1.to(bras_d_anac1, 0.5, {rotation:-10, transformOrigin:"50% 0", y:5}, 12.5);
    tl_anac1.to(bras_g_anac1, 0.5, {rotation:10}, 12.5);
    tl_anac1.to(avantbras_d_anac1, 0.5, {rotation:20, transformOrigin:"0 15%"}, 12.5);
    tl_anac1.to(avantbras_g_anac1, 0.5, {rotation:-20, transformOrigin:"90% 20%"}, 12.5);

    objets_anac1.children().each(function(){
        tl_anac1.to($(this), 3, {scale:3, x: comptx, y: compty, opacity:0}, quand);
        if(compteur%2 == 0){
            comptx=comptxP;
        } else {
            comptx=comptxI;
        }
        if(comptxP<310){
            comptxP +=32;
        }
        if(comptxI>-600){
            comptxI -=42;
        }

        if(compty>-500){
            if(compteur>=27){
                compty +=30;
            } else{
                compty -=30;
            }
        }
        quand += 0.2;
        compteur +=1;
    });

    objets_anac1.children().each(function(){
        tl_anac1.to($(this), 0.2, {opacity:1}, 13);
        tl_anac1.to($(this), 0.5, {scale:0, x:70, y:-130}, 13);
    });
    tl_anac1.to(costume_anac1, 0.3, {opacity:1}, 13.2);

    costume_anac1.children().each(function(){
        tl_anac1.from($(this), 1, {fill:"#8dbc1f"}, 13.2);
    });

    tl_anac1.from(bouche_anac1, 1, {x:80, rotation:-80, transformOrigin:"100% 0%"});

    new ScrollMagic.Scene({
        triggerElement: "#presentation-section #presentation-picture",
        triggerHook: "onEnter"
    })
        .addIndicators({name: "Writing guy", indent: 800}) // add indicators (requires plugin)
        .addTo(controllerPresentationSection)
        .setTween(tl_anac1);


    /* ==========================================================================
     WELCOME PAGE - SECTION FORMATIONS
     ========================================================================== */
    /**
     * ANIMATION FORMATIONS WRITTING LETTERS
     *
     * @description Desktop : Write the content of the formation title on hover
     * Smaller devices : Write the content of the formation title on scroll
     *
     * @author Jeff Jardon
     * */

        //Declare Timelines
    var tl_writting_letters_formations_licence = new TimelineMax;
    var tl_writting_letters_formations_master1 = new TimelineMax;
    var tl_writting_letters_formations_master2 = new TimelineMax;

    //Find each html elements to animate
    var element = $('#formations-section').find('.formations');
    var writting_letters = element.find('span.writing-letter');

    writting_letters.each(function (index) {
        //Replace each characters with <span>character</span>
        $(this).html($(this).text().replace(/(\w)/g, "<span>$&</span>"));

        switch (index) {
            case 0 :
                tl_writting_letters_formations_licence.staggerFrom($(this).find('span'), 0.1, {autoAlpha: 0, rotation: 90, scale: 3, display: "none"}, 0.05);
                tl_writting_letters_formations_licence.stop();
                break;
            case 1 :
                tl_writting_letters_formations_master1.staggerFrom($(this).find('span'), 0.1, {autoAlpha: 0, rotation: 90, scale: 3, display: "none"}, 0.05);
                tl_writting_letters_formations_master1.stop();
                break;
            case 2 :
                tl_writting_letters_formations_master2.staggerFrom($(this).find('span'), 0.1, {autoAlpha: 0, rotation: 90, scale: 3, display: "none"}, 0.05);
                tl_writting_letters_formations_master2.stop();
                break;
        }
    });

    //Display the animation on mouse hover and mouse out on devices greater than 1024px
    if ($(window).width() > 1024) {
        element.find(".formation").mouseover(function (e) {
            switch ($(this).index()) {
                case 0 :
                    //$(this).find("span.writing-letter > span").last().append("&nbsp;");
                    tl_writting_letters_formations_licence.play();
                    break;
                case 1 :
                    tl_writting_letters_formations_master1.play();
                    break;
                case 2 :
                    tl_writting_letters_formations_master2.play();
                    break;
            }
        })

        element.find(".formation").mouseout(function (e) {
            switch ($(this).index()) {
                case 0 :
                    tl_writting_letters_formations_licence.reverse();
                    break;
                case 1 :
                    tl_writting_letters_formations_master1.reverse();
                    break;
                case 2 :
                    tl_writting_letters_formations_master2.reverse();
                    break;
            }
        })
        //Display the animation on scroll on devices lesser than 1024px
    } else {
        var Scroll_formations_section = new ScrollMagic.Controller();

        //Licence
        new ScrollMagic.Scene({
            triggerElement: '.formation:nth-of-type(1)',
            duration: '33%',
            triggerHook: 0.5
        })
            .setClassToggle('.formation:nth-of-type(1) .filter', 'activeScroll')//Addclass to .navbar
            .setTween(tl_writting_letters_formations_licence.play())
            .addIndicators({name: 'licence 3 anim', colorTrigger: 'red', indent: 200, colorStart: '#75CC395'})
            .addTo(Scroll_formations_section);


        //Master 1
        new ScrollMagic.Scene({
            triggerElement: '.formation:nth-of-type(2)',
            duration: '33%',
            triggerHook: 0.5
        })
            .setClassToggle('.formation:nth-of-type(2) .filter', 'activeScroll')//Addclass to .navbar
            .setTween(tl_writting_letters_formations_master1.play())
            .addIndicators({name: 'Master 1 anim', colorTrigger: 'red', indent: 200, colorStart: '#75CC395'})
            .addTo(Scroll_formations_section);


        //Master 2
        new ScrollMagic.Scene({
            triggerElement: '.formation:nth-of-type(3)',
            duration: '33%',
            triggerHook: 0.5
        })
            .setClassToggle('.formation:nth-of-type(3) .filter', 'activeScroll')//Addclass to .navbar
            .setTween(tl_writting_letters_formations_master2.play())
            .addIndicators({name: 'Master 2 anim', colorTrigger: 'red', indent: 200, colorStart: '#75CC395'})
            .addTo(Scroll_formations_section);
    }

    /* ==========================================================================
     WELCOME PAGE - SECTION PROJECTS
     ========================================================================== */
    /**
     * PROJECTS BACKGROUND ELEMENTS ANIMATION
     *
     * @description trigger a Scroll animation on background elements (losanges)
     * Only displayed on devices greater thant 768 width px (tablet landscape and more)
     * @author Jeff Jardon
     * */
    var controllerProjectsSection = new ScrollMagic.Controller();
    if ($(window).width() > 768) {
        // Declade timelines for each geometrics
        var tl_losange1_projects = new TimelineMax,
            tl_losange2_projects = new TimelineMax,
            tl_losange3_projects = new TimelineMax;


        //Find each geometrics elements in html
        var losange_projects_1 = $('#projects-section').find('.losange:nth-child(1)'),
            losange_projects_2 = $('#projects-section').find('.losange:nth-child(2)'),
            losange_projects_3 = $('#projects-section').find('.losange:nth-child(3)');

        //Set the animation they will execute
        tl_losange1_projects.to(losange_projects_1, 0.5, {top: "-100px", ease: Linear.easeNone});
        tl_losange2_projects.to(losange_projects_2, 0.5, {top: "200px", ease: Linear.easeNone});
        tl_losange3_projects.to(losange_projects_3, 1, {bottom: "-300px", right: "60%", ease: Linear.easeNone})
            .to(losange_projects_3, 1, {css:{scaleX:0.1,scaleY:0.1, rotation:30}, ease:Power3.easeOut}, '-=1');

        //Geometric 1 Scene
        new ScrollMagic.Scene({
            triggerElement: "#projects-section",
            duration: '400',
            triggerHook: 0.5
        })
            .setTween(tl_losange1_projects)
            .addIndicators({name: "losange 1 scale"}) // add indicators (requires plugin)
            .addTo(controllerProjectsSection);

        //Geometric 2 Scene
        new ScrollMagic.Scene({
            triggerElement: "#projects-section",
            duration: "100%",
            triggerHook: 0.5
        })
            .setTween(tl_losange2_projects)
            .addIndicators({name: "losange 2 translate", indent: 200}) // add indicators (requires plugin)
            .addTo(controllerProjectsSection);

        //Geometric 3 Scene
        new ScrollMagic.Scene({
            triggerElement: "#projects-section",
            duration: "100%",
            triggerHook: 0.5
        })
            .setTween(tl_losange3_projects)
            .addIndicators({name: "losange 3 translate", indent: 300}) // add indicators (requires plugin)
            .addTo(controllerProjectsSection);
    }
    // END PROJECTS BACKGROUND ELEMENTS ANIMATION

    /* ==========================================================================
     WELCOME PAGE - SECTION NEWS
     ========================================================================== */

	//See general.js

    /* ==========================================================================
     WELCOME PAGE - SECTION professional
     ========================================================================== */
    /**
     * professional BACKGROUND ELEMENTS ANIMATION
     *
     * @description trigger a Scroll animation on background elements (losanges)
     * Only displayed on devices greater thant 768 width px (tablet landscape and more)
     * @author Jeff Jardon
     * */
    var controllerProfessionalSection = new ScrollMagic.Controller();
    if ($(window).width() > 768) {
        // Declade timelines for each geometrics
        var tl_losange1_professional = new TimelineMax,
            tl_losange2_professional = new TimelineMax,
            tl_losange3_professional = new TimelineMax;


        //Find each geometrics elements in html
        var losange_professional_1 = $('#professional-section').find('.losange:nth-child(1)'),
            losange_professional_2 = $('#professional-section').find('.losange:nth-child(2)'),
            losange_professional_3 = $('#professional-section').find('.losange:nth-child(3)');

        //Set the animation they will execute
        tl_losange1_professional.to(losange_professional_1, 0.5, {top: "-100px", ease: Linear.easeNone});
        tl_losange2_professional.to(losange_professional_2, 0.5, {top: "200px", ease: Linear.easeNone});
        tl_losange3_professional.to(losange_professional_3, 0.5, {top: "60%", ease: Linear.easeNone});

        //Geometric 1 Scene
        new ScrollMagic.Scene({
            triggerElement: "#professional-section",
            duration: '400',
            triggerHook: 0.5
        })
            .setTween(tl_losange1_professional)
            .addIndicators({name: "losange 1 scale"}) // add indicators (requires plugin)
            .addTo(controllerProfessionalSection);

        //Geometric 2 Scene
        new ScrollMagic.Scene({
            triggerElement: "#professional-section",
            duration: "100%",
            triggerHook: 0.5
        })
            .setTween(tl_losange2_professional)
            .addIndicators({name: "losange 2 translate", indent: 200}) // add indicators (requires plugin)
            .addTo(controllerProfessionalSection);

        //Geometric 3 Scene
        new ScrollMagic.Scene({
            triggerElement: "#professional-section",
            duration: "100%",
            triggerHook: 0.5
        })
            .setTween(tl_losange3_professional)
            .addIndicators({name: "losange 3 translate", indent: 300}) // add indicators (requires plugin)
            .addTo(controllerProfessionalSection);
    }
    // END professional BACKGROUND ELEMENTS ANIMATION
},jQuery);
