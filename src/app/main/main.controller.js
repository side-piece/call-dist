(function () {
	'use strict';

	angular
		.module('callDist')
		.controller('MainController', MainController);

	/** @ngInject */
	function MainController($location, anchorSmoothScroll, $http, $log) {
		var vm = this;
		vm.phone = ""

		vm.gotoElement = function (eID) {
			$location.hash('signup');
			anchorSmoothScroll.scrollTo(eID);
		};

		vm.submitNumber = function (num) {
			$log.debug("posting this number to our DB birches", vm.phone, num);
			$http({
				method: 'POST',
				url: '/someUrl'
			}).then(function successCallback(response) {
				$log.debug(response);
			}, function errorCallback(response) {
				$log.error("Turns out we need a endpoint to actually post this number to",response);
			});

		}


	}
})();
