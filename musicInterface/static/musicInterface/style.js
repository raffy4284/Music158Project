//dur: 
// 1 = whole note
// 0.5 = half note
// 0.25 = quarter note
// 0.125 = eighth note
// 0.0625 = sixteenth note
var play = document.getElementById("play");
var numStaves = 1;
$("#play").submit(function(e){
  console.log("FLAG");
  var score = Array();
  var max = {};
  for(var i = 0; i < numStaves; i++){
    var notes = document.getElementById("staff1").value;
    var bar = 0; 
    for(var j = 0; j < notes.length; j++){
      switch(notes[j]){
        case "@":
          items = {};
          items["notes"] = 48;
          items["dur"] = 0.0625;
          items["vel"] = 1;
          max[bar] = items
          bar+=1;
          break;
        case "A":
          items = {};
          items["notes"] = 50;
          items["dur"] = 0.0625;
          items["vel"] = 1;
          max[bar] = items
          bar+=1;
          break;   
        case "B":
          items = {};
          items["notes"] = 52;
          items["dur"] = 0.0625;
          items["vel"] = 1;
          max[bar] = items
          bar+=1;
          break;    
        case "C":
          items = {};
          items["notes"] = 53;
          items["dur"] = 0.0625;
          items["vel"] = 1;
          max[bar] = items
          bar+=1;
          break;    
        case "D":
          items = {};
          items["notes"] = 55;
          items["dur"] = 0.0625;
          items["vel"] = 1;
          max[bar] = items
          bar+=1;
          break;         
         case "E":
          items = {};
          items["notes"] = 57;
          items["dur"] = 0.0625;
          items["vel"] = 1;
          max[bar] = items
          bar+=1;
          break;         
        case "F":
          items = {};
          items["notes"] = 59;
          items["dur"] = 0.0625;
          items["vel"] = 1;
          max[bar] = items
          bar+=1;
          break;         
        case "G":
          items = {};
          items["notes"] = 60;
          items["dur"] = 0.0625;
          items["vel"] = 1;
          max[bar] = items
          bar+=1;
          break;        
        case "H":
          items = {};
          items["notes"] = 62;
          items["dur"] = 0.0625;
          items["vel"] = 1;
          max[bar] = items
          bar+=1;
          break;         
        case "I":
          items = {};
          items["notes"] = 64;
          items["dur"] = 0.0625;
          items["vel"] = 1;
          max[bar] = items
          bar+=1;
          break;         
        case "J":
          items = {};
          items["notes"] = 65;
          items["dur"] = 0.0625;
          items["vel"] = 1;
          max[bar] = items
          bar+=1;
          break;         
        case "K":
          items = {};
          items["notes"] = 67;
          items["dur"] = 0.0625;
          items["vel"] = 1;
          max[bar] = items
          bar+=1;
          break;
        case "L":
          items = {};
          items["notes"] = 69;
          items["dur"] = 0.0625;
          items["vel"] = 1;
          max[bar] = items
          bar+=1;
          break;         
        case "M":
          items = {};
          items["notes"] = 71;
          items["dur"] = 0.0625;
          items["vel"] = 1;
          max[bar] = items
          bar+=1;
          break;         
        case "N":
          items = {};
          items["notes"] = 72;
          items["dur"] = 0.0625;
          items["vel"] = 1;
          max[bar] = items
          bar+=1;
          break;         
      }    
    }
    score[i]={}
    score[i]["max"] = max 
    score[i]["NumNotes"] = bar
  }
  $.ajax({
    url: "http://localhost:8000/m158/process",
    type: "GET",
    data: {
      score

    }, 
    error: function(){
      console.log("flag");
    },
    success: function(data){
      console.log(data); 
    }
  }); 
  return false;
});

