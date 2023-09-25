var $url="/settings/administrators",$urlDelete=$url+"/actions/delete",$urlExport=$url+"/actions/export",$urlUpload=$apiUrl+"/settings/administrators/actions/import",data=utils.init({drawer:!1,administrators:null,count:null,roles:null,isSuperAdmin:null,adminId:null,formInline:{role:"",order:"",lastActivityDate:0,keyword:"",currentPage:1,offset:0,limit:30},permissionInfo:{},uploadPanel:!1,uploadLoading:!1,uploadList:[]}),methods={apiGet:function(){var i=this;$api.get($url,{params:this.formInline}).then(function(t){var n=t.data;i.administrators=n.administrators,i.count=n.count,i.roles=n.roles,i.isSuperAdmin=n.isSuperAdmin,i.adminId=n.adminId}).catch(function(i){utils.error(i)}).then(function(){utils.loading(i,!1)})},apiDelete:function(i){var t=this;utils.loading(this,!0),$api.post($urlDelete,{id:i.id}).then(function(n){n.data;t.administrators.splice(t.administrators.indexOf(i),1)}).catch(function(i){utils.error(i)}).then(function(){utils.loading(t,!1)})},apiLock:function(i){var t=this;utils.loading(this,!0),$api.post($url+"/actions/lock",{id:i.id}).then(function(t){t.data;i.locked=!0}).catch(function(i){utils.error(i)}).then(function(){utils.loading(t,!1)})},apiUnLock:function(i){var t=this;utils.loading(this,!0),$api.post($url+"/actions/unLock",{id:i.id}).then(function(t){t.data;i.locked=!1}).catch(function(i){utils.error(i)}).then(function(){utils.loading(t,!1)})},btnViewClick:function(i){utils.openLayer({title:"查看资料",url:utils.getCommonUrl("adminLayerView",{adminId:i.id}),full:!0})},btnEditClick:function(i){utils.openLayer({title:"编辑资料",url:utils.getSettingsUrl("administratorsLayerProfile",{userName:i.userName}),width:650,height:600})},btnPasswordClick:function(i){utils.openLayer({title:"更改密码",url:utils.getSettingsUrl("administratorsLayerPassword",{userName:i.userName}),width:550,height:300})},btnPermissionsClick:function(i){var t=this;utils.loading(this,!0),$api.get($url+"/permissions/"+i.id).then(function(n){for(var e=n.data,s=[],a=0;a<e.roles.length;a++)s.push({key:e.roles[a],label:e.roles[a],disabled:!1});t.permissionInfo={adminId:i.id,allRoles:s,allSites:e.allSites||[],adminLevel:e.adminLevel,checkedSites:e.checkedSites||[],checkedRoles:e.checkedRoles||[],loading:!1},t.drawer=!0}).catch(function(i){utils.error(i)}).then(function(){utils.loading(t,!1)})},btnPermissionSubmitClick:function(){var i=this;this.permissionInfo.loading=!0,$api.post($url+"/permissions/"+this.permissionInfo.adminId,{adminLevel:this.permissionInfo.adminLevel,checkedSites:this.permissionInfo.checkedSites,checkedRoles:this.permissionInfo.checkedRoles}).then(function(t){for(var n=t.data,e=0;e<i.administrators.length;e++){var s=i.administrators[e];s.id===i.permissionInfo.adminId&&(s.roles=n.roles)}i.drawer=!1}).catch(function(i){utils.error(i)}).then(function(){utils.loading(i,!1)})},btnDeleteClick:function(i){var t=this;utils.alertDelete({title:"删除管理员",text:"此操作将删除管理员 "+i.userName+"，确定吗？",callback:function(){t.apiDelete(i)}})},btnLockClick:function(i){var t=this;utils.alertDelete({title:"锁定管理员",text:"此操作将锁定管理员 "+i.userName+"，确定吗？",button:"确 定",callback:function(){t.apiLock(i)}})},btnUnLockClick:function(i){var t=this;utils.alertDelete({title:"解锁管理员",text:"此操作将解锁管理员 "+i.userName+"，确定吗？",button:"确 定",callback:function(){t.apiUnLock(i)}})},btnSearchClick(){var i=this;utils.loading(this,!0),$api.get($url,{params:this.formInline}).then(function(t){var n=t.data;i.administrators=n.administrators,i.count=n.count}).catch(function(i){utils.error(i)}).then(function(){utils.loading(i,!1)})},btnExportClick:function(){var i=this;utils.loading(this,!0),$api.post($urlExport).then(function(i){var t=i.data;window.open(t.value)}).catch(function(i){utils.error(i)}).then(function(){utils.loading(i,!1)})},handleCurrentChange:function(i){this.formInline.currentValue=i,this.formInline.offset=this.formInline.limit*(i-1),this.btnSearchClick()},btnAddClick:function(){utils.openLayer({title:"新增管理员",url:utils.getSettingsUrl("administratorsLayerProfile"),width:650,height:600})},btnImportClick:function(){this.uploadPanel=!0},uploadBefore(i){var t=-1!==i.name.indexOf(".xlsx",i.name.length-".xlsx".length);return t||utils.error("管理员导入文件只能是 Excel 格式!"),t},uploadProgress:function(){utils.loading(this,!0)},uploadSuccess:function(i,t){this.uploadPanel=!1;var n=i.success,e=i.failure,s=i.errorMessage,a=this;$api.get($url,{params:this.formInline}).then(function(i){var t=i.data;a.administrators=t.administrators,a.count=t.count,a.roles=t.roles,a.isSuperAdmin=t.isSuperAdmin,a.adminId=t.adminId}).catch(function(i){utils.error(i)}).then(function(){n&&utils.success("成功导入 "+n+" 名管理员！"),s&&utils.error(e+" 名管理员导入失败："+s),utils.loading(a,!1)})},uploadError:function(i){utils.loading(this,!1);var t=JSON.parse(i.message);utils.error(t.message)},btnCloseClick:function(){utils.removeTab()}},$vue=new Vue({el:"#main",data:data,methods:methods,created:function(){utils.keyPress(this.btnSearchClick,this.btnCloseClick),this.apiGet()}});