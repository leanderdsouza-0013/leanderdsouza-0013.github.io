var app = angular.module('portfolioApp', []);

app.controller('ExperienceController', function($scope) {
  $scope.experiences = [
    {
      title: "Data Science Intern – Prodigy InfoTech",
      duration: "1st July 2024 – 31st July 2024",
      description: "Gained hands-on experience in data loading, cleaning, and analysis using Python. Applied EDA and machine learning techniques to generate insights and improve model accuracy.",
	  pdf: "../frontend/images/cert.pdf"
    }
  ];
});
