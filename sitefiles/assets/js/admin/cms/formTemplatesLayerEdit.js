var $url="/cms/forms/formTemplatesLayerEdit",$urlClone=$url+"/actions/clone",$urlUpdate=$url+"/actions/update",data=utils.init({siteId:utils.getQueryInt("siteId"),isSystem:utils.getQueryBoolean("isSystem"),name:utils.getQueryString("name"),isClone:utils.getQueryBoolean("isClone"),isHtml:utils.getQueryBoolean("isHtml"),form:{name:""}}),methods={getTemplateHtml:function(){return this.isHtml?parent.$vue.getEditorContent():""},apiClone:function(){var t=this;utils.loading(this,!0),$api.post($urlClone,{siteId:this.siteId,isSystemOriginal:this.isSystem,nameOriginal:this.name,name:this.form.name,isHtml:this.isHtml,templateHtml:this.getTemplateHtml()}).then(function(i){utils.success("模板克隆成功！"),parent.location.href=t.getTemplatesUrl()}).catch(function(t){utils.error(t)}).then(function(){utils.loading(t,!1)})},apiUpdate:function(){var t=this;utils.loading(this,!0),$api.post($urlUpdate,{siteId:this.siteId,isSystemOriginal:this.isSystem,nameOriginal:this.name,name:this.form.name}).then(function(i){utils.success("模板编辑成功！"),parent.location.href=t.getTemplatesUrl()}).catch(function(t){utils.error(t)}).then(function(){utils.loading(t,!1)})},btnSubmitClick:function(){var t=this;this.$refs.form.validate(function(i){i&&(t.isClone?t.apiClone():t.apiUpdate())})},getTemplatesUrl:function(){return utils.getCmsUrl("formTemplates",{siteId:this.siteId,formId:this.formId})},btnCancelClick:function(){window.parent.layer.closeAll()}},$vue=new Vue({el:"#main",data:data,methods:methods,created:function(){utils.keyPress(this.btnSubmitClick,this.btnCancelClick),this.form.name=this.isClone?"":this.name,utils.loading(this,!1),utils.focus(this,"name")}});