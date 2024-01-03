// Editor web application
// Developed in india
// by ISC
// (C) 2018 ISC | All rights reserved 
//program begins ...
$(document).ready(function () {

var body = $("body")
    obj = $(".obj ,.ani_obj");
    pobj = $(".per_cover");
    d = 0.4;
    test = 500;
    txt = "";
    

    // kuch limits ho jaaye
    //height
    h_lim_max = 1000;
    h_lim_min = 0;
    //width
    w_lim_max = 1000;
    w_lim_min = 0;
    //scaleX(transform)
    scx_lim_max = 3;
    scx_lim_min = 0;
    //scaleY(transform)
    scy_lim_max = 3;
    scy_lim_min = 0;
    //scaleZ(transform)
    scz_lim_max = 3;
    scz_lim_min = 0;
    //perspection
    per_lim_max = 1000;
    per_lim_min = 0;
    //border-width
    br_lim_max = 20;
    br_lim_min = 0;
    //delay
    d_lim_max = 10;
    d_lim_min = 0;
    op = $(".add_text,.ani_add_text");
    unit = "px";
    /*------------ KUCH DEFAULTS HO JAAYE -----------*/

    //general
            
    bclr = "#0080ff";
    opr = 1;
    bs_ty = "inset";
    bx1 = 0;
    bx2 = 0;
    bx3 = 26;
    bx4 = 0;
    bxclr = '#0080ff';
    bs_ty = " ";
    //dimensions
    h = 200;
    w = 300;
    //background
    bclr = "#0080ff";
    

    //text
    l_sp = 5;
    tblcr = "transparent";
    l_ht = 32;
    op.text($(".addt").val());
    talgn = "center";
    op.css("width","100%");
    tbx1 = 0;
    tbx2 = 0;
    tbx3 = 2;
    tbxclr = '#ffffff';
    //border
    b_w = 12;
    b_c = "#0080ff";
    b_s = "double";
    b_r1 = 60;
    b_r2 = 60;
    b_r3 = 60;
    b_r4 = 60;
    //transform
    skx = 0;
    sky = 0;
    scx = 1;
    scy = 1;
    scz = 1;
    r_x = 11;
    r_y = 0;
    r_z = 0;
    
							
    obj.css({transform:'rotateX(1deg)'});
    $(".obj,.ani_obj").draggable();
    $(".anime_report").draggable();
    

    $(".title_dev_desk").mouseenter(function () {
        $(".dev_desk").draggable({disabled: false});
    });
    $(".title_dev_desk").mouseleave(function () {
        $(".dev_desk").draggable({ disabled: true });
    });
    $(".dev_desk").resizable();
    $(".em_selector,.Yatharth,.font_selector_tool_editor").draggable();
    $("input[type=number]").focusout(function () {
        num = $(this).val();
        if (num.length == 0)
        {
            $(this).val(0);
        }
    });

    $(".more_imgso").click(function(){
        soundClick = new Audio("Click.wav")
	    soundClick.play();	
    });
    
    /* ---------------  editor [box] --------------- */
    /* ---------- Output functioning ----------- */
    $(".max_out").click(function () {
        $(".output").css({ height: '1000px', position: 'absolute', top: '-40px', left: '0px', margin: '0px', width: '110%', border: 'none', zIndex: '9', background: 'white' });
        $(this).hide();
        $(".min_out").show();
        $('.more_divs_common_class').hide()
        $(".obj").css({ top: '200px', left: '300px' }, 0);
    })
    $(".min_out").click(function () {
        $(".output").css({ height: '440px', top:'517px', position: 'absolute', marginLeft: '10px', marginTop: '22px', width: '1000px', border: '7px solid rgb(180,180,180)', zIndex: '1', background: 'transparent' });
        $(this).hide();
        $(".max_out").show();
        $(".obj").css({top:'-10px',left:'240px'},0);
    })
    
    /*---------- workplace replacement functionality ---------------- */
    
    $(".gnrl").click(function(){
        $(".oth").css({color:'rgb(180,180,180)'}).removeClass('selected_status')
        $(this).css({color:'rgb(120,120,120)'}).addClass('selected_status')
        $(".cust_work_place").fadeOut(0);
        $(".gnrl_workplace").fadeIn(300);
    });
    $(".filter").click(function () {
        $(".oth").css({color:'rgb(180,180,180)'}).removeClass('selected_status')
        $(this).css({color:'rgb(120,120,120)'}).addClass('selected_status')
        $(".cust_work_place").fadeOut(0);
        $(".filter_workplace").fadeIn(300);
    });
    $(".dimn").click(function(){
        $(".oth").css({color:'rgb(180,180,180)'}).removeClass('selected_status')
        $(this).css({color:'rgb(120,120,120)'}).addClass('selected_status')
        $(".cust_work_place").fadeOut(0);
        $(".dimn_workplace").fadeIn(300);
    });
    $(".bg").click(function(){
        $(".oth").css({color:'rgb(180,180,180)'}).removeClass('selected_status')
        $(this).css({color:'rgb(120,120,120)'}).addClass('selected_status')
        $(".cust_work_place").fadeOut(0);
        $(".bg_workplace").fadeIn(300);
    });
    $(".txt").click(function(){
        $(".oth").css({color:'rgb(180,180,180)'}).removeClass('selected_status')
        $(this).css({color:'rgb(120,120,120)'}).addClass('selected_status')
        $(".cust_work_place").fadeOut(0);
        $(".txt_workplace").fadeIn(300);
    });
    $(".border").click(function(){
        $(".oth").css({color:'rgb(180,180,180)'}).removeClass('selected_status')
        $(this).css({color:'rgb(120,120,120)'}).addClass('selected_status')
        $(".cust_work_place").fadeOut(0);
        $(".bor_workplace").fadeIn(300);
    });
    $(".trns").click(function(){
        $(".oth").css({color:'rgb(180,180,180)'}).removeClass('selected_status')
        $(this).css({color:'rgb(120,120,120)'}).addClass('selected_status')
        $(".cust_work_place").fadeOut(0);
        $(".trns_workplace").fadeIn(300);
    });
    $(".animation_uni").click(function () {
        alt_anime()
        $('.msg_body').text("this feature will be available in next update 😊 ")
        setTimeout(()=>{
            $('.msg_body').html('<p style="display:inline-block;" class="min_max"></p> <p style="display:inline-block;" class="unit"></p> limit reached')
        },4000)
        /*$(".oth").css({color:'rgb(180,180,180)'}).removeClass('selected_status')
        $(this).css({color:'rgb(120,120,120)'}).addClass('selected_status')
        $(".cust_work_place").fadeOut(0);
        $(".animation_workplace").fadeIn(300);*/
    });
    $(".frms").click(function(){
        $(".oth").css({color:'rgb(180,180,180)'}).removeClass('selected_status')
        $(this).css({color:'rgb(120,120,120)'}).addClass('selected_status')
        $(".cust_work_place").fadeOut(0);
        $(".frames_workplace").fadeIn(300);
    });
    $(".scrl").click(function(){
        $(".oth").css({color:'rgb(180,180,180)'}).removeClass('selected_status')
        $(this).css({color:'rgb(120,120,120)'}).addClass('selected_status')
        $(".cust_work_place").fadeOut(0);
        $(".scrl_workplace").fadeIn(300);
    });
    $(".sets").click(function(){
        $(".oth").css({color:'rgb(180,180,180)'}).removeClass('selected_status')
        $(this).css({color:'rgb(120,120,120)'}).addClass('selected_status')
        $(".cust_work_place").fadeOut(0);
        $(".sets_workplace").fadeIn(300);
    });
    //----------------
    $(".more_tabs_right").click(function () {
        $(".tab_para").css({ "left": "-40px" })
        $(this).fadeOut(100)
        $(".more_tabs_left").fadeIn(100)
    });
    $(".more_tabs_left").click(function () {
        $(".tab_para").css({ "left": "0px" })
        $(this).fadeOut(100)
        $(".more_tabs_right").fadeIn(100)
    });

    /*----------- general -------------- */

    
    
    $(".n_cursor_sel").on("input",function(){
        obj.css({cursor:$(this).val()})
    })
    //reset
    
    $(".ro").click(function(){
        $(".op_r").val(1);
        obj.css("opacity", '1');
        $(".opa_val_code").text(1);
        $(".ani_op_r").val(1)
    });
    $("#n_op_r").on("input", function () {
        opr = $('#n_op_r').val();
        obj.css("opacity", opr);
        $(".opa_val_code").text($(this).val());
        $(".ani_op_r").val(v(this))
    })
    //box-shadow
    $("#n_bs1,#n_bs2,#n_bs3,#n_bs4,#n_bxclr,#n_bx_type").on("input", function () {
        
        $(".sh_n1_val_code").text($("#n_bs1").val());
        $(".sh_n2_val_code").text($("#n_bs2").val());
        $(".sh_n3_val_code").text($("#n_bs3").val());
        $(".sh_n4_val_code").text($("#n_bs4").val());

        $(".ani_bs1").val(v("#n_bs1"))
        $(".ani_bs2").val(v("#n_bs2"))
        $(".ani_bs3").val(v("#n_bs3"))
        $(".ani_bs4").val(v("#n_bs4"))
        $(".ani_bxclr").val(v("#n_bxclr"))
       
        obj.css("box-shadow", $('#n_bx_type').val() + ' ' + $("#n_bs1").val() + 'px ' + $("#n_bs2").val() + 'px ' + $("#n_bs3").val() + 'px ' + $("#n_bs4").val() + 'px ' + $("#n_bxclr").val());
    })
    $("#n_bx_type").change(function(){
        bs_ty = $('#n_bx_type').val();
        if (bs_ty == "outset") {
            bs_ty = " ";
            $(".sh_type_val_code").text(" ");
        }
        else {
            $(".sh_type_val_code").text("inset");
        }
        $(".ani_bx_type").val(v("#n_bx_type"))
        obj.css("box-shadow", bs_ty + ' ' + $("#n_bs1").val() + 'px ' + $("#n_bs2").val() + 'px ' + $("#n_bs3").val() + 'px ' + $("#n_bs4").val() + 'px ' + $("#n_bxclr").val());
    });
    
    //filters 

    $(".filter_obj").on("input", function () {
        $(".ani_filter_brightness").val(v(".filter_brightness"))
        $(".ani_filter_blur").val(v(".filter_blur"))
        $(".ani_filter_sepia").val(v(".filter_sepia"))
        $(".ani_filter_contrast").val(v(".filter_contrast"))
        $(".ani_filter_hue_rotate").val(v(".filter_hue_rotate"))
        $(".ani_filter_invert").val(v(".filter_invert"))
        $(".ani_filter_gray").val(v(".filter_gray"))
        $(".ani_filter_saturate").val(v(".filter_saturate"))

        
        $('.obj,.speakToYatharth,.askToYatharth').css({ filter: 'brightness(' + v(".filter_brightness") + ') blur(' + v(".filter_blur") + 'px) sepia(' + v(".filter_sepia") + ') contrast('+v(".filter_contrast")+') grayscale('+v(".filter_gray")+') invert('+v(".filter_invert")+') hue-rotate('+v(".filter_hue_rotate")+'deg) saturate('+v(".filter_saturate")+')' })
    })
            //reset filter
    $(".rb").click(function () {
        obj.css({ filter: 'brightness(1) blur(' + v(".filter_blur") + 'px) sepia(' + v(".filter_sepia") + ') contrast(' + v(".filter_contrast") + ') grayscale(' + v(".filter_gray") + ') invert(' + v(".filter_invert") + ') hue-rotate(' + v(".filter_hue_rotate") + 'deg) saturate(' + v(".filter_saturate") + ')' })
        $(".filter_brightness").val(1)
    })
    $(".rblur").click(function () {
        obj.css({ filter: 'brightness(' + v(".filter_brightness") + ') blur(0px) sepia(' + v(".filter_sepia") + ') contrast(' + v(".filter_contrast") + ') grayscale(' + v(".filter_gray") + ') invert(' + v(".filter_invert") + ') hue-rotate(' + v(".filter_hue_rotate") + 'deg) saturate(' + v(".filter_saturate") + ')' })
        $(".filter_blur").val(0)
    })
    $(".rsepia").click(function () {
        obj.css({ filter: 'brightness(' + v(".filter_brightness") + ') blur(' + v(".filter_blur") + 'px) sepia(0) contrast(' + v(".filter_contrast") + ') grayscale(' + v(".filter_gray") + ') invert(' + v(".filter_invert") + ') hue-rotate(' + v(".filter_hue_rotate") + 'deg) saturate(' + v(".filter_saturate") + ')' })
        $(".filter_sepia").val(0)
    })
    $(".rcontrast").click(function () {
        obj.css({ filter: 'brightness(' + v(".filter_brightness") + ') blur(' + v(".filter_blur") + 'px) sepia(' + v(".filter_sepia") + ') contrast(1) grayscale(' + v(".filter_gray") + ') invert(' + v(".filter_invert") + ') hue-rotate(' + v(".filter_hue_rotate") + 'deg) saturate(' + v(".filter_saturate") + ')' })
        $(".filter_contrast").val(1)
    })
    $(".rgray").click(function () {
        obj.css({ filter: 'brightness(' + v(".filter_brightness") + ') blur(' + v(".filter_blur") + 'px) sepia(' + v(".filter_sepia") + ') contrast(' + v(".filter_contrast") + ') grayscale(0) invert(' + v(".filter_invert") + ') hue-rotate(' + v(".filter_hue_rotate") + 'deg) saturate(' + v(".filter_saturate") + ')' })
        $(".filter_gray").val(0)
    })
    $(".rinvert").click(function () {
        obj.css({ filter: 'brightness(' + v(".filter_brightness") + ') blur(' + v(".filter_blur") + 'px) sepia(' + v(".filter_sepia") + ') contrast(' + v(".filter_contrast") + ') grayscale(' + v(".filter_gray") + ') invert(0) hue-rotate(' + v(".filter_hue_rotate") + 'deg) saturate(' + v(".filter_saturate") + ')' })
        $(".filter_invert").val(0)
    })
    $(".rhue").click(function () {
        obj.css({ filter: 'brightness(' + v(".filter_brightness") + ') blur(' + v(".filter_blur") + 'px) sepia(' + v(".filter_sepia") + ') contrast(' + v(".filter_contrast") + ') grayscale(' + v(".filter_gray") + ') invert(' + v(".filter_invert") + ') hue-rotate(0deg) saturate(' + v(".filter_saturate") + ')' })
        $(".filter_hue_rotate").val(0)
    })
    $(".rsat").click(function () {
        obj.css({ filter: 'brightness(' + v(".filter_brightness") + ') blur(' + v(".filter_blur") + 'px) sepia(' + v(".filter_sepia") + ') contrast(' + v(".filter_contrast") + ') grayscale(' + v(".filter_gray") + ') invert(' + v(".filter_invert") + ') hue-rotate(' + v(".filter_hue_rotate") + 'deg) saturate(1)' })
        $(".filter_saturate").val(1)
    })


    /*------- dimensions --------------- */

    $(".box_h").on("input", function () {
        h = $(this).val();
        if (h > h_lim_max) {
            $(".min_max").text("max"); $(".unit").text("height");
            $(alt_anime());
            h = h_lim_max;
            $(this).val(h_lim_max);
            $(".ani_box_h").val(v(this))
            $(".hght_val_code").text(h_lim_max);
        }
        else if (h < h_lim_min) {
            $(".min_max").text("min"); $(".unit").text("height");
            $(alt_anime());
            h = h_lim_min;
            $(this).val(h_lim_min);
            $(".ani_box_h").val(v(this))
            $(".hght_val_code").text(h_lim_min);
        }
        $(".hght_val_code").text($(this).val());
        obj.css({ "height": h });//-20-2*b_w
        $(".ani_box_h").val(v(this))
    })
    $(".box_w").on("input", function () {
        w = $(this).val();
        if (w > w_lim_max) {
            $(".min_max").text("max"); $(".unit").text("width");
            $(alt_anime());
            w = w_lim_max;
            $(this).val(w_lim_max);
            $(".ani_box_w").val(v(this))
            $(".wdht_val_code").text(w_lim_max);
        }
        else if (w < w_lim_min) {
            $(".min_max").text("min"); $(".unit").text("width");
            $(alt_anime());
            w = w_lim_min;
            $(this).val(w_lim_min);
            $(".ani_box_w").val(v(this))
            $(".wdht_val_code").text(w_lim_min);
        }
        $(".wdht_val_code").text($(this).val());
        obj.css({ "width": w });//-20-2*b_w
        $(".add_text").css("width", w);
        $(".ani_box_w").val(v(this))
    })

    /* ---------- background ------------ */
    $("input[type=file]").change(function () {
        if (this.files && this.files[0]) {
            var files = $("input[type=file]").files
            var reader = new FileReader()
            reader.onload = function (e) {
                obj.css({backgroundImage:'url('+e.target.result+')',backgroundSize:'cover'})
                $(".fileNameText").text(e.target.files)
            }
        }
        console.log($(this).val())
        reader.readAsDataURL(this.files[0])
    })

    // test field

    
    

    $(".bgcolor").change(function(){
        bclr = g_cl1 = g_cl2 = $(this).val();
        $(".bg_val_code").text($(this).val());
        $(".ln_gra_cl1,.ln_gra_cl2,.ln_gra_cl3,.ln_gra_cl4,.ln_gra_cl5,.rad_gra_cl1,.rad_gra_cl2,.rad_gra_cl3,.rad_gra_cl4,.rad_gra_cl5").val($(this).val());
        $(".ani_ln_gra_cl1,.ani_ln_gra_cl2,.ani_ln_gra_cl3,.ani_ln_gra_cl4,.ani_ln_gra_cl5,.ani_rad_gra_cl1,.ani_rad_gra_cl2,.ani_rad_gra_cl3,.ani_rad_gra_cl4,.ani_rad_gra_cl5").val($(this).val());
        obj.css({ "background": bclr });
        $(".ani_bgcolor").val(v(this))
        $(".txtbgcolor").val(bclr);
        $(".ani_txtbgcolor").val(bclr);
        $(".ani_txtbglgcolor1,.ani_txtbglgcolor2").val($(this).val());

        
    });

    $(".ln_gra").on("input", function () {
        $(".ani_ln_gra_deg").val(v('.ln_gra_deg'))
        $(".ani_ln_gra_cl1").val(v('.ln_gra_cl1'))
        $(".ani_ln_gra_cl2").val(v('.ln_gra_cl2'))
        $(".ani_ln_gra_cl3").val(v('.ln_gra_cl3'))
        $(".ani_ln_gra_cl4").val(v('.ln_gra_cl4'))

        obj.css({ "background": 'linear-gradient(' + $(".ln_gra_deg").val() + 'deg, ' + $(".ln_gra_cl1").val() + ', ' + $(".ln_gra_cl2").val() + ', ' + $(".ln_gra_cl3").val() + ', ' + $(".ln_gra_cl4").val() + ')' });
    })

    $(".rad_gra").on("input", function () {
        $(".ani_rad_gra_deg").val(v('.rad_gra_deg'))
        $(".ani_rad_gra_cl1").val(v('.rad_gra_cl1'))
        $(".ani_rad_gra_cl2").val(v('.rad_gra_cl2'))
        $(".ani_rad_gra_cl3").val(v('.rad_gra_cl3'))
        $(".ani_rad_gra_cl4").val(v('.rad_gra_cl4'))
        $(".ani_rad_gra_cl5").val(v('.rad_gra_cl5'))

        obj.css({ "background": 'radial-gradient(' + $(".rad_gra_cl1").val() + ', ' + $(".rad_gra_cl2").val() + ', ' + $(".rad_gra_cl3").val() + ', ' + $(".rad_gra_cl4").val() + ', ' + $(".rad_gra_cl5").val() + ')'});
    })

    /*--------------- add text ---------------------*/
    $(".enter_key").click(function(){
        $(".add_text").append('<br>');
    });
    $(".txtcolor").change(function(){
        tclr = $(this).val();
        op.css({ "color": tclr });
        $(".ani_txtcolor").val(v(this))
        
    });
    $(".let_sp").on("input", function () {
        l_sp = $(this).val();
        op.css({ "letter-spacing": l_sp + unit });
        $(".ani_let_sp").val(v(this))
    })
    $(".w_spacing").on("input", function () {
        w_sp = $(this).val();
        op.css({ "word-spacing": w_sp + unit });
        $(".ani_w_spacing").val(v(this))
    })
    $(".f_weight").change(function(){
        f_wg = $(this).val();
        op.css({ "font-weight": f_wg });
        $(".ani_f_weight").val(v(this))
    });
    $(".top").on("input",function(){
        to = $(this).val();
        op.css("opacity", to);
        $(".ani_top").val(v(this))
    });
        //reset opacity
        $(".rto").click(function(){
            $(".top").val(1);
            op.css("opacity", "1");
            $(".ani_top").val(1)
        });
    $(".line_hght").on("input", function () {
        l_ht = $(this).val();
        op.css({ "line-height": l_ht + unit });
        $(".ani_line_hght").val(v(this))
    })
    $(".txtbgcolor").change(function(){
        tbclr = $(this).val();
        op.css({ "background": tbclr });
        $(".txtbglgcolor1,.txtbglgcolor2").val($(this).val());
        $(".ani_txtbgcolor").val(v(this))
    })

    $(".txt_bg_lg").on("input", function () {
        $(".ani_txt_bg_lg_deg").val(v('.txt_bg_lg_deg'))
        $(".ani_txtbglgcolor1").val(v('.txtbglgcolor1'))
        $(".ani_txtbglgcolor2").val(v('.txtbglgcolor2'))
        op.css({ "background": 'linear-gradient(' + $(".txt_bg_lg_deg").val() + 'deg, ' + $(".txtbglgcolor1").val() + ', ' + $(".txtbglgcolor2").val() + ')' });
    })
    
    $(".f_s").change(function(){
        fs = $(this).val();
        obj.css("font-style", fs);
        $(".ani_f_s").val(v(this))
    });
    $(".txt_align").change(function(){
        talgn = $(this).val();
        op.css({ "text-align": talgn });
        $(".ani_txt_align").val(v(this))
    });

    $(".txt_font").click(function(){
        $(".font_selector_tool_editor").fadeIn(200)
    })
   
    //console.log(window.getComputedStyle(document.querySelector('.obj')).left)
    
    $(".font_p").change(function(){
        tfnt = $(this).val();
        switch (tfnt)
        {
            case 'Krishna':
            case 'maya':
                $(".addt").css({fontFamily:'krishna'})
                break
            case 'kremlin':
            case 'kalinka':
            case 'gagasm':
            case 'motherland':
            case 'rusk':
                    $(".addt").css({fontFamily:'kremlin'})
                    break
            case 'Google':
            case 'aargh':
                    $('.addt').css({fontFamily:'Calibri'})
                    break

        }
        op.css({ "font-family": tfnt });
        $(".ani_txt_font").val(v(this))
        $('.txt_font').text(tfnt)
    });
    $(".addt").on("input",function(){
        op.css({"transition":"0s"});
        op.text(v(this));
    })
    
    $("[name=font_size]").on("input", function () {
        op.css("font-size", $(this).val() + 'px');
        $(".ani_font_size").val(v(this))
    })
    $("[name=op_width]").on("input", function () {
        op.css("width", $(this).val() + 'px');
        $(".ani_op_width").val(v(this))
    })
    //TEXT SHADOW
    $(".txt_shadow_uni").on("input", function () {
        $(".ani_tbs1").val(v(".tbs1"))
        $(".ani_tbs2").val(v(".tbs2"))
        $(".ani_tbs3").val(v(".tbs3"))
        $(".ani_tbxclr").val(v(".tbxclr"))

        op.css("text-shadow", $(".tbs1").val() + 'px ' + $(".tbs2").val() + 'px ' + $(".tbs3").val() + 'px ' + $(".tbxclr").val());
    })
    
    

    //decoration
    $(".txt_dec").change(function () {

        op.css({ "text-decoration": v(".txt_dec_type"), "text-decoration-color": v(".dec_clr"), "text-decoration-style": v(".txt_dec_sty") });
        $(".ani_txt_dec_type").val(v(".txt_dec_type"))
        $(".ani_dec_clr").val(v(".dec_clr"))
        $(".ani_txt_dec_sty").val(v(".txt_dec_sty"))

    });
    
    $(".optop").on("input", function () {
        optop = $(this).val();
        op.css({ "top": optop + 'px' });
        $(".ani_optop").val(v(this))
    })
    $(".opleft").on("input", function () {
        opleft = $(this).val();
        op.css({ "left": opleft + 'px' });
        $(".ani_opleft").val(v(this))
    })
    $(".txt_cs").change(function(){
        t_C = $(this).val();
        op.css("text-transform", t_C);
        $(".ani_txt_cs").val(v(this))
    });

    // blend mode

    $('.text-blend-mode').on('input',()=>{
        op.css({mixBlendMode:$(this).val()})
    })

    /* ----------------- border ----------------------- */
    //sliding
    $(".slidetbstyle").click(function(){
        $(".slidebstyle").slideToggle();
    });
    $(".slidetbcolor").click(function(){
        $(".slidebcolor").slideToggle();
    })
    $(".slidetbwidth").click(function(){
        $(".slidebwidth").slideToggle();
    })
    $(".slidetbradius").click(function(){
        $(".slidebradius").slideToggle();
    })
    //style
    $(".tbor_style").change(function(){
        $(".ani_tbor_style").val(v(this))
        obj.css({"border-top-style":v(this)});
    })
    $(".lbor_style").change(function(){
        $(".ani_lbor_style").val(v(this))
        obj.css({"border-left-style":v(this)});
    })
    $(".rbor_style").change(function(){
        obj.css({ "border-right-style": v(this) });
        $(".ani_rbor_style").val(v(this))
    })
    $(".bbor_style").change(function(){
        $(".ani_tbor_style").val(v(this))
        obj.css({"border-bottom-style":v(this)});
    })
    $(".wbor_style").change(function(){
        
        $(".tbor_style").val(v(this));
        $(".lbor_style").val(v(this));
        $(".rbor_style").val(v(this));
        $(".bbor_style").val(v(this));

        $(".ani_tbor_style").val(v(this))
        $(".ani_lbor_style").val(v(this))
        $(".ani_rbor_style").val(v(this))
        $(".ani_bbor_style").val(v(this))
        $(".ani_wbor_style").val(v(this))

        obj.css("border-style", v(this));
    })
    //Color
    $(".btcolor").change(function () {
        $(".ani_btcolor").val(v(this))
        obj.css("border-top-color",v(this));
    })
    $(".blcolor").change(function () {
        $(".ani_blcolor").val(v(this))
        obj.css("border-left-color",v(this));
    })
    $(".brcolor").change(function () {
        $(".ani_brcolor").val(v(this))
        obj.css("border-right-color",v(this));
    })
    $(".bbcolor").change(function () {
        $(".ani_bbcolor").val(v(this))
        obj.css("border-bottom-color",v(this));
    })
    $(".wbcolor").change(function(){
        
        $(".btcolor").val(v(this));
        $(".blcolor").val(v(this));
        $(".brcolor").val(v(this));
        $(".bbcolor").val(v(this));

        $(".ani_btcolor").val(v(this))
        $(".ani_blcolor").val(v(this))
        $(".ani_brcolor").val(v(this))
        $(".ani_bbcolor").val(v(this))

        obj.css("border-color", v(this));
    });
    //width
    
    $(".btwidth").on("input", function () {
        $(".ani_btwidth").val(v(this))
        if (v(".btwidth") == v(".blwidth") == v(".brwidth") == v(".bbwidth")) {
           v(".wbwidth") = v(".btwidth") = v(".blwidth") = v(".brwidth") = v(".bbwidth")
        }
        obj.css("border-top-width", v(this) + 'px');
    })
    $(".blwidth").on("input", function () {
        $(".ani_blwidth").val(v(this))
        if (v(".btwidth") == v(".blwidth") == v(".brwidth") == v(".bbwidth")) {
           v(".wbwidth") = v(".btwidth") = v(".blwidth") = v(".brwidth") = v(".bbwidth")
        }
        obj.css("border-left-width", v(this) + 'px');
    })
    $(".brwidth").on("input", function () {
        $(".ani_brwidth").val(v(this))
        if (v(".btwidth") == v(".blwidth") == v(".brwidth") == v(".bbwidth")) {
           v(".wbwidth") = v(".btwidth") = v(".blwidth") = v(".brwidth") = v(".bbwidth")
        }
        obj.css("border-right-width", v(this) + 'px');
    })
    $(".bbwidth").on("input", function () {
        $(".ani_bbwidth").val(v(this))
        if (v(".btwidth") == v(".blwidth") == v(".brwidth") == v(".bbwidth")) {
            $(".wbwidth").val() = v(".btwidth") = v(".blwidth") = v(".brwidth") = v(".bbwidth")
        }
        obj.css("border-bottom-width", v(this) + 'px');
    })
    $(".wbwidth").on("input", function () {
        $(".ani_wbwidth").val(v(this))
        
        $(".brwidth").val(v(this));
        $(".btwidth").val(v(this));
        $(".blwidth").val(v(this));
        $(".bbwidth").val(v(this));
        obj.css("border-width", v(this) + 'px');
    })

    //border-radius

    var rad_unit = "px"

    $("[name=bor_Rad_type]").change(function () {
        rad_unit = $(this).val();
        
        $(".btlrad").on("input", function () {
            obj.css("border-top-left-radius", $(this).val() + rad_unit);
        })
        $(".btrrad").on("input", function () {
            obj.css("border-top-right-radius", $(this).val() + rad_unit);
        })
        $(".bblrad").on("input", function () {
            obj.css("border-bottom-left-radius", $(this).val() + rad_unit);
        })
        $(".bbrrad").on("input", function () {
            obj.css("border-bottom-right-radius", $(this).val() + rad_unit);
        })

        if (rad_unit == "px") {
            obj.css("border-radius", $(".btlrad").val() + 'px ' + $(".btrrad").val() + 'px ' + $(".bbrrad").val() + 'px ' + $(".bblrad").val() + 'px')
        }
        else if (rad_unit == "%") {
            obj.css("border-radius", $(".btlrad").val() + '% ' + $(".btrrad").val() + '% ' + $(".bbrrad").val() + '% ' + $(".bblrad").val() + '%')
        }

    });

    $('.border_radius_abt').click(function () {
        $('.sort_bor_rad').fadeIn(100);
    })
    $('.sort_bor_rad').mouseleave(function () {
        $(this).fadeOut(100);
    })
    $(".btlrad").on("input", function () {
        $(".ani_btlrad").val(v(this))
        obj.css("border-top-left-radius", $(this).val() + rad_unit);
    })
    
    $(".btrrad").on("input", function () {
        $(".ani_btrrad").val(v(this))
        obj.css("border-top-right-radius", $(this).val() + rad_unit);
    })
    
    $(".bblrad").on("input", function () {
        $(".ani_bblrad").val(v(this))
        obj.css("border-bottom-left-radius", $(this).val() + rad_unit);
    })
    
    $(".bbrrad").on("input", function () {
        $(".ani_bbrrad").val(v(this))
        obj.css("border-bottom-right-radius", $(this).val() + rad_unit);
    })
    
    $(".N_round_shape").click(function(){
        $('.obj').css("border-radius","50%");
        $(".btlrad,.btrrad,.bblrad,.bbrrad,.ani_btlrad,.ani_btrrad,.ani_bblrad,.ani_bbrrad").val(360);
    });
    $(".N_half_round_shape").click(function () {
        $('.obj').css("border-radius", "55px 55px 55px 55px");
        $(".btlrad,.btrrad,.bblrad,.bbrrad,.ani_btlrad,.ani_btrrad,.ani_bblrad,.ani_bbrrad").val(55);
        
    });
    $(".N_square_shape").click(function(){
        $('.obj').css("border-radius","0px");
        $(".btlrad,.btrrad,.bblrad,.bbrrad,.ani_btlrad,.ani_btrrad,.ani_bblrad,.ani_bbrrad").val(0);
    });
    
    
    /*--------------- transform ---------------------- */
    $(".scaleX,.scaleY,.scaleZ,.skewX,.skewY,.r_X,.r_Y,.r_Z").on("input", function () {
        $(".ani_scaleX").val(v(".scaleX"))
        $(".ani_scaleY").val(v(".scaleY"))
        $(".ani_scaleZ").val(v(".scaleZ"))
        $(".ani_skewX").val(v(".skewX"))
        $(".ani_skewY").val(v(".skewY"))
        $(".ani_r_X").val(v(".r_X"))
        $(".ani_r_Y").val(v(".r_Y"))
        $(".ani_r_Z").val(v(".r_Z"))

        scx = $(".scaleX").val();
        skx = $(".skewX").val();
        sky = $(".skewY").val();

        r_x = $(".r_X").val();
        r_y = $(".r_Y").val();
        r_z = $(".r_Z").val();

        if (scx > scx_lim_max) {
            scx = scx_lim_max;
            $(".min_max").text("max"); $(".unit").text("x - scaling");
            $(alt_anime());
            $(this).val(scx_lim_max);
        }
        else if (scx < scx_lim_min) {
            scx = scx_lim_min;
            $(".min_max").text("min"); $(".unit").text("x - scaling");
            $(alt_anime());
            $(this).val(scx_lim_min);
        }

        scy = $(".scaleY").val()
        if (scy > scy_lim_max) {
            scy = scy_lim_max;
            $(".min_max").text("max"); $(".unit").text("y - scaling");
            $(alt_anime());
            $(this).val(scy_lim_max);
        }
        else if (scy < scy_lim_min) {
            scy = scy_lim_min;
            $(".min_max").text("min"); $(".unit").text("y - scaling");
            $(alt_anime());
            $(this).val(scy_lim_min);
        }

        scz = $(".scaleZ").val();
        if (scz > scz_lim_max) {
            scz = scz_lim_max;
            $(".min_max").text("max"); $(".unit").text("z - scaling");
            $(alt_anime());
            $(this).val(scz_lim_max);
        }
        else if (scz < scz_lim_min) {
            scz = scz_lim_min;
            $(".min_max").text("min"); $(".unit").text("z - scaling");
            $(alt_anime());
            $(this).val(scz_lim_min);
        }
        obj.css({ "transform": 'skew(' + skx + 'deg,' + sky + 'deg) scale3d(' + scx + ',' + scy + ',' + scz + ') rotateX(' + r_x + 'deg) rotateY(' + r_y + 'deg) rotateZ(' + r_z + 'deg)' });
    })
    
    
    
    // advanced origin system installation - supported by AI ...
    
    $(".trns_origin").change(function () {
        var d = $(".trns_orgn_detector")
        t_o = $(this).val();
        obj.css("transform-origin", t_o);
        if ($(this).val() == "top")
        {
            d.css({ top: '0%', left: '50%' })
            $(".trnsorgn1").val(50);
            $(".trnsorgn2").val(0);
        }
        else if ($(this).val() == "left") {
            d.css({ top: '50%', left: '0%' })
            $(".trnsorgn1").val(0);
            $(".trnsorgn2").val(50);
        }
        else if ($(this).val() == "right") {
            d.css({ top: '50%', left: '100%' })
            $(".trnsorgn1").val(100);
            $(".trnsorgn2").val(50);
        }
        else if ($(this).val() == "bottom") {
            d.css({ top: '100%', bottom: '0%' })
            $(".trnsorgn1").val(50);
            $(".trnsorgn2").val(100);
        }
        else if ($(this).val() == "center") {
            d.css({ top: '50%', left: '50%' })
            $(".trnsorgn1").val(50);
            $(".trnsorgn2").val(50);
        }
        if ($(this).val() == "top - left")
        {
            obj.css("transform-origin", "0% 0%");
            $(".trnsorgn1").val(0);
            $(".trnsorgn2").val(0);
        }
        else if ($(this).val() == "top - right") {
            obj.css("transform-origin", "100% 0%");
            $(".trnsorgn1").val(100);
            $(".trnsorgn2").val(0);
        }
        else if ($(this).val() == "bottom - left") {
            obj.css("transform-origin", "0% 100%");
            $(".trnsorgn1").val(0);
            $(".trnsorgn2").val(100);
        }
        else if ($(this).val() == "bottom - right") {
            obj.css("transform-origin", "100% 100%");
            $(".trnsorgn1").val(100);
            $(".trnsorgn2").val(100);
        }
    });
    $(".trnsorgn1,.trnsorgn2").on("input", function () {
        obj.css("transform-origin", $(".trnsorgn1").val() + '%' + $(".trnsorgn2").val() + '%');
        if ($(".trnsorgn1").val() == "0" && $(".trnsorgn2").val() == "0") {
            $(".trns_origin").val("top - left");
        }
        else if ($(".trnsorgn1").val() == "100" && $(".trnsorgn2").val() == "0") {
            $(".trns_origin").val("top - right");
        }
        else if ($(".trnsorgn1").val() == "0" && $(".trnsorgn2").val() == "100") {
            $(".trns_origin").val("bottom - left");
        }
        else if ($(".trnsorgn1").val() == "100" && $(".trnsorgn2").val() == "100") {
            $(".trns_origin").val("bottom - right");
        }
        else if ($(".trnsorgn1").val() == "50" && $(".trnsorgn2").val() == "50") {
            $(".trns_origin").val("center");
        }
        else if ($(".trnsorgn1").val() == "50" && $(".trnsorgn2").val() == "100") {
            $(".trns_origin").val("bottom");
        }
        else if ($(".trnsorgn1").val() == "100" && $(".trnsorgn2").val() == "50") {
            $(".trns_origin").val("right");
        }
        else if ($(".trnsorgn1").val() == "0" && $(".trnsorgn2").val() == "50") {
            $(".trns_origin").val("left");
        }
        else if ($(".trnsorgn1").val() == "50" && $(".trnsorgn2").val() == "0") {
            $(".trns_origin").val("top");
        }
    })
    
    $("[name=perspective],.perorgn").on("input", function () {
        pobj.css({"perspective":$(this).val() + 'px',"perspective-origin":$(this).val() + 'px'});
        if ($(this).val() > per_lim_max) {
            $(".min_max").text("max"); $(".unit").text("perspection");
            $(".alt").css({ "width": "330px", "left": "32%" });
            $(alt_anime());
            $(this).val(per_lim_max);
            $(this).val() = per_lim_max;
        }
        else if ($(this).val() < per_lim_min) {
            $(".min_max").text("min"); $(".unit").text("perspection");
            $(".alt").css({ "width": "330px", "left": "32%" });
            $(alt_anime());
            $(this).val(per_lim_min);
            $(this).val() = per_lim_min;
        }
    })
    
    $('.per_orgn_sel').change(function () {
        pobj.css({ perspectiveOrigin: $(this).val() });
        
    });

    /* ------------ Animation -------------- ... separate JS file included */ 
    

    /* --------------------- Frames ------------- */
    $(".none").click(function(){
        $(".obj").css("backgroundColor", $(".bgcolor").val());
        $(".obj").attr(
            "style",
            "height:200px;width:300px;overflow-y:scroll;border-radius:" + v('.btlrad') + "px " + v('.btrrad') + "px " + v('.bblrad') + "px " + v('.bbrrad') + "px;background-color:" + $(".bgcolor").val() + ";");
        //setting values
        $(".box_h").val(200);
        $(".box_w").val(300);
        h_lim_max = 221;
        w_lim_max = 682;
        //preventing aspect ratio of height and WIDTH
        $(".box_h").on("input", function () {
            h = $(this).val();
            if (h > h_lim_max) {
                $(".min_max").text("max"); $(".unit").text("height");
                $(alt_anime());
                h = h_lim_max;
                $(this).val(h_lim_max);
            }
            else if (h < h_lim_min) {
                $(".min_max").text("min"); $(".unit").text("height");
                $(alt_anime());
                h = h_lim_min;
                $(this).val(h_lim_min);
            }

            $(".box_w").val(h);
            $(".obj").css("height", h);
            $(".obj").css("width", w);
            //obj.css({"height":$("box_h").val()+"px","width":$("box_w").val()+"px"});//-20-2*b_w
        })
        $(".box_w").on("input", function () {
            w = $(this).val();
            if (w > w_lim_max) {
                $(".min_max").text("max"); $(".unit").text("width");
                $(alt_anime());
                w = w_lim_max;
                $(this).val(w_lim_max);
            }
            else if (w < w_lim_min) {
                $(".min_max").text("min"); $(".unit").text("width");
                $(alt_anime());
                w = w_lim_min;
                $(this).val(w_lim_min);
            }

            $(".box_h").val(w);
            $(".obj").css("height", h);
            $(".obj").css("width", w);
            //obj.css({"height":$("box_h").val()+"px","width":$(this).val()+"px"});//-20-2*b_w//-20-2*b_w
            $(".add_text").css("width", w);
        })
    });
    $(".frame1,.frame2,.frame3,.frame4,.frame5,.frame6,.frame7").click(function(){
        $(".obj").css({"height":"200px","width":"200px","backgroundColor":"white"});
        $(".tbor_style,.lbor_style,.rbor_style,.bbor_style,.wbor_style").val("none");
        $(".obj").attr(
            "style",
            "background-image:url(frames/frame1.png);overflow-y:hidden;background-color:transparent;border:none;border-radius:0px 0px 0px 0px;width:200px");
        //setting values
        $(".box_h").val(200);
        $(".box_w").val(200);
        h_lim_max = 1000;
        w_lim_max = 1000;
        //aspect ratio of height and WIDTH
        $(".box_h").click(function(){
            $(".obj").css({ "height": $(this).val() + "px", "width": $(this).val() + "px" });
            $(".box_h,.box_w").val($(this).val());
        });
        $(".box_w").click(function(){
            $(".obj").css({ "height": $(this).val() + "px", "width": $(this).val() + "px" });
            $(".box_h,.box_w").val($(this).val());
        });
        $(".box_h").keyup(function(){
            $(".obj").css({ "height": $(this).val() + "px", "width": $(this).val() + "px" });
            $(".box_h,.box_w").val($(this).val());
        });
        $(".box_w").keyup(function(){
            $(".obj").css({ "height": $(this).val() + "px", "width": $(this).val() + "px" });
            $(".box_h,.box_w").val($(this).val());
        });
    });
    $(".frame2").click(function(){
        $(".obj").css({ "height": "200px", "width": "200px" });
        $(".obj").attr(
            "style",
            "background-image:url(frames/frame2.png);overflow-y:hidden;background-color:transparent;border:none;border-radius:0px 0px 0px 0px;width:200px");
    });
    $(".frame3").click(function(){
        $(".obj").attr(
            "style",
            "background-image:url(frames/frame3.png);overflow-y:hidden;background-color:transparent;border:none;border-radius:0px 0px 0px 0px;width:200px");
    });
    $(".frame4").click(function(){
        $(".obj").attr(
            "style",
            "background-image:url(frames/frame4.png);overflow-y:hidden;background-color:transparent;border:none;border-radius:0px 0px 0px 0px;width:200px");
    });
    $(".frame5").click(function () {
        $(".obj").attr(
            "style",
            "background-image:url(frames/frame5.png);overflow-y:hidden;background-color:transparent;border:none;border-radius:0px 0px 0px 0px;width:200px");
    });
    $(".frame6").click(function () {
        $(".obj").attr(
            "style",
            "background-image:url(frames/frame6.png);overflow-y:hidden;background-color:transparent;border:none;border-radius:0px 0px 0px 0px;width:200px");
    });
    $(".frame7").click(function () {
        $(".obj").attr(
            "style",
            "background-image:url(frames/frame7.png);overflow-y:hidden;background-color:transparent;border:none;border-radius:0px 0px 0px 0px;width:200px");
    });
    
    /* --------------- scroll bar customization --------------- */
    //allow or block
    $("[name=scrl_c]").change(function(){
        
        $(".obj").css({"overflow":v(this),"overflow-x":"hidden"});
    });
    $("[name=autohidemode]").change(function () {
        if ($(this).val() == "allow")
        {
            $(".obj").mouseleave(function () {
                obj.css("overflow","hidden")
            })
            $(".obj").mouseenter(function () {
                obj.css("overflow", "scroll")
            })
        }
        else if ($(this).val() == "block") {
            $(".obj").css("overflow", "scroll")
        }
    })
    
    $(".scrl_tr_clr_uni").change(function () {
       styScroll('#obj', 'scroll',$(".scrl_tr_w").val(), $(".scrl_tr_clr_uni").val(), v('.scrl_tr_bor_w') + 'px ' + v('.scrl_tr_bor_sty') + ' ' + v('.scrl_tr_bor_clr'))
    });


    /* --------------------- in built sets -------------------- */
    $(".pre0").click(function () {
        
        obj.css({

            //general
            "filter": "brightness(1)",
            "opacity": "1",
            "box-shadow": "0px 0px 0px 0px rgb(0,128,255)",
            //dimensions
            "height": "200px",
            "width": "300px",
            //background
            "background": "rgb(200,200,200)",
            //add text -->
            //border
            "border": "none",
            "border-radius": "0px 0px 0px 0px",
            //transform
            "transform": " skew(0deg ,0deg) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scaleX(1) scaleY(1) scaleZ(1)",
            "transform-origin": "center"
        });
        
        op.css({
            "top": "0px",
            "color": "white",
            "text-align": "center",
            "font-family": "Calibri",
            fontSize:'28px',
            "line-height": "32px",
            "background": "transparent",
            "font-style": "normal",
            "word-spacing": "0px",
            "font-weight": "normal",
            "left": "0px",
            "text-transform": "none",
            "text-decoration": "none",
            "text-decoration-color": "transparent",
            "text-decoration-style": "solid",
            "opacity": "1",
            "letter-spacing": "11px",
            "text-shadow": "0px 0px 0px white",
            width:'300px',
        });
        op.text("");
        // setting values
        //general
        $(".brghtness_r,.ani_brghtness_r").val(1);
        $(".op_r,.ani_op_r").val(1);
        $(".bs1,.ani_bs1").val(0);
        $(".bs2,.ani_bs2").val(0);
        $(".bs3,.ani_bs3").val(0);
        $(".bs4,.ani_bs4").val(0);
        $(".bxclr,.ani_bxclr").val("#ffffff");
        //filter
        $(".filter_brightness ,.ani_filter_brightness ").val(1)
        $(".filter_blur ,.ani_filter_blur ").val(0)
        $(".filter_sepia ,.ani_filter_sepia ").val(0)
        $(".filter_contrast ,.ani_filter_contrast ").val(0)
        $(".filter_gray ,.ani_filter_gray ").val(0)
        $(".filter_invert ,.ani_filter_invert ").val(0)
        $(".filter_hue_rotate ,.ani_filter_hue_rotate ").val(0)
        $(".filter_saturate ,.ani_filter_saturate ").val(1)
        //dimensions
        $(".box_h,.ani_box_h").val(200);
        $(".box_w,.ani_box_w").val(300);
        //background
        $(".bgcolor,.ani_bgcolor").val("#c8c8c8");
        $('.ln_gra_deg,.ani_ln_gra_deg').val(90);
        $('.ln_gra_cl1,.ln_gra_cl2,.ani_ln_gra_cl1,.ani_ln_gra_cl2').val('#c8c8c8');
        $('.ln_gra_cl3,.ln_gra_cl4,.ani_ln_gra_cl3,.ani_ln_gra_cl4').val('#c8c8c8');
        $('.rad_gra_cl1,.rad_gra_cl2,.ani_rad_gra_cl1,.ani_rad_gra_cl2').val('#c8c8c8');
        $('.rad_gra_cl3,.rad_gra_cl4,.rad_gra_cl5,.ani_rad_gra_cl3,.ani_rad_gra_cl4,.ani_rad_gra_cl5').val('#c8c8c8');
        //add_text
        $(".addt").val(" ");
        $(".txtcolor,.ani_txtcolor").val("#ffffff");
        $(".let_sp,.ani_let_sp").val(11);
        $(".txt_align,.ani_txt_align").val("center");
        $(".txt_font,.ani_txt_font").val("Calibri");
        $(".line_hght,.ani_line_hght").val(32);
        $(".txtbgcolor,.ani_txtbgcolor").val("#c8c8c8");
        $('.txt_bg_lg_deg,.ani_txt_bg_lg_deg').val(90);
        $('.txtbglgcolor1,.ani_txtbglgcolor1').val('#c8c8c8');
        $('.txtbglgcolor2,.ani_txtbglgcolor2').val('#c8c8c8');
        $(".f_s,.ani_f_s").val("normal");
        $(".w_spacing,.ani_w_spacing").val(0);
        $(".f_weight,.ani_f_weight").val("normal");
        $(".optop,.ani_optop").val(0);
        $(".opleft,.ani_opleft").val(0);
        $(".txt_cs,.ani_txt_cs").val("lowercase");
        $(".txt_dec,.ani_txt_dec").val("none");
        $(".dec_clr,.ani_dec_clr").val("#cBcBcB");
        $(".txt_dec_sty,.ani_txt_dec_sty").val("solid");
        $(".top,.ani_top").val(1);
        $(".tbs1,.ani_tbs1").val(0);
        $(".tbs2,.ani_tbs2").val(0);
        $(".tbs3,.ani_tbs3").val(0);
        $(".tbxclr,.ani_tbxclr").val("#ffffff");
        //border
        $(".tbor_style,.ani_tbor_style").val('none');
        $(".lbor_style,.ani_lbor_style").val('none');
        $(".rbor_style,.ani_rbor_style").val('none');
        $(".bbor_style,.ani_bbor_style").val('none');
        $(".wbor_style,.ani_wbor_style").val('none');
        $(".btwidth,.ani_btwidth").val(0);
        $(".blwidth,.ani_blwidth").val(0);
        $(".brwidth,.ani_brwidth").val(0);
        $(".bbwidth,.ani_bbwidth").val(0);
        $(".wbwidth,.ani_wbwidth").val(0);
        $(".btcolor,.ani_btcolor").val("#cBcBcB");
        $(".blcolor,.ani_blcolor").val("#cBcBcB");
        $(".brcolor,.ani_brcolor").val("#cBcBcB");
        $(".bbcolor,.ani_bbcolor").val("#cBcBcB");
        $(".wbcolor,.ani_wbcolor").val("#cBcBcB");
        $(".btlrad,.ani_btlrad").val(0);
        $(".btrrad,.ani_btrrad").val(0);
        $(".bblrad,.ani_bblrad").val(0);
        $(".bbrrad,.ani_bbrrad").val(0);

        //transform
        $(".r_X,.ani_r_X").val(0);
        $(".r_Y,.ani_r_Y").val(0);
        $(".r_Z,.ani_r_Z").val(0);
        $(".scaleX,.ani_scaleX").val(1);
        $(".scaleY,.ani_scaleY").val(1);
        $(".scaleZ,.ani_scaleZ").val(1);
        $(".skewX,.ani_skewX").val(0);
        $(".skewY,.ani_skewY").val(0);
        $(".trns_origin").val("center");
        $('.per_orgn_sel').val('center')
    });
    $(".pre1").click(function(){
        $(".box_w").click();
        obj.css({

            //general
            "-webkit-filter":"brightness(1)",
            "opacity":"1",
            "box-shadow":"0px 0px 76px 0px rgb(0,128,255)",
            //dimensions
            "height":"200px",
            "width":"300px",
            //background
            "background":"rgb(0,128,255)",
            //add text -->
            //border
            "border":"12px double rgb(0,128,255)",
            "border-radius": "60px 60px 60px 60px",
            //transform
            "transform":" skew(0deg ,0deg) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scaleX(1) scaleY(1) scaleZ(1)",
            "transform-origin":"center"
        });
        op.css({"top":"43px",
            "color":"white",
            "text-align":"center",
            "font-family":"Calibri",
            "line-height":"32px",
            "background":"transparent",
            "font-style":"normal",
            "word-spacing":"0px",
            "font-weight":"normal",
            "left":"5px",
            "text-transform":"lowercase",
            "text-decoration":"none",
            "text-decoration-color":"transparent",
            "text-decoration-style":"solid",
            "opacity":"1",
            "letter-spacing":"11px",
            "text-shadow":"0px 0px 12px white"});
        op.text("its a editor");
        // setting values
        //general
        $(".brghtness_r").val(1);
        $(".op_r").val(1);
        $(".bs1").val(0);
        $(".bs2").val(0);
        $(".bs3").val(76);
        $(".bs4").val(0);
        $(".bxclr").val("#0080ff");
        //dimensions
        $(".box_h").val(200);
        $(".box_w").val(300);
        //background
        $(".bgcolor").val("#0080ff");
        //add_text
        $(".addt").val("its a editor");
        $(".txtcolor").val("#ffffff");
        $(".let_sp").val(11);
        $(".txt_align").val("center");
        $(".txt_font").val("Calibri");
        $(".line_hght").val(32);
        $(".txtbgcolor").val("#0080ff");
        $(".f_s").val("normal");
        $(".w_spacing").val(0);
        $(".f_weight").val("normal");
        $(".optop").val(43);
        $(".opleft").val(5);
        $(".txt_cs").val("lowercase");
        $(".txt_dec").val("none");
        $(".dec_clr").val("#0080ff");
        $(".txt_dec_sty").val("solid");
        $(".top").val(1);
        $(".tbs1").val(0);
        $(".tbs2").val(0);
        $(".tbs3").val(12);
        $(".tbxclr").val("#ffffff");
        //border
        $(".bor_wid").val(12);
        $(".bor_style").val("double");
        $(".bor_clr").val("#0080ff");
        $(".bor_rad_1").val(60);
        $(".bor_rad_2").val(60);
        $(".bor_rad_3").val(60);
        $(".bor_rad_4").val(60);
        //transform
        $(".r_X").val(0);
        $(".r_Y").val(0);
        $(".r_Z").val(0);
        $(".scaleX").val(1);
        $(".scaleY").val(1);
        $(".scaleZ").val(1);
        $(".skewX").val(0);
        $(".skewY").val(0);
        $(".trns_origin").val("center");
    });
                
                
    $('.pre2').click(function () {
        $(".box_w").click();
        obj.css({

            //general
            "filter":"brightness(1)",
            "opacity":"1",
            "box-shadow":"inset 0px 115px 16px 0px black",
            //dimensions
            "height":"200px",
            "width":"310px",
            //background
            "background":"linear-gradient(90deg,black,rgb(153,60,87))",
            //add text -->
            //border
            "border":"none",
            "border-radius":"0px",
            //transform
            "transform":" skew(0deg ,0deg) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scaleX(1) scaleY(1) scaleZ(1)",
            "transform-origin":"center"
        });
        op.css({"top":"0px",
            "color":"white",
            "text-align":"center",
            "font-family":"Calibri",
            "line-height":"72px",
            "background":"transparent",
            "font-style":"normal",
            "word-spacing":"0px",
            "font-weight":"normal",
            "left":"0px",
            "text-transform":"lowercase",
            "text-decoration":"none",
            "text-decoration-color":"transparent",
            "text-decoration-style":"solid",
            "opacity":"1",
            "letter-spacing":"5px",
            "text-shadow":"0px 0px 2px white"});
        op.text("hey guys welcome to editor");
        // setting values
        //general
        $(".brghtness_r").val(1);
        $(".op_r").val(1);
        $(".bx_type").val("inset");
        $(".bs1").val(0);
        $(".bs2").val(115);
        $(".bs3").val(16);
        $(".bs4").val(0);
        $(".bxclr").val("#000000");
        //dimensions
        $(".box_h").val(200);
        $(".box_w").val(310);
        //background

        $(".gra_deg").val(90);
        $(".gra_cl1").val("#000000");
        $(".gra_cl2").val("#993c57");
        //add_text
        $(".addt").val("hey guys welcome to editor");
        $(".txtcolor").val("#ffffff");
        $(".let_sp").val(5);
        $(".txt_align").val("center");
        $(".txt_font").val("Calibri");
        $(".line_hght").val(72);
        $(".txtbgcolor").val("#0080ff");
        $(".f_s").val("normal");
        $(".w_spacing").val(0);
        $(".f_weight").val("normal");
        $(".optop").val(0);
        $(".opleft").val(0);
        $(".txt_cs").val("none");
        $(".txt_dec").val("none");
        $(".dec_clr").val("#ffffff");
        $(".txt_dec_sty").val("solid");
        $(".top").val(1);
        $(".tbs1").val(0);
        $(".tbs2").val(0);
        $(".tbs3").val(2);
        $(".tbxclr").val("#ffffff");
        $(".font_size").val(28);
        //border
        $(".tbor_style").val("none");
        $(".bbor_style").val("none");
        $(".lbor_style").val("none");
        $(".rbor_style").val("none");
        $(".wbor_style").val("none");

        /*$(".btcolor").val("#ffffff");
        $(".blcolor").val("#ffffff");
        $(".brcolor").val("#ffffff");
        $(".bbcolor").val("#ffffff");
        $(".wbcolor").val("#ffffff");

        $(".btwidth").val(10);
        $(".blwidth").val(10);
        $(".bbwidth").val(10);
        $(".brwidth").val(10);
        $(".wbwidth").val(10);

        $(".btlrad").val(60);
        $(".btrrad").val(60);
        $(".bblrad").val(60);
        $(".bbrrad").val(60);*/

        //transform
        $(".r_X").val(0);
        $(".r_Y").val(0);
        $(".r_Z").val(0);
        $(".scaleX").val(1);
        $(".scaleY").val(1);
        $(".scaleZ").val(1);
        $(".skewX").val(0);
        $(".skewY").val(0);
        $(".trns_origin").val("center");
        $("[name=perspective]").val(100);
        $("[name=p_or]").val("top");
    });
                
                
        
    
    

    /* ------------------ message boxes functionality -------------- */
    // User Iterface
    var md = 230;
    ld = 200;
    $(".more_divs").mouseleave(function(){
        $(this).fadeOut(ld);
        $(".more_imgso").removeClass('selected_img');
    });
    
    //states
    $(".mstates").click(function(){
        $(".more_imgso").removeClass('selected_img');
        $(this).addClass('selected_img');
        $(".more_divs").fadeOut(ld);
        $('.states').fadeIn(ld)
    });
    $(".mhelp").click(function(){
        $(".more_imgso").removeClass('selected_img');
        $(this).addClass('selected_img');
        $(".more_divs").fadeOut(ld);
        $(".help_message_box").fadeIn(md);
    });
    $(".mbrght").click(function () {
        $(".more_imgso").removeClass('selected_img');
        $(this).addClass('selected_img');
        $(".more_divs").fadeOut(ld);
        $(".brightness").fadeIn(md);
    });
    $(".save_projects").click(function () {
        $(".more_imgso").removeClass('selected_img');
        $(this).addClass('selected_img');
        $(".more_divs").fadeOut(ld);
        $(".save_project_box").fadeIn(md);
    });
    $('.settings').click(function () {
        $(".more_imgso").removeClass('selected_img');
        $(this).addClass('selected_img');
        $(".more_divs").fadeOut(ld);
        $(".settings_box").fadeIn(md);
    });
    $('.optimize').click(function () {
        $(".more_imgso").removeClass('selected_img');
        $(this).addClass('selected_img');
        $(".more_divs").fadeOut(ld);
        $(".optimize_editor").fadeIn(md);
    });
    $('.call-yatharth').click(function () {
        $(".more_imgso").removeClass('selected_img');
        $(this).addClass('selected_img');
        $(".more_divs").fadeOut(ld);
        $(".Yatharth").fadeIn(md);
        $('.User_input_field').focus()
    });
    

    $(".m_abt").click(function(){
        $('.abt_editor').fadeIn(200)
    })

    $('.close_abt').click(function(){
        $('.abt_editor').fadeOut(200)
    })
    $('.close_yatharth').click(function(){
        $('.Yatharth').fadeOut(200)
        $('.conversation_ground').html('<div class="Yatharth_dialog_box">ask me anything about editor !</div>')
    })

    $(".nor").click(function(){
        $(".st_name").text("normal");
    });
    $(".hov").click(function(){
        $(".st_name").text("hover");
    });
    $(".act").click(function(){
        $(".st_name").text("active");
    });

    $('.set_Class').on('input',()=>{
        if ( $('.set_Class').is(':checked') ) {
            $('.alt').show().css({top:'-200px'})
        }
        else {
            $('.alt').hide()
        }
    })
    
    

    /* --------------- Emoticons support ------------- */
    $(".useem").click(function(){
        $(".em_selector").fadeIn(200);
        
        $(this).css("filter","brightness(0.2)");
    });
    $(".em_selector").mouseleave(function(){
        $(this).fadeOut(200);
        $(".useem").css("filter","brightness(1)");
    });
    /* ---------------- emojis ----------------- */
    $(".em1").click(function(){
        op.append('&#x1F603;')
    });
    $(".em2").click(function(){
        op.append('&#x1F602;')
    });
    $(".em3").click(function(){
        op.append('&#x1F62D;')
    });
    $(".em4").click(function(){
        op.append('&#x1F603;')
    });
    $(".em5").click(function(){
        op.append('&#x1F603;')
    });
    $(".em6").click(function(){
        op.append('&#x1F60D;')
    });
    $(".em7").click(function(){
        op.append('&#x1F618;')
    });
    $(".em8").click(function(){
        op.append('&#x1F603;')
    });
    $(".em9").click(function(){
        op.append('&#x1F603;')
    });
    $(".em10").click(function(){
        op.append('&#x1F603;')
    });
    $(".em11").click(function(){
        op.append('&#x1F603;')
    });
    $(".em12").click(function(){
        op.append('&#x1F603;')
    });
    $(".em13").click(function(){
        op.append('&#x1F603;')
    });
    $(".em14").click(function(){
        op.append('&#x1F603;')
    });
    $(".em15").click(function(){
        op.append('&#x1F603;')
    });
    $(".em16").click(function(){
        op.append('&#x1F603;')
    });
    $(".em17").click(function(){
        op.append('&#x1F603;')
    });
    $(".em18").click(function(){
        op.append('&#x1F603;')
    });
    $(".em19").click(function(){
        op.append('&#x1F603;')
    });
    $(".em20").click(function(){
        op.append('&#x1F603;')
    });
    $(".em21").click(function(){
        op.append('&#x1F603;')
    });
    $(".em22").click(function(){
        op.append('&#x1F603;')
    });
    $(".em23").click(function(){
        op.append('&#x1F603;')
    });
    $(".em24").click(function(){
        op.append('&#x1F603;')
    });
    $(".em25").click(function(){
        op.append('&#x1F603;')
    });
    $(".em26").click(function(){
        op.append('&#x1F603;')
    });
    $(".em27").click(function(){
        op.append('&#x1F603;')
    });
    $(".em28").click(function(){
        op.append('&#x1F603;')
    });

    /* ---------------- help boxes ----------------- */

    //help
    $(".expand").click(function(){
        $(".help").css({"height":"231px","width":"400px","left":"28%"});
        $(".helpbody").css({"padding-right":"0px","width":"99.9%"});
        $(this).addClass('compress')
    });
    $(".compress").click(function(){
        $(".help").css({"height":"240px","width":"300px","left":"35.8%"});
        $(".helpbody").css({"padding-right":"14px","width":"94%"});
        $(this).removeClass('compress')
    });
    // optimized for special ones
    $(".pers_h .expand").click(function(){
        $(".pers_h").css({ "height": "316.6px", "width": "790px", "left": "10%" });
        $(".pers_h .helpbody").css({"width":"99.3%"});
    });
    $(".doub_txt_h .expand").click(function(){
        $(".doub_txt_h").css({ "height": "365.6px", "width": "810px", "left": "8%" });
        $(".doub_txt_h .helpbody").css({"width":"99.3%"});
    });
    $(".exp_states_h .expand").click(function(){
        $(".exp_states_h").css({ "height": "325.6px", "width": "810px", "left": "8%" });
        $(".exp_states_h .helpbody").css({"width":"99.3%","overflow":"hidden","height":"200px"});
        $(".exp_states_h .GOTIT").css("top","20px");
    });
    $(".exp_states_h .compress").dblclick(function(){
        $(".exp_states_h").css({ "height": "280px", "width": "300px", "left": "35.8%" });
        $(".exp_states_h .helpbody").css({"width":"300px","padding-right":"14px","overflow-y":"scroll","height":"180px"});
        $(".exp_states_h .GOTIT").css("top","0px");
    });

    /* ----------------- help box display :block; -------------- */
    //how scale - z works ?
    $(".sc_wr_q").click(function(){
        $(".sc_z_h").fadeIn(00);
        $(".sc_z_h").css({"transform":"rotateY(0deg)","opacity":"1"});
    });
    //how to position box ?
    $(".pos_b_q").click(function(){
        $(".pos_box_h").fadeIn(00);
        $(".pos_box_h").css({"transform":"rotateY(0deg)","opacity":"1"});
    });
    //perspective
    $(".per_q").click(function(){
        $(".pers_h").fadeIn(00);
        $(".pers_h").css({"transform":"rotateY(0deg)","opacity":"1"});
    });
    // how to double text
    $(".dou_txt_q").click(function(){
        $(".doub_txt_h").fadeIn(00);
        $(".doub_txt_h").css({"transform":"rotateY(0deg)","opacity":"1"});
    });
    // explain states
    $(".explain_sta_q").click(function(){
        $(".exp_states_h").fadeIn(00);
        $(".exp_states_h").css({"transform":"rotateY(0deg)","opacity":"1"});
    });
    $("[name=GOTIT]").click(function(){
        $(".help").css({"transform":"rotateX(45deg)","opacity":"0"});
        $(".help").fadeOut(120);
    });

    /* --------------- brightness ---------------- */
    var status = 'dark'
    setInterval(()=>{
        if ( status == 'dark' ) {
            var title_clr = 'rgba(255,255,255,.7)' , oth_clr = 'rgba(255,255,255,.3)'
            $('.abt_editor').css({background:'rgb(40,40,40)'})
            $('.abt_hea_title').css({color:'rgba(255,255,255,.6)'})
            $('.SingleDeveloper').css({color:'rgba(255,255,255,.4)'})
            $('.abt_bdy').css({color:'rgba(255,255,255,.4)'})
            $(".gnrl").click(function(){
                $(".oth").css({color:oth_clr}).removeClass('selected_status')
                $(this).css({color:title_clr}).addClass('selected_status')
            });
            $(".filter").click(function () {
                $(".oth").css({color:oth_clr}).removeClass('selected_status')
                $(this).css({color:title_clr}).addClass('selected_status')
            });
            $(".dimn").click(function(){
                $(".oth").css({color:oth_clr}).removeClass('selected_status')
                $(this).css({color:title_clr}).addClass('selected_status')
            });
            $(".bg").click(function(){
                $(".oth").css({color:oth_clr}).removeClass('selected_status')
                $(this).css({color:title_clr}).addClass('selected_status')
            });
            $(".txt").click(function(){
                $(".oth").css({color:oth_clr}).removeClass('selected_status')
                $(this).css({color:title_clr}).addClass('selected_status')
            });
            $(".border").click(function(){
                $(".oth").css({color:oth_clr}).removeClass('selected_status')
                $(this).css({color:title_clr}).addClass('selected_status')
            });
            $(".trns").click(function(){
                $(".oth").css({color:oth_clr}).removeClass('selected_status')
                $(this).css({color:title_clr}).addClass('selected_status')
            });
            //$(".animation_uni").click(function () {
                //$(".oth").css({color:oth_clr}).removeClass('selected_status')
                //$(this).css({color:title_clr}).addClass('selected_status')
            //});
            $(".frms").click(function(){
                $(".oth").css({color:oth_clr}).removeClass('selected_status')
                $(this).css({color:title_clr}).addClass('selected_status')
            });
            $(".scrl").click(function(){
                $(".oth").css({color:oth_clr}).removeClass('selected_status')
                $(this).css({color:title_clr}).addClass('selected_status')
            });
            $(".sets").click(function(){
                $(".oth").css({color:oth_clr}).removeClass('selected_status')
                $(this).css({color:title_clr}).addClass('selected_status')
            });
            $(".more_tabs").css({ "background": "rgb(50,50,50)", "box-shadow": "-290px 0px 400px 200px rgb(50,50,50)" })
            $("body").css({ background: 'rgb(50,50,50)' });
            
            $("input,textarea,select").css({ background: 'transparent' });
            $(".output").css({ boxShadow: '0px 0px 0px 0px black' });
            $(".title").css({ background: 'rgb(50,50,50)' });
            $('.more').css({ background: 'rgb(60,60,60)' });
            $('.more_imgso,.algn,.useem,.expand,.enter_key,.icon,.speak').css({ filter: 'brightness(0.8)' });
            $('.more_imgso,.close_abt,.algn,.min_out,.max_out,.useem,.expand,.enter_key,.icon,.speak').hover(function () {
                $(this).css({ filter: 'brightness(1)' })
            }, function () {
                $(this).css({filter: 'brightness(0.8)'});
            });
            $('.max_out').click(function () {
                $(".output").css({background:'rgb(50,50,50)'});
            });
            $(".useem").click(function () {
                $(this).css({filter:'brightness(1.1)'});
            });
            $('.Yatharth_tag_line').css({color:'rgba(255,255,255,.6)'})
            $('.sectionbstyle,.sectionscrl,.sectionAnimeSettings,.sectionAnimeChanges').css({ background: 'rgb(50,50,50)' });
            $('.Yatharth,.conversation_ground,.sort_bor_rad,.ani_sort_bor_rad,.more_divs,.msg_bx,.help,.em_selector,.more_divs_common_class').css({ boxShadow: '0px 0px 8px 0px black', background: 'rgb(50,50,50)' });
            $('.que').css({ filter: 'brightness(1.4)' });
            
            $('.msg_body').css({color:'rgba(255,255,255,.6)'})
            $('.conversation_ground').css({boxShadow:'initial'})
            $('.speakToYatharth,.askToYatharth').css({filter:'invert(.69)'})
            $('.User_dialog_box,.Yatharth_dialog_box,.User_Input_field').css({color:'rgba(255,255,255,.8)'})
            $(".msg_body").css({ color: 'rgb(140,140,140)' });
            $(".msg_header").css({ color: 'rgb(170,170,170)' });
            $('.fhr').css({ background: 'rgb(0,0,0)' });
            $('.save_div').css({ background: 'rgb(65,65,65)' });
            $('.font_header,.font_option_div').css({color:'rgba(255,255,255,.8)'})

            /*----------- transparent functionality --------------- */
    $(".bg_color_trns").click(function () {
        obj.css({ background: 'transparent'});
        $(".bgcolor,.bg_trns,.txtbgcolor,.txtbglgcolor1,.txtbglgcolor2").val("#323232");
    });
    $(".txt_color_trns").click(function () {
        $(".add_text").css({"color":"transparent"});
        $(".txtcolor").val($(".txtbgcolor").val());
    });
    $(".txt_bg_color_trns").click(function () {
        $(".add_text").css({"background":"transparent"});
        $(".txtbgcolor").val($(".bgcolor").val());
        $(".txt_bg_lg_deg").val($(".ln_gra_deg").val());
        $(".txtbglgcolor1").val(v(".ln_gra_cl1"));
        $('.txtbglgcolor2').val(v(".ln_gra_cl2"));
    });
        //borders
        $(".top_bor_clr_trns").click(function () {
            obj.css({ "border-top-color": "transparent" });
            $(".btcolor").val($(".bgcolor").val());
        });
        $(".left_bor_clr_trns").click(function () {
            obj.css({ "border-left-color": "transparent" });
            $(".blcolor").val($(".bgcolor").val());
        });
        $(".bot_bor_clr_trns").click(function () {
            obj.css({ "border-bottom-color": "transparent" });
            $(".bbcolor").val($(".bgcolor").val());
        });
        $(".right_bor_clr_trns").click(function () {
            obj.css({ "border-right-color": "transparent" });
            $(".brcolor").val($(".bgcolor").val());
        });
        $(".bor_clr_trns").click(function () {
            obj.css({"border-color":"transparent"});
            $(".wbcolor,.btcolor,.blcolor,.bbcolor,.brcolor").val($(".bgcolor").val());
        });

        }
        else if (status == 'light') {
            var title_clr = 'rgba(0,0,0,.4)' , oth_clr = 'rgba(0,0,0,.7)'

            $('.abt_editor').css({background:'rgb(245,245,245)'})
            $('.abt_hea_title').css({color:'rgb(100,100,100)'})
            $('.SingleDeveloper').css({color:'rgb(160,160,160)'})
            $('.abt_bdy').css({color:'rgb(160,160,160)'})

            $(".gnrl").click(function(){
                $(".oth").css({color:title_clr}).removeClass('selected_status')
                $(this).css({color:oth_clr}).addClass('selected_status')
            });
            $(".filter").click(function () {
                $(".oth").css({color:title_clr}).removeClass('selected_status')
                $(this).css({color:oth_clr}).addClass('selected_status')
            });
            $(".dimn").click(function(){
                $(".oth").css({color:title_clr}).removeClass('selected_status')
                $(this).css({color:oth_clr}).addClass('selected_status')
            });
            $(".bg").click(function(){
                $(".oth").css({color:title_clr}).removeClass('selected_status')
                $(this).css({color:oth_clr}).addClass('selected_status')
            });
            $(".txt").click(function(){
                $(".oth").css({color:title_clr}).removeClass('selected_status')
                $(this).css({color:oth_clr}).addClass('selected_status')
            });
            $(".border").click(function(){
                $(".oth").css({color:title_clr}).removeClass('selected_status')
                $(this).css({color:oth_clr}).addClass('selected_status')
            });
            $(".trns").click(function(){
                $(".oth").css({color:title_clr}).removeClass('selected_status')
                $(this).css({color:oth_clr}).addClass('selected_status')
            });
            //$(".animation_uni").click(function () {
                //$(".oth").css({color:title_clr}).removeClass('selected_status')
                //$(this).css({color:oth_clr}).addClass('selected_status')
            //});
            $(".frms").click(function(){
                $(".oth").css({color:title_clr}).removeClass('selected_status')
                $(this).css({color:oth_clr}).addClass('selected_status')
            });
            $(".scrl").click(function(){
                $(".oth").css({color:title_clr}).removeClass('selected_status')
                $(this).css({color:oth_clr}).addClass('selected_status')
            });
            $(".sets").click(function(){
                $(".oth").css({color:title_clr}).removeClass('selected_status')
                $(this).css({color:oth_clr}).addClass('selected_status')
            });
            $('.cross').css({background:'rgb(130,130,130)'})
             $(".more_tabs").css({"background":"white","box-shadow":"-290px 0px 400px 200px white"})
                $("body").css({ background: 'rgb(256,256,256)' });
                
                $("input,textarea,select").css({ background: 'transparent' });
                $(".output").css({ boxShadow: '0px 0px 0px 0px black' });
                $(".title").css({ background: 'white' });
                $('.more').css({ background: 'rgb(245,245,245)' });
                $('.more_imgso,.algn,.useem,.expand,.enter_key,.icon').css({ filter: 'brightness(1.2)' });
                $('.more_imgso,.close_abt,.algn,.min_out,.max_out,.useem,.expand,.enter_key,.icon').hover(function () {
                    $(this).css({ filter: 'brightness(0.8)' })
                }, function () {
                    $(this).css({ filter: 'brightness(1.2)' });
                });
                $('.msg_body').css({color:'rgba(0,0,0,.3)'})
                $('.max_out').click(function () {
                    $(".output").css({ background: 'white' });
                });
                $(".useem").click(function () {
                    $(this).css({ filter: 'brightness(0.7)' });
                });
                /*
                $('.Yatharth_tag_line').css({color:'rgba(255,255,255,.6)'})
                $('.sectionbstyle,.sectionscrl,.sectionAnimeSettings,.sectionAnimeChanges').css({ background: 'rgb(50,50,50)' });
                $('.Yatharth,.conversation_ground,.sort_bor_rad,.ani_sort_bor_rad,.more_divs,.msg_bx,.help,.em_selector').css({ boxShadow: '0px 0px 8px 0px black', background: 'rgb(50,50,50)' });
                $('.que').css({ filter: 'brightness(1.4)' });
                $('.conversation_ground').css({boxShadow:'initial'})
                $('.speakToYatharth,.askToYatharth').css({filter:'brightness(2)'})
                $('.User_dialog_box,.Yatharth_dialog_box,.User_Input_field').css({color:'rgba(255,255,255,.8)'})
                */
                $('.Yatharth_tag_line').css({color:'rgba(0,0,0,.6)'})
                $('.sectionbstyle,.sectionscrl,.sectionAnimeSettings,.sectionAnimeChanges').css({ background: 'white' });
                $('.Yatharth,.conversation_ground,.sort_bor_rad,.sort_bor_rad,.more_divs,.msg_bx,.help,.em_selector').css({ boxShadow: '0px 0px 8px 0px grey', background: 'white' });
                $('.que').css({ filter: 'brightness(0.8)' });
                $('.conversation_ground').css({boxShadow:'initial'})
                $('.speakToYatharth,.askToYatharth').css({filter:'brightness(2)'})
                $('.User_dialog_box,.Yatharth_dialog_box,.User_Input_field').css({color:'rgba(0,0,0,.7)'})
                $(".msg_header").css({ color: 'rgb(140,140,140)' });
                $(".msg_body").css({ color: 'rgb(170,170,170)' });
                $('.fhr').css({ background: 'rgb(0,0,0)' });
                $('.save_div').css({ background: 'rgb(240,240,240)' });
                $('.font_header,.font_option_div').css({color:'rgba(0,0,0,.7)'})
                /*----------- transparent functionality --------------- */
            $(".bg_color_trns").click(function () {
                obj.css({ background: 'transparent'});
                $(".bgcolor,.bg_trns").val("#ffffff");
            });
            $(".txt_color_trns").click(function () {
                $(".add_text").css({"color":"transparent"});
                $(".txtcolor").val($(".txtbgcolor").val());
            });
            $(".txt_bg_color_trns").click(function () {
                $(".add_text").css({"background":"transparent"});
                $(".txtbgcolor").val($(".bgcolor").val());
                $(".txt_bg_lg_deg").val($(".ln_gra_deg").val());
                $(".txtbglgcolor1").val(v(".ln_gra_cl1"));
                $('.txtbglgcolor2').val(v(".ln_gra_cl2"));
            });
                //borders
                $(".top_bor_clr_trns").click(function () {
                    obj.css({ "border-top-color": "transparent" });
                    $(".btcolor").val($(".bgcolor").val());
                });
                $(".left_bor_clr_trns").click(function () {
                    obj.css({ "border-left-color": "transparent" });
                    $(".blcolor").val($(".bgcolor").val());
                });
                $(".bot_bor_clr_trns").click(function () {
                    obj.css({ "border-bottom-color": "transparent" });
                    $(".bbcolor").val($(".bgcolor").val());
                });
                $(".right_bor_clr_trns").click(function () {
                    obj.css({ "border-right-color": "transparent" });
                    $(".brcolor").val($(".bgcolor").val());
                });
                $(".bor_clr_trns").click(function () {
                    obj.css({"border-color":"transparent"});
                    $(".wbcolor,.btcolor,.blcolor,.bbcolor,.brcolor").val($(".bgcolor").val());
                });

         }
    },1)
    $("[name=brghts]").change(function () {
        ////////////// problem yaad h na -- tab - colors```
        switch($(this).val())
        {
            case 'dark':
                    status = 'dark'
                    $(".oth").css({color:'rgba(255,255,255,.3)'})
                    $('.selected_status').css({color:'rgba(255,255,255,.7)'})
                break;
            
            case 'light':
                    status = 'light'
                    $(".oth").css({color:'rgba(0,0,0,.4)'})
                    $('.selected_status').css({color:'rgba(0,0,0,.7)'})
                break;
        }
    });
    /* ------------------ settings ------------------ */
    
    /* ------------------ Save projects ----------------- */
    /* --------- save projects array declaration ------------ */
    //general
    brght_a = [[], [], [], [], []];
    opa_a = [[], [], [], [], []];
    //shadow
    sh_ty_a = [[], [], [], [], []];
    shn1_a = [[], [], [], [], []];
    shn2_a = [[], [], [], [], []];
    shn3_a = [[], [], [], [], []];
    shn4_a = [[], [], [], [], []];
    sh_clr_a = [[], [], [], [], []];
    //dimension
    h_a = [[],[],[],[],[]];
    w_a = [[], [], [], [], []];
    //background
    bc_a = [[], [], [], [], []];
    bcg_ln_deg_a = [[], [], [], [], []];
    bcg_ln_clr_1_a = [[], [], [], [], []];
    bcg_ln_clr_2_a = [[], [], [], [], []];
    bcg_ln_clr_3_a = [[], [], [], [], []];
    bcg_ln_clr_4_a = [[], [], [], [], []];
    bcg_rad_clr_1_a = [[], [], [], [], []];
    bcg_rad_clr_2_a = [[], [], [], [], []];
    bcg_rad_clr_3_a = [[], [], [], [], []];
    bcg_rad_clr_4_a = [[], [], [], [], []];
    bcg_rad_clr_5_a = [[], [], [], [], []];
    //text
    add_txt_a = [[], [], [], [], []];
    txt_Clr_a = [[], [], [], [], []];
    let_sp_a = [[], [], [], [], []];
    txt_algn_a = [[], [], [], [], []];
    txt_font_a = [[], [], [], [], []];
    line_hgt_a = [[], [], [], [], []];
    txt_bg_a = [[], [], [], [], []];
    txt_sty_a = [[], [], [], [], []];
    w_sp_a = [[], [], [], [], []];
    txt_lin_bg_deg_a = [[], [], [], [], []];
    txt_lin_bg_clr_1_a = [[], [], [], [], []];
    txt_lin_bg_clr_2_a = [[], [], [], [], []];
    txt_font_wght_a = [[], [], [], [], []];
    txt_pos_top_a = [[], [], [], [], []];
    txt_pos_left_a = [[], [], [], [], []];
    txt_case_a = [[], [], [], [], []];
    txt_dec_type_a = [[], [], [], [], []];
    txt_dec_clr_a = [[], [], [], [], []];
    txt_dec_sty_a = [[], [], [], [], []];
    txt_op_a = [[], [], [], [], []];
    txt_sh_n1_a = [[], [], [], [], []];
    txt_sh_n2_a = [[], [], [], [], []];
    txt_sh_n3_a = [[], [], [], [], []];
    txt_sh_clr_a = [[], [], [], [], []];
    txt_font_size_a = [[], [], [], [], []];
    //border
        //style
        bor_top_sty_a = [[], [], [], [], []];
        bor_left_sty_a = [[], [], [], [], []];
        bor_right_sty_a = [[], [], [], [], []];
        bor_bottom_sty_a = [[], [], [], [], []];
        bor_sty_a = [[], [], [], [], []];
        //color
        bor_top_clr_a = [[], [], [], [], []];
        bor_left_clr_a = [[], [], [], [], []];
        bor_right_clr_a = [[], [], [], [], []];
        bor_bottom_clr_a = [[], [], [], [], []];
        bor_clr_a = [[], [], [], [], []];
        //width
        bor_top_w_a = [[], [], [], [], []];
        bor_left_w_a = [[], [], [], [], []];
        bor_right_w_a = [[], [], [], [], []];
        bor_bottom_w_a = [[], [], [], [], []];
        bor_w_a = [[], [], [], [], []];
        //radius
        bor_tl_rad_a = [[], [], [], [], []];
        bor_tr_rad_a = [[], [], [], [], []];
        bor_bl_rad_a = [[], [], [], [], []];
        bor_br_rad_a = [[], [], [], [], []];
        rad_unit_a = [[], [], [], [], []];
    //transform
        r_x_a = [[], [], [], [], []];
        r_y_a = [[], [], [], [], []];
        r_z_a = [[], [], [], [], []];
        sc_x_a = [[], [], [], [], []];
        sc_y_a = [[], [], [], [], []];
        sc_z_a = [[], [], [], [], []];
        sk_y_a = [[], [], [], [], []];
        sk_x_a = [[], [], [], [], []];

        trns_orgn_select_a = [[], [], [], [], []];
        trns_orgn_x_a = [[], [], [], [], []];
        trns_orgn_y_a = [[], [], [], [], []];

        per_a = [[], [], [], [], []];
        per_orgn_select_a = [[], [], [], [], []];
        per_orgn_a = [[], [], [], [], []];
        

        /* -------- save project terminology -------- */
            
                    $(".sdiv1 .add").click(function(){
                        $(this).fadeOut(0);
                        $(".sdiv1 .project_name").fadeIn(200).focus();
                        $(".sdiv1 .project_name").focusout(function(){
                            pname = $(this).val();
                            if(pname.length == 0)
                            {
                                $(this).val("project1");
                            }
                        });
                        $(".sdiv1 .save_icon").css({ "opacity": "1", "display": "inline-block" }, 1000);
                        $(".sdiv2 .add").css({background:'red'})
                    });
                    $(".sdiv2 .add").click(function () {
                        $(this).fadeOut(0);
                        $(".sdiv2 .project_name").fadeIn(200).focus();
                        $(".sdiv2 .project_name").focusout(function () {
                            pname = $(this).val();
                            if (pname.length == 0) {
                                $(this).val("project2");
                            }
                        });
                        $(".sdiv2 .save_icon").css({ "opacity": "1", "display": "inline-block" }, 1000);

                    });
                    $(".sdiv3 .add").click(function () {
                        $(this).fadeOut(0);
                        $(".sdiv3 .project_name").fadeIn(200).focus();
                        $(".sdiv3 .project_name").focusout(function () {
                            pname = $(this).val();
                            if (pname.length == 0) {
                                $(this).val("project3");
                            }
                        });
                        $(".sdiv3 .save_icon").css({ "opacity": "1", "display": "inline-block" }, 1000);

                    });
                    $(".sdiv4 .add").click(function () {
                        $(this).fadeOut(0);
                        $(".sdiv4 .project_name").fadeIn(200).focus();
                        $(".sdiv4 .project_name").focusout(function () {
                            pname = $(this).val();
                            if (pname.length == 0) {
                                $(this).val("project4");
                            }
                        });
                        $(".sdiv4 .save_icon").css({ "opacity": "1", "display": "inline-block" }, 1000);

                    });
                    $(".sdiv5 .add").click(function () {
                        $(this).fadeOut(0);
                        $(".sdiv5 .project_name").fadeIn(200).focus();
                        $(".sdiv5 .project_name").focusout(function () {
                            pname = $(this).val();
                            if (pname.length == 0) {
                                $(this).val("project5");
                            }
                        });
                        $(".sdiv5 .save_icon").css({ "opacity": "1", "display": "inline-block" }, 1000);

                    });
    //save_prog_1
                    $(".sdiv1 .save_icon").click(function () {
                        $(".sdiv1 .apply_icon").css({ "opacity": "1", "display": "inline-block" }, 1000);
                        $(".sdiv2").fadeIn(300);
                        $(this).css({transition:'0s'});
                        /* ------ array --------- */
                        //general
                        brght_a[0] = $(".brghtness_r").val();
                        opa_a[0] = $(".op_r").val();

                        //shadow
                        sh_ty_a[0] = $(".bx_type").val();
                        shn1_a[0] = $(".bs1").val();
                        shn2_a[0] = $(".bs2").val();
                        shn3_a[0] = $(".bs3").val();
                        shn4_a[0] = $(".bs4").val();
                        sh_clr_a[0] = $(".bxclr").val();
                        //dimensions
                        h_a[0] = $(".box_h").val();
                        w_a[0] = $(".box_w").val();
                        //background
                        bc_a[0] = v(".bgcolor");
                        bcg_ln_deg_a[0] = v(".ln_gra_deg")
                        bcg_ln_clr_1_a[0] = v(".ln_gra_cl1")
                        bcg_ln_clr_2_a[0] = v(".ln_gra_cl2")
                        bcg_ln_clr_3_a[0] = v(".ln_gra_cl3")
                        bcg_ln_clr_4_a[0] = v(".ln_gra_cl4")
                        bcg_rad_clr_1_a[0] = v(".rad_gra_cl1")
                        bcg_rad_clr_2_a[0] = v(".rad_gra_cl2")
                        bcg_rad_clr_3_a[0] = v(".rad_gra_cl3")
                        bcg_rad_clr_4_a[0] = v(".rad_gra_cl4")
                        bcg_rad_clr_5_a[0] = v(".rad_gra_cl5")
                        //text
                        add_txt_a[0] = $(".addt").val();
                        txt_Clr_a[0] = $(".txtcolor").val();
                        let_sp_a[0] = $(".let_sp").val();
                        txt_algn_a[0] = $(".txt_align").val();
                        txt_font_a[0] = $(".txt_font").val();
                        line_hgt_a[0] = $(".line_hght").val();
                        txt_bg_a[0] = $(".txtbgcolor").val();
                        txt_sty_a[0] = $(".f_s").val();
                        w_sp_a[0] = $(".w_spacing").val();
                        txt_lin_bg_deg_a[0] = $(".txt_bg_lg_deg").val();
                        txt_lin_bg_clr_1_a[0] = $(".txtbglgcolor1").val();
                        txt_lin_bg_clr_2_a[0] = $(".txtbglgcolor2").val();
                        txt_font_wght_a[0] = $(".f_weight").val();
                        txt_pos_top_a[0] = $(".optop").val();
                        txt_pos_left_a[0] = $(".opleft").val();
                        txt_case_a[0] = $(".txt_cs").val();
                        txt_dec_type_a[0] = $(".txt_dec").val();
                        txt_dec_clr_a[0] = $(".dec_clr").val();
                        txt_dec_sty_a[0] = $(".txt_dec_sty").val();
                        txt_op_a[0] = $(".top").val();
                        txt_sh_n1_a[0] = $(".tbs1").val();
                        txt_sh_n2_a[0] = $(".tbs2").val();
                        txt_sh_n3_a[0] = $(".tbs3").val();
                        txt_sh_clr_a[0] = $(".tbxclr").val();
                        txt_font_size_a[0] = $("[name=font_size]").val();
                        //border
                            //style
                        bor_top_sty_a[0] = $(".tbor_style").val();
                        bor_left_sty_a[0] = $(".lbor_style").val();
                        bor_right_sty_a[0] = $(".rbor_style").val();
                        bor_bottom_sty_a[0] = $(".bbor_style").val();
                        bor_sty_a[0] = $(".wbor_style").val();
                            //color
                        bor_top_clr_a[0] = $(".btcolor").val();
                        bor_left_clr_a[0] = $(".blcolor").val();
                        bor_right_clr_a[0] = $(".brcolor").val();
                        bor_bottom_clr_a[0] = $(".bbcolor").val();
                        bor_clr_a[0] = $(".wbcolor").val();
                            //width
                        bor_top_w_a[0] = $(".btwidth").val();
                        bor_left_w_a[0] = $(".blwidth").val();
                        bor_right_w_a[0] = $(".brwidth").val();
                        bor_bottom_w_a[0] = $(".bbwidth").val();
                        bor_w_a[0] = $(".wbwidth").val();
                            //radius
                        bor_tl_rad_a[0] = $(".btlrad").val();
                        bor_tr_rad_a[0] = $(".btrrad").val();
                        bor_bl_rad_a[0] = $(".bblrad").val();
                        bor_br_rad_a[0] = $(".bbrrad").val();
                        rad_unit_a[0] = $("[name=bor_Rad_type]").val();
                        
                        // transform
                        r_x_a[0] = $(".r_X").val();
                        r_y_a[0] = $(".r_Y").val();
                        r_z_a[0] = $(".r_Z").val();
                        sc_x_a[0] = $(".scaleX").val();
                        sc_y_a[0] = $(".scaleY").val();
                        sc_z_a[0] = $(".scaleZ").val();
                        sk_x_a[0] = $(".skewX").val();
                        sk_y_a[0] = $(".skewY").val();

                        trns_orgn_select_a[0] = $(".trns_origin").val();
                        trns_orgn_x_a[0] = $(".trnsorgn1").val();
                        trns_orgn_y_a[0] = $(".trnsorgn2").val();
                        per_a[0] = $("[name=perspective]").val();
                        per_orgn_select_a[0] = $(".per_orgn_sel").val();
                        per_orgn_a[0] = $('.perorgn').val();
                    });
                    $(".sdiv1 .apply_icon").click(function () {
                        /* --- setting variable initialization --- */
                        //general
                        bs_ty = sh_ty_a[0];
                        bx1 = shn1_a[0];
                        bx2 = shn2_a[0];
                        bx3 = shn3_a[0];
                        bx4 = shn4_a[0];
                        bxclr = sh_clr_a[0];
                        //background
                        bclr = txt_bg_a[0];
        
                        //text_shadow
                        tbx1 = txt_sh_n1_a[0];
                        tbx2 = txt_sh_n2_a[0];
                        tbx3 = txt_sh_n3_a[0];
                        tbxclr = txt_sh_clr_a[0];
                        l_ht = line_hgt_a[0];
                        /* ----- setting value for project '1/2/3/4/5' ---- */
                        //general
                        $(".brghtness_r").val(brght_a[0]);
                        $(".op_r").val(opa_a[0]);
                        //shadow
                        $(".bx_type").val(sh_ty_a[0]);
                        $(".bs1").val(shn1_a[0]);
                        $(".bs2").val(shn2_a[0]);
                        $(".bs3").val(shn3_a[0]);
                        $(".bs4").val(shn4_a[0]);
                        $(".bxclr").val(sh_clr_a[0]);
                        //dimension
                        $(".box_h").val(h_a[0]);
                        $(".box_w").val(w_a[0]);
                        //background
                         $(".bgcolor").val(bc_a[0]);
                         $(".ln_gra_deg").val(bcg_ln_deg_a[0])
                         $(".ln_gra_cl1").val(bcg_ln_clr_1_a[0])
                         $(".ln_gra_cl2").val(bcg_ln_clr_2_a[0])
                         $(".ln_gra_cl3").val(bcg_ln_clr_3_a[0])
                         $(".ln_gra_cl4").val(bcg_ln_clr_4_a[0])
                         $(".rad_gra_cl1").val(bcg_rad_clr_1_a[0])
                         $(".rad_gra_cl2").val(bcg_rad_clr_2_a[0])
                         $(".rad_gra_cl3").val(bcg_rad_clr_3_a[0])
                         $(".rad_gra_cl4").val(bcg_rad_clr_4_a[0])
                         $(".rad_gra_cl5").val(bcg_rad_clr_5_a[0])
                        //text
                          $(".addt").val(add_txt_a[0]);
                          op.text(add_txt_a[0]);
                          $(".txtcolor").val(txt_Clr_a[0]);
                          $(".let_sp").val(let_sp_a[0]);
                          $(".txt_align").val(txt_algn_a[0]);
                          $(".txt_font").val(txt_font_a[0]);
                          $(".line_hght").val(line_hgt_a[0]);
                          $(".txtbgcolor").val(txt_bg_a[0]);
                          $(".f_s").val(txt_sty_a[0]);
                          $(".w_spacing").val(w_sp_a[0]);
                          $(".txt_bg_lg_deg").val(txt_lin_bg_deg_a[0]);
                          $(".txtbglgcolor1").val(txt_lin_bg_clr_1_a[0]);
                          $(".txtbglgcolor2").val(txt_lin_bg_clr_2_a[0]);
                          $(".f_weight").val(txt_font_wght_a[0]);
                          $(".optop").val(txt_pos_top_a[0]);
                          $(".opleft").val(txt_pos_left_a[0]);
                          $(".txt_cs").val(txt_case_a[0]);
                          $(".txt_dec").val(txt_dec_type_a[0]);
                          $(".dec_clr").val(txt_dec_clr_a[0]);
                          $(".txt_dec_sty").val(txt_dec_sty_a[0]);
                          $(".top").val(txt_op_a[0]);
                          $(".tbs1").val(txt_sh_n1_a[0]);
                          $(".tbs2").val(txt_sh_n2_a[0]);
                          $(".tbs3").val(txt_sh_n3_a[0]);
                          $(".tbxclr").val(txt_sh_clr_a[0]);
                          $("[name=font_size]").val(txt_font_size_a[0]);
                        //border
                            //style
                                $(".tbor_style").val(bor_top_sty_a[0]);
                                $(".lbor_style").val(bor_left_sty_a[0]);
                                $(".rbor_style").val(bor_right_sty_a[0]);
                                $(".bbor_style").val(bor_bottom_sty_a[0]);
                                $(".wbor_style").val(bor_sty_a[0]);
                            //color
                                $(".btcolor").val(bor_top_clr_a[0]);
                                $(".blcolor").val(bor_left_clr_a[0]);
                                $(".brcolor").val(bor_right_clr_a[0]);
                                $(".bbcolor").val(bor_bottom_clr_a[0]);
                                $(".wbcolor").val(bor_clr_a[0]);
                            //width
                                $(".btwidth").val(bor_top_w_a[0]);
                                $(".blwidth").val(bor_left_w_a[0]);
                                $(".brwidth").val(bor_right_w_a[0]);
                                $(".bbwidth").val(bor_bottom_w_a[0]);
                                $(".wbwidth").val(bor_w_a[0]);
                            //radius
                                $(".btlrad").val(bor_tl_rad_a[0]);
                                $(".btrrad").val(bor_tr_rad_a[0]);
                                $(".bblrad").val(bor_bl_rad_a[0]);
                                $(".bbrrad").val(bor_br_rad_a[0]);
                                $('[name=bor_Rad_type]').val(rad_unit_a[0]);
                        //transform
                                  $(".r_X").val(r_x_a[0]);
                                  $(".r_Y").val(r_y_a[0]);
                                  $(".r_Z").val(r_z_a[0]);
                                  $(".scaleX").val(sc_x_a[0]);
                                  $(".scaleY").val(sc_y_a[0]);
                                  $(".scaleZ").val(sc_z_a[0]);
                                  $(".skewX").val(sk_x_a[0]);
                                  $(".skewY").val(sk_y_a[0]);

                                   $(".trns_origin").val(trns_orgn_select_a[0]);
                                   $(".trnsorgn1").val(trns_orgn_x_a[0]);
                                   $(".trnsorgn2").val(trns_orgn_y_a[0]);

                                   $("[name=perspective]").val(per_a[0]);
                                   $(".per_orgn_sel").val(per_orgn_select_a[0]);
                                   $('.perorgn').val(per_orgn_a[0]);
                   
                                   obj.css({
                                       //general
                                       filter: 'brightness(' + brght_a[0] + ')',  
                                       opacity:opa_a[0],
                                       boxShadow: sh_ty_a[0] + ' ' + shn1_a[0] + 'px ' + shn1_a[0] + 'px ' + shn1_a[0] + 'px ' + shn1_a[0] + 'px ' + sh_clr_a[0],
                                       //dimension
                                       height: h_a[0] + 'px',
                                       width: w_a[0] + 'px',
                                       //background
                                       background: 'linear-gradient(' + bcg_deg_a[0] + 'deg, ' + bcg_clr_1_a[0] + ', ' + bcg_clr_2_a[0] + ')',
                                       //text...
                                       //border
                                       //style
                                       borderStyle:bor_sty_a[0],
                                       borderTopStyle: bor_top_sty_a[0],
                                       borderLeftStyle: bor_left_sty_a[0],
                                       borderRightStyle: bor_right_sty_a[0],
                                       borderBottomStyle: bor_bottom_sty_a[0],
                                       //radius
                                       borderTopLeftRadius: bor_tl_rad_a[0] + rad_unit_a[0],
                                       borderTopRightRadius: bor_tr_rad_a[0] + rad_unit_a[0],
                                       borderBottomLeftRadius: bor_bl_rad_a[0] + rad_unit_a[0],
                                       borderBottomRightRadius: bor_br_rad_a[0] + rad_unit_a[0],
                                       //width
                                       borderWidth: bor_w_a[0]+'px',
                                       borderTopWidth: bor_top_w_a[0]+'px',
                                       borderLeftWidth: bor_left_w_a[0]+'px',
                                       borderRightWidth: bor_right_w_a[0]+'px',
                                       borderBottomWidth: bor_bottom_w_a[0]+'px',
                                       //color
                                       borderColor: bor_clr_a[0],
                                       borderTopColor: bor_top_clr_a[0],
                                       borderLeftColor: bor_left_clr_a[0],
                                       borderRightColor: bor_right_clr_a[0],
                                       borderBottomColor: bor_bottom_clr_a[0],

                                       //transform
                                       transform:'skew('+sk_x_a[0]+'deg,'+sk_y_a[0]+'deg) scale3d('+sc_x_a[0]+','+sc_y_a[0]+','+sc_z_a[0]+') rotateX('+r_x_a[0]+'deg) rotateY('+r_y_a[0]+'deg) rotateZ('+r_z_a[0]+'deg)',
                                       transformOrigin: trns_orgn_x_a[0] + '% ' + trns_orgn_y_a[0] + '%',
                                       
                        
                                   });
                                   pobj.css({
                                       perspective: per_a[0] + 'px',
                                       perspectiveOrigin: per_orgn_a[0] + 'px'
                                   });
                        op.css({
                            color: txt_Clr_a[0],
                            letterSpacing: let_sp_a[0],
                            textAlign: txt_algn_a[0],
                            fontFamily: txt_font_a[0],
                            lineHeight: line_hgt_a[0]+'px',
                            backgroundColor: txt_bg_a[0],
                            fontStyle: txt_sty_a[0],
                            wordSpacing: w_sp_a[0],
                            background: 'linear-gradient(' + txt_lin_bg_deg_a[0] + 'deg, ' + txt_lin_bg_clr_1_a[0] + ', ' + txt_lin_bg_clr_2_a[0] + ')',
                            fontWeight: txt_font_wght_a[0],
                            top: txt_pos_top_a[0],
                            left: txt_pos_left_a[0],
                            textTransform: txt_case_a[0],
                            textDecoration: txt_dec_type_a[0],
                            textDecorationColor: txt_dec_clr_a[0],
                            textDecorationStyle: txt_dec_sty_a[0],
                            opacity: txt_op_a[0],
                            textShadow: txt_sh_n1_a[0] + 'px ' + txt_sh_n2_a[0] + 'px ' + txt_sh_n3_a[0] + 'px ' + txt_sh_clr_a[0],
                            fontSize: txt_font_size_a[0]
                        });
                    });

    //save_prog_2
                    
                    $(".sdiv2 .save_icon").click(function () {
                        $(".sdiv2 .apply_icon").css({ "opacity": "1", "display": "inline-block" }, 1000);
                        $(".sdiv3").fadeIn(300);
                        $(this).css({ transition: '0s' });
                        /* ------ array --------- */
                        //general
                        brght_a[1] = $(".brghtness_r").val();
                        opa_a[1] = $(".op_r").val();

                        //shadow
                        sh_ty_a[1] = $(".bx_type").val();
                        shn1_a[1] = $(".bs1").val();
                        shn2_a[1] = $(".bs2").val();
                        shn3_a[1] = $(".bs3").val();
                        shn4_a[1] = $(".bs4").val();
                        sh_clr_a[1] = $(".bxclr").val();
                        //dimensions
                        h_a[1] = $(".box_h").val();
                        w_a[1] = $(".box_w").val();
                        //background
                        bc_a[1] = $(".bgcolor").val();
                        bcg_deg_a[1] = $(".gra_deg").val();
                        bcg_clr_1_a[1] = $(".gra_cl1").val();
                        bcg_clr_2_a[1] = $(".gra_cl2").val();
                        //text
                        add_txt_a[1] = $(".addt").val();
                        txt_Clr_a[1] = $(".txtcolor").val();
                        let_sp_a[1] = $(".let_sp").val();
                        txt_algn_a[1] = $(".txt_align").val();
                        txt_font_a[1] = $(".txt_font").val();
                        line_hgt_a[1] = $(".line_hght").val();
                        txt_bg_a[1] = $(".txtbgcolor").val();
                        txt_sty_a[1] = $(".f_s").val();
                        w_sp_a[1] = $(".w_spacing").val();
                        txt_lin_bg_deg_a[1] = $(".txt_bg_lg_deg").val();
                        txt_lin_bg_clr_1_a[1] = $(".txtbglgcolor1").val();
                        txt_lin_bg_clr_2_a[1] = $(".txtbglgcolor2").val();
                        txt_font_wght_a[1] = $(".f_weight").val();
                        txt_pos_top_a[1] = $(".optop").val();
                        txt_pos_left_a[1] = $(".opleft").val();
                        txt_case_a[1] = $(".txt_cs").val();
                        txt_dec_type_a[1] = $(".txt_dec").val();
                        txt_dec_clr_a[1] = $(".dec_clr").val();
                        txt_dec_sty_a[1] = $(".txt_dec_sty").val();
                        txt_op_a[1] = $(".top").val();
                        txt_sh_n1_a[1] = $(".tbs1").val();
                        txt_sh_n2_a[1] = $(".tbs2").val();
                        txt_sh_n3_a[1] = $(".tbs3").val();
                        txt_sh_clr_a[1] = $(".tbxclr").val();
                        txt_font_size_a[1] = $("[name=font_size]").val();
                        //border
                        //style
                        bor_top_sty_a[1] = $(".tbor_style").val();
                        bor_left_sty_a[1] = $(".lbor_style").val();
                        bor_right_sty_a[1] = $(".rbor_style").val();
                        bor_bottom_sty_a[1] = $(".bbor_style").val();
                        bor_sty_a[1] = $(".wbor_style").val();
                        //color
                        bor_top_clr_a[1] = $(".btcolor").val();
                        bor_left_clr_a[1] = $(".blcolor").val();
                        bor_right_clr_a[1] = $(".brcolor").val();
                        bor_bottom_clr_a[1] = $(".bbcolor").val();
                        bor_clr_a[1] = $(".wbcolor").val();
                        //width
                        bor_top_w_a[1] = $(".btwidth").val();
                        bor_left_w_a[1] = $(".blwidth").val();
                        bor_right_w_a[1] = $(".brwidth").val();
                        bor_bottom_w_a[1] = $(".bbwidth").val();
                        bor_w_a[1] = $(".wbwidth").val();
                        //radius
                        bor_tl_rad_a[1] = $(".btlrad").val();
                        bor_tr_rad_a[1] = $(".btrrad").val();
                        bor_bl_rad_a[1] = $(".bblrad").val();
                        bor_br_rad_a[1] = $(".bbrrad").val();
                        rad_unit_a[1] = $("[name=bor_Rad_type]").val();
                        // transform
                        r_x_a[1] = $(".r_X").val();
                        r_y_a[1] = $(".r_Y").val();
                        r_z_a[1] = $(".r_Z").val();
                        sc_x_a[1] = $(".scaleX").val();
                        sc_y_a[1] = $(".scaleY").val();
                        sc_z_a[1] = $(".scaleZ").val();
                        sk_x_a[1] = $(".skewX").val();
                        sk_y_a[1] = $(".skewY").val();

                        trns_orgn_select_a[1] = $(".trns_origin").val();
                        trns_orgn_x_a[1] = $(".trnsorgn1").val();
                        trns_orgn_y_a[1] = $(".trnsorgn2").val();
                        per_a[1] = $("[name=perspective]").val();
                        per_orgn_select_a[1] = $(".per_orgn_sel").val();
                        per_orgn_a[1] = $('.perorgn').val();

                    });
                    $(".sdiv2 .apply_icon").click(function () {
                        /* --- setting variable initialization --- */
                        //general
                        bs_ty = sh_ty_a[1];
                        bx1 = shn1_a[1];
                        bx2 = shn2_a[1];
                        bx3 = shn3_a[1];
                        bx4 = shn4_a[1];
                        bxclr = sh_clr_a[1];
                        //background
                        bclr = txt_bg_a[1];

                        //text_shadow
                        tbx1 = txt_sh_n1_a[1];
                        tbx2 = txt_sh_n2_a[1];
                        tbx3 = txt_sh_n3_a[1];
                        tbxclr = txt_sh_clr_a[1];
                        l_ht = line_hgt_a[1];
                        /* ----- setting value for project '1/2/3/4/5' ---- */
                        //general
                        $(".brghtness_r").val(brght_a[1]);
                        $(".op_r").val(opa_a[1]);
                        //shadow
                        $(".bx_type").val(sh_ty_a[1]);
                        $(".bs1").val(shn1_a[1]);
                        $(".bs2").val(shn2_a[1]);
                        $(".bs3").val(shn3_a[1]);
                        $(".bs4").val(shn4_a[1]);
                        $(".bxclr").val(sh_clr_a[1]);
                        //dimension
                        $(".box_h").val(h_a[1]);
                        $(".box_w").val(w_a[1]);
                        //background
                        $(".bgcolor").val(bc_a[1]);
                        $(".gra_deg").val(bcg_deg_a[1]);
                        $(".gra_cl1").val(bcg_clr_1_a[1]);
                        $(".gra_cl2").val(bcg_clr_2_a[1]);
                        //text
                        $(".addt").val(add_txt_a[1]);
                        op.text(add_txt_a[1]);
                        $(".txtcolor").val(txt_Clr_a[1]);
                        $(".let_sp").val(let_sp_a[1]);
                        $(".txt_align").val(txt_algn_a[1]);
                        $(".txt_font").val(txt_font_a[1]);
                        $(".line_hght").val(line_hgt_a[1]);
                        $(".txtbgcolor").val(txt_bg_a[1]);
                        $(".f_s").val(txt_sty_a[1]);
                        $(".w_spacing").val(w_sp_a[1]);
                        $(".txt_bg_lg_deg").val(txt_lin_bg_deg_a[1]);
                        $(".txtbglgcolor1").val(txt_lin_bg_clr_1_a[1]);
                        $(".txtbglgcolor2").val(txt_lin_bg_clr_2_a[1]);
                        $(".f_weight").val(txt_font_wght_a[1]);
                        $(".optop").val(txt_pos_top_a[1]);
                        $(".opleft").val(txt_pos_left_a[1]);
                        $(".txt_cs").val(txt_case_a[1]);
                        $(".txt_dec").val(txt_dec_type_a[1]);
                        $(".dec_clr").val(txt_dec_clr_a[1]);
                        $(".txt_dec_sty").val(txt_dec_sty_a[1]);
                        $(".top").val(txt_op_a[1]);
                        $(".tbs1").val(txt_sh_n1_a[1]);
                        $(".tbs2").val(txt_sh_n2_a[1]);
                        $(".tbs3").val(txt_sh_n3_a[1]);
                        $(".tbxclr").val(txt_sh_clr_a[1]);
                        $("[name=font_size]").val(txt_font_size_a[1]);
                        //border
                        //style
                        $(".tbor_style").val(bor_top_sty_a[1]);
                        $(".lbor_style").val(bor_left_sty_a[1]);
                        $(".rbor_style").val(bor_right_sty_a[1]);
                        $(".bbor_style").val(bor_bottom_sty_a[1]);
                        $(".wbor_style").val(bor_sty_a[1]);
                        //color
                        $(".btcolor").val(bor_top_clr_a[1]);
                        $(".blcolor").val(bor_left_clr_a[1]);
                        $(".brcolor").val(bor_right_clr_a[1]);
                        $(".bbcolor").val(bor_bottom_clr_a[1]);
                        $(".wbcolor").val(bor_clr_a[1]);
                        //width
                        $(".btwidth").val(bor_top_w_a[1]);
                        $(".blwidth").val(bor_left_w_a[1]);
                        $(".brwidth").val(bor_right_w_a[1]);
                        $(".bbwidth").val(bor_bottom_w_a[1]);
                        $(".wbwidth").val(bor_w_a[1]);
                        //radius
                        $(".btlrad").val(bor_tl_rad_a[1]);
                        $(".btrrad").val(bor_tr_rad_a[1]);
                        $(".bblrad").val(bor_bl_rad_a[1]);
                        $(".bbrrad").val(bor_br_rad_a[1]);
                        $('[name=bor_Rad_type]').val(rad_unit_a[1]);
                        //transform
                        $(".r_X").val(r_x_a[1]);
                        $(".r_Y").val(r_y_a[1]);
                        $(".r_Z").val(r_z_a[1]);
                        $(".scaleX").val(sc_x_a[1]);
                        $(".scaleY").val(sc_y_a[1]);
                        $(".scaleZ").val(sc_z_a[1]);
                        $(".skewX").val(sk_x_a[1]);
                        $(".skewY").val(sk_y_a[1]);

                        $(".trns_origin").val(trns_orgn_select_a[1]);
                        $(".trnsorgn1").val(trns_orgn_x_a[1]);
                        $(".trnsorgn2").val(trns_orgn_y_a[1]);

                        $("[name=perspective]").val(per_a[1]);
                        $(".per_orgn_sel").val(per_orgn_select_a[1]);
                        $('.perorgn').val(per_orgn_a[1]);

                        obj.css({
                            //general
                            filter: 'brightness(' + brght_a[1] + ')',
                            opacity: opa_a[1],
                            boxShadow: sh_ty_a[1] + ' ' + shn1_a[1] + 'px ' + shn1_a[1] + 'px ' + shn1_a[1] + 'px ' + shn1_a[1] + 'px ' + sh_clr_a[1],
                            //dimension
                            height: h_a[1] + 'px',
                            width: w_a[1] + 'px',
                            //background
                            background: 'linear-gradient(' + bcg_deg_a[1] + 'deg, ' + bcg_clr_1_a[1] + ', ' + bcg_clr_2_a[1] + ')',
                            //text...
                            //border
                            //style
                            borderStyle: bor_sty_a[1],
                            borderTopStyle: bor_top_sty_a[1],
                            borderLeftStyle: bor_left_sty_a[1],
                            borderRightStyle: bor_right_sty_a[1],
                            borderBottomStyle: bor_bottom_sty_a[1],
                            //radius
                            borderTopLeftRadius: bor_tl_rad_a[1] + rad_unit_a[1],
                            borderTopRightRadius: bor_tr_rad_a[1] + rad_unit_a[1],
                            borderBottomLeftRadius: bor_bl_rad_a[1] + rad_unit_a[1],
                            borderBottomRightRadius: bor_br_rad_a[1] + rad_unit_a[1],
                            //width
                            borderWidth: bor_w_a[1] + 'px',
                            borderTopWidth: bor_top_w_a[1] + 'px',
                            borderLeftWidth: bor_left_w_a[1] + 'px',
                            borderRightWidth: bor_right_w_a[1] + 'px',
                            borderBottomWidth: bor_bottom_w_a[1] + 'px',
                            //color
                            borderColor: bor_clr_a[1],
                            borderTopColor: bor_top_clr_a[1],
                            borderLeftColor: bor_left_clr_a[1],
                            borderRightColor: bor_right_clr_a[1],
                            borderBottomColor: bor_bottom_clr_a[1],

                            //transform
                            transform: 'skew(' + sk_x_a[1] + 'deg,' + sk_y_a[1] + 'deg) scale3d(' + sc_x_a[1] + ',' + sc_y_a[1] + ',' + sc_z_a[1] + ') rotateX(' + r_x_a[1] + 'deg) rotateY(' + r_y_a[1] + 'deg) rotateZ(' + r_z_a[1] + 'deg)',
                            transformOrigin: trns_orgn_x_a[1] + '% ' + trns_orgn_y_a[1] + '%',
                            perspective: per_a[1] + 'px',
                            perspectiveOrigin: per_orgn_select_a[1] + 'px',

                        });
                        pobj.css({
                            perspective: per_a[1] + 'px',
                            perspectiveOrigin: per_orgn_a[1] + 'px'
                        });
                        op.css({
                            color: txt_Clr_a[1],
                            letterSpacing: let_sp_a[1],
                            textAlign: txt_algn_a[1],
                            fontFamily: txt_font_a[1],
                            lineHeight: line_hgt_a[1]+'px',
                            background: 'linear-gradient(' + txt_lin_bg_deg_a[1] + 'deg, ' + txt_lin_bg_clr_1_a[1] + ', ' + txt_lin_bg_clr_2_a[1] + ')',
                            fontStyle: txt_sty_a[1],
                            wordSpacing: w_sp_a[1],
                            fontWeight: txt_font_wght_a[1],
                            top: txt_pos_top_a[1],
                            left: txt_pos_left_a[1],
                            textTransform: txt_case_a[1],
                            textDecoration: txt_dec_type_a[1],
                            textDecorationColor: txt_dec_clr_a[1],
                            textDecorationStyle: txt_dec_sty_a[1],
                            opacity: txt_op_a[1],
                            textShadow: txt_sh_n1_a[1] + 'px ' + txt_sh_n2_a[1] + 'px ' + txt_sh_n3_a[1] + 'px ' + txt_sh_clr_a[1],
                            fontSize: txt_font_size_a[1]
                        });
                    });
                     //save project 3
                    $(".sdiv3 .save_icon").click(function () {
                        $(".sdiv3 .apply_icon").css({ "opacity": "1", "display": "inline-block" }, 1000);
                        $(".sdiv4").fadeIn(300);
                        $(this).css({ transition: '0s' });
                        /* ------ array --------- */
                        //general
                        brght_a[2] = $(".brghtness_r").val();
                        opa_a[2] = $(".op_r").val();

                        //shadow
                        sh_ty_a[2] = $(".bx_type").val();
                        shn1_a[2] = $(".bs1").val();
                        shn2_a[2] = $(".bs2").val();
                        shn3_a[2] = $(".bs3").val();
                        shn4_a[2] = $(".bs4").val();
                        sh_clr_a[2] = $(".bxclr").val();
                        //dimensions
                        h_a[2] = $(".box_h").val();
                        w_a[2] = $(".box_w").val();
                        //background
                        bc_a[2] = $(".bgcolor").val();
                        bcg_deg_a[2] = $(".gra_deg").val();
                        bcg_clr_1_a[2] = $(".gra_cl1").val();
                        bcg_clr_2_a[2] = $(".gra_cl2").val();
                        //text
                        add_txt_a[2] = $(".addt").val();
                        txt_Clr_a[2] = $(".txtcolor").val();
                        let_sp_a[2] = $(".let_sp").val();
                        txt_algn_a[2] = $(".txt_align").val();
                        txt_font_a[2] = $(".txt_font").val();
                        line_hgt_a[2] = $(".line_hght").val();
                        txt_bg_a[2] = $(".txtbgcolor").val();
                        txt_sty_a[2] = $(".f_s").val();
                        w_sp_a[2] = $(".w_spacing").val();
                        txt_lin_bg_deg_a[2] = $(".txt_bg_lg_deg").val();
                        txt_lin_bg_clr_1_a[2] = $(".txtbglgcolor1").val();
                        txt_lin_bg_clr_2_a[2] = $(".txtbglgcolor2").val();
                        txt_font_wght_a[2] = $(".f_weight").val();
                        txt_pos_top_a[2] = $(".optop").val();
                        txt_pos_left_a[2] = $(".opleft").val();
                        txt_case_a[2] = $(".txt_cs").val();
                        txt_dec_type_a[2] = $(".txt_dec").val();
                        txt_dec_clr_a[2] = $(".dec_clr").val();
                        txt_dec_sty_a[2] = $(".txt_dec_sty").val();
                        txt_op_a[2] = $(".top").val();
                        txt_sh_n1_a[2] = $(".tbs1").val();
                        txt_sh_n2_a[2] = $(".tbs2").val();
                        txt_sh_n3_a[2] = $(".tbs3").val();
                        txt_sh_clr_a[2] = $(".tbxclr").val();
                        txt_font_size_a[2] = $("[name=font_size]").val();
                        //border
                        //style
                        bor_top_sty_a[2] = $(".tbor_style").val();
                        bor_left_sty_a[2] = $(".lbor_style").val();
                        bor_right_sty_a[2] = $(".rbor_style").val();
                        bor_bottom_sty_a[2] = $(".bbor_style").val();
                        bor_sty_a[2] = $(".wbor_style").val();
                        //color
                        bor_top_clr_a[2] = $(".btcolor").val();
                        bor_left_clr_a[2] = $(".blcolor").val();
                        bor_right_clr_a[2] = $(".brcolor").val();
                        bor_bottom_clr_a[2] = $(".bbcolor").val();
                        bor_clr_a[2] = $(".wbcolor").val();
                        //width
                        bor_top_w_a[2] = $(".btwidth").val();
                        bor_left_w_a[2] = $(".blwidth").val();
                        bor_right_w_a[2] = $(".brwidth").val();
                        bor_bottom_w_a[2] = $(".bbwidth").val();
                        bor_w_a[2] = $(".wbwidth").val();
                        //radius
                        bor_tl_rad_a[2] = $(".btlrad").val();
                        bor_tr_rad_a[2] = $(".btrrad").val();
                        bor_bl_rad_a[2] = $(".bblrad").val();
                        bor_br_rad_a[2] = $(".bbrrad").val();
                        rad_unit_a[2] = $("[name=bor_Rad_type]").val();
                        // transform
                        r_x_a[2] = $(".r_X").val();
                        r_y_a[2] = $(".r_Y").val();
                        r_z_a[2] = $(".r_Z").val();
                        sc_x_a[2] = $(".scaleX").val();
                        sc_y_a[2] = $(".scaleY").val();
                        sc_z_a[2] = $(".scaleZ").val();
                        sk_x_a[2] = $(".skewX").val();
                        sk_y_a[2] = $(".skewY").val();

                        trns_orgn_select_a[2] = $(".trns_origin").val();
                        trns_orgn_x_a[2] = $(".trnsorgn1").val();
                        trns_orgn_y_a[2] = $(".trnsorgn2").val();
                        per_a[2] = $("[name=perspective]").val();
                        per_orgn_select_a[2] = $(".per_orgn_sel").val();
                        per_orgn_a[2] = $('.perorgn').val();

                    });
                    $(".sdiv3 .apply_icon").click(function () {
                        /* --- setting variable initialization --- */
                        //general
                        bs_ty = sh_ty_a[2];
                        bx1 = shn1_a[2];
                        bx2 = shn2_a[2];
                        bx3 = shn3_a[2];
                        bx4 = shn4_a[2];
                        bxclr = sh_clr_a[2];
                        //background
                        bclr = txt_bg_a[2];

                        //text_shadow
                        tbx1 = txt_sh_n1_a[2];
                        tbx2 = txt_sh_n2_a[2];
                        tbx3 = txt_sh_n3_a[2];
                        tbxclr = txt_sh_clr_a[2];
                        l_ht = line_hgt_a[2];
                        /* ----- setting value for project '1/2/3/4/5' ---- */
                        //general
                        $(".brghtness_r").val(brght_a[2]);
                        $(".op_r").val(opa_a[2]);
                        //shadow
                        $(".bx_type").val(sh_ty_a[2]);
                        $(".bs1").val(shn1_a[2]);
                        $(".bs2").val(shn2_a[2]);
                        $(".bs3").val(shn3_a[2]);
                        $(".bs4").val(shn4_a[2]);
                        $(".bxclr").val(sh_clr_a[2]);
                        //dimension
                        $(".box_h").val(h_a[2]);
                        $(".box_w").val(w_a[2]);
                        //background
                        $(".bgcolor").val(bc_a[2]);
                        $(".ln_gra_deg").val(bcg_deg_a[2]);
                        $(".ln_gra_cl1").val(bcg_clr_1_a[2]);
                        $(".ln_gra_cl2").val(bcg_clr_2_a[2]);
                        //text
                        $(".addt").val(add_txt_a[2]);
                        op.text(add_txt_a[2]);
                        $(".txtcolor").val(txt_Clr_a[2]);
                        $(".let_sp").val(let_sp_a[2]);
                        $(".txt_align").val(txt_algn_a[2]);
                        $(".txt_font").val(txt_font_a[2]);
                        $(".line_hght").val(line_hgt_a[2]);
                        $(".txtbgcolor").val(txt_bg_a[2]);
                        $(".f_s").val(txt_sty_a[2]);
                        $(".w_spacing").val(w_sp_a[2]);
                        $(".txt_bg_lg_deg").val(txt_lin_bg_deg_a[2]);
                        $(".txtbglgcolor1").val(txt_lin_bg_clr_1_a[2]);
                        $(".txtbglgcolor2").val(txt_lin_bg_clr_2_a[2]);
                        $(".f_weight").val(txt_font_wght_a[2]);
                        $(".optop").val(txt_pos_top_a[2]);
                        $(".opleft").val(txt_pos_left_a[2]);
                        $(".txt_cs").val(txt_case_a[2]);
                        $(".txt_dec").val(txt_dec_type_a[2]);
                        $(".dec_clr").val(txt_dec_clr_a[2]);
                        $(".txt_dec_sty").val(txt_dec_sty_a[2]);
                        $(".top").val(txt_op_a[2]);
                        $(".tbs1").val(txt_sh_n1_a[2]);
                        $(".tbs2").val(txt_sh_n2_a[2]);
                        $(".tbs3").val(txt_sh_n3_a[2]);
                        $(".tbxclr").val(txt_sh_clr_a[2]);
                        $("[name=font_size]").val(txt_font_size_a[2]);
                        //border
                        //style
                        $(".tbor_style").val(bor_top_sty_a[2]);
                        $(".lbor_style").val(bor_left_sty_a[2]);
                        $(".rbor_style").val(bor_right_sty_a[2]);
                        $(".bbor_style").val(bor_bottom_sty_a[2]);
                        $(".wbor_style").val(bor_sty_a[2]);
                        //color
                        $(".btcolor").val(bor_top_clr_a[2]);
                        $(".blcolor").val(bor_left_clr_a[2]);
                        $(".brcolor").val(bor_right_clr_a[2]);
                        $(".bbcolor").val(bor_bottom_clr_a[2]);
                        $(".wbcolor").val(bor_clr_a[2]);
                        //width
                        $(".btwidth").val(bor_top_w_a[2]);
                        $(".blwidth").val(bor_left_w_a[2]);
                        $(".brwidth").val(bor_right_w_a[2]);
                        $(".bbwidth").val(bor_bottom_w_a[2]);
                        $(".wbwidth").val(bor_w_a[2]);
                        //radius
                        $(".btlrad").val(bor_tl_rad_a[2]);
                        $(".btrrad").val(bor_tr_rad_a[2]);
                        $(".bblrad").val(bor_bl_rad_a[2]);
                        $(".bbrrad").val(bor_br_rad_a[2]);
                        $('[name=bor_Rad_type]').val(rad_unit_a[2]);
                        //transform
                        $(".r_X").val(r_x_a[2]);
                        $(".r_Y").val(r_y_a[2]);
                        $(".r_Z").val(r_z_a[2]);
                        $(".scaleX").val(sc_x_a[2]);
                        $(".scaleY").val(sc_y_a[2]);
                        $(".scaleZ").val(sc_z_a[2]);
                        $(".skewX").val(sk_x_a[2]);
                        $(".skewY").val(sk_y_a[2]);

                        $(".trns_origin").val(trns_orgn_select_a[2]);
                        $(".trnsorgn1").val(trns_orgn_x_a[2]);
                        $(".trnsorgn2").val(trns_orgn_y_a[2]);

                        $("[name=perspective]").val(per_a[2]);
                        $(".per_orgn_sel").val(per_orgn_select_a[2]);
                        $('.perorgn').val(per_orgn_a[2]);

                        obj.css({
                            //general
                            filter: 'brightness(' + brght_a[2] + ')',
                            opacity: opa_a[2],
                            boxShadow: sh_ty_a[2] + ' ' + shn1_a[2] + 'px ' + shn1_a[2] + 'px ' + shn1_a[2] + 'px ' + shn1_a[2] + 'px ' + sh_clr_a[2],
                            //dimension
                            height: h_a[2] + 'px',
                            width: w_a[2] + 'px',
                            //background
                            background: 'linear-gradient(' + bcg_deg_a[2] + 'deg, ' + bcg_clr_1_a[2] + ', ' + bcg_clr_2_a[2] + ')',
                            //text...
                            //border
                            //style
                            borderStyle: bor_sty_a[2],
                            borderTopStyle: bor_top_sty_a[2],
                            borderLeftStyle: bor_left_sty_a[2],
                            borderRightStyle: bor_right_sty_a[2],
                            borderBottomStyle: bor_bottom_sty_a[2],
                            //radius
                            borderTopLeftRadius: bor_tl_rad_a[2] + rad_unit_a[2],
                            borderTopRightRadius: bor_tr_rad_a[2] + rad_unit_a[2],
                            borderBottomLeftRadius: bor_bl_rad_a[2] + rad_unit_a[2],
                            borderBottomRightRadius: bor_br_rad_a[2] + rad_unit_a[2],
                            //radius
                            borderTopLeftRadius: bor_tl_rad_a[2] + 'deg',
                            borderTopRightRadius: bor_tr_rad_a[2] + 'deg',
                            borderBottomLeftRadius: bor_bl_rad_a[2] + 'deg',
                            borderBottomRightRadius: bor_br_rad_a[2] + 'deg',
                            //width
                            borderWidth: bor_w_a[2] + 'px',
                            borderTopWidth: bor_top_w_a[2] + 'px',
                            borderLeftWidth: bor_left_w_a[2] + 'px',
                            borderRightWidth: bor_right_w_a[2] + 'px',
                            borderBottomWidth: bor_bottom_w_a[2] + 'px',

                            //transform
                            transform: 'skew(' + sk_x_a[2] + 'deg,' + sk_y_a[2] + 'deg) scale3d(' + sc_x_a[2] + ',' + sc_y_a[2] + ',' + sc_z_a[2] + ') rotateX(' + r_x_a[2] + 'deg) rotateY(' + r_y_a[2] + 'deg) rotateZ(' + r_z_a[2] + 'deg)',
                            transformOrigin: trns_orgn_x_a[2] + '% ' + trns_orgn_y_a[2] + '%',
                            perspective: per_a[2] + 'px',
                            perspectiveOrigin: per_orgn_select_a[2] + 'px',

                        });
                        pobj.css({
                            perspective: per_a[2] + 'px',
                            perspectiveOrigin: per_orgn_a[2] + 'px'
                        });
                        op.css({
                            color: txt_Clr_a[2],
                            letterSpacing: let_sp_a[2],
                            textAlign: txt_algn_a[2],
                            fontFamily: txt_font_a[2],
                            lineHeight: line_hgt_a[2]+'px',
                            background: 'linear-gradient(' + txt_lin_bg_deg_a[2] + 'deg, ' + txt_lin_bg_clr_1_a[2] + ', ' + txt_lin_bg_clr_2_a[2] + ')',
                            fontStyle: txt_sty_a[2],
                            wordSpacing: w_sp_a[2],
                            fontWeight: txt_font_wght_a[2],
                            top: txt_pos_top_a[2],
                            left: txt_pos_left_a[2],
                            textTransform: txt_case_a[2],
                            textDecoration: txt_dec_type_a[2],
                            textDecorationColor: txt_dec_clr_a[2],
                            textDecorationStyle: txt_dec_sty_a[2],
                            opacity: txt_op_a[2],
                            textShadow: txt_sh_n1_a[2] + 'px ' + txt_sh_n2_a[2] + 'px ' + txt_sh_n3_a[2] + 'px ' + txt_sh_clr_a[2],
                            fontSize: txt_font_size_a[2]
                        });
                    });
    //save project 4
                    $(".sdiv4 .save_icon").click(function () {
                        $(".sdiv4 .apply_icon").css({ "opacity": "1", "display": "inline-block" }, 1000);
                        $(".sdiv5").fadeIn(300);
                        $(this).css({ transition: '0s' });
                        /* ------ array --------- */
                        //general
                        brght_a[3] = $(".brghtness_r").val();
                        opa_a[3] = $(".op_r").val();

                        //shadow
                        sh_ty_a[3] = $(".bx_type").val();
                        shn1_a[3] = $(".bs1").val();
                        shn2_a[3] = $(".bs2").val();
                        shn3_a[3] = $(".bs3").val();
                        shn4_a[3] = $(".bs4").val();
                        sh_clr_a[3] = $(".bxclr").val();
                        //dimensions
                        h_a[3] = $(".box_h").val();
                        w_a[3] = $(".box_w").val();
                        //background
                        bc_a[3] = $(".bgcolor").val();
                        bcg_deg_a[3] = $(".gra_deg").val();
                        bcg_clr_1_a[3] = $(".gra_cl1").val();
                        bcg_clr_2_a[3] = $(".gra_cl2").val();
                        //text
                        add_txt_a[3] = $(".addt").val();
                        txt_Clr_a[3] = $(".txtcolor").val();
                        let_sp_a[3] = $(".let_sp").val();
                        txt_algn_a[3] = $(".txt_align").val();
                        txt_font_a[3] = $(".txt_font").val();
                        line_hgt_a[3] = $(".line_hght").val();
                        txt_bg_a[3] = $(".txtbgcolor").val();
                        txt_sty_a[3] = $(".f_s").val();
                        w_sp_a[3] = $(".w_spacing").val();
                        txt_lin_bg_deg_a[3] = $(".txt_bg_lg_deg").val();
                        txt_lin_bg_clr_1_a[3] = $(".txtbglgcolor1").val();
                        txt_lin_bg_clr_2_a[3] = $(".txtbglgcolor2").val();
                        txt_font_wght_a[3] = $(".f_weight").val();
                        txt_pos_top_a[3] = $(".optop").val();
                        txt_pos_left_a[3] = $(".opleft").val();
                        txt_case_a[3] = $(".txt_cs").val();
                        txt_dec_type_a[3] = $(".txt_dec").val();
                        txt_dec_clr_a[3] = $(".dec_clr").val();
                        txt_dec_sty_a[3] = $(".txt_dec_sty").val();
                        txt_op_a[3] = $(".top").val();
                        txt_sh_n1_a[3] = $(".tbs1").val();
                        txt_sh_n2_a[3] = $(".tbs2").val();
                        txt_sh_n3_a[3] = $(".tbs3").val();
                        txt_sh_clr_a[3] = $(".tbxclr").val();
                        txt_font_size_a[3] = $("[name=font_size]").val();
                        //border
                        //style
                        bor_top_sty_a[3] = $(".tbor_style").val();
                        bor_left_sty_a[3] = $(".lbor_style").val();
                        bor_right_sty_a[3] = $(".rbor_style").val();
                        bor_bottom_sty_a[3] = $(".bbor_style").val();
                        bor_sty_a[3] = $(".wbor_style").val();
                        //color
                        bor_top_clr_a[3] = $(".btcolor").val();
                        bor_left_clr_a[3] = $(".blcolor").val();
                        bor_right_clr_a[3] = $(".brcolor").val();
                        bor_bottom_clr_a[3] = $(".bbcolor").val();
                        bor_clr_a[3] = $(".wbcolor").val();
                        //width
                        bor_top_w_a[3] = $(".btwidth").val();
                        bor_left_w_a[3] = $(".blwidth").val();
                        bor_right_w_a[3] = $(".brwidth").val();
                        bor_bottom_w_a[3] = $(".bbwidth").val();
                        bor_w_a[3] = $(".wbwidth").val();
                        //radius
                        bor_tl_rad_a[3] = $(".btlrad").val();
                        bor_tr_rad_a[3] = $(".btrrad").val();
                        bor_bl_rad_a[3] = $(".bblrad").val();
                        bor_br_rad_a[3] = $(".bbrrad").val();
                        rad_unit_a[3] = $("[name=bor_Rad_type]").val();
                        // transform
                        r_x_a[3] = $(".r_X").val();
                        r_y_a[3] = $(".r_Y").val();
                        r_z_a[3] = $(".r_Z").val();
                        sc_x_a[3] = $(".scaleX").val();
                        sc_y_a[3] = $(".scaleY").val();
                        sc_z_a[3] = $(".scaleZ").val();
                        sk_x_a[3] = $(".skewX").val();
                        sk_y_a[3] = $(".skewY").val();

                        trns_orgn_select_a[3] = $(".trns_origin").val();
                        trns_orgn_x_a[3] = $(".trnsorgn1").val();
                        trns_orgn_y_a[3] = $(".trnsorgn2").val();
                        per_a[3] = $("[name=perspective]").val();
                        per_orgn_select_a[3] = $(".per_orgn_sel").val();
                        per_orgn_a[3] = $('.perorgn').val();

                    });
                    $(".sdiv4 .apply_icon").click(function () {
                        /* --- setting variable initialization --- */
                        //general
                        bs_ty = sh_ty_a[3];
                        bx1 = shn1_a[3];
                        bx2 = shn2_a[3];
                        bx3 = shn3_a[3];
                        bx4 = shn4_a[3];
                        bxclr = sh_clr_a[3];
                        //background
                        bclr = txt_bg_a[3];

                        //text_shadow
                        tbx1 = txt_sh_n1_a[3];
                        tbx2 = txt_sh_n2_a[3];
                        tbx3 = txt_sh_n3_a[3];
                        tbxclr = txt_sh_clr_a[3];
                        l_ht = line_hgt_a[3];
                        /* ----- setting value for project '1/2/3/4/5' ---- */
                        //general
                        $(".brghtness_r").val(brght_a[3]);
                        $(".op_r").val(opa_a[3]);
                        //shadow
                        $(".bx_type").val(sh_ty_a[3]);
                        $(".bs1").val(shn1_a[3]);
                        $(".bs2").val(shn2_a[3]);
                        $(".bs3").val(shn3_a[3]);
                        $(".bs4").val(shn4_a[3]);
                        $(".bxclr").val(sh_clr_a[3]);
                        //dimension
                        $(".box_h").val(h_a[3]);
                        $(".box_w").val(w_a[3]);
                        //background
                        $(".bgcolor").val(bc_a[3]);
                        $(".gra_deg").val(bcg_deg_a[3]);
                        $(".gra_cl1").val(bcg_clr_1_a[3]);
                        $(".gra_cl2").val(bcg_clr_2_a[3]);
                        //text
                        $(".addt").val(add_txt_a[3]);
                        op.text(add_txt_a[3]);
                        $(".txtcolor").val(txt_Clr_a[3]);
                        $(".let_sp").val(let_sp_a[3]);
                        $(".txt_align").val(txt_algn_a[3]);
                        $(".txt_font").val(txt_font_a[3]);
                        $(".line_hght").val(line_hgt_a[3]);
                        $(".txtbgcolor").val(txt_bg_a[3]);
                        $(".f_s").val(txt_sty_a[3]);
                        $(".w_spacing").val(w_sp_a[3]);
                        $(".txt_bg_lg_deg").val(txt_lin_bg_deg_a[3]);
                        $(".txtbglgcolor1").val(txt_lin_bg_clr_1_a[3]);
                        $(".txtbglgcolor2").val(txt_lin_bg_clr_2_a[3]);
                        $(".f_weight").val(txt_font_wght_a[3]);
                        $(".optop").val(txt_pos_top_a[3]);
                        $(".opleft").val(txt_pos_left_a[3]);
                        $(".txt_cs").val(txt_case_a[3]);
                        $(".txt_dec").val(txt_dec_type_a[3]);
                        $(".dec_clr").val(txt_dec_clr_a[3]);
                        $(".txt_dec_sty").val(txt_dec_sty_a[3]);
                        $(".top").val(txt_op_a[3]);
                        $(".tbs1").val(txt_sh_n1_a[3]);
                        $(".tbs2").val(txt_sh_n2_a[3]);
                        $(".tbs3").val(txt_sh_n3_a[3]);
                        $(".tbxclr").val(txt_sh_clr_a[3]);
                        $("[name=font_size]").val(txt_font_size_a[3]);
                        //border
                        //style
                        $(".tbor_style").val(bor_top_sty_a[3]);
                        $(".lbor_style").val(bor_left_sty_a[3]);
                        $(".rbor_style").val(bor_right_sty_a[3]);
                        $(".bbor_style").val(bor_bottom_sty_a[3]);
                        $(".wbor_style").val(bor_sty_a[3]);
                        //color
                        $(".btcolor").val(bor_top_clr_a[3]);
                        $(".blcolor").val(bor_left_clr_a[3]);
                        $(".brcolor").val(bor_right_clr_a[3]);
                        $(".bbcolor").val(bor_bottom_clr_a[3]);
                        $(".wbcolor").val(bor_clr_a[3]);
                        //width
                        $(".btwidth").val(bor_top_w_a[3]);
                        $(".blwidth").val(bor_left_w_a[3]);
                        $(".brwidth").val(bor_right_w_a[3]);
                        $(".bbwidth").val(bor_bottom_w_a[3]);
                        $(".wbwidth").val(bor_w_a[3]);
                        //radius
                        $(".btlrad").val(bor_tl_rad_a[3]);
                        $(".btrrad").val(bor_tr_rad_a[3]);
                        $(".bblrad").val(bor_bl_rad_a[3]);
                        $(".bbrrad").val(bor_br_rad_a[3]);
                        $('[name=bor_Rad_type]').val(rad_unit_a[3]);
                        //transform
                        $(".r_X").val(r_x_a[3]);
                        $(".r_Y").val(r_y_a[3]);
                        $(".r_Z").val(r_z_a[3]);
                        $(".scaleX").val(sc_x_a[3]);
                        $(".scaleY").val(sc_y_a[3]);
                        $(".scaleZ").val(sc_z_a[3]);
                        $(".skewX").val(sk_x_a[3]);
                        $(".skewY").val(sk_y_a[3]);

                        $(".trns_origin").val(trns_orgn_select_a[3]);
                        $(".trnsorgn1").val(trns_orgn_x_a[3]);
                        $(".trnsorgn2").val(trns_orgn_y_a[3]);

                        $("[name=perspective]").val(per_a[3]);
                        $(".per_orgn_sel").val(per_orgn_select_a[3]);
                        $('.perorgn').val(per_orgn_a[3]);

                        obj.css({
                            //general
                            filter: 'brightness(' + brght_a[3] + ')',
                            opacity: opa_a[3],
                            boxShadow: sh_ty_a[3] + ' ' + shn1_a[3] + 'px ' + shn1_a[3] + 'px ' + shn1_a[3] + 'px ' + shn1_a[3] + 'px ' + sh_clr_a[3],
                            //dimension
                            height: h_a[3] + 'px',
                            width: w_a[3] + 'px',
                            //background
                            background: 'linear-gradient(' + bcg_deg_a[3] + 'deg, ' + bcg_clr_1_a[3] + ', ' + bcg_clr_2_a[3] + ')',
                            //text...
                            //border
                            //style
                            borderStyle: bor_sty_a[3],
                            borderTopStyle: bor_top_sty_a[3],
                            borderLeftStyle: bor_left_sty_a[3],
                            borderRightStyle: bor_right_sty_a[3],
                            borderBottomStyle: bor_bottom_sty_a[3],
                            //radius
                            borderTopLeftRadius: bor_tl_rad_a[3] + rad_unit_a[3],
                            borderTopRightRadius: bor_tr_rad_a[3] + rad_unit_a[3],
                            borderBottomLeftRadius: bor_bl_rad_a[3] + rad_unit_a[3],
                            borderBottomRightRadius: bor_br_rad_a[3] + rad_unit_a[3],
                            //width
                            borderWidth: bor_w_a[3] + 'px',
                            borderTopWidth: bor_top_w_a[3] + 'px',
                            borderLeftWidth: bor_left_w_a[3] + 'px',
                            borderRightWidth: bor_right_w_a[3] + 'px',
                            borderBottomWidth: bor_bottom_w_a[3] + 'px',
                            //color
                            borderColor: bor_clr_a[3],
                            borderTopColor: bor_top_clr_a[3],
                            borderLeftColor: bor_left_clr_a[3],
                            borderRightColor: bor_right_clr_a[3],
                            borderBottomColor: bor_bottom_clr_a[3],

                            //transform
                            transform: 'skew(' + sk_x_a[3] + 'deg,' + sk_y_a[3] + 'deg) scale3d(' + sc_x_a[3] + ',' + sc_y_a[3] + ',' + sc_z_a[3] + ') rotateX(' + r_x_a[3] + 'deg) rotateY(' + r_y_a[3] + 'deg) rotateZ(' + r_z_a[3] + 'deg)',
                            transformOrigin: trns_orgn_x_a[3] + '% ' + trns_orgn_y_a[3] + '%',
                            perspective: per_a[3] + 'px',
                            perspectiveOrigin: per_orgn_select_a[3] + 'px',

                        });
                        pobj.css({
                            perspective: per_a[3] + 'px',
                            perspectiveOrigin: per_orgn_a[3] + 'px'
                        });
                        op.css({
                            color: txt_Clr_a[3],
                            letterSpacing: let_sp_a[3],
                            textAlign: txt_algn_a[3],
                            fontFamily: txt_font_a[3],
                            lineHeight: line_hgt_a[3]+'px',
                            background: 'linear-gradient(' + txt_lin_bg_deg_a[3] + 'deg, ' + txt_lin_bg_clr_1_a[3] + ', ' + txt_lin_bg_clr_2_a[3] + ')',
                            fontStyle: txt_sty_a[3],
                            wordSpacing: w_sp_a[3],
                            fontWeight: txt_font_wght_a[3],
                            top: txt_pos_top_a[3],
                            left: txt_pos_left_a[3],
                            textTransform: txt_case_a[3],
                            textDecoration: txt_dec_type_a[3],
                            textDecorationColor: txt_dec_clr_a[3],
                            textDecorationStyle: txt_dec_sty_a[3],
                            opacity: txt_op_a[3],
                            textShadow: txt_sh_n1_a[3] + 'px ' + txt_sh_n2_a[3] + 'px ' + txt_sh_n3_a[3] + 'px ' + txt_sh_clr_a[3],
                            fontSize: txt_font_size_a[3]
                        });
                    });
    //save project 4
                    $(".sdiv5 .save_icon").click(function () {
                        $(".sdiv5 .apply_icon").css({ "opacity": "1", "display": "inline-block" }, 1000);
                        
                        $(this).css({ transition: '0s' });
                        /* ------ array --------- */
                        //general
                        brght_a[4] = $(".brghtness_r").val();
                        opa_a[4] = $(".op_r").val();

                        //shadow
                        sh_ty_a[4] = $(".bx_type").val();
                        shn1_a[4] = $(".bs1").val();
                        shn2_a[4] = $(".bs2").val();
                        shn3_a[4] = $(".bs3").val();
                        shn4_a[4] = $(".bs4").val();
                        sh_clr_a[4] = $(".bxclr").val();
                        //dimensions
                        h_a[4] = $(".box_h").val();
                        w_a[4] = $(".box_w").val();
                        //background
                        bc_a[4] = $(".bgcolor").val();
                        bcg_deg_a[4] = $(".gra_deg").val();
                        bcg_clr_1_a[4] = $(".gra_cl1").val();
                        bcg_clr_2_a[4] = $(".gra_cl2").val();
                        //text
                        add_txt_a[4] = $(".addt").val();
                        txt_Clr_a[4] = $(".txtcolor").val();
                        let_sp_a[4] = $(".let_sp").val();
                        txt_algn_a[4] = $(".txt_align").val();
                        txt_font_a[4] = $(".txt_font").val();
                        line_hgt_a[4] = $(".line_hght").val();
                        txt_bg_a[4] = $(".txtbgcolor").val();
                        txt_sty_a[4] = $(".f_s").val();
                        w_sp_a[4] = $(".w_spacing").val();
                        txt_lin_bg_deg_a[4] = $(".txt_bg_lg_deg").val();
                        txt_lin_bg_clr_1_a[4] = $(".txtbglgcolor1").val();
                        txt_lin_bg_clr_2_a[4] = $(".txtbglgcolor2").val();
                        txt_font_wght_a[4] = $(".f_weight").val();
                        txt_pos_top_a[4] = $(".optop").val();
                        txt_pos_left_a[4] = $(".opleft").val();
                        txt_case_a[4] = $(".txt_cs").val();
                        txt_dec_type_a[4] = $(".txt_dec").val();
                        txt_dec_clr_a[4] = $(".dec_clr").val();
                        txt_dec_sty_a[4] = $(".txt_dec_sty").val();
                        txt_op_a[4] = $(".top").val();
                        txt_sh_n1_a[4] = $(".tbs1").val();
                        txt_sh_n2_a[4] = $(".tbs2").val();
                        txt_sh_n3_a[4] = $(".tbs3").val();
                        txt_sh_clr_a[4] = $(".tbxclr").val();
                        txt_font_size_a[4] = $("[name=font_size]").val();
                        //border
                        //style
                        bor_top_sty_a[4] = $(".tbor_style").val();
                        bor_left_sty_a[4] = $(".lbor_style").val();
                        bor_right_sty_a[4] = $(".rbor_style").val();
                        bor_bottom_sty_a[4] = $(".bbor_style").val();
                        bor_sty_a[4] = $(".wbor_style").val();
                        //color
                        bor_top_clr_a[4] = $(".btcolor").val();
                        bor_left_clr_a[4] = $(".blcolor").val();
                        bor_right_clr_a[4] = $(".brcolor").val();
                        bor_bottom_clr_a[4] = $(".bbcolor").val();
                        bor_clr_a[4] = $(".wbcolor").val();
                        //width
                        bor_top_w_a[4] = $(".btwidth").val();
                        bor_left_w_a[4] = $(".blwidth").val();
                        bor_right_w_a[4] = $(".brwidth").val();
                        bor_bottom_w_a[4] = $(".bbwidth").val();
                        bor_w_a[4] = $(".wbwidth").val();
                        //radius
                        bor_tl_rad_a[4] = $(".btlrad").val();
                        bor_tr_rad_a[4] = $(".btrrad").val();
                        bor_bl_rad_a[4] = $(".bblrad").val();
                        bor_br_rad_a[4] = $(".bbrrad").val();
                        rad_unit_a[4] = $("[name=bor_Rad_type]").val();
                        // transform
                        r_x_a[4] = $(".r_X").val();
                        r_y_a[4] = $(".r_Y").val();
                        r_z_a[4] = $(".r_Z").val();
                        sc_x_a[4] = $(".scaleX").val();
                        sc_y_a[4] = $(".scaleY").val();
                        sc_z_a[4] = $(".scaleZ").val();
                        sk_x_a[4] = $(".skewX").val();
                        sk_y_a[4] = $(".skewY").val();

                        trns_orgn_select_a[4] = $(".trns_origin").val();
                        trns_orgn_x_a[4] = $(".trnsorgn1").val();
                        trns_orgn_y_a[4] = $(".trnsorgn2").val();
                        per_a[4] = $("[name=perspective]").val();
                        per_orgn_select_a[4] = $(".per_orgn_sel").val();
                        per_orgn_a[4] = $('.perorgn').val();

                    });
                    $(".sdiv4 .apply_icon").click(function () {
                        /* --- setting variable initialization --- */
                        //general
                        bs_ty = sh_ty_a[4];
                        bx1 = shn1_a[4];
                        bx2 = shn2_a[4];
                        bx3 = shn3_a[4];
                        bx4 = shn4_a[4];
                        bxclr = sh_clr_a[4];
                        //background
                        bclr = txt_bg_a[4];

                        //text_shadow
                        tbx1 = txt_sh_n1_a[4];
                        tbx2 = txt_sh_n2_a[4];
                        tbx3 = txt_sh_n3_a[4];
                        tbxclr = txt_sh_clr_a[4];
                        l_ht = line_hgt_a[4];
                        /* ----- setting value for project '1/2/3/4/5' ---- */
                        //general
                        $(".brghtness_r").val(brght_a[4]);
                        $(".op_r").val(opa_a[4]);
                        //shadow
                        $(".bx_type").val(sh_ty_a[4]);
                        $(".bs1").val(shn1_a[4]);
                        $(".bs2").val(shn2_a[4]);
                        $(".bs3").val(shn3_a[4]);
                        $(".bs4").val(shn4_a[4]);
                        $(".bxclr").val(sh_clr_a[4]);
                        //dimension
                        $(".box_h").val(h_a[4]);
                        $(".box_w").val(w_a[4]);
                        //background
                        $(".bgcolor").val(bc_a[4]);
                        $(".gra_deg").val(bcg_deg_a[4]);
                        $(".gra_cl1").val(bcg_clr_1_a[4]);
                        $(".gra_cl2").val(bcg_clr_2_a[4]);
                        //text
                        $(".addt").val(add_txt_a[4]);
                        op.text(add_txt_a[4]);
                        $(".txtcolor").val(txt_Clr_a[4]);
                        $(".let_sp").val(let_sp_a[4]);
                        $(".txt_align").val(txt_algn_a[4]);
                        $(".txt_font").val(txt_font_a[4]);
                        $(".line_hght").val(line_hgt_a[4]);
                        $(".txtbgcolor").val(txt_bg_a[4]);
                        $(".f_s").val(txt_sty_a[4]);
                        $(".w_spacing").val(w_sp_a[4]);
                        $(".txt_bg_lg_deg").val(txt_lin_bg_deg_a[4]);
                        $(".txtbglgcolor1").val(txt_lin_bg_clr_1_a[4]);
                        $(".txtbglgcolor2").val(txt_lin_bg_clr_2_a[4]);
                        $(".f_weight").val(txt_font_wght_a[4]);
                        $(".optop").val(txt_pos_top_a[4]);
                        $(".opleft").val(txt_pos_left_a[4]);
                        $(".txt_cs").val(txt_case_a[4]);
                        $(".txt_dec").val(txt_dec_type_a[4]);
                        $(".dec_clr").val(txt_dec_clr_a[4]);
                        $(".txt_dec_sty").val(txt_dec_sty_a[4]);
                        $(".top").val(txt_op_a[4]);
                        $(".tbs1").val(txt_sh_n1_a[4]);
                        $(".tbs2").val(txt_sh_n2_a[4]);
                        $(".tbs3").val(txt_sh_n3_a[4]);
                        $(".tbxclr").val(txt_sh_clr_a[4]);
                        $("[name=font_size]").val(txt_font_size_a[4]);
                        //border
                        //style
                        $(".tbor_style").val(bor_top_sty_a[4]);
                        $(".lbor_style").val(bor_left_sty_a[4]);
                        $(".rbor_style").val(bor_right_sty_a[4]);
                        $(".bbor_style").val(bor_bottom_sty_a[4]);
                        $(".wbor_style").val(bor_sty_a[3]);
                        //color
                        $(".btcolor").val(bor_top_clr_a[4]);
                        $(".blcolor").val(bor_left_clr_a[4]);
                        $(".brcolor").val(bor_right_clr_a[4]);
                        $(".bbcolor").val(bor_bottom_clr_a[4]);
                        $(".wbcolor").val(bor_clr_a[4]);
                        //width
                        $(".btwidth").val(bor_top_w_a[4]);
                        $(".blwidth").val(bor_left_w_a[4]);
                        $(".brwidth").val(bor_right_w_a[4]);
                        $(".bbwidth").val(bor_bottom_w_a[4]);
                        $(".wbwidth").val(bor_w_a[4]);
                        //radius
                        $(".btlrad").val(bor_tl_rad_a[4]);
                        $(".btrrad").val(bor_tr_rad_a[4]);
                        $(".bblrad").val(bor_bl_rad_a[4]);
                        $(".bbrrad").val(bor_br_rad_a[4]);
                        $('[name=bor_Rad_type]').val(rad_unit_a[4]);
                        //transform
                        $(".r_X").val(r_x_a[4]);
                        $(".r_Y").val(r_y_a[4]);
                        $(".r_Z").val(r_z_a[4]);
                        $(".scaleX").val(sc_x_a[4]);
                        $(".scaleY").val(sc_y_a[4]);
                        $(".scaleZ").val(sc_z_a[4]);
                        $(".skewX").val(sk_x_a[4]);
                        $(".skewY").val(sk_y_a[4]);

                        $(".trns_origin").val(trns_orgn_select_a[4]);
                        $(".trnsorgn1").val(trns_orgn_x_a[4]);
                        $(".trnsorgn2").val(trns_orgn_y_a[4]);

                        $("[name=perspective]").val(per_a[4]);
                        $(".per_orgn_sel").val(per_orgn_select_a[4]);
                        $('.perorgn').val(per_orgn_a[4]);

                        obj.css({
                            //general
                            filter: 'brightness(' + brght_a[4] + ')',
                            opacity: opa_a[4],
                            boxShadow: sh_ty_a[4] + ' ' + shn1_a[4] + 'px ' + shn1_a[4] + 'px ' + shn1_a[4] + 'px ' + shn1_a[4] + 'px ' + sh_clr_a[4],
                            //dimension
                            height: h_a[4] + 'px',
                            width: w_a[4] + 'px',
                            //background
                            background: 'linear-gradient(' + bcg_deg_a[4] + 'deg, ' + bcg_clr_1_a[4] + ', ' + bcg_clr_2_a[4] + ')',
                            //text...
                            //border
                            //style
                            borderStyle: bor_sty_a[4],
                            borderTopStyle: bor_top_sty_a[4],
                            borderLeftStyle: bor_left_sty_a[4],
                            borderRightStyle: bor_right_sty_a[4],
                            borderBottomStyle: bor_bottom_sty_a[4],
                            //radius
                            borderTopLeftRadius: bor_tl_rad_a[4] + rad_unit_a[4],
                            borderTopRightRadius: bor_tr_rad_a[4] + rad_unit_a[4],
                            borderBottomLeftRadius: bor_bl_rad_a[4] + rad_unit_a[4],
                            borderBottomRightRadius: bor_br_rad_a[4] + rad_unit_a[4],
                            //width
                            borderWidth: bor_w_a[4] + 'px',
                            borderTopWidth: bor_top_w_a[4] + 'px',
                            borderLeftWidth: bor_left_w_a[4] + 'px',
                            borderRightWidth: bor_right_w_a[4] + 'px',
                            borderBottomWidth: bor_bottom_w_a[4] + 'px',
                            //color
                            borderColor: bor_clr_a[4],
                            borderTopColor: bor_top_clr_a[4],
                            borderLeftColor: bor_left_clr_a[4],
                            borderRightColor: bor_right_clr_a[4],
                            borderBottomColor: bor_bottom_clr_a[4],

                            //transform
                            transform: 'skew(' + sk_x_a[4] + 'deg,' + sk_y_a[4] + 'deg) scale3d(' + sc_x_a[4] + ',' + sc_y_a[4] + ',' + sc_z_a[4] + ') rotateX(' + r_x_a[4] + 'deg) rotateY(' + r_y_a[4] + 'deg) rotateZ(' + r_z_a[4] + 'deg)',
                            transformOrigin: trns_orgn_x_a[4] + '% ' + trns_orgn_y_a[4] + '%',
                            perspective: per_a[4] + 'px',
                            perspectiveOrigin: per_orgn_select_a[4] + 'px',

                        });
                        pobj.css({
                            perspective: per_a[4] + 'px',
                            perspectiveOrigin: per_orgn_a[4] + 'px'
                        });
                        op.css({
                            color: txt_Clr_a[4],
                            letterSpacing: let_sp_a[4],
                            textAlign: txt_algn_a[4],
                            fontFamily: txt_font_a[4],
                            lineHeight: line_hgt_a[4]+'px',
                            background: 'linear-gradient(' + txt_lin_bg_deg_a[4] + 'deg, ' + txt_lin_bg_clr_1_a[4] + ', ' + txt_lin_bg_clr_2_a[4] + ')',
                            fontStyle: txt_sty_a[4],
                            wordSpacing: w_sp_a[4],
                            fontWeight: txt_font_wght_a[4],
                            top: txt_pos_top_a[4],
                            left: txt_pos_left_a[4],
                            textTransform: txt_case_a[4],
                            textDecoration: txt_dec_type_a[4],
                            textDecorationColor: txt_dec_clr_a[4],
                            textDecorationStyle: txt_dec_sty_a[4],
                            opacity: txt_op_a[4],
                            textShadow: txt_sh_n1_a[4] + 'px ' + txt_sh_n2_a[4] + 'px ' + txt_sh_n3_a[4] + 'px ' + txt_sh_clr_a[4],
                            fontSize: txt_font_size_a[4]
                        });
                    });

    /* ---------------- LOAD SCREEN ------------- */

    /* ----------- load screen toggles -------------- */
                    $('.nxt_load').click(function () {
                        $('.indicate').css({left:'392px',width:'100px'});
                        $('.load_Sec').fadeOut(0);
                        $('.lang_load_par').fadeIn(300);
                        $('.nxt_load_layer_lang').fadeIn(0);
                    });
                    $('.nxt_load_layer_lang').click(function () {
                        $('.indicate').css({ left: '499px' });
                        $('.load_Sec').fadeOut(0);
                        $('.intro_user_load_par').fadeIn(300);
                        $('.nxt_load_layer_intro').fadeIn(0);
                    });
                    $(".nxt_load_layer_intro").click(function () {
                        $('.indicate').css({ left: '604px',width:'70px' });
                        $('.load_Sec').fadeOut(0);
                        $('.select_type_editor_user_load_par').fadeIn(300);
                        $('.load_box').css({ top: '31px' });
                        $(".copy_load").css({ top: '90px' });
                        $(".nxt_load,.nxt_load_layer").css({ top: '-39px' });
                        $('.nxt_load_layer_select').fadeIn(0);
                    });
                    
                    $('.user_name').keyup(function () {
                        u_name = $(this).val();
                        $(".name_letters").text(u_name.length);
                    });
                    $(".2D_type_edit").click(function () {
                        $(".2D_types").slideToggle();
                        $(".3D_types").slideUp();
                        $(".img_types").slideUp();
                    });
                    $(".3D_type_edit").click(function () {
                        $(".3D_types").slideToggle();
                        $(".2D_types").slideUp();
                        $(".img_types").slideUp();
                    });
                    $(".img_type_edit").click(function () {
                        $(".img_types").slideToggle();
                        $(".3D_types").slideUp();
                        $(".2D_types").slideUp();
                    });

                    $(".blank").click(function () {
                        $(".templates_2D").css({ border: '3px solid rgb(200,200,200)' });
                        $(this).css({ border: '3px solid #0080ff' });
                    });
                    $(".tem1").click(function () {
                        $(".templates_2D").css({ border: '3px solid rgb(200,200,200)' });
                        $(this).css({ border: '3px solid #0080ff' });
                    });
                    $(".tem2").click(function () {
                        $(".templates_2D").css({ border: '3px solid rgb(200,200,200)' });
                        $(this).css({ border: '3px solid #0080ff' });
                    });
                    $(".tem3").click(function () {
                        $(".templates_2D").css({ border: '3px solid rgb(200,200,200)' });
                        $(this).css({ border: '3px solid #0080ff' });
                    });

    

	/* --------------------- Animation creation sector -------------------------- */
	function  alt_anime() {
        $(".alt").css({top:'15px'})
        setTimeout(()=>{
            $(".alt").css({top:'-200px'})
        },3000)
	}

	function v(name) {
	    return $(name).val()
	}

	function d(a,b)
	{
	    $(".trns_orgn_detctor").css({ top:a+'%', left:b+'%' })
	}
	obj.css({ transition: '0.1s' })
	op.css({ transition: '0.1s' })
	/*obj.mouseenter(function () {
	    obj.css({transition:'0s'})
	})
	obj.mouseleave(function () {
	    obj.css({ transition: '0.1s' })
    })*/
    
    // Shortcuts

    $(document).keydown((e)=>{
        if ( e.altKey && e.which == 89 ) {
            $('.Yatharth').fadeIn()
            $('.User_input_field').focus()
        }
    })
    
    
        /* ------- AI code for screen optimization --------- */
        setInterval(()=>{
            $('html').css({transformOrigin:'top left',transform:'scaleX(' + window.innerWidth / 1000  + ') scaleY('+ window.innerHeight / 1000 + ')'})
        },1)
        
    v = a => {
        return $(a).val()
    }
   


});







