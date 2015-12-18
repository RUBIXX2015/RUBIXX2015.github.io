angular.module('ParseServices', [])
.factory('ParseSDK', function() {

  // pro-tip: swap these keys out for PROD keys automatically on deploy using grunt-replace
  Parse.initialize("URmLhPy0JkjYYTsj8gb0ovzwgBZZyE5rdmAfzJn1", "kfgeDrMXnqNvFX0fxZeRJcWgkAq7oAlZO4GV1Pgc");

});
