'use strict';

function PageCtrl($scope) {
    $scope.test = "Hello world";
}

angular.module('puzzle')
    .controller('PageCtrl', PageCtrl);