angular
.module('myApp')
.service('dataService',function($http,$q){
  var baseUrl = 'https://api.linkedin.com/v1/companies/1337/updates?start=20&count=10&format=json';
  this.getDataFromServer = function(search){
    search = search ||"vijaypatha";
    var deferred = $q.defer();
    $http.get(baseUrl+'/search?part=snippet&key=AIzaSyAqZmMtSJor3zfR5fsXEylA0TEZt_0KmTw&q='+search)




    .then(function(response){
      var getDataFromServer = response.data.items;

      console.log(getDataFromServer);

      var myData = getDataFromServer.map(function(item){
        return ("http://www.youtube.com/embed/"+item.id.videoId);
      });

      deferred.resolve(myData);
    })
    return deferred.promise;

  };
});//youTubeService END
