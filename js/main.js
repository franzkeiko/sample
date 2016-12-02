/**
 * AngularJS Tutorial 1
 * @author Nick Kaye <nick.c.kaye@gmail.com>
 */

/**
 * Main AngularJS Web Application
 */
var app = angular.module('tutorialWebApp', [
  'ngRoute'
]);

/**
 * Configure the Routes
 */
app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    // Home
    .when("/", {templateUrl: "partials/home.html", controller: "PageCtrl"})
    // Pages
    .when("/mango", {templateUrl: "partials/mango.html", controller: "PageCtrl"})
    .when("/livecasino", {templateUrl: "partials/livecasino.html", controller: "PageCtrl"})
    .when("/casinoslot", {templateUrl: "partials/casinoslot.html", controller: "PageCtrl"})
    .when("/deposit", {templateUrl: "partials/deposit.html", controller: "PageCtrl"})
    .when("/withdraw", {templateUrl: "partials/withdraw.html", controller: "PageCtrl"})
    .when("/promotion", {templateUrl: "partials/promotion.html", controller: "PageCtrl"})

    .when("/mango", {templateUrl: "partials/mango.html", controller: "PageCtrl"})
    .when("/faq", {templateUrl: "partials/faq.html", controller: "PageCtrl"})
    .when("/contact", {templateUrl: "partials/contact.html", controller: "PageCtrl"})
    .when("/policy", {templateUrl: "partials/policy.html", controller: "PageCtrl"})

    // else 404
    .when("/error", {templateUrl: "partials/404.html", controller: "PageCtrl"});
}]);

/**
 * Controls the Blog
 */
app.controller('BlogCtrl', function (/* $scope, $location, $http */) {
  console.log("Blog Controller reporting for duty.");
});

/**
 * Controls all other Pages
 */
app.controller('PageCtrl', function (/* $scope, $location, $http */) {
  console.log("Page Controller reporting for duty.");

  // Activates the Carousel
  $('.carousel').carousel({
    interval: 5000
  });

  // Activates Tooltips for Social Links
  $('.tooltip-social').tooltip({
    selector: "a[data-toggle=tooltip]"
  })
});