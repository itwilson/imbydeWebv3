imbydeApp.factory('postService', ['$http', function($http) { 
  return $http.post('https://api.mongolab.com/api/1/databases/iandb/collections/portfolioMGMT?apiKey=CbWV2PKhXEeRKdvyWfSp1u92s7pC5au9', { id : 'test' }) 
            .success(function(data) { 
              return data; 
            }) 
            .error(function(err) { 
              return err; 
            }); 
}]);
