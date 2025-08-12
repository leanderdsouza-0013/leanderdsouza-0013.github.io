var app = angular.module('portfolioApp', []);

app.controller('SkillsController', function($scope) {
  $scope.skills = [
    ["Productivity Tools: Microsoft Excel"],
    ["Programming & Data Handling Tools: Python, MySQL, Java"],
    ["Full Stack Web Development: HTML, CSS, JavaScript, Bootstrap, PHP, Chart.js, AngularJs, Web Hosting"],
    ["Analytical Skills: Exploratory Data Analysis (EDA), Data Pre-processing, Data Visualization"],
	["Survey & Research Skills: Market Research, Survey Design"]
  ];
});
