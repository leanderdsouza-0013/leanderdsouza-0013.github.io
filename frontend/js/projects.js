var app = angular.module('portfolioApp', []);

app.controller('ProjectsController', function($scope) {
  $scope.projects = [
    {
      title: "Monthly Users Staff Bus Ratings – A Data Analysis Project:",
      description: "Performed data visualization with AI and data analysis tools to evaluate feedback on a 20-seater staff bus service with 10+ records to understand satisfaction levels, service reliability and willingness to recommend the service under the banner of Safar using Microsoft Excel, Python and JuliusAI."
    },
    {
      title: "StyleSwitch by Safar:",
      description: "Built a single page application with a focus on frontend development to explore, customize and visualize CSS outfit combinations instantly to mix, match and preview styles in real time using HTML, CSS, JavaScript (JS) and AngularJS."
    },
    {
      title: "Gridify by Safar:",
      description: "Built a frontend web based interactive CSS grid visualizer as a single page application to design and preview grid layouts in real time, making it an EdTech tool to learn, experiment and create responsive grid designs without writing CSS codes manually using HTML, CSS, JavaScript (JS) and AngularJS."
    },
    {
      title: "Safar 2.0: Insights on Public Transport using Data Driven Web Analytics:",
      description: "Built a web platform to collect and visualize public transport feedback, combining full-stack development with data-driven insights using HTML, CSS, JavaScript (JS), Bootstrap, MySQL, PHP, Chart.js and Web Hosting through Infinity Free platform."
    },
    {
      title: "Safar 1.0: Public Transport Website Development:",
      description: "Led a team to build a website aimed at improving public transport in Goa, optimizing booking and ticketing for better user experience using HTML, CSS, JavaScript (JS), MERN (MongoDB, Express, React, Node) Stack and PHP."
    },
    {
      title: "Data Visualization using Python:",
      description: "Developed a bar chart and histogram to visualize the distribution of a categorical and continuous variable, such as age and gender of 200+ nations and used Python Libraries for data manipulation and visualization."
    },
    {
      title: "Exploratory Data Analysis (EDA) on Titanic Dataset:",
      description: "Performed data cleaning and EDA using Kaggle with 100+ records to analyze survival patterns based on gender, class, and other variables."
    }
  ];
});
