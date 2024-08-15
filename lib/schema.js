Schema = {};
Schema.contact = new SimpleSchema({
  name: {
    type: String,
    label: 'Your name',
    max: 100
  },
  email: {
    type: String,
    regEx: SimpleSchema.RegEx.Email,
    label: "E-mail address"
  },
  phone: {
    type: String,
    label: "Phone number",
    max: 20,
    optional: true
  },
  message: {
    type: String,
    label: "Message",
    max: 2000
  }
});

Schema.booking = new SimpleSchema({
  name: {
    type: String,
    label: 'Full name',
    max: 100
  },
  phone: {
    type: String,
    label: "Phone number",
    max: 20
  },
  email: {
    type: String,
    label: "Email address",
    max: 100
  },
  from: {
    type: String,
    label: "From Zip",
    min: 5,
    max: 9
  },
  to: {
    type: String,
    label: "To Zip",
    min: 5,
    max: 9
  },
  details: {
    type: String,
    label: "Please enter any additional details",
    max: 2000,
    optional: true
  },
  moveDate: {
    type: String,
    optional: true
  },
  moveTime: {
    type: String,
    optional: true
  },
  localMove: {
    type: Boolean,
    optional: true
  },
  moveSize: {
    type: String,
    optional: true
  },
  shouldUnload: {
    type: Boolean,
    optional: true
  },
  needTruck: {
    type: Boolean,
    optional: true
  },
  quotedPrice: {
    type: Number,
    optional: true,
    decimal: true
  }
});
