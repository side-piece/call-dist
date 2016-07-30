(function () {
	'use strict';

	angular
		.module('callDist')
		.controller('MainController', MainController);

	/** @ngInject */
	function MainController($location, anchorSmoothScroll, $http) {
		var vm = this;
		vm.phone = ""

		vm.gotoElement = function (eID) {
			console.log(eID);
			console.log("trying to go to signup");
			$location.hash('signup');
			anchorSmoothScroll.scrollTo(eID);
		};

		vm.submitNumber = function (num) {
			console.log("posting this number to our DB birches", vm.phone, num);
			$http({
				method: 'POST',
				url: '/someUrl'
			}).then(function successCallback(response) {
				console.log(response);
			}, function errorCallback(response) {
				console.error("Turns out we need a endpoint to actually post this number to",response);
			});

		}


	}
})();
