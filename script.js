var app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'home.html',
      controller: 'MainController'
    })
    .when('/cart', {
      templateUrl: 'cart.html',
      controller: 'CartController'
    })
});

app.controller('MainController', function($scope, $location) {
  
  $scope.cartItem=[{ p_name: "Check Black Shirt", p_price: "400", p_img: "images/product_5.jpeg" },
    { p_name: "Blue Shirt", p_price: "300", p_img: "images/product_6.jpeg" },];
  $scope.storeItems=function(item){
    $scope.cartItem.push(item);
  };
  
  
});

app.controller('CartController', function($scope,$location) {
  $scope.arr = [
    { p_name: "Brown Shirt", p_price: "200", p_img: "images/product_1.jpeg" },
    { p_name: "Check Shirt", p_price: "500", p_img: "images/product_2.jpeg" },
    { p_name: "Printed Shirt", p_price: "1000", p_img: "images/product_3.jpeg" },
    { p_name: "White Shirt", p_price: "600", p_img: "images/product_4.jpeg" },
    { p_name: "Check Black Shirt", p_price: "400", p_img: "images/product_5.jpeg" },
    { p_name: "Blue Shirt", p_price: "300", p_img: "images/product_6.jpeg" },
    { p_name: "MultiColor Shirt", p_price: "700", p_img: "images/product_7.jpeg" },
    { p_name: "Denim Shirt", p_price: "800", p_img: "images/product_8.jpeg" },
  ];
  
  $scope.search = "";
  $scope.message = "This is your cart page.";
  $scope.count = 0;

  $scope.counterFunction = function() {
    $scope.count++;
  };
  $scope.goToCart = function() {
    $location.path('/cart');
  };
  $scope.cartItem=[    { p_name: "Blue Shirt", p_price: "300", p_img: "images/product_6.jpeg" },
    { p_name: "MultiColor Shirt", p_price: "700", p_img: "images/product_7.jpeg" },];
  $scope.storeItems=function(item){
    $scope.cartItem.push(item);
  };
  console.log($scope.cartItem);
  
  
});
