var app = angular.module('portfolioApp', []);

app.controller('SkillsController', function($scope) {
  $scope.skills = [
    ["Programming: Python"],
    ["Databases: SQL, MySQL"],
    ["Data Analysis: Microsoft Excel, Exploratory Data Analysis (EDA), Data Cleaning, Data Pre-processing, Pandas, NumPy"],
    ["Data Visualization: Tableau, Matplotlib"],
	["Analytical & Research Skills: Market Research, Survey Design"]
  ];
});
