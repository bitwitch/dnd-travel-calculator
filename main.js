var convert_distance = {
  "inches": {
    "inches": 1,
    "feet": 1/12,
    "miles": 1/(12*5280),
    "centimeters": 2.54,
    "meters": .0254,
    "kilometers": .0000254
  },
  "feet": {
    "inches": 12,
    "feet": 1,
    "miles": 1/5280,
    "centimeters": 30.48,
    "meters": .3048,
    "kilometers": .0003048
  },
  "miles": {
    "inches": 5280*12,
    "feet": 5280,
    "miles": 1,
    "centimeters": 160934.4,
    "meters": 1609.344,
    "kilometers": 1.609344
  },
  "centimeters": {
    "inches": 0.3937008,
    "feet": 0.0328084,
    "miles": .000006213712,
    "centimeters": 1,
    "meters": .01,
    "kilometers": .00001
  },
  "meters": {
    "inches": 39.37008,
    "feet": 3.28084,
    "miles": .0006213712,
    "centimeters": 100,
    "meters": 1,
    "kilometers": .001
  },
  "kilometers": {
    "inches": 39370.08,
    "feet": 3280.84,
    "miles": 0.6213712,
    "centimeters": 100000,
    "meters": 1000,
    "kilometers": 1
  },
};

var convert_time = {
  "seconds": {
    "seconds": 1,
    "rounds": 1/6,
    "minutes": 1/60,
    "hours": 1/3600,
    "days": 1/86400
  },
  "rounds": {
    "seconds": 6,
    "rounds": 1,
    "minutes": 6/60,
    "hours": 6/3600,
    "days": 6/86400
  },
  "minutes": {
    "seconds": 60,
    "rounds": 10,
    "minutes": 1,
    "hours": 1/60,
    "days": 1/1440
  },
  "hours": {
    "seconds": 60*60,
    "rounds": 60*60/6,
    "minutes": 60,
    "hours": 1,
    "days": 1/24
  },
  "days": {
    "seconds": 60*60*24,
    "rounds": 60*60*24/6,
    "minutes": 60*24,
    "hours": 24,
    "days": 1
  }
};

var speed = document.getElementById("speed");
var speed_distance_units = document.getElementById("speed_distance_units");
var speed_time_units = document.getElementById("speed_time_units");

var distance = document.getElementById("distance");
var distance_units = document.getElementById("distance_units");

var t_in_s = document.getElementById("time_in_seconds");
var t_in_r = document.getElementById("time_in_rounds");
var t_in_m = document.getElementById("time_in_minutes");
var t_in_h = document.getElementById("time_in_hours");
var t_in_d = document.getElementById("time_in_days");

speed.addEventListener("change", update_travel_time);
speed_distance_units.addEventListener("change", update_travel_time);
speed_time_units.addEventListener("change", update_travel_time);
distance.addEventListener("change", update_travel_time);
distance_units.addEventListener("change", update_travel_time);

update_travel_time();

function update_travel_time(e) {
  var travel_time = (parseFloat(distance.value) / parseFloat(speed.value)) * convert_distance[distance_units.value][speed_distance_units.value];
  var time_units = speed_time_units.value;
  console.log({travel_time, time_units});

  t_in_s.innerText = (travel_time * convert_time[time_units]["seconds"]).toFixed(2);
  t_in_r.innerText = (travel_time * convert_time[time_units]["rounds"]).toFixed(2);
  t_in_m.innerText = (travel_time * convert_time[time_units]["minutes"]).toFixed(2);
  t_in_h.innerText = (travel_time * convert_time[time_units]["hours"]).toFixed(2);
  t_in_d.innerText = (travel_time * convert_time[time_units]["days"]).toFixed(2);
}

