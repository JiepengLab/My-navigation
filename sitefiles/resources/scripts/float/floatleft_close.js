var imgheight_close,imgleft;function myload(){myleft.style.top=document.body.scrollTop+document.body.offsetHeight-imgheight_close,myleft.style.left=imgleft,leftmove()}function leftmove(){myleft.style.top=document.body.scrollTop+document.body.offsetHeight-imgheight_close,myleft.style.left=imgleft,setTimeout("leftmove();",50)}function MM_reloadPage(init){if(1==init)with(navigator)"Netscape"==appName&&4==parseInt(appVersion)&&(document.MM_pgW=innerWidth,document.MM_pgH=innerHeight,onresize=MM_reloadPage);else innerWidth==document.MM_pgW&&innerHeight==document.MM_pgH||location.reload(!0)}function close_float_left(){myleft.style.visibility="hidden"}document.ns="Microsoft Internet Explorer"==navigator.appName,imgheight_close=(window.screen.width,120),imgleft=window.screen.width>800?15:122,MM_reloadPage(!0),document.ns&&(document.write("<div id=myleft style='position: absolute;width:80;top:300;left:5;visibility: visible;z-index: 1'><style>A.closefloat:link,A.refloat:visited {text-decoration:none;color:#000000;font-size:12px}A.closefloat:active,A.refloat:hover {text-decoration:underline;color:#0000FF;font-size:12px}</style><table border=0 cellpadding=0 cellspacing=0><tr><td>"),"swf"!=ad_float_left_type?document.write("<a href='"+ad_float_left_url+"' target = '_blank'><img src='"+ad_float_left_src+"' WIDTH=80 HEIGHT=80  border = 0></a>"):document.write("<EMBED src='"+ad_float_left_src+"' FlashVars='"+ad_float_left_url+"' quality=high  WIDTH=80 HEIGHT=80 TYPE='application/x-shockwave-flash' id=changhongout ></EMBED>"),document.write("</td></tr><tr><td width=80 height=20 align=right><a href='javascript:close_float_left();void(0);' class=closefloat><b><font color=#ff0000>关闭<font></b></a></td></tr></table></div>"),myload());