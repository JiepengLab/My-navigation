function stlLoginCallback(serviceUrl,successCallback,failureCallback,successArgument,failureArgument){jQuery.get(serviceUrl,"",function(data,textStatus){if(data=eval("("+data+")"),"true"==data.isLogin)try{successCallback&&eval(successCallback+"("+successArgument+")")}catch(c){}else try{failureCallback&&eval(failureCallback+"("+failureArgument+")")}catch(c){}})}function stlOpenLoginWindow(c,l){var s=stl_url_ss+"/login/loginFrame.aspx?successCallback="+c+"&successArgument="+l;stlOpenWindow(s,500,374)}function stlOpenMailSendWindow(c,l,s){var n=stl_url_ss+"/mail/mailSendFrame.aspx?publishmentSystemID="+c+"&channelID="+l+"&contentID="+s+"&pageTitle="+encodeURIComponent(document.title)+"&pageUrl="+location.href;stlOpenWindow(n,373,335)}function stlOpenMailSubscribeWindow(c){var l=stl_url_ss+"/mail/mailSubscribeFrame.aspx?publishmentSystemID="+c;stlOpenWindow(l,373,275)}function stlCommentFirstLogin(c){setTimeout("JSONscriptQuery('"+url+"');",1)}function check_is_login(){try{return""!=getCookie("usrname")||(global_login_frm_show(this,!0,window.location.href,1),!1)}catch(c){}}var login_success_callback_function="";function check_is_login_callback(){var c=1;1==arguments.length&&(login_success_callback_function=arguments[0],c=0);try{if(""==getCookie("usrname"))return global_login_frm_show(this,!0,window.location.href,c),!1;if(!(arguments.length>=1))return!0;login_success_eval_callback(1)}catch(c){}}function login_success_eval_callback(flag){if(void 0!==login_success_callback_function)if("function"==typeof login_success_callback_function)login_success_callback_function(flag);else if("string"==typeof login_success_callback_function)try{eval(login_success_callback_function)}catch(c){}login_success_callback_function=""}function login_success_callback(c){update_user_status(),login_success_eval_callback(0)}