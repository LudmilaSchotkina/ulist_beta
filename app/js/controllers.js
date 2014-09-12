var ulistAppControllers = angular.module('ulistAppControllers', []);

ulistAppControllers.controller('UniversitiesCtrl', ['$scope', '$http',
  function($scope, $http) {
    $http.get('api/universities/universities.json').success( function(data) {

      $scope.universities = data;
    });
  }
]);

ulistAppControllers.controller('UniversityShowCtrl', ['$scope', '$routeParams', 'University',
	function($scope, $routeParams, University) {
		University.get({universityId: $routeParams.universityId}, function(data) {

      		$scope.university = data;
		});
	}
]);

/*
ulistAppControllers.controller('QuestionsNewCtrl', ['$scope', '$location', 'Question', 'usSpinnerService',
  function($scope, $location, Question, usSpinnerService) {
    $scope.submit = function(title, body) {
      usSpinnerService.spin('send-spinner');
      Question.save({title: $scope.title, body: $scope.body}, function(data) {
        $location.path('/questions/' + data.id);
        usSpinnerService.stop('send-spinner');
      },
      function(error) {
        $scope.error = error.status + ' ' + error.statusText;
        usSpinnerService.stop('send-spinner');
      });
    };
  }
]);
*/

ulistAppControllers.controller('QuestionsCtrl', ['$scope', '$http',
  function($scope, $http) {
    $http.get('api/questions/questions.json').success( function(data) {

      $scope.questions = data;
    });
  }
]);

ulistAppControllers.controller('QuestionsNewCtrl', ['$scope', '$http',
  function($scope, $http) {
    $http.get('api/questions/new.json').success( function(data) {

      $scope.question = data;
    });
  }
]);

ulistAppControllers.controller('QuestionsShowCtrl', ['$scope', '$routeParams', '$location', 'Question',
  function($scope, $routeParams, $location, Question) {
    Question.get({questionId: $routeParams.questionId}, function(data) {

      $scope.question = data;
    })
  }
]);

ulistAppControllers.controller('PostsCtrl', function($scope, $http) {
    $http.get('api/posts/posts.json').success( function(data) {
      $scope.posts = data;
      $scope.sortField = 'date';
      $scope.reverse = false;

      $scope.sortby = function(fieldName) {
        if($scope.sortField === fieldName){
          $scope.reverse = !$scope.reverse;
        } else {
          $scope.sortField = fieldName;
          $scope.reverse = false;
        }       
      };

      $scope.postPath = function (postId) {
        return "#/posts/" + postId.toString();
      }
    })

  }
);



ulistAppControllers.controller('PostsNewCtrl', ['$scope', '$http',
  function($scope, $http) {
    $http.get('api/posts/new.json').success( function(data) {

      $scope.post = data;
    });
  }
]);

ulistAppControllers.controller('MainController', function($location, $scope) {
  $scope.enter_main = function() {
    $location.path('home');
  };

  $scope.log_main = function() {
    $location.path('login');
  };
});

ulistAppControllers.controller('PostsShowCtrl', ['$scope', '$routeParams', '$location', 'Post',
  function($scope, $routeParams, $location, Post) {
    Post.get({postId: $routeParams.postId}, function(data) {

      $scope.post = data;
      $scope.discussionPath = $location.absUrl();

      $scope.postPath = function (postId) {
        return $scope.discussionPath + "#" + postId.toString();
      }

    });
  }
]);

/*
ulistAppControllers.controller('PostsShowCtrl', ['$scope', '$routeParams', '$location', 'Post',
  function($scope, $routeParams, $location, Post) {
    Post.get({postId: $routeParams.postId}, function(data) {
    	alert("QQQ");
      $scope.post = data;
      $scope.discussionPath = $location.absUrl();

      $scope.postPath = function (postId) {
        return $scope.discussionPath + "#" + postId.toString();
      }

    
      $scope.postPath = function (postId) {
        return "#/posts/" + postId.toString();
      }
    
     });
  }
]);
*/

///////////////////////////////////////////
/*
ulistAppControllers.controller('MainController', function($location, $scope) {
  $scope.enter_main = function() {
    $location.path('home');
  };

  $scope.log_main = function() {
    $location.path('login');
  };
});
*/