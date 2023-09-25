var $url="/clouds/admin",$urlCloud="cms/clouds",data=utils.init({cloudType:null,expirationDate:null,uploadUrlFavicon:null,uploadUrlLogo:null,uploadFaviconList:[],uploadLogoList:[],form:{isCloudAdmin:null,adminTitle:null,adminFaviconUrl:null,adminLogoUrl:null,adminLogoLinkUrl:null,adminWelcomeHtml:null,isAdminUpdateDisabled:null}}),methods={apiGet:function(){var i=this;utils.loading(this,!0),$api.get($url).then(function(o){var l=o.data;i.form.isCloudAdmin=l.isCloudAdmin,i.form.adminTitle=l.adminTitle,i.form.adminFaviconUrl=l.adminFaviconUrl,i.form.adminLogoUrl=l.adminLogoUrl,i.form.adminLogoLinkUrl=l.adminLogoLinkUrl,i.form.adminWelcomeHtml=l.adminWelcomeHtml||"欢迎使用 SSCMS 管理后台",i.form.isAdminUpdateDisabled=l.isAdminUpdateDisabled,i.form.adminFaviconUrl&&i.uploadFaviconList.push({name:"avatar",url:i.form.adminFaviconUrl}),i.form.adminLogoUrl&&i.uploadLogoList.push({name:"avatar",url:i.form.adminLogoUrl})}).catch(function(i){utils.error(i)}).then(function(){utils.loading(i,!1)})},apiSubmit:function(){var i=this;utils.loading(this,!0),$api.post($url,{isCloudAdmin:i.form.isCloudAdmin,adminTitle:i.form.adminTitle,adminFaviconUrl:i.form.adminFaviconUrl,adminLogoUrl:i.form.adminLogoUrl,adminLogoLinkUrl:i.form.adminLogoLinkUrl,adminWelcomeHtml:i.form.adminWelcomeHtml,isAdminUpdateDisabled:i.form.isAdminUpdateDisabled}).then(function(i){i.data;utils.success("管理后台设置保存成功！")}).catch(function(i){utils.error(i)}).then(function(){utils.loading(i,!1)})},apiCloudGet:function(){var i=this;utils.loading(this,!0),cloud.get($urlCloud).then(function(o){var l=o.data;i.cloudType=l.cloudType,i.expirationDate=l.expirationDate,i.apiGet()}).catch(function(i){utils.error(i,{ignoreAuth:!0})}).then(function(){utils.loading(i,!1)})},checkCloudType:function(){return"Free"==this.cloudType&&(alert({title:"后台版权设置",text:"系统检测到您的云助手版本为免费版，使用后台版权设置功能请升级云助手版本！",type:"warning",confirmButtonText:"关 闭",showConfirmButton:!0,showCancelButton:!1,buttonsStyling:!1}),!0)},btnSubmitClick:function(){if(!this.checkCloudType()){var i=this;this.$refs.form.validate(function(o){o&&i.apiSubmit()})}},uploadBefore(i){if(this.checkCloudType())return!1;return/(\.jpg|\.jpeg|\.bmp|\.gif|\.png|\.webp)$/i.exec(i.name)?!!(i.size/1024/1024<10)||(utils.error("管理后台Logo图片大小不能超过 10MB!"),!1):(utils.error("管理后台Logo只能是图片格式，请选择有效的文件上传!"),!1)},uploadProgress:function(){utils.loading(this,!0)},uploadSuccess:function(i,o,l){"favicon"==i.type?this.form.adminFaviconUrl=i.url:"logo"==i.type&&(this.form.adminLogoUrl=i.url),utils.loading(this,!1),l.length>1&&l.splice(0,1)},uploadError:function(i){utils.loading(this,!1);var o=JSON.parse(i.message);utils.error(o.message)},uploadFaviconRemove(i){this.form.adminFaviconUrl=null},uploadLogoRemove(i){this.form.adminLogoUrl=null},btnCloseClick:function(){utils.removeTab()}},$vue=new Vue({el:"#main",data:data,methods:methods,created:function(){utils.keyPress(this.btnSubmitClick,this.btnCloseClick),this.uploadUrlFavicon=$apiUrl+$url+"/actions/upload?type=favicon",this.uploadUrlLogo=$apiUrl+$url+"/actions/upload?type=logo";var i=this;cloud.checkAuth(function(){i.apiCloudGet()})}});