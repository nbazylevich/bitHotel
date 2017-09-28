angular.module('myApp', [])
    .controller('mainCtrl', function ($scope, $log) {
        $scope.startIndx = 0;
        $scope.endIndx = 4;
        $scope.itemsWork = [
            {indx: "01", date: "06 Сентября, 2017",
                text: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising"},
            {indx: "02", date: "06 Сентября, 2017",
                text: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising"},
            {indx: "03", date: "06 Сентября, 2017",
                text: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising"},
            {indx: "04", date: "06 Сентября, 2017",
                text: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising"},
            {indx: "05", date: "06 Сентября, 2017",
                text: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising"},
            {indx: "06", date: "06 Сентября, 2017",
                text: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising"},
            {indx: "07", date: "06 Сентября, 2017",
                text: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising"},
            {indx: "08", date: "06 Сентября, 2017",
                text: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising"},
            {indx: "09", date: "06 Сентября, 2017",
                text: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising"},
            {indx: "10", date: "06 Сентября, 2017",
                text: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising"},
            {indx: "11", date: "06 Сентября, 2017",
                text: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising"},
            {indx: "12", date: "06 Сентября, 2017",
                text: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising"}
        ];
        $scope.itemsWorkVisible = $scope.itemsWork.slice($scope.startIndx, 4);

        $scope.clickRight = function () {
            $scope.startIndx += 4;
            $scope.endIndx += 4;
            $scope.itemsWorkVisible = $scope.itemsWork.slice($scope.startIndx, $scope.endIndx);
        };
        $scope.clickLeft = function () {
            $scope.startIndx -= 4;
            $scope.endIndx -= 4;
            $scope.itemsWorkVisible = $scope.itemsWork.slice($scope.startIndx, $scope.endIndx);
        };
    });



