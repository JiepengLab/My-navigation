var $url="/settings/administratorsAccessTokensLayerView",data=utils.init({id:utils.getQueryInt("id"),token:null,accessToken:null}),methods={apiGet:function(){var t=this;utils.loading(this,!0),$api.get($url,{params:{id:this.id}}).then(function(e){var i=e.data;t.token=i.token,t.accessToken=i.accessToken}).catch(function(t){utils.error(t)}).then(function(){utils.loading(t,!1)})},apiRegenerate:function(){var t=this;utils.loading(this,!0),$api.post($url+"/actions/regenerate",{id:this.id}).then(function(e){var i=e.data;t.accessToken=i.accessToken,utils.success("API密钥重设成功，请将原密码替换为新的密钥")}).catch(function(t){utils.error(t)}).then(function(){utils.loading(t,!1)})},btnCancelClick:function(){utils.closeLayer()},btnRegenerateClick:function(){this.apiRegenerate()}},$vue=new Vue({el:"#main",data:data,methods:methods,created:function(){utils.keyPress(null,this.btnCancelClick),this.apiGet()}});