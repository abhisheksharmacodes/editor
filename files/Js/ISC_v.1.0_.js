// ISC.js , a JS library for ISC (Indo Soft Corporation)
// a pvt document for personal purpose
// developed in india | All rights reserved
// © 2018 ISC

function i(name)
{
	if(revealVAR(name,"#") == true)
	{
		return document.getElementById(name.slice(1))
	}
	else if(revealVAR(name,".") == true)
	{
		return document.getElementsByClassName(name.slice(1))
	}
	else {
		return document.getElementsByTagName(name)
	}
}

function rise(elm,delay)
{
	i(elm).style.transitionDuration = delay+"s"
	i(elm).style.opacity = 1
}

function fall(elm,delay)
{
   i(elm).style.transitionDuration = delay+"s"
	i(elm).style.opacity = 0
}

function revealVAR(a,keyword)
{
	if(~a.indexOf(keyword))
	{
		return true
	}
	else
	{
		return false
	}
}

function revealSTR(str,keyword)
{
	a = str
	if(~a.indexOf(keyword))
	{
		return true
	}
	else
	{
		return false
	}
}

function revealHTM(elm,keyword)
{
	a = i(elm).innerHTML
	if(~a.indexOf(keyword))
	{
		return true
	}
	else
	{
		return false
	}
}

function reveal(elm,keyword)
{
	a = i(elm).value
	if(~a.indexOf(keyword))
	{
		return true
	}
	else
	{
		return false
	}
}

function isEven(a)
{
	if(a%2 == 0)
	{
		return true
	}
	else
	{
		return false
	}
}

function isOdd(a)
{
	if(a%2 != 0)
	{
		return true
	}
	else
	{
		return false
	}
}

function isBlank(a)
{
	if(a.length == 0)
	{
		return true
	}
	else
	{
		return false
	}
}

function fact(a)
{
	var i , f = 1
	
	for(i=1;i<=a;i++)
	{
		f *= i
	}
	return f
}

function len(name)
{
	return name.length
}

function print(elm,name)
{
	i(elm).innerHTML = name
}

function val(elm,a)
{
	i(elm).value = a
}


function nEven(a,b)
{
	var i , count = 0
	if(b>a)
	{
		for(i=a+1;i<b;i++)
		{
			if(i % 2 == 0)
			{
				count++
			}
		}
		return count
	}
	else {
		 console.log("error occured while passing arguments in function itrVAL() \n syntax : itrVAL(<root element>,num1,num2) \n where , num2 > num1")

	}
}

function nOdd(a,b)
{
	var i , count = 0
	if(b > a)
	{
		for(i=a+1;i<b;i++)
		{
			if(i % 2 != 0)
			{
				count++
			}
		}
		return count
	}
	else{
		 console.log("error occured while passing arguments in function itrVAL() \n syntax : itrVAL(<root element>,num1,num2) \n where , num2 > num1")

	}
}

function itr(elm,a,b)
{
	var c
	if(b > a)
	{
		for(c=a;c<=b;c++)
		{
			i(elm).innerHTML += c
		}
	}
	else {
		 console.log("error occured while passing arguments in function itrVAL() \n syntax : itrVAL(<root element>,num1,num2) \n where , num2 > num1")

	}
}

function itrVAL(elm,a,b)
{
	var c
	if(b > a)
	{
		for(c=a;c<=b;c++)
		{
			i(elm).value += c
		}
	}
	else {
		console.log("error occured while passing arguments in function itrVAL() \n syntax : itrVAL(<root element>,num1,num2) \n where , num2 > num1")
	}
}

function append(elm,text)
{
	i(elm).innerHTML += text + " "
}

function appendVAL(elm,text)
{
	i(elm).value += text + " "
}

function add(a,b)
{
	a = pint(a)
	b = pint(b)
	return a + b
}

function sub(a,b)
{
	a = pint(a)
	b = pint(b)

	return a - b
}

