angular.module('myApp', [])
    .controller('mainCtrl', function ($scope, $log) {
        $scope.startIndx = 0;
        $scope.endIndx = 3;
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
                text: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising"}
        ];
        $scope.itemsWorkVisible = $scope.itemsWork.slice($scope.startIndx, 4);
        $log.log("$scope.itemsWorkVisible = ", $scope.itemsWorkVisible)


        $scope.clickRight = function () {
            $log.log("clickRight $scope.startIndx = ", $scope.startIndx)
//            var indx = 0;
//            for(var i = $scope.endIndx; i < ($scope.endIndx + 4); i++){
//                if($scope.itemsWork[i]){
//                    indx = i + 1;
//                }
//                $log.log("indx = ", indx)
//            }
//            $scope.startIndx += indx;
//            $scope.endIndx += indx;
//            $log.log("clickRight $scope.startIndx = ", $scope.startIndx)
//            $scope.itemsWorkVisible = $scope.itemsWork.slice($scope.startIndx, $scope.startIndx + 4);
        };
        $scope.clickLeft = function () {
            $log.log("clickLeft $scope.startIndx = ", $scope.startIndx)
//            var indx = 0;
//            for(var i = ($scope.startIndx - 4); i < $scope.startIndx; i++){
//                if($scope.itemsWork[i]){
//                    indx = i - 1;
//                }
//                $log.log("indx = ", indx)
//            }
//            $scope.startIndx -= indx;
//            $scope.itemsWorkVisible = $scope.itemsWork.slice($scope.startIndx, $scope.startIndx - 4);
        };
    });



