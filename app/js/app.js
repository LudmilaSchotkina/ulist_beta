 var ulistApp = angular.module('ulistApp', [
	'ngRoute',
  'ulistAppControllers',
  'ulistAppServices'
]);

ulistApp.config(['$routeProvider',
	function($routeProvider) {
		$routeProvider.
		
		when('/universities', {
        templateUrl: 'partials/universities/index.html',
        controller: 'UniversitiesCtrl'}).

		when('/universities/:universityId', {
        templateUrl: 'partials/universities/show.html',
        controller: 'UniversityShowCtrl'}).


        when('/questions', {
    	templateUrl: 'partials/questions/index.html',
    	controller: 'QuestionsCtrl'}).

    	when('/questions/new', {
      	templateUrl: 'partials/questions/new.html',
      	controller: 'QuestionsNewCtrl'}).

    	when('/questions/:questionId', {
    	templateUrl: 'partials/questions/show.html',
    	controller: 'QuestionsShowCtrl'}).

      	when('/posts', {
        templateUrl: 'partials/posts/index.html',
        controller: 'PostsCtrl'}).

        when('/posts/new', {
      	templateUrl: 'partials/posts/new.html',
      	controller: 'PostsNewCtrl'}).

      	when('/posts/:postId', {
        templateUrl: 'partials/posts/show.html',
        controller: 'PostsShowCtrl'}).

        when('/main', {
        templateUrl: 'main.html',
        controller: 'MainController'}).
        
        otherwise({redirectTo:'main'});
}]);

ulistApp.controller('MainController', function($location, $scope) {
  $scope.enter_main = function() {
    $location.path('home');
  };

  $scope.log_main = function() {
    $location.path('login');
  };
});

ulistApp.factory('Post', function($resource) {
    return $resource('api/posts/:postId.json', {}, {})
  });

ulistApp.controller('PostsShowCtrl', ['$scope', '$routeParams', '$location', 'Post',
  function($scope, $routeParams, $location, Post) {
    Post.get({postId: $routeParams.postId}, function(data) {
      alert("QQQ");
      $scope.post = data;
      $scope.discussionPath = $location.absUrl();

      $scope.postPath = function (postId) {
        return $scope.discussionPath + "#" + postId.toString();
      }

    });
  }
]);
