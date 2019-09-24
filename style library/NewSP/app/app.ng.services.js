(function () {
    'use strict';

    newSp.factory('svc', ['$http', '$q', function ($http, $q) {
        var _siteUrl = window.location.protocol + "//" + window.location.host + _spPageContextInfo.siteServerRelativeUrl;

        return {
            getSiteUrl: function(){
                return _siteUrl;
            },
            getTemplateUrl: function (templateName) {
                return `${_siteUrl}/style library/newsp/app/templates/${templateName}`;
            }
        }

    }]); //end of svc func
})(); //end of main func
