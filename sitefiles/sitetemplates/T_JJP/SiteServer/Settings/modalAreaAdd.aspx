<%@ Page Language="C#" Inherits="SiteServer.BackgroundPages.Settings.ModalAreaAdd" %>
	<%@ Register TagPrefix="ctrl" Namespace="SiteServer.BackgroundPages.Controls" Assembly="SiteServer.BackgroundPages" %>
		<!DOCTYPE html>
		<html class="modalPage">

		<head>
			<meta charset="utf-8">
			<!--#include file="../inc/head.html"-->
		</head>

		<body>
			<form runat="server">
				<ctrl:alerts runat="server" />

				<asp:PlaceHolder ID="PhParentId" runat="server">
					<div class="form-group form-row">
						<label class="col-3 text-right col-form-label">上级区域</label>
						<div class="col-8">
							<asp:DropDownList ID="DdlParentId" class="form-control" runat="server"> </asp:DropDownList>
						</div>
						<div class="col-1 help-block">

						</div>
					</div>
				</asp:PlaceHolder>

				<div class="form-group form-row">
					<label class="col-3 text-right col-form-label">区域名称</label>
					<div class="col-8">
						<asp:TextBox cssClass="form-control" id="TbAreaName" runat="server" />
					</div>
					<div class="col-1 help-block">
						<asp:RequiredFieldValidator ControlToValidate="TbAreaName" errorMessage=" *" foreColor="red" display="Dynamic" runat="server"
						/>
						<asp:RegularExpressionValidator runat="server" ControlToValidate="TbAreaName" ValidationExpression="[^']+" errorMessage=" *"
						  foreColor="red" display="Dynamic" />
					</div>
				</div>

				<hr />

				<div class="text-right mr-1">
					<asp:Button class="btn btn-primary m-l-5" text="确 定" runat="server" onClick="Submit_OnClick" />
					<button type="button" class="btn btn-default m-l-5" onclick="window.parent.layer.closeAll()">取 消</button>
				</div>

			</form>
		</body>

		</html>
		<!--#include file="../inc/foot.html"-->