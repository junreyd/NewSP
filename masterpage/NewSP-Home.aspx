<%-- The following 5 lines are ASP.NET directives needed when using SharePoint components --%>
<%@ Page language="C#"   Inherits="Microsoft.SharePoint.Publishing.PublishingLayoutPage,Microsoft.SharePoint.Publishing,Version=15.0.0.0,Culture=neutral,PublicKeyToken=71e9bce111e9429c" %>

<%@ Register Tagprefix="SharePointWebControls" Namespace="Microsoft.SharePoint.WebControls" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %> 

<%@ Register Tagprefix="WebPartPages" Namespace="Microsoft.SharePoint.WebPartPages" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %> 

<%@ Register Tagprefix="PublishingWebControls" Namespace="Microsoft.SharePoint.Publishing.WebControls" Assembly="Microsoft.SharePoint.Publishing, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %> 

<%@ Register Tagprefix="PublishingNavigation" Namespace="Microsoft.SharePoint.Publishing.Navigation" Assembly="Microsoft.SharePoint.Publishing, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>

<%-- The markup and script in the following Content element 
will be placed in the <head> of the page --%>

<asp:Content ContentPlaceholderID="PlaceHolderMain" runat="server">
    <link rel="stylesheet" href="/Style Library/NewSP/design/newSp.css">
	<link rel="stylesheet" href="/Style Library/NewSP/design/adminLTE/AdminLTE.min.css">
	<link rel="stylesheet" href="/Style Library/NewSP/design/adminLTE/skins/_all-skins.min.css">
	<style>
	app { display: block }
	</style>
	<!--[if lt IE 9]>
		<script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
		<script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
	<![endif]-->

    <div class="hold-transition skin-blue sidebar-mini">
	<div class="wrapper">
        <new-sp-top-nav></new-sp-top-nav>
        <new-sp-side-bar></new-sp-side-bar>
        <new-sp-main-footer></new-sp-main-footer>
        <new-sp-ctrl-sidebar></new-sp-ctrl-sidebar>
	</div>
    </div>
    <script src="/Style Library/NewSP/design/adminLTE/adminlte.min.js"></script>
</asp:Content>
