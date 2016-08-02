(function () {
	'use strict';

	angular
		.module('callDist')
		.controller('MainController', MainController);

	/** @ngInject */
	function MainController($scope, $location, anchorSmoothScroll, $firebaseObject, $log) {
		var vm = this;
		vm.phone = ""

		firebase.auth().onAuthStateChanged(function (user) {
			console.log('This is the user',user);
			if (user) {
				// User is signed in.
				var isAnonymous = user.isAnonymous;
				var uid = user.uid;
				// ...
			} else {
				console.log('user is signed out ');
				// User is signed out.
				// ...
			}
			// ...
		});

		firebase.auth().signInAnonymously().catch(function (error) {
			// Handle Errors here.
			var errorCode = error.code;
			console.log(errorCode);
			var errorMessage = error.message;
			console.log(errorMessage);
			// ...
		});

		var ref = new Firebase("https://call-distributor-dev.firebaseio.com/");
		$scope.firebase = $firebaseObject(ref);

		console.log('PHONZZZZZ', $scope.firebase);


		//
		// // download the data into a local object
		// $scope.data = $firebaseObject(ref);

		vm.gotoElement = function (eID) {
			$location.hash('signup');
			anchorSmoothScroll.scrollTo(eID);
		};

		vm.submitNumber = function () {

			$log.debug("posting this number to our DB birches", vm.phone);
			$scope.firebase.phonenumbers = vm.phone;
			$scope.firebase.$save().then(function (ref) {
				console.log('phone numz saved');
				console.log(ref);
			}, function (error) {
				$log.error("Error:", error);
			});


		}


	}
})();
