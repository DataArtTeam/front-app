'use strict';

function MainCtrl($scope) {

    var date = new Date();
    $scope.year = date.getFullYear();

}
angular.module('puzzle')
    .controller('MainCtrl', MainCtrl);