function pro(a,b)
{
	a = pint(a)
	b = pint(b)

	return a * b
}

function div(a,b)
{
	a = pint(a)
	b = pint(b)

	return a / b
}

function mod(a)
{
	if(a < 0)
	{
		return -a
	}
	else {
		return a
	}
}



function rem(a,b)
{
	return a % b
}

function ave(a,b)
{
	return ( a + b ) / 2
}

function SI(p,r,t)
{
	return p * r * t / 100
}
    
function isPrime(a)
{
	var i
	for(i=2;i<=a;i++)
	{
		if(a%i == 0)
		{
			break
		}
	}
	if(a == i)
	{
		return true
	}
	else {
		return false
	}
}

function even(elm,a,b)
{
	var i
	if(b > a)
	{
		for(i=a;i<=b;i++)
		{
			if(i%2 == 0)
			{
				append(elm,i)
			}
		}
	}
	else {
		console.log("syntax error found in function even() \n syntax : even(<root element>,num1,num2) \n where , num2 > num1")
	}
}

function odd(elm,a,b)
{
	var i
   if(b > a)
	{
		for(i=a;i<=b;i++)
		{
			if(i%2 != 0)
			{
				append(elm,i)
			}
		}
	}
	else {
		console.log("syntax error found in function odd() \n syntax : odd(<root element>,num1,num2) \n where , num2 > num1")
	}
}

function prime(elm,a,b)
{
	var i , j
	for(i=a;i<=b;i++)
	{
		for(j=2;j<=i;j++)
		{
			if(i%j == 0)
			{
				break
			}
		}
		if(j == i)
		{
			append(elm,i)
		}
		
	}
}


function nPrime(a,b)
{
	var i , j , count = 0
	for(i=a;i<=b;i++)
	{
		for(j=2;j<=i;j++)
		{
			if(i%j == 0)
			{
				break
			}
		}
		if(j == i)
		{
			count++
		}
		
	}
	
	return count
}
  /* ----- geometrical functions ------- */

function cir(elm,r,bg)
{
	var d = r * 2
	
	i(elm).innerHTML += '<div style="height:'+d+'px;width:'+d+';background:'+bg+';border-radius:50%"></div>'
}

function eclipse(elm,h,w,bg)
{
	i(elm).innerHTML += '<div style="height:'+h+'px;width:'+w+';background:'+bg+';border-radius:50%"></div>'
}

function rec(elm,h,w,bg)
{
	i(elm).innerHTML += '<div style="height:'+h+'px;width:'+w+'px;background:'+bg+';"></div>'
}

function sq(elm,a,bg)
{
	i(elm).innerHTML += '<div style="height:'+a+'px;width:'+a+'px;background:'+bg+';"></div>'
}

// --
	
function co(a)
{
	console.log(a)
}

function h(elm)
{
	return i(elm).innerHTML
}

function upper(a)
{
	return a.toUpperCase()
}

function lower(a)
{
	return a.toLowerCase()
}

function v(elm)
{
	return i(elm).value
}

function sin(a) {return Math.sin(a)}
	function cos(a) {return Math.cos(a)}
		function tan(a) {return Math.tan(a)}
			function cot(a) {return 1 / tan(a)}
			function sec(a) {return 1 / cos(a)}
			function cosec(a) {return 1 / sin(a)}
			function log(a,base) {
				if(base == null)
				{
					return Math.log(a)
				}
				else {
					return Math.log(a) / Math.log(base)
				}
			}

function pint(a)
{
	return parseInt(a)
}

function pflt(a)
{
	return parseFloat(a)
}

