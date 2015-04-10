(function(){
	"use strict";

		angular
		.module("Main.admin", [])
		.controller("adminController", adminController);


		function adminController ($scope, productsService, $routeParams){

			$scope.delete = function(id){
				productsService.deleteProduct(id);
			}

			$scope.find = function(id){
				console.log(id);
				productsService.getProduct(id).then(createProduct);
			}

			$scope.createProduct = function(product){
				console.log(product);
				var product = this.product;
				productsService.createProduct(product);
			}


			$scope.updateProduct = function(id){
				var product = this.product;
				productsService.updateProduct(íd, product);
			}

			var modelProducts = function(data){
				$scope.products = data;
			}

			var modelProduct = function(productArray){
				$scope.product = productArray[0];
			}

			productsService.getProducts()
			.then(modelProducts);

			productsService.getProduct($routeParams.id)
			.then(modelProduct);

		}



})();