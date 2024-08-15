AutoForm.hooks({
  confirmForm: {
    before: {
      method: function(doc){
        doc.moveDate = Session.get("moveDate");
        doc.moveTime = Session.get("time");
        doc.localMove = Session.get("localMove");
        doc.moveSize = Session.get("moveSize");
        doc.shouldUnload = Session.get("fullMove");
        doc.needTruck = Session.get("useTruck");
        doc.quotedPrice = Meteor.estimatedRate();
        this.result(doc);
      }
    },
    after: {
      method: function(error, result) {
        if (error){
          alert("We are sorry, but we were not able to process your request. Please call us instead.");
        }else{
          alert("Thank You! We will be in touch with you shortly.");
          $("#previous").click();
        }
      }
    }
  }
});
