(function () {
	'use strict';

	angular
		.module('callDist')
		.controller('MainController', MainController);

	/** @ngInject */
	function MainController($scope, $location,anchorSmoothScroll, $http, $firebaseObject, $log) {
		var vm = this;
		vm.phone = '';
		var answerer = {
				"availabilitity": false,
				"phoneNumber": vm.phone
		}

		vm.gotoElement = function (eID) {
			$location.hash('signup');
			anchorSmoothScroll.scrollTo(eID);
		};

		vm.submitNumber = function () {
			$http({
				method: 'POST',
				url: 'https://call-distributor-dev.firebaseio.com/answerers.json',
				data: answerer
			}).then(function successCallback(response) {
				$log.debug(response);
			}, function errorCallback(response) {
				$log.debug(response);
			});

		}


	}
})();
