angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('main', {
    url: '/page1',
    templateUrl: 'templates/main.html',
    controller: 'mainCtrl'
  })

  .state('contact', {
    url: '/page2',
    templateUrl: 'templates/contact.html',
    controller: 'contactCtrl'
  })

  .state('contact2', {
    url: '/page3',
    templateUrl: 'templates/contact2.html',
    controller: 'contact2Ctrl'
  })

  .state('contact3', {
    url: '/page4',
    templateUrl: 'templates/contact3.html',
    controller: 'contact3Ctrl'
  })

  .state('delete', {
    url: '/page5',
    templateUrl: 'templates/delete.html',
    controller: 'deleteCtrl'
  })

  .state('add', {
    url: '/page6',
    templateUrl: 'templates/add.html',
    controller: 'addCtrl'
  })

  .state('edit', {
    url: '/page7',
    templateUrl: 'templates/edit.html',
    controller: 'editCtrl'
  })

$urlRouterProvider.otherwise('/page1')


});