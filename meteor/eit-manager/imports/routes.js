Router.route('/', function () {
    this.render('Home');
  });
  
  Router.route('/eit', function () {
    this.render('eitList', {data: {title: "EIT View"}});
  });
  

  /* Set Predefined Elements as Template for all routes like Header and Footer 
  optionally preceeding placing static {{header}} tags within the main.html file
  */
 Router.configure({
  layoutTemplate: 'layout'
});
