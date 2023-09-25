<%@ Page Language="C#" validateRequest="false" Inherits="SiteServer.BackgroundPages.Cms.PageTemplateCssAdd" %>
  <%@ Register TagPrefix="ctrl" Namespace="SiteServer.BackgroundPages.Controls" Assembly="SiteServer.BackgroundPages" %>
    <!DOCTYPE html>
    <html>

    <head>
      <meta charset="utf-8">
      <!--#include file="../inc/head.html"-->
      <style type="text/css">
        .CodeMirror-line-numbers {
          width: 22px;
          color: #aaa;
          background-color: #eee;
          text-align: right;
          padding-right: .3em;
          font-size: 10pt;
          font-family: monospace;
          padding-top: .4em;
          line-height: 16px;
        }
      </style>
      <script src="../assets/codeMirror/js/codemirror.js?v=6.4.1" type="text/javascript"></script>
    </head>

    <body>
      <form class="m-l-15 m-r-15" runat="server">
        <ctrl:alerts runat="server" />

        <div class="card-box">
          <div class="m-t-0 header-title">
            <asp:Literal id="LtlPageTitle" runat="server" />
          </div>
          <p class="text-muted font-13 m-b-25">

          </p>

          <div class="form-row">
            <div class="col-md-4 mb-3">
              <label for="TbTemplateName">样式文件名
                <asp:RequiredFieldValidator ControlToValidate="TbRelatedFileName" errorMessage=" *" foreColor="red" display="Dynamic" runat="server"
                />
                <asp:RegularExpressionValidator ControlToValidate="TbRelatedFileName" ValidationExpression="[^'\.]+" ErrorMessage="不能有文件扩展名"
                  foreColor="red" Display="Dynamic" runat="server" />
              </label>
              <asp:TextBox class="form-control" id="TbRelatedFileName" onChange="validateControls()" runat="server" />
            </div>
            <div class="col-md-4 mb-3">
              <label for="TbTemplateName">文件扩展名</label>
              <input type="text" readonly class="form-control-plaintext" value=".css?v=6.4.1">
            </div>
            <div class="col-md-4 mb-3">
              <label for="DdlCharset">文件编码</label>
              <asp:DropDownList id="DdlCharset" class="form-control" runat="server"></asp:DropDownList>
            </div>
          </div>

          <div class="form-group form-row">
            <div class="btn-group btn-group-sm">
              <asp:Button class="btn" id="BtnEditorType" text="采用代码编辑模式" onclick="EditorType_OnClick" runat="server" />
              <button id="reindent" style="display:none" class="btn" onClick="javascript:;">对代码应用格式</button>
            </div>

            <div class="m-t-10" style="border: 1px solid #CCC; width:100%">
              <asp:TextBox TextMode="MultiLine" id="TbContent" runat="server" Height="500" Wrap="false" class="form-control" />
            </div>
            <asp:PlaceHolder id="PhCodeMirror" runat="server">
              <script type="text/javascript">
                $(document).ready(function () {
                  var isTextArea = false;
                  var editor = CodeMirror.fromTextArea('TbContent', {
                    height: "500px",
                    parserfile: ["parsecss.js?v=6.4.1"],
                    stylesheet: ["../assets/codeMirror/css/csscolors.css?v=6.4.1"],
                    path: "../assets/codeMirror/js/",
                    continuousScanning: 500,
                    lineNumbers: true
                  });
                  $('#reindent').show().click(function () {
                    if (!isTextArea) editor.reindent();
                  });
                });
              </script>
            </asp:PlaceHolder>
          </div>

          <hr />

          <div class="text-center">
            <asp:Button class="btn btn-primary m-r-5" text="确 定" onclick="Submit_OnClick" runat="server" />
            <asp:Button class="btn" text="返 回" CausesValidation="false" onclick="Return_OnClick" runat="server" />
          </div>

        </div>

      </form>
    </body>

    </html>
    <!--#include file="../inc/foot.html"-->