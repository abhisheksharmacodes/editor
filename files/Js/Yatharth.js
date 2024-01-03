$(document).ready(function(){
    
    $('.User_Input_field').on('input',function() {
        var key = $(this).val().toLowerCase()
        
        if ( key == 'reload-editor') {
            $(this).css({textDecoration:'underline',textDecorationColor:'#0080ff',textDecorationStyle:'double'})
        }
        else {
            $(this).css({textDecoration:'none'})
        }
        
    })
         
    $('.User_Input_field').keydown(function(e) {
        switch(e.which) {
            case 13:
                    if($('.User_Input_field').val() == ' ') {
                        reply('you forgot to ask me buddy !')
                    }
                    else {
                        self($('.User_Input_field').val())
                        
                        if(c('hii') || c('hey') || c('hello') || c('namaste')) {
                            reply("hii , my self yatharth")
                        }
                        if(c('scale') && c('z')) {
                            reply("It clearly doesn't seem any change while you are scaling z the box but it helps to improve 3D view when rotating.")
                        }
                        if( (c('position') || c('move')) && (c('box') || c('object'))) {
                            reply("positioning of box in editor is too easy you just need to click and hold on box and move whether you want to drop it.")
                        }
                        if(c('perspecti')) {
                            reply("when you look a building anywhere then it makes a 3D angle with itself which makes it real , as it is editor supports 3D perspection of box. perspective is a property defined in transform tab through which you can control the 3D view whenever you rotate the box. editor also allows you to decide perspection origin. As default 3D view in editor is turned off for ease of normal purpose box designing. you can turn on through the settings.")
                        }
                        if(c('double') && c('text')) {
                            reply('double texting means write a letter once a time but box displays it twice. you need to fix some text formatting as follows :<BR><font style="color:rgb(150,150,150);">step 1 :</font> open "text" tab .<br><font style="color:rgb(150,150,150);">step 2 :</font> set more than zero value into second input box of shadow property.<BR><font style="color:rgb(150,150,150);">step 3 :</font> set "0" value in third input box.<BR><BR>note that shadow color is the color of copied text.')
                        }
                        if(c('states')) {
                            reply('there are three states of box in editor : normal, hover and active. <br> <ul class="bullets" style="" type="disk"><li>normal state is when you are not mouseover or clicking the box.</li> <li>hover state is when you mouseover on the box. if you select hover option and make changes to box then it apply only when you are hoveringit.</li><li>active state is when you are clicking the box. if you choose active option and make changes to box then it apply only when you are clicking the box.</li></ul>')                            
                        }
                        if (c('develop') && c('editor')) {
                            reply('Indo Soft Corporation [ ISC ] is the developer of editor. ')
                        }
                        if (abs('thanks') || c('thanks') || abs('nice') || abs('good')) {
                            reply('its my pleasure 😉')
                        }
                        if (abs('bye')) {
                            reply('see you soon')
                            setTimeout(()=>{
                                $('.Yatharth').fadeOut()
                                $('.conversation_ground').html('<div class="Yatharth_dialog_box">ask me anything about editor !</div>')
                            },2000)
                        }
                        if ( abs('reload-editor') ) {
                            reply("I'll do it for you 😊")
                            setTimeout(()=>{
                                location.reload()
                            },2000)
                        }

                        /* -------- don't forget to copy once again !!! */
                    }
                    $('.User_Input_field').val(' ')
                    break
        }
    })
    $('.askToYatharth').click(function(){
        window.scrollX = 400
        
        if($('.User_Input_field').val() == ' ') {
            reply('you forgot to ask me buddy !')
        }
        else {
            self($('.User_Input_field').val())
            if(c('hii') || c('hey')) {
                reply("hii , my self yatharth")
            }
            if(c('scale') && c('z')) {
                reply("It clearly doesn't seem any change while you are scaling z the box but it helps to improve 3D view when rotating.")
            }
            if( (c('position') || c('move')) && (c('box') || c('object'))) {
                reply("positioning of box in editor is too easy you just need to click and hold on box and move whether you want to drop it.")
            }
            if(c('perspecti')) {
                reply("when you look a building anywhere then it makes a 3D angle with itself which makes it real , as it is editor supports 3D perspection of box. perspective is a property defined in transform tab through which you can control the 3D view whenever you rotate the box. editor also allows you to decide perspection origin. As default 3D view in editor is turned off for ease of normal purpose box designing. you can turn on through the settings.")
            }
            if(c('double') && c('text')) {
                reply('double texting means write a letter once a time but box displays it twice. you need to fix some text formatting as follows :<BR><font style="color:rgb(150,150,150);">step 1 :</font> open "text" tab .<br><font style="color:rgb(150,150,150);">step 2 :</font> set more than zero value into second input box of shadow property.<BR><font style="color:rgb(150,150,150);">step 3 :</font> set "0" value in third input box.<BR><BR>note that shadow color is the color of copied text.')
            }
            if(c('states')) {
                reply('there are three states of box in editor : normal, hover and active. <br> <ul class="bullets" style="" type="disk"><li>normal state is when you are not mouseover or clicking the box.</li> <li>hover state is when you mouseover on the box. if you select hover option and make changes to box then it apply only when you are hoveringit.</li><li>active state is when you are clicking the box. if you choose active option and make changes to box then it apply only when you are clicking the box.</li></ul>')                            
            }
            if (c('develop') && c('editor')) {
                reply('Indo Soft Corporation [ ISC ] is the developer of editor. ')
            }
            if (abs('thanks') || c('thanks') || abs('nice') || abs('good')) {
                reply('its my pleasure 😉')
            }
            if (abs('bye')) {
                reply('see you soon')
                setTimeout(()=>{
                    $('.Yatharth').fadeOut()
                    $('.conversation_ground').html('<div class="Yatharth_dialog_box">ask me anything about editor !</div>')
                },2000)
            }
        }
        $('.User_Input_field').val(' ')


        /* ------- don't forget to copy it --------- */
    })
        
    })

    function c(key) {
        var a = $('.User_Input_field').val().toLowerCase()
        if(~a.indexOf(key)) {
            return true
        }
        else {
            return false
        }
    }

    function abs(key) {
        var a = $('.User_Input_field').val()
        if(a == key) {
            return true
        }
        else {
            return false
        }
    }

    function self(que) {
        $('.conversation_ground').append('<div class="User_dialog_box">'+que+'</div>')
    }

    function reply(ans) {
        setTimeout(rereply,1000)
        function rereply() {
            $('.conversation_ground').append('<div class="Yatharth_dialog_box">'+ans+'</div>')
            localSpeaker(ans)
        }
    }

    function localSpeaker(keyword) {
        var Speak = window.speechSynthesis
        keyword1 = new SpeechSynthesisUtterance(keyword)
        keyword1.lang = 'hi'
        
        Speak.speak(keyword1)
        
        $(document).keyup(function(e){
            switch(e.which) {
                case 16:
                    Speak.pause()
                
            }
        })
    }
    
        
