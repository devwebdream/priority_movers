Template.booking.rendered = function () {
  $("#confirm-panel").hide();
};

Template.booking.helpers({
  movers: function () {
    return moversRequired();
  },
  hours: function () {
    return moveHoursRequired();
  },
  rate: function () {
    return baseRate();
  },
  extra: function () {
    return Session.get("localMove")
      ? ""
      : ". Please contact us to find out the cost of extra travel time";
  },
  isLocalMove: function () {
    return Session.get("localMove");
  },
  totalEstimate: function () {
    return Meteor.estimatedRate();
  },
});

var moversRequired = function () {
  switch (Session.get("size")) {
    case "small":
      return 2;
    case "medium":
      return 3;
    default:
      return 4;
  }
};

var moveHoursRequired = function () {
  switch (Session.get("size")) {
    case "small":
      return Session.get("fullMove") ? 3 : 2;
    case "medium":
      return Session.get("fullMove") ? 4 : 3;
    default:
      return Session.get("fullMove") ? 6 : 4;
  }
};

var baseRate = function () {
  switch (Session.get("size")) {
    case "small":
      return Session.get("useTruck") ? 180 : 140;
    case "medium":
      return Session.get("useTruck") ? 220 : 190;
    default:
      return Session.get("useTruck") ? 250 : 220;
  }
};

Meteor.estimatedRate = function () {
  return Math.round(baseRate() * moveHoursRequired());
};
