<!DOCTYPE html>
<html lang="en" ng-app="portfolioApp">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Skills - Leander Chris Dsouza</title>
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600;800&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="../frontend/css/style.css">
</head>

<body ng-controller="SkillsController">
<nav class="navbar" role="navigation" aria-label="Main navigation">
    <a href="../index.php">Home</a>
    <a href="skills.php">Skills</a>
	<a href="experience.php">Experience</a>
    <a href="projects.php">Projects</a>
    <a href="certifications.php">Certifications</a>
    <a href="contact.php">Contact</a>
    <div id="google_translate_element" style="float: right; padding: 10px;"></div>
  </nav>

  <br><br><br><br><br><br><br><br><br><br>
  <div class="main-content">
    <div class="container">
      <h4>Skills</h4>
      <ul style="text-align:left;" ng-repeat="group in skills">
	  <br>
        <li ng-repeat="skill in group">{{ skill }}</li>
      </ul>
    </div>
  </div>
  <script src="https://unpkg.com/angular@1.8.3/angular.min.js"></script>
  <script src="../frontend/js/skills.js"></script>
  <!-- Google Translate -->
  <script type="text/javascript">
    function googleTranslateElementInit() {
      new google.translate.TranslateElement({
        pageLanguage: 'en',
        layout: google.translate.TranslateElement.InlineLayout.HORIZONTAL
      }, 'google_translate_element');
    }
  </script>
  <script type="text/javascript" src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"></script>
</body>

</html>

