Meteor.methods({
  createBooking: function(data) {
    check(data, Schema.booking);

    console.log("Created booking!: ",data);

    var moveSize = data.moveSize;
    switch (data.moveSize){
      case "studio":
        moveSize = "Studio Apartment";
        break;
      case "a1" :
        moveSize = "1 Bedroom Apartment";
        break;
      case "a2" :
        moveSize = "2 to 3 Bedroom Apartment";
        break;
      case "h2" :
        moveSize = "2 to 3 Bedroom House";
        break;
      default:
        moveSize = "4+ Bedroom House";
    }

    var text = "A new booking has been submitted via your website:\n\n\n"
    +"Customer Name: " + data.name + "\n\n"
    + "Email Address: " + data.email + "\n\n"
    + "Phone Number: " + data.phone + "\n\n"
    + "Origin Zip Code: " + data.from + "\n\n"
    + "Destination Zip Code: " + data.to + "\n\n\n"
    + "Move Date: " + data.moveDate + "\n\n"
    + "Move Time: " + data.moveTime + "\n\n"
    + "Move Scope: " + ( data.localMove ? "Within Ottawa" : "Long Distance" )+ "\n\n"
    + "Move Size: " + moveSize + "\n\n"
    + "Move Type: " + ( data.needTruck ? "Full Move" : "Labor Only" ) + "\n\n"
    + "Unload Required: " + ( data.shouldUnload ? "Yes" : "No") + "\n\n"
    + "Quoted Price: $" + data.quotedPrice + "\n\n\n"
    + "Other details: \n" + data.details;

    this.unblock();

    Email.send({
      to: Meteor.settings.contact.email,
      subject: "Priority Movers Web Booking by " + data.name,
      text: text
    });
  }
});
