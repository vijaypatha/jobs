angular
.module("jobapp")
.controller("jobCtrl",function($scope,,$sce,linkedinService,dataService){
  $scope.test = "working";

  $scope.getDataFromService = function(){
      dataService.getDataFromServer().then(function(dataFromReponse){
        console.log(dataFromReponse);
      $scope.displayView = dataFromReponse.map(function(item){
        return $sce.trustAsResourceUrl(item);
      })
      console.log($scope.displayView);
      // console.log($scope.displayView.$$unwrapTrustedValue());
    });
  };
  $scope.getDataFromService();

});//puppiesCtrl END
