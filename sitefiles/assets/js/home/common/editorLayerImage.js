var $url="/common/editor/layerImage",data=utils.init({attributeName:utils.getQueryString("attributeName"),uploadList:[],dialogImageUrl:"",dialogVisible:!1,form:{siteId:utils.getQueryInt("siteId"),isThumb:!1,thumbWidth:500,thumbHeight:500,isLinkToOriginal:!0,filePaths:[]}}),methods={insert:function(i){if(parent.$vue.runEditorLayerImage){var e='<img src="'+i.imageUrl+'" style="border: 0; max-width: 100%" />';if(i.previewUrl){var t="'"+i.previewUrl+"'",r='<el-image src="'+i.imageUrl+'" :preview-src-list="['+t+']" style="border: 0; max-width: 100%"></el-image>';e='<img data-vue="'+encodeURIComponent(r)+'" src="'+i.imageUrl+'" style="border: 0; max-width: 100%" />'}parent.$vue.runEditorLayerImage(this.attributeName,e)}},btnSubmitClick:function(){var i=this;if(0===this.form.filePaths.length)return utils.error("请选择需要插入的图片文件！"),!1;utils.loading(this,!0),$api.post($url,this.form).then(function(e){var t=e.data;if(t&&t.length>0)for(var r=0;r<t.length;r++){var a=t[r];i.insert(a)}utils.closeLayer()}).catch(function(i){utils.error(i)}).then(function(){utils.loading(i,!1)})},btnCancelClick:function(){utils.closeLayer()},uploadBefore:i=>/(\.jpg|\.jpeg|\.bmp|\.gif|\.png|\.webp)$/i.exec(i.name)?!!(i.size/1024/1024<10)||(utils.error("上传图片大小不能超过 10MB!"),!1):(utils.error("文件只能是图片格式，请选择有效的文件上传!"),!1),uploadProgress:function(){utils.loading(this,!0)},uploadSuccess:function(i){this.form.filePaths.push(i.path),utils.loading(this,!1)},uploadError:function(i){utils.loading(this,!1);var e=JSON.parse(i.message);utils.error(e.message)},uploadRemove(i){i.response&&this.form.filePaths.splice(this.form.filePaths.indexOf(i.response.path),1)},uploadPictureCardPreview(i){this.dialogImageUrl=i.url,this.dialogVisible=!0}},$vue=new Vue({el:"#main",data:data,methods:methods,created:function(){this.uploadUrl=$apiUrl+$url+"/actions/upload?siteId="+this.form.siteId,utils.loading(this,!1)}});