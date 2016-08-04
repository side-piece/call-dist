(function () {
	'use strict';

	angular
		.module('callDist')
		.controller('MainController', MainController);

	/** @ngInject */
	function MainController($scope, $location,anchorSmoothScroll, $http, $firebaseObject, $log) {
		var vm = this;
		vm.phone = '';

		//not using this right now but may in the future
		//it auto scrolls the page to an element with an ID
		vm.gotoElement = function (eID) {
			$location.hash('signup');
			anchorSmoothScroll.scrollTo(eID);
		};

		vm.submitNumber = function () {
			//remove the -'s and ()'s
			var phone = vm.phone.replace(/[^+\d]+/g, "");
			var answerer = {
					"availabilitity": false,
					"phoneNumber": 1+phone
			}

			$log.debug('posting this: ', answerer);

			$http({
				method: 'POST',
				url: 'https://call-distributor-dev.firebaseio.com/answerers.json',
				data: answerer
			}).then(function successCallback(response) {
				$log.debug(response.data);
				alert("Phone number saved!!");

			}, function errorCallback(response) {
				$log.error(response);
			});

		}


	}
})();
