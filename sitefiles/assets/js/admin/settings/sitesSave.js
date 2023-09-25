var $url="/settings/sitesSave",data=utils.init({active:0,site:null,directories:null,files:null,channel:null,checkAllDirectories:!1,checkAllFiles:!1,downloadUrl:null,form:{siteId:utils.getQueryInt("siteId"),templateName:null,templateDir:null,webSiteUrl:null,description:null,checkedDirectories:[],checkedFiles:[],isAllFiles:!0,isSaveContents:!0,isSaveAllChannels:!0,checkedChannelIds:[]}}),methods={apiGet:function(){var t=this;$api.get($url,{params:{siteId:this.form.siteId}}).then(function(e){var i=e.data;t.site=i.site,t.form.templateName=i.site.siteName,t.form.templateDir=i.templateDir}).catch(function(t){utils.error(t)}).then(function(){utils.loading(t,!1)})},handleCheckAllDirectoriesChange(t){this.form.checkedDirectories=t?this.directories:[],this.checkAllDirectories=t},handleCheckedDirectoriesChange(t){this.checkAllDirectories=this.form.checkedDirectories.length===this.directories.length},handleCheckAllFilesChange(t){this.form.checkedFiles=t?this.files:[],this.checkAllFiles=t},handleCheckedFilesChange(t){this.checkAllFiles=this.form.checkedFiles.length===this.files.length},btnNextClick:function(){var t=this;0===t.active?this.$refs.form.validate(function(e){e&&t.apiSaveSettings()}):1===t.active?t.apiSaveFiles():2===t.active&&t.apiSaveData()},apiSaveSettings:function(){var t=this;utils.loading(this,!0),$api.post($url+"/actions/settings",this.form).then(function(e){var i=e.data;t.directories=i.directories,t.files=i.files,t.active=1}).catch(function(t){utils.error(t)}).then(function(){utils.loading(t,!1)})},apiSaveFiles:function(){var t=this;utils.loading(this,!0),$api.post($url+"/actions/files",this.form).then(function(e){var i=e.data;t.channel=i.channel,t.active=2}).catch(function(t){utils.error(t)}).then(function(){utils.loading(t,!1)})},apiSaveData:function(){var t=this;utils.loading(this,!0),$api.post($url+"/actions/data",this.form).then(function(e){e.data;t.active=3}).catch(function(t){utils.error(t)}).then(function(){utils.loading(t,!1)})},handleTreeChanged:function(){this.form.checkedChannelIds=this.$refs.tree.getCheckedKeys()},btnCloseClick:function(){utils.removeTab()},btnSaveAndDownloadClick:function(){var t=this;utils.loading(this,!0),$api.post($url+"/actions/zip",{directoryName:this.form.templateDir}).then(function(e){var i=e.data;t.downloadUrl=i.value,t.btnDownloadClick()}).catch(function(t){utils.error(t)}).then(function(){utils.loading(t,!1)})},btnDownloadClick:function(){window.open(this.downloadUrl)},btnReturnClick:function(){location.href=utils.getSettingsUrl("sites")}},$vue=new Vue({el:"#main",data:data,methods:methods,created:function(){utils.keyPress(this.btnNextClick,this.btnCloseClick),this.apiGet()}});