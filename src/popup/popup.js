(function() {
    angular.module('app', []).controller('PopupController', function() {
        var vm = this;
        vm.title = 'GitHub Dark Theme Setting';
        vm.content_scripts = chrome.runtime.getManifest().content_scripts[0];
    });
})();
