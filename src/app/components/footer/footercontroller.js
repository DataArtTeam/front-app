'user strict';

function FooterCtrl($scope) {
    var date = new Date();
    $scope.year = date.getFullYear();
}

angular.module('puzzle')
    .controller('FooterCtrl', FooterCtrl);