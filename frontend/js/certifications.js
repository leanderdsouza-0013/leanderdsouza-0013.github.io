var app = angular.module('portfolioApp', []);

app.controller('CertificationsController', function($scope) {
  $scope.certifications = [
    {
      title: "Cloud & Data Foundations",
      description: "AWS S3 Basics, Data Science"
    },
    {
      title: "Business Analysis & Communication Skills",
      description: "Presenting Information, Use SurveyMonkey to Create a Survey and Analyze Results, Business Analysis & Process Management"
    },
    {
      title: "Excel for Project & Financial Management",
      description: "Create a Project Management Tracker using Microsoft Excel, Creating a Budget with Microsoft Excel, Create a Financial Statement using Microsoft Excel"
    },
    {
      title: "Artificial Intelligence",
      description: "Be10x AI Tools Workshop"
    }
  ];
});