function on(elm,method,func,para1,para2,para3,para4,para5,para6,para7,para8,para9,para10)
{
   
	if(method == "click")
	{
		i(elm).onclick = function(){func(para1,para2,para3,para4,para5,para6,para7,para8,para9,para10)}
	}
	else if(method == "keyup" || method  =="keyoff")
	{
		i(elm).onkeyup = function(){func(para1,para2,para3,para4,para5,para6,para7,para8,para9,para10)}
	}
	else if(method == "keydown" || method == "keyon")
	{
		i(elm).onkeydown = function(){func(para1,para2,para3,para4,para5,para6,para7,para8,para9,para10)}
	}
	else if(method == "input")
	{
		i(elm).oninput = function(){func( para1,para2,para3,para4,para5,para6,para7,para8,para9,para10 )}
	}
	else if(method == "change")
	{
		i(elm).onchange = function(){func( para1,para2,para3,para4,para5,para6,para7,para8,para9,para10 )}
	}
	else if(method == "mo_down")
	{
		i(elm).onmousedown = function(){func( para1,para2,para3,para4,para5,para6,para7,para8,para9,para10 )}
	}
	else if(method == "mo_up")
	{
		i(elm).onmouseup = function(){func( para1,para2,para3,para4,para5,para6,para7,para8,para9,para10 )}
	}
	else {
		co("method not supported : "+method+"")
	}
}
    
function sty(elm,p1,v1,p2,v2)
{
	a = lower(p1)
	ie = i(elm)
	if(a == "bg" || a== "background"){ie.style.background = v1}
	else if(a == "b" || a == "border"){ie.style.border = v1}
	else if(a == "c" || a == "color"){ie.style.color = v1}
	else if(a == "br" || a == "border.radius"){ie.style.borderRadius = v1}
	else if(a == "zi" || a == "z.index"){ie.style.zIndex = v1}
	else if(a == "td" || a == "text.decoration"){ie.style.textDecoration = v1}
	else if(a == "bs" || a == "box.shadow"){ie.style.boxShadow = v1}
	else if(a == "ts" || a == "text.shadow"){ie.style.textShadow = v1}
	else if(a == "bw" || a == "border.width"){ie.style.borderWidth = v1}
	else if(a == "t" || a == "transform"){ie.style.webkitTransform = v1}
	else if(a == "w" || a == "width"){ie.style.width = v1}
	else if(a == "trns" || a == "transition"){ie.style.transition = v1}
	
	b = p2
	if(b == "bg" || a== "background"){ie.style.background = v2}
	else if(b == "b" || b == "border"){ie.style.border = v2}
	else if(b == "c" || b == "color"){ie.style.color = v2}
	else if(b == "br" || b == "border.radius"){ie.style.borderRadius = v2}
	else if(b == "zi" || b == "z.index"){ie.style.zIndex = v2}
	else if(b == "td" || b == "text.decoration"){ie.style.textDecoration = v2}
	else if(b == "bs" || b == "box.shadow"){ie.style.boxShadow = v2}
	else if(b == "ts" || b == "text.shadow"){ie.style.textShadow = v2}
	else if(b == "bw" || b == "border.width"){ie.style.borderWidth = v2}
	else if(b == "t" || b == "transform"){ie.style.webkitTransform = v2}
	else if(b == "w" || b == "width"){ie.style.width = v2}
	else if(b == "trns" || b == "transition"){ie.style.transition = v2}

}   

function styScroll(elm,obj,w,bg,b,br,bs)
{
		append("#isc"," <style>::-webkit-scrollbar {width:10px}</style>")
	if (obj == "scroll") {
		append("#isc"," <style>::-webkit-scrollbar{width:10px} "+elm+"::-webkit-scrollbar {width:"+w+"px;background:"+bg+";border:"+b+";border-radius:"+br+";box-shadow:"+bs+"}</style>")
	}	
	else if (obj == "thumb") {
		append("#isc"," <style>::-webkit-scrollbar{width:10px} "+elm+"::-webkit-scrollbar-thumb {width:"+w+"px;background:"+bg+";border:"+b+";border-radius:"+br+";box-shadow:"+bs+"}</style>")
	}
}

    
function ac(elm,c)
{
	i(elm).className += c
}

function rc(elm,c)
{
	i(elm).className -= c
}
    