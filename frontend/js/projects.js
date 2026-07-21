var app = angular.module('portfolioApp', []);

app.controller('ProjectsController', function($scope) {
  $scope.projects = [
    {
      title: "Crowd Estimation and Time Slot Recommendation for Mangalore KSRTC Bus Services:",
      description: "Developed a transport analytics solution to estimate crowd intensity and recommend optimal travel time slots for Mangalore KSRTC bus services using demographic and timetable data."
    },
    {
      title: "Safar 2.0: Insights on Public Transport Using Data-Driven Web Analytics:",
      description: "Developed a full-stack web analytics platform to collect, analyze, and visualize public transport passenger feedback for data-driven service improvement."
    }
  ];
});
