Template.bookingForm.rendered=function() {
    $('#move-date').datepicker({
      todayHighlight: true,
      toggleActive: true,
      autoclose: true
    });

    Session.set("time","Morning");
    Session.set("moveSize","studio");
    Session.set("moveDate","");

    Session.set("localMove",true);
    Session.set("fullMove",true);
    Session.set("size","small");
    Session.set("useTruck",true);
}

Template.bookingForm.events = ({
  'change #move-date' : function(e){
    if (e.target && e.target.value)
      Session.set("moveDate",e.target.value);
  },
  'change #move-time' : function(e){
    if (e.target && e.target.value)
      Session.set("time",e.target.value);
  },
  'change #move-distance' : function(e){
    if (e.target && e.target.value)
      updateLocalMove(e.target.value);
  },
  'change #move-size' : function(e){
    if (e.target && e.target.value)
      updateMoveSize(e.target.value);
  },
  'change #move-type' : function(e){
    if (e.target && e.target.value)
      updateMoveType(e.target.value);
  },
  'change #move-truck' : function(e){
    if (e.target && e.target.value)
      updateUseTruck(e.target.value);
  },
  'click #continue' : function(e){
    $("#estimate-panel").hide();
    $("#confirm-panel").show();
  }
});

var updateLocalMove = function(value){
  Session.set("localMove", value == "local");
}
var updateMoveSize = function(value){
  Session.set("moveSize",value);
  if (value === "studio" || value === "a1"){
    Session.set("size", "small");
  } else if(value === "a2" || value === "h2"){
    Session.set("size", "medium");
  } else{
    Session.set("size", "large");
  }
}
var updateMoveType = function(value){
  Session.set("fullMove", value == "full");
}
var updateUseTruck = function(value){
  Session.set("useTruck",value == "yes");
}
