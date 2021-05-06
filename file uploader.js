var myApp = angular.module('uploadApp', []);


// myApp.controller('uploadCtrl', ['$scope', 'fileUpload', function($scope, fileUpload) {
// $scope.uploadFile = function() {
    
//     var file = $scope.myFile;
//     console.log('file is ' );
//     console.dir(file);
//     var uploadUrl = "/fileUpload";
//     fileUpload.uploadFileToUrl(file, uploadUrl);  
//     };
// }]);


myApp.directive('validfile', function validFile() {
    var validFormats = ['txt', 'gif'];
    return {
        require: 'ngModel',
        link: function (scope, elem, attrs, ctrl) {
            ctrl.$validators.validFile = function() {
                elem.on('change', function () {
                   var value = elem.val(),
                       ext = value.substring(value.lastIndexOf('.') + 1).toLowerCase();   

                   return validFormats.indexOf(ext) !== -1;
                });
           };
        }
    };
});