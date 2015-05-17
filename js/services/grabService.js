imbydeApp.factory('grabService', ['$http', function($http) { 
  return $http.get('https://api.mongolab.com/api/1/databases/iandb/collections/portfolioMGMT?apiKey=CbWV2PKhXEeRKdvyWfSp1u92s7pC5au9') 
            .success(function(data) { 
              return data; 
            }) 
            .error(function(err) { 
              return err; 
            }); 
}]);
