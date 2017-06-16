(function () {

    var injectParams = [];

    var AboutController = function () {
  alert("Controller");
    };

    AboutController.$inject = injectParams;
    angular.module('customersApp').controller('AboutController', AboutController);

}());