
//All of this firebase stuff should be abstracted in a service/factory
//TODO dont hardcode this sensitive data anywhere and especially not in the middle of the friggin' controller'
var config = {
	apiKey: "AIzaSyANdTshfeci78-VI-m-NaGHu4BWMIMSn0U",
	authDomain: "call-distributor-dev.firebaseapp.com",
	databaseURL: "https://call-distributor-dev.firebaseio.com",
	storageBucket: "call-distributor-dev.appspot.com",
};
firebase.initializeApp(config, "call-dist");
var tasksRef = firebase.database().ref().child("queue").child("tasks");
var newNumberSvc = new AlphaQueue(tasksRef, ["new_answerer"]); //This specifically should be injected and/or wrapped


(function () {
	'use strict';

	angular
		.module('callDist')
		.controller('MainController', MainController);

	/** @ngInject */
	function MainController($scope, $location, anchorSmoothScroll, $firebase, $log) {
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
				phoneNumber: 1 + phone,
			}

			$log.debug('posting this: ', answerer);

			//TODO accesss the queue with an injectable service instead of this garbage
			newNumberSvc.new_answerer(answerer).then(function (data) {
				$log.debug(data);
				alert("Phone number saved!!");
			}, function (error) {
				$log.error(error);
				alert("Error: " + error.error);
			})
		}


	}
})();
