import * as angular from 'angular';

module app {
    'use strict';

    interface IPopupScope extends angular.IScope {}

    class PopupController {
        static $inject = ['$scope'];
        private scope: IPopupScope;

        public title: string = 'GitHub Dark Theme';

        constructor($scope: IPopupScope) {
            this.scope = $scope;
        }
    }

    angular.module('app', []).controller('popupController', PopupController);
}
