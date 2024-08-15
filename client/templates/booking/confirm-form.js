Template.confirmForm.helpers({
  confirmFormSchema: function() {
    return Schema.booking;
  }
});

Template.confirmForm.events = ({
  'click #previous' : function(e){
    $("#confirm-panel").hide();
    $("#estimate-panel").show();
  }
});