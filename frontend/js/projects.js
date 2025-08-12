var app = angular.module('portfolioApp', []);

app.controller('ProjectsController', function($scope) {
  $scope.projects = [
    {
      title: "Safar 2.0: Insights on Public Transport using Data Driven Web Analytics:",
      description: "Built a web platform to collect and visualize public transport feedback, combining full-stack development with data-driven insights."
    },
    {
      title: "Safar 1.0: Public Transport Website Development:",
      description: "Led a team to build a website aimed at improving public transport in Goa, optimizing booking and ticketing for better user experience."
    },
    {
      title: "Data Visualization using Python:",
      description: "Developed a bar chart and histogram to visualize the distribution of a categorical and continuous variable, such as age and gender distribution in a population and used Python Libraries for data manipulation and visualization."
    },
    {
      title: "Exploratory Data Analysis (EDA) on Titanic Dataset:",
      description: "Performed data cleaning and EDA using Kaggle to analyze survival patterns based on gender, class, and other variables."
    }
  ];
});
