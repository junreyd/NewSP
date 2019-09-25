(function () {
    'use strict';

    newSp.factory('svc', ['$http', '$q', function ($http, $q) {
        var _siteUrl = window.location.protocol + "//" + window.location.host + _spPageContextInfo.siteServerRelativeUrl;
        var _subSiteUrl = _spPageContextInfo.webAbsoluteUrl;
        var _webUrl = _spPageContextInfo.webServerRelativeUrl;
        var _getConfig = {
            headers: {'accept': 'application/json;odata=verbose'}
        }

        function _getSPItems(endpoint) {
            return $http.get(endpoint, _getConfig).then(function (d) {
                return d.data.d.results;
            });
        }

        return {
            getSiteUrl: function() {
                return _siteUrl;
            },
            getTemplateUrl: function (templateName) {
                return `${_siteUrl}style library/newsp/app/templates/${templateName}`;
            },
            getImagesDirUrl: function () {
                return `${_siteUrl}style library/newsp/design/images/`;
            },
            getJobCategories: function () {
                var url = `${_subSiteUrl}/_api/web/lists/getbyTitle('JobCategories')/items`;
                return _getSPItems(url).then(function (d) {
                    return d;
                });
            }
        }

    }]); //end of svc func
})(); //end of main func
