$(document).ready(function () {
    var obj = $('.obj')
    var op_states = []
        bs_ty = []
        bs_type = []
        bs_1 = []
        bs_2 = []
        bs_3 = []
        bs_4 = []
        bs_clr = []
        
    // --------- Hover State
    setInterval(()=>{
        if ( $('.s_normal').is(':checked') ) {
            id('.op_r','n_op_r')
            id('.bx_type','n_bx_type')
            id('.bs1','n_bs1')
            id('.bs2','n_bs2')
            id('.bs3','n_bs3')
            id('.bs4','n_bs4')
            id('.bxclr','n_bs_clr')
            op_states[0] = h('#n_op_r')
            
            bs_type[0] = h('#n_bx_type')
            bs_1[0] = h('#n_bs1')
            bs_2[0] = h('#n_bs2')
            bs_3[0] = h('#n_bs3')
            bs_4[0] = h('#n_bs4')
            bs_clr[0] = h('#n_bs_clr')
        }
        else if ( $('.s_hover').is(':checked') ) {
            id('.op_r','h_op_r')
            id('.bx_type','h_bx_type')
            id('.bs1','h_bs1')
            id('.bs2','h_bs2')
            id('.bs3','h_bs3')
            id('.bs4','h_bs4')
            id('.bxclr','h_bs_clr')
            op_states[1] = h('#h_op_r')
            bs_type[1] = h('#h_bx_type')
            bs_1[1] = h('#h_bs1')
            bs_2[1] = h('#h_bs2')
            bs_3[1] = h('#h_bs3')
            bs_4[1] = h('#h_bs4')
            bs_clr[1] = h('#h_bs_clr')
        }
        else if ( $('.s_active').is(':checked') ) {
            id('.op_r','a_op_r')
            id('.bx_type','a_bx_type')
            id('.bs1','a_bs1')
            id('.bs2','a_bs2')
            id('.bs3','a_bs3')
            id('.bs4','a_bs4')
            id('.bxclr','a_bs_clr')
            op_states[2] = h('#a_op_r')
            bs_type[2] = h('#a_bx_type')
            bs_1[2] = h('#a_bs1')
            bs_2[2] = h('#a_bs2')
            bs_3[2] = h('#a_bs3')
            bs_4[2] = h('#a_bs4')
            bs_clr[2] = h('#a_bs_clr')
        }
    })

    $('[name=statesOfObject').change(()=>{
        if ( $('.s_normal').is(':checked') ) {
            $('#n_op_r').val(op_states[0])
            $('#n_bx_type').val(bs_type[0])
        }
        else if ( $('.s_hover').is(':checked') ) {
            $('#h_op_r').val(op_states[1])
        }
        else if ( $('.s_active').is(':checked') ) {
            $('#a_op_r').val(op_states[2])
        }
    })

        // hover

    obj.mouseenter(()=>{
        $('.obj').css({
            opacity:op_states[1],
            //boxShadow: bs_type[1] + ' ' + bs_1[1] + 'px ' + bs_2[1] + 'px ' + bs_3[1] + 'px ' + bs_4[1] + 'px ' + bs_clr[1]
        })
    })

    obj.mouseleave(()=>{
        $('.obj').css({
            opacity:op_states[0],
            //boxShadow: bs_type[0] + ' ' + bs_1[0] + 'px ' + bs_2[0] + 'px ' + bs_3[0] + 'px ' + bs_4[0] + 'px ' + bs_clr[0]
        })
    })

        // active

    obj.mousedown(()=>{
        $('.obj').css({
            opacity:op_states[2]
        })
    })

    obj.mouseup(()=>{
        $('.obj').css({
            opacity:op_states[1]
        })
    })
    

    b = ( elm , remove , add ) => {
        $(elm).addClass(add).removeClass(remove)
    }

    h = a => {
        return $(a).val()
    }

    id = ( elm , target ) => {
        $(elm).attr('id',target)
    }

})

