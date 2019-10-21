Router.route('/', function() {
    this.render('Home');
});

Router.route('/eit', function() {
    this.render('eitList', { data: { title: 'EIT View' } });
});

Router.route('/create', function() {
  this.render('create')
})



/* Set Predefined Elements as Template for all routes like Header and Footer 
  optionally preceeding placing static {{header}} tags within the main.html file
  */
Router.configure({
    layoutTemplate: 'layout',
});

// goHome =function(){
//   if(Meteor.userId()){
//     Router.go('/');
//   }
// }

// Router.route('/register', {
//   template:'register',
//   onBeforeAction:function(){
//     goHome();
//     this.next();
//   }
// }); // Default name is register

// Router.route('/login', {
//   template:'login',
//   onBeforeAction:function(){
//     goHome();
//     this.next();
//   }
// });
