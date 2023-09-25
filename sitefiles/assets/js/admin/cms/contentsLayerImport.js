var $url="/cms/contents/contentsLayerImport",data=utils.init({checkedLevels:null,form:{siteId:utils.getQueryInt("siteId"),channelId:utils.getQueryInt("channelId"),importType:"zip",checkedLevel:null,isOverride:!1,fileNames:[],fileUrls:[],attributes:[]},uploadUrl:null,uploadList:[],columns:[],styles:[]}),methods={apiGet:function(){var i=this;utils.loading(this,!0),$api.get($url,{params:{siteId:this.form.siteId,channelId:this.form.channelId}}).then(function(t){var e=t.data;i.checkedLevels=e.checkedLevels,i.form.checkedLevel=e.value,i.form.importType=e.options.importType,i.form.isOverride=e.options.isOverride,i.btnRadioInput()}).catch(function(i){utils.error(i)}).then(function(){utils.loading(i,!1)})},apiSubmit:function(){var i=this;utils.loading(this,!0),$api.post($url,this.form).then(function(t){t.data;utils.closeLayer(),parent.$vue.apiList(i.form.channelId,1,"文件导入成功！",!0)}).catch(function(i){utils.error(i)}).then(function(){utils.loading(i,!1)})},btnRadioInput:function(){this.uploadUrl=$apiUrl+$url+"/actions/upload?siteId="+this.form.siteId+"&channelId="+this.form.channelId+"&importType="+this.form.importType},btnSubmitClick:function(){if(0===this.form.fileNames.length)return utils.error("请选择需要导入的文件！");this.apiSubmit()},btnCancelClick:function(){utils.closeLayer()},uploadBefore(i){var t=/(\.zip|\.xlsx|\.txt)$/i;return"zip"===this.form.importType?t=/(\.zip)$/i:"xlsx"===this.form.importType?t=/(\.xlsx)$/i:"image"===this.form.importType?t=/(\.jpg|\.jpeg|\.bmp|\.gif|\.png|\.webp)$/i:"txt"===this.form.importType&&(t=/(\.txt)$/i),!!t.exec(i.name)||(utils.error("请选择有效的文件上传!"),!1)},uploadProgress:function(){utils.loading(this,!0)},uploadRemove(i){if(i.response){var t=this.form.fileNames.indexOf(i.response.name);this.form.fileNames.splice(t,1),this.form.fileUrls.splice(t,1)}},uploadSuccess:function(i){if("excel"===this.form.importType){this.form.fileNames=[],this.form.fileUrls=[],this.columns=i.columns,this.styles=i.styles,this.form.attributes=[];for(var t=0;t<this.columns.length;t++)this.form.attributes[t]=""}this.form.fileNames.push(i.name),this.form.fileUrls.push(i.url),utils.loading(this,!1)},uploadError:function(i){utils.loading(this,!1);var t=JSON.parse(i.message);utils.error(t.message)}},$vue=new Vue({el:"#main",data:data,methods:methods,created:function(){utils.keyPress(this.btnSubmitClick,this.btnCancelClick),this.apiGet()}});