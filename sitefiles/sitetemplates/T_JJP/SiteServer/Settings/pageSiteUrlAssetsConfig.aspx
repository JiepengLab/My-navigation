<%@ Page Language="C#" Inherits="SiteServer.BackgroundPages.Settings.PageSiteUrlAssetsConfig" %>
  <%@ Register TagPrefix="ctrl" Namespace="SiteServer.BackgroundPages.Controls" Assembly="SiteServer.BackgroundPages" %>
    <!DOCTYPE html>
    <html>

    <head>
      <meta charset="utf-8">
      <!--#include file="../inc/head.html"-->
    </head>

    <body>
      <form class="m-l-15 m-r-15" runat="server">

        <div class="card-box">
          <ul class="nav nav-pills">
            <li class="nav-item">
              <a class="nav-link" href="pageSite.aspx">系统站点管理</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="pageSiteUrlWeb.aspx">Web访问地址</a>
            </li>
            <li class="nav-item active">
              <a class="nav-link" href="pageSiteUrlAssets.aspx">资源文件访问地址</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="pageSiteUrlApi.aspx">API访问地址</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="pageSiteAuxiliaryTable.aspx">内容表管理</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="pageSiteKeyword.aspx">敏感词管理</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="pageSiteTemplate.aspx">站点模板管理</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="pageSiteTemplateOnline.aspx">在线站点模板</a>
            </li>
          </ul>
        </div>

        <ctrl:alerts runat="server" />

        <div class="card-box">
          <div class="m-t-0 header-title">
            修改资源文件访问地址
          </div>
          <p class="text-muted font-13 m-b-25">
            站点名称：
            <asp:Literal id="LtlSiteName" runat="server"></asp:Literal>
          </p>

          <div class="form-group">
            <label class="col-form-label">资源文件部署方式</label>
            <asp:RadioButtonList id="RblIsSeparatedAssets" RepeatDirection="Horizontal" AutoPostBack="true" OnSelectedIndexChanged="RblIsSeparatedAssets_SelectedIndexChanged"
              class="radio radio-primary" runat="server"></asp:RadioButtonList>
            <small class="form-text text-muted">资源文件包含图片、视频、附件等除了HTML页面之外的所有文件</small>
          </div>

          <asp:PlaceHolder ID="PhSeparatedAssets" runat="server">
            <div class="form-group">
              <label class="col-form-label">资源文件存储文件夹
                <asp:RegularExpressionValidator runat="server" ControlToValidate="TbAssetsDir" ValidationExpression="[^']+" ErrorMessage=" *"
                  ForeColor="red" Display="Dynamic" />
              </label>
              <asp:TextBox id="TbAssetsDir" class="form-control" runat="server"></asp:TextBox>
            </div>

            <div class="form-group">
              <label class="col-form-label">独立部署资源文件访问地址
                <asp:RequiredFieldValidator ControlToValidate="TbSeparatedAssetsUrl" ErrorMessage=" *" ForeColor="red" Display="Dynamic"
                  runat="server" />
                <asp:RegularExpressionValidator runat="server" ControlToValidate="TbSeparatedAssetsUrl" ValidationExpression="[^']+" ErrorMessage=" *"
                  ForeColor="red" Display="Dynamic" />
              </label>
              <asp:TextBox id="TbSeparatedAssetsUrl" class="form-control" runat="server"></asp:TextBox>
            </div>
          </asp:PlaceHolder>

          <hr />

          <asp:Button class="btn btn-primary" text="确 定" onclick="Submit_OnClick" runat="server" />
          <asp:Button class="btn" text="返 回" onclick="Return_OnClick" runat="server" />

        </div>

      </form>
    </body>

    </html>
    <!--#include file="../inc/foot.html"-->