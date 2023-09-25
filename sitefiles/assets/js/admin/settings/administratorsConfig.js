var $url="/settings/administratorsConfig",data=utils.init({form:{adminUserNameMinLength:null,adminPasswordMinLength:null,adminPasswordRestriction:null,isAdminLockLogin:null,adminLockLoginCount:null,adminLockLoginType:null,adminLockLoginHours:null,isAdminEnforcePasswordChange:null,adminEnforcePasswordChangeDays:null,isAdminEnforceLogout:null,adminEnforceLogoutMinutes:null,isAdminCaptchaDisabled:null}}),methods={apiGet:function(){var i=this;utils.loading(this,!0),$api.get($url).then(function(n){var o=n.data;i.form.adminUserNameMinLength=o.config.adminUserNameMinLength,i.form.adminPasswordMinLength=o.config.adminPasswordMinLength,i.form.adminPasswordRestriction=o.config.adminPasswordRestriction,i.form.isAdminLockLogin=o.config.isAdminLockLogin,i.form.adminLockLoginCount=o.config.adminLockLoginCount,i.form.adminLockLoginType=o.config.adminLockLoginType,i.form.adminLockLoginHours=o.config.adminLockLoginHours,i.form.isAdminEnforcePasswordChange=o.config.isAdminEnforcePasswordChange,i.form.adminEnforcePasswordChangeDays=o.config.adminEnforcePasswordChangeDays,i.form.isAdminEnforceLogout=o.config.isAdminEnforceLogout,i.form.adminEnforceLogoutMinutes=o.config.adminEnforceLogoutMinutes,i.form.isAdminCaptchaDisabled=o.config.isAdminCaptchaDisabled}).catch(function(i){utils.error(i)}).then(function(){utils.loading(i,!1)})},apiSubmit:function(){var i=this;utils.loading(this,!0),$api.post($url,{adminUserNameMinLength:this.form.adminUserNameMinLength,adminPasswordMinLength:this.form.adminPasswordMinLength,adminPasswordRestriction:this.form.adminPasswordRestriction,isAdminLockLogin:this.form.isAdminLockLogin,adminLockLoginCount:this.form.adminLockLoginCount,adminLockLoginType:this.form.adminLockLoginType,adminLockLoginHours:this.form.adminLockLoginHours,isAdminEnforcePasswordChange:this.form.isAdminEnforcePasswordChange,adminEnforcePasswordChangeDays:this.form.adminEnforcePasswordChangeDays,isAdminEnforceLogout:this.form.isAdminEnforceLogout,adminEnforceLogoutMinutes:this.form.adminEnforceLogoutMinutes,isAdminCaptchaDisabled:this.form.isAdminCaptchaDisabled}).then(function(i){i.data;utils.success("管理员设置保存成功！")}).catch(function(i){utils.error(i)}).then(function(){utils.loading(i,!1)})},getPasswordRestrictionText:function(i){return"LetterAndDigit"===i?"字母和数字组合":"LetterAndDigitAndSymbol"===i?"字母、数字以及符号组合":"不限制"},btnSubmitClick:function(){var i=this;this.$refs.form.validate(function(n){n&&i.apiSubmit()})},btnCloseClick:function(){utils.removeTab()}},$vue=new Vue({el:"#main",data:data,methods:methods,created:function(){utils.keyPress(this.btnSubmitClick,this.btnCloseClick),this.apiGet()}});