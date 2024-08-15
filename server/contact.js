Meteor.startup(function () {
  var email = encodeURIComponent("worthymailer@gmail.com");
  var password = encodeURIComponent("ZXjcHH{x4pm9kR");
  process.env.MAIL_URL = 'smtp://'+email+':'+password+'@smtp.gmail.com:465';
});

Meteor.methods({
  sendEmail: function(data) {
    check(data, Schema.contact);

    var text = "A message was sent to you via your website contact form. Details are as follows:\n\n\n"+
    "Sender: " + data.name + "\n\n"
    + "Email: " + data.email + "\n\n\n"
    + "Phone: " + data.phone + "\n\n\n"
    + data.message;

    this.unblock();

    Email.send({
      to: Meteor.settings.contact.email,
      from: data.email,
      subject: "Priority Movers Web Form Message From " + data.name,
      text: text
    });
  }
});