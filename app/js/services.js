var ulistAppServices = angular.module('ulistAppServices', ['ngResource']);

ulistAppServices.
	factory('University', function($resource) {
		return $resource('api/universities/:universityId.json', {}, {})
	}).
  factory('Question', function($resource) {
  	return $resource('api/questions/:questionId.json', {}, {})
  }).
  factory('Post', function($resource) {
    return $resource('api/posts/:postId.json', {}, {})
  });
