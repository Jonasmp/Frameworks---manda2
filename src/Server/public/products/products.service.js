(function(){
	"use strict";

	var productsService = function($http, $rootScope){

		var getProducts = function(){
			return $http.get("/api/products")
				.then(function(response){
					return response.data;
				}, getError)

		}

		var getProduct = function(id){
			return $http.get("/api/products")
						.then(function(response){
							return findProductInArray(response.data, id);
						}, getError)
		}

		var createProduct = function(product){
			$http.post("/api/product/",{
				'id': product.id,
				'name': product.name,
				'price': product.price,
				'category': product.category,
				'img': product.img
			})
			.success(function(){
				console.log('AWESOME');
			});


						
		}

		var updateProduct = function(id, product){
			$http.put("/api/product/" + id, {
				'id': product.id,
				'name': product.name,
				'price': product.price,
				'category': product.category,
				'img': product.img
			})
			.success(function(){
				console.log('AWESOME');
			});
		}

		var findProductInArray = function(data, id){
			return data.filter(function(element){
				if(element.id === id){
					return element;
				}
			})
		}
			
		var getCategories = function(){
			return $http.get("data/categories.json")
				.then(function(response){
					return response.data;
				}, getError)
		}

		var getError = function(reason) {
			$rootScope.error = "Something went wrong with the data!";
		}

		return {
			getProducts:getProducts,
			getCategories:getCategories,
			getProduct:getProduct,
			createProduct: createProduct,
			updateProduct: updateProduct
		}

	}

	angular
		.module("Main")
		.factory("productsService", productsService);
}());