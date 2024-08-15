Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound'
});

Router.route('/', {
  name: 'home',
  data: function() {
    return {
      title: 'Home Page',
      meta: {
        description: 'Welcome to our website'
      }
    };
  }
});
Router.route('/services', {
  name: 'services',
  template: 'services' 
});

Router.route('/pricing', {
  name: 'pricing',
  template: 'pricing' 
});

Router.route('/contact', {
  name: 'contact',
  template: 'contact' 
});
