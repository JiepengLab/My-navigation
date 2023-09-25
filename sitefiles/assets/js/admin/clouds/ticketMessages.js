var $urlCloud="home/my/ticketMessages",$urlCloudUpload="home/my/ticketMessages/actions/upload",$urlCloudClose="home/my/ticketMessages/actions/close",data=utils.init({ticketNo:utils.getQueryString("ticketNo"),tabName:utils.getQueryString("tabName"),ticket:{},user:{},count:0,messages:[],currentPage:1,offset:0,limit:30,uploadToken:"",uploadUrl:"",form:{content:""}}),methods={apiGet:function(){if(this.ticketNo){var t=this;utils.loading(this,!0),cloud.get($urlCloud,{params:{ticketNo:this.ticketNo}}).then(function(e){var i=e.data;t.ticket=i.ticket,t.user=i.user,t.count=i.count,t.messages=i.messages,t.uploadToken=$cloudToken,t.uploadUrl=cloud.defaults.baseURL+"/"+$urlCloudUpload}).catch(function(t){utils.error(t,{ignoreAuth:!0})}).then(function(){utils.loading(t,!1)})}},apiClose:function(){var t=this;utils.loading(this,!0),cloud.post($urlCloudClose,{ticketNo:this.ticket.ticketNo}).then(function(e){e.data;utils.success("工单关闭成功！"),t.ticket.status="Closed"}).catch(function(t){utils.error(t,{ignoreAuth:!0})}).then(function(){utils.loading(t,!1)})},apiSubmit:function(t,e,i){var s=this;utils.loading(this,!0),cloud.post($urlCloud,{ticketNo:this.ticket.ticketNo,messageType:t,storageKey:e,content:i}).then(function(t){var e=t.data;s.form.content="",s.ticket.status="Dealing",s.messages.push(e.message)}).catch(function(t){utils.error(t,{ignoreAuth:!0})}).then(function(){utils.loading(s,!1)})},getTicketPriority:function(){return"High"===this.ticket.priority?"加急工单":"普通工单"},getTicketStatusType:function(){return"Closed"===this.ticket.status?"success":"Dealing"===this.ticket.status?"info":"danger"},getTicketCategory:function(){return"Cms"===this.ticket.category?"CMS问题":"Cloud"===this.ticket.category?"网站云问题":"Theme"===this.ticket.category?"模板问题":"Extension"===this.ticket.category?"插件问题":"其他"},getTicketStatus:function(){return"Waiting"===this.ticket.status?"待您确认":"Dealing"===this.ticket.status?"正在为您处理":"Closed"===this.ticket.status?"工单已关闭":"全部"},isInputArea:function(){return"Closed"!==this.ticket.status},btnCloseClick:function(){var t=this;utils.alertDelete({title:"关闭工单",text:"此操作将关闭工单，确定吗？",button:"确认关闭",callback:function(){t.apiClose()}})},btnSubmitClick:function(){this.form.content&&this.apiSubmit("Text","",this.form.content)},uploadBefore:function(t){var e=t.size/1024/1024<10;return e||utils.error("文件大小不能超过 10MB!"),e},uploadProgress:function(){utils.loading(this,!0)},uploadSuccess:function(t){this.apiSubmit(t.messageType,t.storageKey,t.content)},uploadError:function(t){utils.loading(this,!1);var e=JSON.parse(t.message);utils.error(e.message)},getClassName:function(t){return t.isReply?"message-item--left":"message-item--right"},isImage:function(t){return"Image"===t.messageType},isDocument:function(t){return"Document"===t.messageType},getStorageUrl:function(t){return cloud.hostStorage+"/"+t.storageKey},getAvatarUrl:function(){return this.user.avatarUrl||utils.getAssetsUrl("images/default_avatar.png")},getFileName:function(t){return t?t.substring(t.lastIndexOf("/")+1):""},btnRemoveClick:function(){utils.removeTab()}},$vue=new Vue({el:"#main",data:data,methods:methods,created:function(){utils.keyPress(this.btnSubmitClick,this.btnRemoveClick);var t=this;cloud.checkAuth(function(){t.apiGet()})}});