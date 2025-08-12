var app = angular.module('portfolioApp', []);

app.controller('ContactController', function($scope) {
  $scope.contact = {
    email: "dslean13@gmail.com",
    phone: "+91 84213 27273",
    linkedin: "https://linkedin.com/in/leander-chris/",
    github: "https://github.com/leanderdsouza-0013"
  };
});
