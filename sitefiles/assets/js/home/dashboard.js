var $url="/dashboard",data=utils.init({adminWelcomeHtml:null}),methods={apiGet:function(){var t=this;utils.loading(this,!0),$api.get($url).then(function(e){var a=e.data;t.homeWelcomeHtml=a.homeWelcomeHtml||"欢迎使用用户中心"}).catch(function(t){utils.error(t)}).then(function(){utils.loading(t,!1)})}},$vue=new Vue({el:"#main",data:data,created:function(){this.apiGet()},methods:methods});