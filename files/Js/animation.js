$(document).ready(function () {

    ani = $(".ani_obj")
    ani_p = $(".ani_add_text")

    /* -------------- Animation UI ---------------- */
    $(".slideAnimeSettings").click(function () {
        $(".slideDownAnimeSettings").slideToggle()
    })
    $(".slideAnimeSetChangesFilter").click(function () {
        $(".slideAnimeSetChangesFilterS").slideToggle()
    })
    $(".slideAnimeSetChangesGenreal").click(function () {
        $(".slideAnimeSetChangesGeneralS").slideToggle()
    })
    $(".slideAnimeSetChangesDimn").click(function () {
        $(".slideAnimeSetChangesDimnS").slideToggle()
    })
    $(".slideAnimeSetChangesBG").click(function () {
        $(".slideAnimeSetChangesBGS").slideToggle()
    })
    $(".slideAnimeSetChangesText").click(function () {
        $(".slideAnimeSetChangesTextS").slideToggle()
    })
    $(".slideAnimeSetChangesBor").click(function () {
        $(".slideAnimeSetChangesBorS").slideToggle()
    })
    $(".slideAnimeSetChangesTrns").click(function () {
        $(".slideAnimeSetChangesTrnsS").slideToggle()
    })
            
                /* ------------- Animation Track Control ---------------- */

    var play = $(".play_anime")
    track_loader = $(".track_loader")

    play.click(function () {
        
        if (v(".AnimeDurationSec") < 10) {
            $(".DisplayMin").text(0 + v(".AnimeDurationSec"))
        }
        else {
            $(".DisplayMin").text(v(".AnimeDurationSec"))
        }
        
        if (v(".AnimeDurationMiniSec") < 10) {
            $(".DisplaySec").text(0 + v(".AnimeDurationMiniSec"))
        }
        else {
            $(".DisplaySec").text(v(".AnimeDurationMiniSec"))
        }
        console.log("loaderAnimation " + v(".AnimeDurationSec") + "." + v(".AnimeDurationMiniSec") + "s " + v(".AnimationCount") + " linear " + v(".AnimeDelay") + "s")
        track_loader.css({
            animation: "loaderAnimation " + v(".AnimeDurationSec") + "." + v(".AnimeDurationMiniSec") + "s " + v(".AnimationCount") + " linear " + v(".AnimeDelay") + "s",
            animationPlayState: 'running'
        })
        
        console.log('objectAnimation ' + v(".AnimeDurationSec") + '.' + v(".AnimeDurationMiniSec") + 's ' + v(".AnimationCount") + ' ' + v(".AnimationFunction") + ' ' + v(".AnimeDelay") + 's ' + v(".AnimationDirection") + ' ' + v(".AnimationFillMode") + ' ')
        
        $(".obj").css({
            animation: 'objectAnimation ' + v(".AnimeDurationSec") + '.' + v(".AnimeDurationMiniSec") + 's ' + v(".AnimationCount") + ' ' + v(".AnimationFunction") + ' ' + v(".AnimeDelay") + 's ' + v(".AnimationDirection") + ' ' + v(".AnimationFillMode") + ' ',
            animationPlayState:'running'
        })
    })

    /*$(".AnimeSet").change(function () {
        $(".obj").css({
            animation: 'objectAnimation ' + v(".AnimeDurationSec") + '.' + v(".AnimeDurationMiniSec") + 's ' + v(".AnimationCount") + ' ' + v(".AnimationFunction") + ' ' + v(".AnimeDelay") + 's ' + v(".AnimationDirection") + ' ' + v(".AnimationFillMode") + ' ',
            animationPlayState:'paused'
        })
        track_loader.css({
            animation: "loaderAnimation " + v(".AnimeDurationSec") + "." + v(".AnimeDurationMiniSec") + "s " + v(".AnimationCount") + " linear " + v(".AnimeDelay") + "s",
            animationPlayState:'paused'
        })
    })
    $(".AnimeSet").on("input", function () {
        $(".obj").css({
            animation: 'objectAnimation ' + v(".AnimeDurationSec") + '.' + v(".AnimeDurationMiniSec") + 's ' + v(".AnimationCount") + ' ' + v(".AnimationFunction") + ' ' + v(".AnimeDelay") + 's ' + v(".AnimationDirection") + ' ' + v(".AnimationFillMode") + ' ',
            animationPlayState: 'paused'
        })
        track_loader.css({
            animation: "loaderAnimation " + v(".AnimeDurationSec") + "." + v(".AnimeDurationMiniSec") + "s " + v(".AnimationCount") + " linear " + v(".AnimeDelay") + "s",
            animationPlayState: 'paused'
        })
    })*/


    
                         /* ------------- Animation Preview ---------------- */

    // inputs

    $('.oth').click(function(){
        $(".parent_ani_obj,.ani_p,.ani_add_text").css({visibility:'hidden'})
    })

    $('.animation_uni').click(function(){
        //$(".parent_ani_obj,.ani_p,.ani_add_text").css({visibility:'visible'})
    })

    

    $(".ani_in").on("input", function () {
        $("body").append("<style>@keyframes objectAnimation { to { opacity:" + v(".ani_op_r") + ";box-shadow:" + ani_bs_ty + " " + p(".ani_bs1") + " " + p(".ani_bs2") + " " + p(".ani_bs3") + " " + p(".ani_bs4") + " " + v(".ani_bxclr") + ";filter:brightness(" + v('.ani_filter_brightness') + ") blur(" + v(".ani_filter_blur") + "px) sepia(" + v(".ani_filter_sepia") + ") contrast(" + v(".ani_filter_contrast") + ") grayscale(" + v(".ani_filter_gray") + ") invert(" + v(".ani_filter_invert") + ") hue-rotate(" + v(".ani_filter_hue_rotate") + "deg) saturate(" + v(".ani_filter_saturate") + ");brightness(" + v('.ani_filter_brightness') + ") blur(" + v(".ani_filter_blur") + "px) sepia(" + v(".ani_filter_sepia") + ") contrast(" + v(".ani_filter_contrast") + ") grayscale(" + v(".ani_filter_gray") + ") invert(" + v(".ani_filter_invert") + ") hue-rotate(" + v(".ani_filter_hue_rotate") + "deg) saturate(" + v(".ani_filter_saturate") + ");height:" + p(".ani_box_h") + ";width:" + p(".ani_box_w") + ";background:" + v(".ani_bgcolor") + ";color:" + v(".ani_txtcolor") + " } }</style>")
        
        ani.css({
            // general
            opacity: v('.ani_op_r'),
            //filter
            filter: 'brightness(' + v('.ani_filter_brightness') + ') blur(' + v(".ani_filter_blur") + 'px) sepia(' + v(".ani_filter_sepia") + ') contrast(' + v(".ani_filter_contrast") + ') grayscale(' + v(".ani_filter_gray") + ') invert(' + v(".ani_filter_invert") + ') hue-rotate(' + v(".ani_filter_hue_rotate") + 'deg) saturate(' + v(".ani_filter_saturate") + ')',
            //dimensions
            height: p(".ani_box_h"),
            width: p(".ani_box_w"),
            //background...
            //border
            borderTop: p(".ani_btwidth") + ' ' + v(".ani_tbor_style") + ' ' + v(".ani_btcolor"),
            borderLeft: p(".ani_blwidth") + ' ' + v(".ani_lbor_style") + ' ' + v(".ani_blcolor"),
            borderBottom: p(".ani_bbwidth") + ' ' + v(".ani_bbor_style") + ' ' + v(".ani_bbcolor"),
            borderRight: p(".ani_brwidth") + ' ' + v(".ani_rbor_style") + ' ' + v(".ani_brcolor"),
            borderRadius: $(".ani_btlrad").val() + rad_unit_ani + ' ' + $(".ani_btrrad").val() + rad_unit_ani + ' ' + $(".ani_bbrrad").val() + rad_unit_ani + ' ' + $(".ani_bblrad").val() + rad_unit_ani,
            //transform
            transform: 'skew(' + v(".ani_skewX") + 'deg,' + v(".ani_skewY") + 'deg) scale3d(' + v(".ani_scaleX") + ',' + v(".ani_scaleY") + ',' + v(".ani_scaleZ") + ') rotateX(' + v(".ani_r_X") + 'deg) rotateY(' + v(".ani_r_Y") + 'deg) rotateZ(' + v(".ani_r_Z") + 'deg)',
        })
        ani_p.css({
            position:'relative',
            color: v(".ani_txtcolor"),
            letterSpacing: v(".ani_let_sp") + 'px',
            background:v(".ani_txtbgcolor"),
            lineHeight: p(".ani_line_hght"),
            wordSpacing: p(".ani_w_spacing"),
            position:'relative',
            top: v(".ani_optop") + 'px',
            left: v(".ani_opleft") + 'px',
            fontSize: p(".ani_font_size"),
            opacity:v('.ani_top'),
            background:v('.ani_txtbgcolor'),
            textShadow: $(".ani_tbs1").val() + 'px ' + $(".ani_tbs2").val() + 'px ' + $(".ani_tbs3").val() + 'px ' + $(".ani_tbxclr").val(),
            top:p('.ani_optop'),
            left:p('.ani_opleft'),
            textAlign:v('.ani_txt_align'),
            fontFamily:v('.ani_txt_font'),
            fontStyle:v('.ani_f_s'),
            textTransform:v('.ani_txt_cs')
        })
    })
    var ani_bs_ty = " "
    $(".ani_box_shadow_obj").on("input", function () {
        $("body").append("<style>@keyframes objectAnimation { to { opacity:" + v(".ani_op_r") + ";box-shadow:" + ani_bs_ty + " " + p(".ani_bs1") + " " + p(".ani_bs2") + " " + p(".ani_bs3") + " " + p(".ani_bs4") + " " + v(".ani_bxclr") + ";filter:brightness(" + v('.ani_filter_brightness') + ") blur(" + v(".ani_filter_blur") + "px) sepia(" + v(".ani_filter_sepia") + ") contrast(" + v(".ani_filter_contrast") + ") grayscale(" + v(".ani_filter_gray") + ") invert(" + v(".ani_filter_invert") + ") hue-rotate(" + v(".ani_filter_hue_rotate") + "deg) saturate(" + v(".ani_filter_saturate") + ");brightness(" + v('.ani_filter_brightness') + ") blur(" + v(".ani_filter_blur") + "px) sepia(" + v(".ani_filter_sepia") + ") contrast(" + v(".ani_filter_contrast") + ") grayscale(" + v(".ani_filter_gray") + ") invert(" + v(".ani_filter_invert") + ") hue-rotate(" + v(".ani_filter_hue_rotate") + "deg) saturate(" + v(".ani_filter_saturate") + ");height:" + p(".ani_box_h") + ";width:" + p(".ani_box_w") + ";background:" + v(".ani_bgcolor") + ";color:" + v(".ani_txtcolor") + " } }</style>")
        ani.css("box-shadow",ani_bs_ty+' '+ $(".ani_bs1").val() + 'px ' + $(".ani_bs2").val() + 'px ' + $(".ani_bs3").val() + 'px ' + $(".ani_bs4").val() + 'px ' + $(".ani_bxclr").val());
    })
    
    $(".ani_bx_type").change(function () {
        ani_bs_ty = $(this).val();
        if (ani_bs_ty == "outset") {
            ani_bs_ty = " ";

        }
        else {
            ani_bs_ty = "inset"
        }
        $("body").append("<style>@keyframes objectAnimation { to { opacity:" + v(".ani_op_r") + ";box-shadow:" + ani_bs_ty + " " + p(".ani_bs1") + " " + p(".ani_bs2") + " " + p(".ani_bs3") + " " + p(".ani_bs4") + " " + v(".ani_bxclr") + ";height:" + p(".ani_box_h") + ";width:" + p(".ani_box_w") + " } }</style>")
        ani.css("box-shadow", ani_bs_ty + ' ' + $(".ani_bs1").val() + 'px ' + $(".ani_bs2").val() + 'px ' + $(".ani_bs3").val() + 'px ' + $(".ani_bs4").val() + 'px ' + $(".ani_bxclr").val());
    });
  

    // dropdowns

    $(".ani_sel").change(function () {
        $("body").append("<style>@keyframes objectAnimation { to { opacity:" + v(".ani_op_r") + ";box-shadow:" + ani_bs_ty + " " + p(".ani_bs1") + " " + p(".ani_bs2") + " " + p(".ani_bs3") + " " + p(".ani_bs4") + " " + v(".ani_bxclr") + ";height:" + p(".ani_box_h") + ";width:" + p(".ani_box_w") + ";background:" + v(".ani_bgcolor") + "; } }</style>")
        
        ani.css({
            
            borderTop: p(".ani_btwidth") + ' ' + v(".ani_tbor_style") + ' ' + v(".ani_btcolor"),
            borderLeft: p(".ani_blwidth") + ' ' + v(".ani_lbor_style") + ' ' + v(".ani_blcolor"),
            borderBottom: p(".ani_bbwidth") + ' ' + v(".ani_bbor_style") + ' ' + v(".ani_bbcolor"),
            borderRight: p(".ani_brwidth") + ' ' + v(".ani_rbor_style") + ' ' + v(".ani_brcolor"),
            
            
            fontFamily: v(".ani_txt_font"),
            fontStyle: v(".ani_f_s"),
            textTransform: v(".ani_txt_cs"),
            
        })

        ani_p.css({
            color: v(".ani_txtcolor"),
            letterSpacing: v(".ani_let_sp") + 'px',
            background:v(".ani_txtbgcolor"),
            lineHeight: p(".ani_line_hght"),
            wordSpacing: p(".ani_w_spacing"),
            position:'relative',
            top: v(".ani_optop") + 'px',
            left: v(".ani_opleft") + 'px',
            fontSize: p(".ani_font_size"),
            opacity:v('.ani_top'),
            background:v('.ani_txtbgcolor'),
            textShadow: $(".ani_tbs1").val() + 'px ' + $(".ani_tbs2").val() + 'px ' + $(".ani_tbs3").val() + 'px ' + $(".ani_tbxclr").val(),
            top:p('.ani_optop'),
            left:p('.ani_opleft'),
            textAlign:v('.ani_txt_align'),
            fontFamily:v('.ani_txt_font'),
            fontStyle:v('.ani_f_s'),
            textTransform:v('.ani_txt_cs'),
            textDecoration: v(".ani_txt_dec_type"),
            textDecorationStyle: v(".ani_txt_dec_sty"),
            textDecorationColor: v(".ani_dec_clr"),
            fontWeight: v(".ani_f_weight")
        })
    })

    // background [text]

    

    // background [object]

    $(".ani_bgcolor").change(function () {
        $("body").append("<style>@keyframes objectAnimation { to { opacity:" + v(".ani_op_r") + ";box-shadow:" + ani_bs_ty + " " + p(".ani_bs1") + " " + p(".ani_bs2") + " " + p(".ani_bs3") + " " + p(".ani_bs4") + " " + v(".ani_bxclr") + ";height:" + p(".ani_box_h") + ";width:" + p(".ani_box_w") + ";background:" + v(".ani_bgcolor") + "; } }</style>")
        $(".ani_ln_gra_cl1,.ani_ln_gra_cl2,.ani_ln_gra_cl3,.ani_ln_gra_cl4,.ani_ln_gra_cl5,.ani_rad_gra_cl1,.ani_rad_gra_cl2,.ani_rad_gra_cl3,.ani_rad_gra_cl4,.ani_rad_gra_cl5").val($(this).val());
        ani.css({ "background": v(this) });
        $(".ani_txtbgcolor").val(v(this));
        ani_p.css({background:v(this)})
   })

    // border

            // common customizations
            
    $(".ani_wbor_style").change(function () {
        ani.css({ borderStyle: v(this) })
        $(".ani_tbor_style").val(v(this))
        $(".ani_lbor_style").val(v(this))
        $(".ani_rbor_style").val(v(this))
        $(".ani_bbor_style").val(v(this))
    })
    $(".ani_wbcolor").on("input",function () {
        ani.css({ borderColor: v(this) })
        $(".ani_btcolor").val(v(this))
        $(".ani_blcolor").val(v(this))
        $(".ani_brcolor").val(v(this))
        $(".ani_bbcolor").val(v(this))
    })
    $(".ani_wbwidth").on("input",function () {
        ani.css({ borderWidth: v(this) })
        $(".ani_btwidth").val(v(this))
        $(".ani_blwidth").val(v(this))
        $(".ani_brwidth").val(v(this))
        $(".ani_bbwidth").val(v(this))
    })

    $('.ani_border_radius_abt').click(()=>{
        $('.ani_sort_bor_rad').fadeIn()
    })

    var rad_unit_ani = "px"

    $("[name=ani_bor_Rad_type]").change(function () {

        rad_unit_ani = $(this).val()

        $(".ani_br_rad").on("input", function () {
            ani.css({ borderRadius: $(".ani_btlrad").val() + rad_unit_ani + ' ' + $(".ani_btrrad").val() + rad_unit_ani + ' ' + $(".ani_bbrrad").val() + rad_unit_ani + ' ' + $(".ani_bblrad").val() + rad_unit_ani + '' });
        })

        if (rad_unit_ani == "px") {
            $('.ani_obj').css("border-radius", $(".ani_btlrad").val() + 'px ' + $(".ani_btrrad").val() + 'px ' + $(".ani_bbrrad").val() + 'px ' + $(".ani_bblrad").val() + 'px')
        }
        else if (rad_unit_ani == "%") {
            $('.ani_obj').css("border-radius", $(".ani_btlrad").val() + '% ' + $(".ani_btrrad").val() + '% ' + $(".ani_bbrrad").val() + '% ' + $(".ani_bblrad").val() + '%')
        }

    });

    $(".ani_round_shape").click(function () {
        ani.css("border-radius", "50%");
        $(".ani_btlrad,.ani_btrrad,.ani_bblrad,.ani_bbrrad").val(360);
    });
    $(".ani_half_round_shape").click(function () {
        ani.css("border-radius", "55px 55px 55px 55px");
        $(".ani_btlrad,.ani_btrrad,.ani_bblrad,.ani_bbrrad").val(55);

    });
    $(".ani_square_shape").click(function () {
        ani.css("border-radius", "0px");
        $(".ani_btlrad,.ani_btrrad,.ani_bblrad,.ani_bbrrad").val(0);
    });

    $('.ani_border_radius_abt').click(function () {
        $('.ani_sort_bor_rad').fadeIn(100);
    })
    $('.ani_sort_bor_rad').mouseleave(function () {
        $(this).fadeOut(100);
    })

    

    //resets
    $(".ani_rto").click(function () {
        ani_p.css({ opacity: 1 })
        $(".ani_top").val(1)
    })
    $(".ani_rb").click(function () {
        ani.css({ filter: 'brightness(1) blur(' + v(".ani_filter_blur") + 'px) sepia(' + v(".ani_filter_sepia") + ') contrast(' + v(".ani_filter_contrast") + ') grayscale(' + v(".ani_filter_gray") + ') invert(' + v(".ani_filter_invert") + ') hue-rotate(' + v(".ani_filter_hue_rotate") + 'deg) saturate(' + v(".ani_filter_saturate") + ')' })
        $(".ani_filter_brightness").val(1)
    })
    $(".ani_rblur").click(function () {
        ani.css({ filter: 'brightness(' + v(".ani_filter_brightness") + ') blur(0px) sepia(' + v(".ani_filter_sepia") + ') contrast(' + v(".ani_filter_contrast") + ') grayscale(' + v(".ani_filter_gray") + ') invert(' + v(".ani_filter_invert") + ') hue-rotate(' + v(".ani_filter_hue_rotate") + 'deg) saturate(' + v(".ani_filter_saturate") + ')' })
        $(".ani_filter_blur").val(0)
    })
    $(".ani_rsepia").click(function () {
        ani.css({ filter: 'brightness(' + v(".ani_filter_brightness") + ') blur(' + v('.ani_filter_blur') + ') sepia(' + v(".ani_filter_sepia") + ') contrast(' + v(".ani_filter_contrast") + ') grayscale(' + v(".ani_filter_gray") + ') invert(' + v(".ani_filter_invert") + ') hue-rotate(' + v(".ani_filter_hue_rotate") + 'deg) saturate(' + v(".ani_filter_saturate") + ')' })
        $(".ani_filter_sepia").val(0)
    })
    $(".ani_rcontrast").click(function () {
        ani.css({ filter: 'brightness(' + v(".filter_brightness") + ') blur(' + v(".filter_blur") + 'px) sepia(' + v(".filter_sepia") + ') contrast(1) grayscale(' + v(".filter_gray") + ') invert(' + v(".filter_invert") + ') hue-rotate(' + v(".filter_hue_rotate") + 'deg) saturate(' + v(".filter_saturate") + ')' })
        $(".ani_filter_contrast").val(1)
    })
    $(".ani_rgray").click(function () {
        ani.css({ filter: 'brightness(' + v(".filter_brightness") + ') blur(' + v(".filter_blur") + 'px) sepia(' + v(".filter_sepia") + ') contrast(' + v(".filter_contrast") + ') grayscale(0) invert(' + v(".filter_invert") + ') hue-rotate(' + v(".filter_hue_rotate") + 'deg) saturate(' + v(".filter_saturate") + ')' })
        $(".ani_filter_gray").val(0)
    })
    $(".ani_rinvert").click(function () {
        ani.css({ filter: 'brightness(' + v(".filter_brightness") + ') blur(' + v(".filter_blur") + 'px) sepia(' + v(".filter_sepia") + ') contrast(' + v(".filter_contrast") + ') grayscale(' + v(".filter_gray") + ') invert(0) hue-rotate(' + v(".filter_hue_rotate") + 'deg) saturate(' + v(".filter_saturate") + ')' })
        $(".ani_filter_invert").val(0)
    })
    $(".ani_rhue").click(function () {
        ani.css({ filter: 'brightness(' + v(".filter_brightness") + ') blur(' + v(".filter_blur") + 'px) sepia(' + v(".filter_sepia") + ') contrast(' + v(".filter_contrast") + ') grayscale(' + v(".filter_gray") + ') invert(' + v(".filter_invert") + ') hue-rotate(0deg) saturate(' + v(".filter_saturate") + ')' })
        $(".ani_filter_hue_rotate").val(0)
    })
    $(".ani_rsat").click(function () {
        ani .css({ filter: 'brightness(' + v(".filter_brightness") + ') blur(' + v(".filter_blur") + 'px) sepia(' + v(".filter_sepia") + ') contrast(' + v(".filter_contrast") + ') grayscale(' + v(".filter_gray") + ') invert(' + v(".filter_invert") + ') hue-rotate(' + v(".filter_hue_rotate") + 'deg) saturate(1)' })
        $(".ani_filter_saturate").val(1)
    })

    // border sliding

    $(".ani_slidetbstyle").click(function () {
        $(".ani_slidebstyle").slideToggle();
    });
    $(".ani_slidetbcolor").click(function () {
        $(".ani_slidebcolor").slideToggle();
    })
    $(".ani_slidetbwidth").click(function () {
        $(".ani_slidebwidth").slideToggle();
    })
    $(".ani_slidetbradius").click(function () {
        $(".ani_slidebradius").slideToggle();
    })

    // transparent functionality 

    $(".ani_bg_color_trns").click(function () {
        ani.css({ background: 'transparent' });
        $(".ani_bgcolor,.ani_bg_trns").val("#ffffff");
    });
    $(".ani_txt_color_trns").click(function () {
        $(".ani_add_text").css({ "color": "transparent" });
        $(".ani_txtcolor").val($(".ani_txtbgcolor").val());
    });
    $(".ani_txt_bg_color_trns").click(function () {
        $(".ani_add_text").css({ "background": "transparent" });
        $(".ani_txtbgcolor").val($(".ani_bgcolor").val());
        $(".ani_txt_bg_lg_deg").val($(".ani_ln_gra_deg").val());
        $(".ani_txtbglgcolor1").val(v(".ani_ln_gra_cl1"));
        $('.ani_txtbglgcolor2').val(v(".ani_ln_gra_cl2"));
    });
    //borders
    $(".ani_top_bor_clr_trns").click(function () {
        ani.css({ "border-top-color": "transparent" });
        $(".ani_btcolor").val($(".ani_bgcolor").val());
    });
    $(".ani_left_bor_clr_trns").click(function () {
        ani.css({ "border-left-color": "transparent" });
        $(".ani_blcolor").val($(".ani_bgcolor").val());
    });
    $(".ani_bot_bor_clr_trns").click(function () {
        ani.css({ "border-bottom-color": "transparent" });
        $(".ani_bbcolor").val($(".ani_bgcolor").val());
    });
    $(".ani_right_bor_clr_trns").click(function () {
        ani.css({ "border-right-color": "transparent" });
        $(".ani_brcolor").val($(".ani_bgcolor").val());
    });
    $(".ani_bor_clr_trns").click(function () {
        ani.css({ "border-color": "transparent" });
        $(".ani_wbcolor,.ani_btcolor,.ani_blcolor,.ani_bbcolor,.ani_brcolor").val($(".ani_bgcolor").val());
    });

    // UDFs

    function p(name) {
        return v(name) + 'px'
    }

    function v(name) {
        return $(name).val()
    }
})

