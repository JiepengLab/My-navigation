<%@ Page Language="C#" Inherits="SiteServer.BackgroundPages.Cms.PageTableStyleChannel" %>
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
              <a class="nav-link" href="pageTableStyleContent.aspx?siteId=<%=SiteId%>">内容字段管理</a>
            </li>
            <li class="nav-item active">
              <a class="nav-link" href="javascript:;">栏目字段管理</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="pageTableStyleSite.aspx?siteId=<%=SiteId%>">站点字段管理</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="pageRelatedField.aspx?siteId=<%=SiteId%>">联动字段设置</a>
            </li>
          </ul>
        </div>

        <ctrl:alerts runat="server" />

        <div class="card-box">
          <div class="m-b-10">
            <div class="form-inline">
              <div class="form-group">
                <label class="col-form-label m-r-10">栏目</label>
                <asp:DropDownList ID="DdlChannelId" class="form-control m-r-10" OnSelectedIndexChanged="Redirect" AutoPostBack="true" runat="server"></asp:DropDownList>
                <small class="form-text text-muted">
                  下级栏目的字段默认继承上级栏目的字段，设置字段时请先选择合适的栏目
                </small>
              </div>
            </div>
          </div>

          <div class="panel panel-default m-t-10">
            <div class="panel-body p-0">
              <div class="table-responsive">
                <table class="table tablesaw table-hover m-0">
                  <thead>
                    <tr>
                      <th>字段名 </th>
                      <th>显示名称 </th>
                      <th width="120" class="text-center">表单提交类型</th>
                      <th width="100" class="text-center">验证规则</th>
                      <th width="80" class="text-center">排序</th>
                      <th width="120" class="text-center">显示样式</th>
                      <th width="120" class="text-center">表单验证</th>
                    </tr>
                  </thead>
                  <tbody>
                    <asp:Repeater ID="RptContents" runat="server">
                      <itemtemplate>
                        <tr>
                          <td>
                            <asp:Literal ID="ltlAttributeName" runat="server"></asp:Literal>
                          </td>
                          <td>
                            <asp:Literal ID="ltlDisplayName" runat="server"></asp:Literal>
                          </td>
                          <td class="text-center">
                            <asp:Literal ID="ltlInputType" runat="server"></asp:Literal>
                          </td>
                          <td class="text-center">
                            <asp:Literal ID="ltlValidate" runat="server"></asp:Literal>
                          </td>
                          <td class="text-center">
                            <asp:Literal ID="ltlTaxis" runat="server"></asp:Literal>
                          </td>
                          <td class="text-center">
                            <asp:Literal ID="ltlEditStyle" runat="server"></asp:Literal>
                          </td>
                          <td class="text-center">
                            <asp:Literal ID="ltlEditValidate" runat="server"></asp:Literal>
                          </td>
                        </tr>
                      </itemtemplate>
                    </asp:Repeater>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <hr />

          <asp:Button class="btn btn-primary m-r-5" id="BtnAddStyle" Text="新增字段" runat="server" />
          <asp:Button class="btn m-r-5" id="BtnAddStyles" Text="批量新增字段" runat="server" />
          <asp:Button class="btn m-r-5" id="BtnImport" Text="导 入" runat="server" />
          <asp:Button class="btn m-r-5" id="BtnExport" Text="导 出" runat="server" />

        </div>

      </form>
    </body>

    </html>
    <!--#include file="../inc/foot.html"-->