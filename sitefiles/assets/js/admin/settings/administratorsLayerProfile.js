var $url="/settings/administratorsLayerProfile",data=utils.init({userName:utils.getQueryString("userName"),userId:0,uploadUrl:null,uploadFileList:[],form:{userName:null,displayName:null,password:null,confirmPassword:null,avatarUrl:null,mobile:null,email:null}}),methods={apiGet:function(){var a=this;$api.get($url,{params:{userName:this.userName}}).then(function(i){var r=i.data;a.userId=r.userId,a.form.userName=r.userName,a.form.displayName=r.displayName,a.form.avatarUrl=r.avatarUrl,a.form.mobile=r.mobile,a.form.email=r.email,a.form.avatarUrl&&a.uploadFileList.push({name:"avatar",url:a.form.avatarUrl})}).catch(function(a){utils.error(a)}).then(function(){utils.loading(a,!1)})},apiSubmit:function(){var a=this;utils.loading(this,!0),$api.post($url,{userId:this.userId,userName:this.form.userName,displayName:this.form.displayName,password:this.form.password,avatarUrl:this.form.avatarUrl,mobile:this.form.mobile,email:this.form.email}).then(function(i){a.userName?utils.success("管理员编辑成功！"):utils.success("管理员新增成功！"),utils.closeLayer(!0)}).catch(function(a){utils.error(a)}).then(function(){utils.loading(a,!1)})},validatePass:function(a,i,r){""===i?r(new Error("请再次输入密码")):i!==this.form.password?r(new Error("两次输入密码不一致!")):r()},btnSubmitClick:function(){var a=this;this.$refs.form.validate(function(i){i&&a.apiSubmit()})},uploadBefore:a=>/(\.jpg|\.jpeg|\.bmp|\.gif|\.png|\.webp)$/i.exec(a.name)?!!(a.size/1024/1024<10)||(utils.error("头像图片大小不能超过 10MB!"),!1):(utils.error("头像只能是图片格式，请选择有效的文件上传!"),!1),uploadProgress:function(){utils.loading(this,!0)},uploadSuccess:function(a,i,r){this.form.avatarUrl=a.value,utils.loading(this,!1),r.length>1&&r.splice(0,1)},uploadError:function(a){utils.loading(this,!1);var i=JSON.parse(a.message);utils.error(i.message)},uploadRemove(a){this.form.avatarUrl=null},btnCancelClick:function(){utils.closeLayer()}},$vue=new Vue({el:"#main",data:data,methods:methods,created:function(){utils.keyPress(this.btnSubmitClick,this.btnCancelClick),this.uploadUrl=$apiUrl+$url+"/actions/upload?userName="+this.userName,this.userName?this.apiGet():utils.loading(this,!1)}});