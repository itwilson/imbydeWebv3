imbydeApp.controller('metaController', ['$scope', 'grabService', 'postService', function($scope, grabService, postService) {
  grabService.success(function(data) {
    console.log(data);
  });
}]);


