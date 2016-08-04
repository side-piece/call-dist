(function () {
	'use strict';

	angular
		.module('callDist')
		.controller('MainController', MainController);

	/** @ngInject */
	function MainController($scope, $location,anchorSmoothScroll, $http, $firebaseObject, $log) {
		var vm = this;
		vm.phone = '';


		vm.gotoElement = function (eID) {
			$location.hash('signup');
			anchorSmoothScroll.scrollTo(eID);
		};

		vm.submitNumber = function () {

			var answerer = {
					"availabilitity": false,
					"phoneNumber": vm.phone
			}
			$log.debug('posting this: ', answerer);
			$http({
				method: 'POST',
				url: 'https://call-distributor-dev.firebaseio.com/answerers.json',
				data: answerer
			}).then(function successCallback(response) {
				$log.debug(response.data);

			}, function errorCallback(response) {
				$log.debug(response);
			});

		}


	}
})();
