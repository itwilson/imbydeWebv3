var imbydeApp = angular.module('imbydeApp', ['ngRoute'])

.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl:'views/home.html'
    })
    .when('/ethos', {
      templateUrl:'views/ethos.html'
    })
    .when('/process', {
      templateUrl:'views/process.html'
    })
    .when('/skills', {
      templateUrl:'views/skills.html'
    })
    .when('/portfolio', {
      templateUrl:'views/portfolio.html'
    })
    .when('/resume', {
      templateUrl:'views/resume.html'
    })
    .when('/contact', {
      templateUrl:'views/contact.html'
    })
    .when('/meta', {
      templateUrl:'views/meta.html',
      controller: 'metaController'
  })
});
