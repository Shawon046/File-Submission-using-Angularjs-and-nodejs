var myApp = angular.module('uploadApp', []);

myApp.controller('uploadCtrl', function($scope) {
    const validFormats = ['txt','doc','png'];
    $scope.setFile = function(element) {
        $scope.$apply(function($scope) {
            $scope.theFile = element.files[0];
            $scope.FileMessage = '';
            var filename = $scope.theFile.name;
            console.log(filename.length)
            var index = filename.lastIndexOf(".");
            var file_extension = filename.substring(index, filename.length);
            if (validFormats.indexOf(file_extension) == -1)
            {
                console.log('File Uploaded sucessfully');
            }
            else {
                $scope.theFile = '';
                    $scope.FileMessage = 'please upload correct File Name, File extension should be in fixed format';
            }

        });
    };
});


