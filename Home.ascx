<!--
DNN Skin      : WS Starter
Version       : 01.01.03
Released      : March 2014
Style         : Homepage
DNN Versions  : 6,7
-->

<%@ Control Language="vb" AutoEventWireup="false" Explicit="True" Inherits="DotNetNuke.UI.Skins.Skin" %>
<%@ Register TagPrefix="dnn" TagName="LANGUAGE" Src="~/Admin/Skins/Language.ascx" %>
<%@ Register TagPrefix="dnn" TagName="LOGO" Src="~/Admin/Skins/Logo.ascx" %>
<%@ Register TagPrefix="dnn" TagName="SEARCH" Src="~/Admin/Skins/Search.ascx" %>
<%@ Register TagPrefix="dnn" TagName="NAV" Src="~/Admin/Skins/Nav.ascx" %>
<%@ Register TagPrefix="dnn" TagName="TEXT" Src="~/Admin/Skins/Text.ascx" %>
<%@ Register TagPrefix="dnn" TagName="BREADCRUMB" Src="~/Admin/Skins/BreadCrumb.ascx" %>
<%@ Register TagPrefix="dnn" TagName="USER" Src="~/Admin/Skins/User.ascx" %>
<%@ Register TagPrefix="dnn" TagName="LOGIN" Src="~/Admin/Skins/Login.ascx" %>
<%@ Register TagPrefix="dnn" TagName="LEFTMENU" Src="~/Admin/Skins/LeftMenu.ascx" %>
<%@ Register TagPrefix="dnn" TagName="LINKS" Src="~/Admin/Skins/Links.ascx" %>
<%@ Register TagPrefix="dnn" TagName="PRIVACY" Src="~/Admin/Skins/Privacy.ascx" %>
<%@ Register TagPrefix="dnn" TagName="TERMS" Src="~/Admin/Skins/Terms.ascx" %>
<%@ Register TagPrefix="dnn" TagName="COPYRIGHT" Src="~/Admin/Skins/Copyright.ascx" %>
<%@ Register TagPrefix="dnn" TagName="STYLES" Src="~/Admin/Skins/Styles.ascx" %>
<%@ Register TagPrefix="dnn" TagName="LINKTOMOBILE" Src="~/Admin/Skins/LinkToMobileSite.ascx" %>
<%@ Register TagPrefix="dnn" Namespace="DotNetNuke.Web.DDRMenu.TemplateEngine" Assembly="DotNetNuke.Web.DDRMenu" %>
<%@ Register TagPrefix="dnn" TagName="MENU" Src="~/DesktopModules/DDRMenu/Menu.ascx" %>
<%@ Register TagPrefix="dnn" TagName="CONTROLPANEL" Src="~/Admin/Skins/controlpanel.ascx" %>
<%@ Register TagPrefix="dnn" TagName="Meta" Src="~/Admin/Skins/Meta.ascx" %>
<%@ Register TagPrefix="dnn" Namespace="DotNetNuke.Web.Client.ClientResourceManagement" Assembly="DotNetNuke.Web.Client" %>

<dnn:Meta runat="server" Name="viewport" Content="width=device-width,initial-scale=1" />
<dnn:DnnJsInclude runat="server" FilePath="assets/js/main.min.js" PathNameAlias="SkinPath" />
<!-- Fav and touch icons -->
<link rel="apple-touch-icon" sizes="144x144" href="<%=SkinPath%>assets/img/icons/apple-touch-icon-144-precomposed.png">
<link rel="apple-touch-icon" sizes="114x114" href="<%=SkinPath%>assets/img/icons/apple-touch-icon-114-precomposed.png">
<link rel="apple-touch-icon" sizes="72x72" href="<%=SkinPath%>assets/img/icons/apple-touch-icon-72-precomposed.png">
<link rel="apple-touch-icon" href="<%=SkinPath%>assets/img/icons/apple-touch-icon-57-precomposed.png">
<link rel="shortcut icon" href="<%=SkinPath%>assets/img/icons/favicon.png">

<%-- // Useful SkinObjects
<dnn:LOGIN ID="mobileLoginBtn" CssClass="button" runat="server" LegacyMode="true" />
<dnn:USER ID="dnnUser" runat="server" LegacyMode="false" />
<dnn:LOGIN ID="dnnLogin" CssClass="LoginLink" runat="server" LegacyMode="false" />
<dnn:LOGO ID="dnnLogo" runat="server" />
<dnn:MENU ID="menuTop" MenuStyle="ddrMenu" runat="server" />
<div class="breadcrumbDiv clearfix">
<dnn:BREADCRUMB runat="server" id="dnnBreadcrumb" RootLevel="-1" Separator="" CssClass="breadCrumb" />
<dnn:COPYRIGHT runat="server" id="dnnCOPYRIGHT" CssClass="copyrightCopy" />
--%>


<div class="row">
	<div id="ContentPane" runat="server" class="small-10 small-centered columns">
		<%--<h1>LRS Web Solutions</h1>
		<h2>WS Starter</h2>
		<p>Starter solution for all front-end development.</p>--%>
	</div>
</div>