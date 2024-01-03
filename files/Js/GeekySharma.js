g = a => {
    return document.querySelector(a)
}

_include = filePath => {
    var script = document.createElement('script')
        script.setAttribute('src',filePath)
}

var date = new Date()

GS = {
    fadeIn : (elm,delay) => {
        var op = 0 , transition = window.getComputedStyle(g(elm)).transitionDuration
        g(elm).style.display = 'block'
        g(elm).style.opacity = 0
        g(elm).style.transition = '0s'
        setInterval(()=>{
            if ( op <= 100 ) {
                g(elm).style.opacity = op++ / 100
            }
            else {
                g(elm).style.transition = transition
                console.log(transition)
            }
        },delay/100)
    },
    fadeOut : (elm,delay) => {
        var op = 100 
        g(elm).style.opacity = 1
        setInterval(()=>{
            if ( op == 0 ) {
                g(elm).style.display = 'none'
            }
            else {
                g(elm).style.opacity = op-- /100
            }
        },delay/100)
    },
    fadeTo : (elm,target,delay=400) => {
        var a = 100
        int = setInterval(()=>{
            if(a == target * 100) {
                clearInterval(int)
            }
            g(elm).style.opacity = a -- / 100    
        },delay/100)
    },
    fadeInPop : (elm,delay=400) => {
        var a = 0 , b = 50
        g(elm).style.display = "block"
        g(elm).style.opacity = 0
        g(elm).style.webkitTransform = "scale(.5)"
        setInterval(()=>{
            if ( a <= 100 ) {
                g(elm).style.opacity = a++ / 100
            }
            if ( b <= 100 ) {
                g(elm).style.webkitTransform = "scale(" + b++ / 100 + ")"
            }
        },delay/100)
    },
    fadeOutPop : (elm,delay=400) => {
        var a = 100 , b = 100
        g(elm).style.webkitTransform = "scale(1)"
        setInterval(()=>{
            if ( a >= 0 ) {
                a -= 2
                g(elm).style.opacity = a / 100
            }
            if ( a == 0 ) {
                g(elm).style.display = "none"
            }
            if ( b >= 60 ) {
                g(elm).style.webkitTransform = "scale(" + b -- / 100 + ")"
                setTimeout(()=>{
                    g(elm).style.webkitTransform = "scale(1)"
                },delay + 370)
            }
        },delay/100)
    },
    prime : a => {
        for ( var i = 2 ; i <= a ; i ++ ) {
            if ( a % i == 0 ) {
                break
            }    
        }
        if ( a == i ) {
            return true
        }
        else {
            return false
        }
    },
    factorial : a => {

        var i , fact = 1
        for ( i = 1 ; i <= a ; i ++ ) {
            fact = fact * i
        }
        return fact
    },
    append : (target,elm) => {
        g(target).innerHTML += elm
    },
    prepend : (target,elm) => {
        var str = elm
        document.getElementById(target).insertBefore(str)
    },
    draggable : (elm) => {
        g(elm).onclick = (e) => {
            if(mousemove) {
                g(elm).style.position = 'absolute'
                g(elm).style.top = (pageYOffset + e.y) + 'px'
                g(elm).style.left = (pageXOffset + e.y) + 'px'
            }
            else {
                g(elm).style.position = window.getComputedStyle(g(elm)).position
            }
        }
    },

    effect : {
        splash : elm => {           // position:absolute 
            var org = g(elm)
                cln = org.cloneNode(true)
                g('body').appendChild(cln)
                if (window.getComputedStyle(g(elm)).position != 'static' || window.getComputedStyle(g(elm)).position != 'initial') {
                    cln.style.position = window.getComputedStyle(g(elm)).position
                    cln.style.top = window.getComputedStyle(g(elm)).top
                    cln.style.left = window.getComputedStyle(g(elm)).left
                }
                var a = 100 , op = 100
                setInterval(()=>{
                    if ( a <= 130 ) {
                        cln.style.transform = 'scale(' + a++ / 100 + ')'    
                    }
                    if ( a >= 0 ) {
                        cln.style.opacity = op-- / 100
                    }
                    else {
                        cln.style.opacity = 1
                        op = 10
                        a = 10
                        cln.style.transform = 'scale(1)'
                        cln.style.display = 'none'
                    }    
                },4)
                
        }
    },

    now : {
        year : date.getFullYear(),
        month : date.getMonth(),
        date : date.getDate(),
        day : date.getDay(),
        hour : date.getHours(),
        min : date.getMinutes(),
        sec : date.getSeconds(),
        ms : date.getMilliseconds(),    
    }

}