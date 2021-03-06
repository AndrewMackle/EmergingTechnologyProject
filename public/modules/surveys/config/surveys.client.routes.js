'use strict';

//Setting up route
angular.module('surveys').config(['$stateProvider',
	function($stateProvider) {
		// Surveys state routing
		$stateProvider.
		state('choose-template-surveyclientview', {
			url: '/surveys/choose-survey-template',
			templateUrl: 'modules/surveys/views/choose-template-survey.client.view.html'
        }).
		state('multiple-choice-template', {
			url: '/multiple-choice-template',
			templateUrl: 'modules/surveys/views/multiple-choice-template.client.view.html'
		}).
        state('set-survey-lifetime', {
			url: '/setsurveylifetime',
			templateUrl: 'modules/surveys/views/set-survey-lifetime.client.view.html'
		}).
		state('listSurveys', {
			url: '/surveys',
			templateUrl: 'modules/surveys/views/list-surveys.client.view.html'
		}).
		state('viewSurvey', {
			url: '/surveys/:surveyId',
			templateUrl: 'modules/surveys/views/view-survey.client.view.html'
		}).
		state('editSurvey', {
			url: '/surveys/:surveyId/edit',
			templateUrl: 'modules/surveys/views/edit-survey.client.view.html'
		});
	}
]);