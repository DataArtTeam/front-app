'use strict';

function HeaderCtrl($scope) {
    $scope.date = new Date();
}

angular.module('puzzle')
    .controller('HeaderCtrl', HeaderCtrl);