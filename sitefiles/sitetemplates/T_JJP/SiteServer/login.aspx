<%@ Page Language="c#" Inherits="SiteServer.BackgroundPages.PageLogin" %>
  <!DOCTYPE html>
  <html>

  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title>管理员登录</title>
    <script language="javascript" src="assets/jquery/jquery-1.9.1.min.js?v=6.4.1"></script>
    <link rel="stylesheet" type="text/css" href="assets/bootstrap/css/bootstrap.min.css?v=6.4.1">
    <script language="JavaScript">
      if (window.top != self) {
        window.top.location = self.location;
      }
      $(document).ready(function () {
        $('#TbAccount').focus();
      });
    </script>
    <link href="css/login.css?v=6.4.1" rel="stylesheet" type="text/css" />
    <link href="assets/icons/favicon.png" rel="icon" type="image/png">
  </head>

  <body class="yunBg">
    <form runat="server" autocomplete="off">
      <div class="yunMain">
        <div class="yunTop">
          <a class="yunLogo" href="http://www.siteserver.cn">
            <img src="assets/icons/logo.png" />
          </a>
        </div>
        <div class="yunItmName">
          <img src="pic/login/yun_ico1.jpg" width="31" height="32" />
          <span class="yunItmS">管理员登录</span>
        </div>
        <div class="yunBox">
          <div style="width: auto 0; margin: 10px 100px">
            <asp:Literal ID="LtlMessage" runat="server" />
          </div>
          <div class="yun_u1">
            <ul>
              <li>
                <span class="yun_s1">账号：</span>
                <asp:TextBox class="yun_int1" ID="TbAccount" runat="server" />
                <asp:RequiredFieldValidator ControlToValidate="TbAccount" ErrorMessage=" *" ForeColor="red" Display="Dynamic" runat="server"
                />
                <asp:RegularExpressionValidator runat="server" ControlToValidate="TbAccount" ValidationExpression="[^']+" ErrorMessage=" *"
                  ForeColor="red" Display="Dynamic" /> 请输入注册的手机号/邮箱/用户名
              </li>
              <li>
                <span class="yun_s1">密码：</span>
                <input type="password" style="display:none" />
                <asp:TextBox class="yun_int1" ID="TbPassword" TextMode="Password" runat="server" />
                <asp:RequiredFieldValidator ControlToValidate="TbPassword" ErrorMessage=" *" ForeColor="red" Display="Dynamic" runat="server"
                />
                <asp:RegularExpressionValidator runat="server" ControlToValidate="TbPassword" ValidationExpression="[^']+" ErrorMessage=" *"
                  ForeColor="red" Display="Dynamic" />
              </li>
              <li>
                <span class="yun_s1">验证码：</span>
                <asp:TextBox class="yun_int1 yun_int2" ID="TbValidateCode" runat="server" />
                <asp:Literal ID="LtlValidateCodeImage" runat="server"></asp:Literal>
                <asp:RequiredFieldValidator ControlToValidate="TbValidateCode" ErrorMessage=" *" ForeColor="red" Display="Dynamic" runat="server"
                />
              </li>
              <li style="padding-top: 10px">
                <span class="yun_s1">&nbsp;</span>
                <asp:Button class="yun_submit" ID="LoginSubmit" Style="width: 101px" OnClick="Submit_OnClick" runat="server" />
                <asp:PlaceHolder id="PhFindPassword" runat="server">
                  &nbsp;
                  <a href="findPwd.aspx">找回密码？</a>
                </asp:PlaceHolder>
              </li>
            </ul>
          </div>
        </div>
        <div class="yunFooter">北京百容千域软件技术开发有限公司 版权所有 Copyright © 2003-
          <script>
            document.write(new Date().getFullYear());
          </script>
        </div>
      </div>
    </form>
  </body>

  </html>
  <!--#include file="inc/foot.html"-->