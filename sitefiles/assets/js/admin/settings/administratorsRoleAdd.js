var $url="/settings/administratorsRoleAdd",$urlUpdate=$url+"/actions/update",$urlSitePermission=$url+"/actions/sitePermission",data=utils.init({homepage:"/settings/administratorsRole/",roleId:utils.getQueryInt("roleId"),tabName:utils.getQueryString("tabName"),pageType:null,form:{roleName:null,description:null,checkedPermissions:null},permissions:null,allPermissions:null,systemCheckAll:!1,isSystemIndeterminate:!0,sites:null,sitePermissions:[],site:null,permissionInfo:null,treeData:[],defaultExpandedKeys:[]}),methods={apiGet:function(){var i=this;utils.loading(this,!0),$api.get($url,{params:{roleId:this.roleId}}).then(function(s){var e=s.data;e.role&&(i.form.roleName=e.role.roleName,i.form.description=e.role.description),i.permissions=e.permissions,i.form.checkedPermissions=[],i.allPermissions=[];for(var t=0;t<e.permissions.length;t++)i.allPermissions.push(e.permissions[t].name),e.permissions[t].selected&&i.form.checkedPermissions.push(e.permissions[t].name);i.sites=e.sites,i.sitePermissions=e.sitePermissions,i.pageType="role"}).catch(function(i){utils.error(i)}).then(function(){utils.loading(i,!1)})},apiAdd:function(){var i=this;utils.loading(this,!0),$api.post($url,{roleId:0,roleName:this.form.roleName,description:this.form.description,appPermissions:this.form.checkedPermissions,sitePermissions:this.sitePermissions}).then(function(s){s.data;i.closeAndRedirect(!1)}).catch(function(i){utils.error(i)}).then(function(){utils.loading(i,!1)})},apiEdit:function(){var i=this;utils.loading(this,!0),$api.post($urlUpdate,{roleId:this.roleId,roleName:this.form.roleName,description:this.form.description,appPermissions:this.form.checkedPermissions,sitePermissions:this.sitePermissions}).then(function(s){s.data;i.closeAndRedirect(!0)}).catch(function(i){utils.error(i)}).then(function(){utils.loading(i,!1)})},apiSitePermission:function(i){var s=this;utils.loading(this,!0),$api.post($urlSitePermission,{roleId:this.roleId,siteId:i}).then(function(e){var t=e.data;utils.openLayer({title:"权限设置",url:utils.getSettingsUrl("administratorsRoleAddLayerSite",{roleId:this.roleId,siteId:i}),full:!0,success:function(e,n){var r=window[e.find("iframe")[0].name],o=s.getSitePermission(i);r.$vue.setValues(t,o)}})}).catch(function(i){utils.error(i)}).then(function(){utils.loading(s,!1)})},closeAndRedirect:function(i){var s=utils.getTabVue(this.tabName);s&&(i?utils.success("角色编辑成功！"):utils.success("角色添加成功！"),s.apiGet()),utils.removeTab(),utils.openTab(this.tabName)},getSitePermission:function(i){return _.find(this.sitePermissions,function(s){return s.siteId===i})},handleSystemCheckAllChange:function(i){if(this.form.checkedPermissions=[],i)for(var s=0;s<this.permissions.length;s++)this.form.checkedPermissions.push(this.permissions[s].name);this.isSystemIndeterminate=!1},handleCheckedPermissionsChange:function(i){var s=i.length;this.systemCheckAll=s===this.permissions.length,this.isSystemIndeterminate=s>0&&s<this.permissions.length},getPermissionText:function(i){for(var s=0;s<this.permissions.length;s++)if(this.permissions[s].name===i)return this.permissions[s].text;return""},btnPermissionClick:function(i){this.apiSitePermission(i.id)},btnSubmitClick:function(){var i=this;this.$refs.form.validate(function(s){s&&(i.roleId>0?i.apiEdit():i.apiAdd())})},btnCancelClick:function(){utils.removeTab()}},$vue=new Vue({el:"#main",data:data,methods:methods,created:function(){utils.keyPress(this.btnSubmitClick,this.btnCancelClick),this.apiGet()}});