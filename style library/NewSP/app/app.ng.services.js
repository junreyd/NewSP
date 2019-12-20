(function () {
    'use strict';

    newSp.factory('svc', ['$http', '$q', function ($http, $q) {
        var _siteUrl = window.location.protocol + "//" + window.location.host + _spPageContextInfo.siteServerRelativeUrl;
        var _subSiteUrl = _spPageContextInfo.webAbsoluteUrl; //
        var _webUrl = _spPageContextInfo.webServerRelativeUrl; // '/sp'
        var userID = _spPageContextInfo.userId; //artem userID 184
        var _getConfig = {
            headers: { 'accept': 'application/json;odata=verbose' }
        }

        function _getSPItems(endpoint) {
            return $http.get(endpoint, _getConfig).then(function (d) {
                return d.data.d.results;
            });
        }

        function _getSPUser(endpoint) {
            return $http.get(endpoint, _getConfig).then(function (d) {
                return d.data.d.Title;
            });
        }

        return {
            getSiteUrl: function () {
                return _siteUrl;
            },
            getTemplateUrl: function (templateName) {
                return `${_siteUrl}style library/newsp/app/templates/${templateName}`;
            },
            getImagesDirUrl: function () {
                return `${_siteUrl}style library/newsp/design/images/`;
            },
            getJobCategories: function () {
                var url = `${_subSiteUrl}/_api/web/lists/getbytitle('JobCategories')/items`;
                return _getSPItems(url).then(function (d) {
                    return d;
                });
            },
            getCurrentUser: function () {
                var url = `${_siteUrl}/_api/web/getuserbyid(${userID})`;
                return _getSPUser(url).then(function (d) {
                    return d;
                });
            },
            getUserProfile: function () {
                var url = `${_siteUrl}/_api/web/lists/getbytitle('Employee Profile')/items?$filter=LI_Username eq 'junreyd'`;
                return _getSPItems(url).then(function (d) {

                    var imgUrl = "";

                    d.forEach(function (item) {
                        imgUrl = item.profilepic.Url;
                    });

                    return imgUrl;
                });
            }
        }

    }]); //end of svc func
})(); //end of main func
