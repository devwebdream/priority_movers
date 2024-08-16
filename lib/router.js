Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound'
});

function clearMetaTags() {
  $('meta[name="description"]').remove();
  $('meta[property="keyword"]').remove();
}


Router.route('/', {
  name: 'home',
  onAfterAction: function () {
    clearMetaTags();
    DocHead.setTitle('Priority Movers | Moving Company in Ottawa');
    DocHead.addMeta({
      name: "description", 
      content: "Moving isn't easy but Priority Movers, the best moving company in Ottawa is here to assist you! Hire us today for a smooth transition."
    });
    DocHead.addMeta({
      property: "keyword", 
      content: "priority movers, moving company ottawa"
    });
  }
});




Router.route('/services', {
  name: 'services',
  template: 'services' ,
  onAfterAction: function () {
    clearMetaTags()
    DocHead.setTitle('Long-Distance Moving Services in Ottawa | Priority Movers');
    DocHead.addMeta({
      name: "description", 
      content: "Safely move your pieces of furniture with Priority Movers. We offer reliable long-distance moving services in Ottawa. Check our complete list of services here!"
    });
    DocHead.addMeta({
      property: "keyword", 
      content: "moving services ottawa, long distance moving ottawa"
    });
  }
});

Router.route('/pricing', {
  name: 'pricing',
  template: 'pricing' ,
  onAfterAction: function () {
    clearMetaTags()
    DocHead.setTitle('Moving Truck Rental in Ottawa | Priority Movers');
    DocHead.addMeta({
      name: "description", 
      content: "Are you looking for trusted local movers in Ottawa? Then hire Priority Movers today! We provide affordable moving truck rentals and more. See our rates here!"
    });
    DocHead.addMeta({
      property: "keyword", 
      content: "ottawa moving truck rental, local movers ottawa"
    });
  }
});

Router.route('/contact', {
  name: 'contact',
  template: 'contact' ,
  onAfterAction: function () {
    clearMetaTags();
    DocHead.setTitle('Professional Movers in Ottawa | Contact Priority Movers');
    DocHead.addMeta({
      name: "description", 
      content: "Looking for professional movers in Ottawa? Then hire Priority Movers today! Contact us at (613) 878-8494 for reliable full-service moving!"
    });
    DocHead.addMeta({
      property: "keyword", 
      content: "professional movers ottawa, full service moving ottawa"
    });
  }
});