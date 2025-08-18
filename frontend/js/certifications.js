var app = angular.module('portfolioApp', []);

app.controller('CertificationsController', function($scope) {
  $scope.certifications = [
    {
      title: "Cloud & Data Foundations",
      description: "AWS S3 Basics, Data Science"
    },
    {
      title: "Business Analysis & Communication Skills",
      description: "Information Presentation, Survey Creation and Analysis with Survey Monkey, Business Analysis & Process Management"
    },
    {
      title: "Excel for Project & Financial Management",
      description: "Project Management Tracker, Budget Creation, Financial Statement Creation"
    },
    {
      title: "Artificial Intelligence",
      description: "Be10x AI Tools Workshop"
    }
  ];
});
