//dur: 
// 1 = whole note
// 0.5 = half note
// 0.25 = quarter note
// 0.125 = eighth note
// 0.0625 = sixteenth note
var play = document.getElementById("play");
var numStaves = 1;
$("#play").submit(function(e){
  var tempo = document.getElementById("tempo").value
  
  var score = {};
  var max = {};
  for(var i = 0; i < numStaves; i++){
    var instrument = document.getElementById((i+1).toString()+"instrument").value
    var notes = document.getElementById("staff1").value;
    var bar = 0; 
    for(var j = 0; j < notes.length; j++){
      switch(notes[j]){
        case "@":
          items = {};
          items["notes"] = 57;
          items["dur"] = 0.0625;
          items["vel"] = 1;
          max[bar] = items
          bar+=1;
          break;
        case "A":
          items = {};
          items["notes"] = 59;
          items["dur"] = 0.0625;
          items["vel"] = 1;
          max[bar] = items
          bar+=1;
          break;   
        case "B":
          items = {};
          items["notes"] = 60;
          items["dur"] = 0.0625;
          items["vel"] = 1;
          max[bar] = items
          bar+=1;
          break;    
        case "C":
          items = {};
          items["notes"] = 62;
          items["dur"] = 0.0625;
          items["vel"] = 1;
          max[bar] = items
          bar+=1;
          break;    
        case "D":
          items = {};
          items["notes"] = 64;
          items["dur"] = 0.0625;
          items["vel"] = 1;
          max[bar] = items
          bar+=1;
          break;         
        case "E":
          items = {};
          items["notes"] = 65;
          items["dur"] = 0.0625;
          items["vel"] = 1;
          max[bar] = items
          bar+=1;
          break;         
        case "F":
          items = {};
          items["notes"] = 67;
          items["dur"] = 0.0625;
          items["vel"] = 1;
          max[bar] = items
          bar+=1;
          break;         
        case "G":
          items = {};
          items["notes"] = 69;
          items["dur"] = 0.0625;
          items["vel"] = 1;
          max[bar] = items
          bar+=1;
          break;        
        case "H":
          items = {};
          items["notes"] = 71;
          items["dur"] = 0.0625;
          items["vel"] = 1;
          max[bar] = items
          bar+=1;
          break;         
        case "I":
          items = {};
          items["notes"] = 72;
          items["dur"] = 0.0625;
          items["vel"] = 1;
          max[bar] = items
          bar+=1;
          break;         
        case "J":
          items = {};
          items["notes"] = 74;
          items["dur"] = 0.0625;
          items["vel"] = 1;
          max[bar] = items
          bar+=1;
          break;         
        case "K":
          items = {};
          items["notes"] = 76;
          items["dur"] = 0.0625;
          items["vel"] = 1;
          max[bar] = items
          bar+=1;
          break;
        case "L":
          items = {};
          items["notes"] = 77;
          items["dur"] = 0.0625;
          items["vel"] = 1;
          max[bar] = items
          bar+=1;
          break;         
        case "M":
          items = {};
          items["notes"] = 79;
          items["dur"] = 0.0625;
          items["vel"] = 1;
          max[bar] = items
          bar+=1;
          break;         
        case "N":
          items = {};
          items["notes"] = 81;
          items["dur"] = 0.0625;
          items["vel"] = 1;
          max[bar] = items
          bar+=1;
          break;        
        case "P":
          items = {};
          items["notes"] = 57;
          items["dur"] = 0.25;
          items["vel"] = 1;
          max[bar] = items
          bar+=1;
          break;         
        case "Q":
          items = {};
          items["notes"] = 59;
          items["dur"] = 0.25;
          items["vel"] = 1;
          max[bar] = items
          bar+=1;
          break;         
        case "R":
          items = {};
          items["notes"] = 60;
          items["dur"] = 0.25;
          items["vel"] = 1;
          max[bar] = items
          bar+=1;
          break;
        case "S":
          items = {};
          items["notes"] = 62;
          items["dur"] = 0.25;
          items["vel"] = 1;
          max[bar] = items
          bar+=1;
          break;         
        case "T":
          items = {};
          items["notes"] = 64;
          items["dur"] = 0.25;
          items["vel"] = 1;
          max[bar] = items
          bar+=1;
          break;         
        case "U":
          items = {};
          items["notes"] = 65;
          items["dur"] = 0.25;
          items["vel"] = 1;
          max[bar] = items
          bar+=1;
          break;         
        case "V":
          items = {};
          items["notes"] = 67;
          items["dur"] = 0.25;
          items["vel"] = 1;
          max[bar] = items
          bar+=1;
          break;         
        case "W":
          items = {};
          items["notes"] = 69;
          items["dur"] = 0.25;
          items["vel"] = 1;
          max[bar] = items
          bar+=1;
          break;         
        case "X":
          items = {};
          items["notes"] = 71;
          items["dur"] = 0.25;
          items["vel"] = 1;
          max[bar] = items
          bar+=1;
          break;
        case "Y":
          items = {};
          items["notes"] = 72;
          items["dur"] = 0.25;
          items["vel"] = 1;
          max[bar] = items
          bar+=1;
          break;         
        case "Z":
          items = {};
          items["notes"] = 74;
          items["dur"] = 0.25;
          items["vel"] = 1;
          max[bar] = items
          bar+=1;
          break;        
        case "[":
          items = {};
          items["notes"] = 76;
          items["dur"] = 0.25;
          items["vel"] = 1;
          max[bar] = items
          bar+=1;
          break;        
        case "\\":
          items = {};
          items["notes"] = 77;
          items["dur"] = 0.25;
          items["vel"] = 1;
          max[bar] = items
          bar+=1;
          break;        
        case "]":
          items = {};
          items["notes"] = 79;
          items["dur"] = 0.25;
          items["vel"] = 1;
          max[bar] = items
          bar+=1;
          break;        
        case "^":
          items = {};
          items["notes"] = 81;
          items["dur"] = 0.25;
          items["vel"] = 1;
          max[bar] = items
          bar+=1;
          break;
        case "`": 
          items = {};
          items["notes"] = 57;
          items["dur"] = 0.5;
          items["vel"] = 1;
          max[bar] = items
          bar+=1;
          break;
        case "a":
          items = {};
          items["notes"] = 59;
          items["dur"] = 0.5;
          items["vel"] = 1;
          max[bar] = items
          bar+=1;
          break;
        case "b":
          items = {};
          items["notes"] = 60;
          items["dur"] = 0.5;
          items["vel"] = 1;
          max[bar] = items
          bar+=1;
          break;   
        case "c":
          items = {};
          items["notes"] = 62;
          items["dur"] = 0.5;
          items["vel"] = 1;
          max[bar] = items
          bar+=1;
          break;    
        case "d":
          items = {};
          items["notes"] = 64;
          items["dur"] = 0.5;
          items["vel"] = 1;
          max[bar] = items
          bar+=1;
          break;    
        case "e":
          items = {};
          items["notes"] = 65;
          items["dur"] = 0.5;
          items["vel"] = 1;
          max[bar] = items
          bar+=1;
          break;         
        case "f":
          items = {};
          items["notes"] = 67;
          items["dur"] = 0.5;
          items["vel"] = 1;
          max[bar] = items
          bar+=1;
          break;         
        case "g":
          items = {};
          items["notes"] = 69;
          items["dur"] = 0.5;
          items["vel"] = 1;
          max[bar] = items
          bar+=1;
          break;         
        case "h":
          items = {};
          items["notes"] = 71;
          items["dur"] = 0.5;
          items["vel"] = 1;
          max[bar] = items
          bar+=1;
          break;        
        case "i":
          items = {};
          items["notes"] = 72;
          items["dur"] = 0.5;
          items["vel"] = 1;
          max[bar] = items
          bar+=1;
          break;         
        case "j":
          items = {};
          items["notes"] = 74;
          items["dur"] = 0.5;
          items["vel"] = 1;
          max[bar] = items
          bar+=1;
          break;         
        case "k":
          items = {};
          items["notes"] = 76;
          items["dur"] = 0.5;
          items["vel"] = 1;
          max[bar] = items
          bar+=1;
          break;         
        case "l":
          items = {};
          items["notes"] = 77;
          items["dur"] = 0.5;
          items["vel"] = 1;
          max[bar] = items
          bar+=1;
          break;
        case "m":
          items = {};
          items["notes"] = 79;
          items["dur"] = 0.5;
          items["vel"] = 1;
          max[bar] = items
          bar+=1;
          break;         
        case "n":
          items = {};
          items["notes"] = 81;
          items["dur"] = 0.5;
          items["vel"] = 1;
          max[bar] = items
          bar+=1;
          break;         
        case "p":
          items = {};
          items["notes"] = 57;
          items["dur"] = 1;
          items["vel"] = 1;
          max[bar] = items
          bar+=1;
          break;
        case "q":
          items = {};
          items["notes"] = 59;
          items["dur"] = 1;
          items["vel"] = 1;
          max[bar] = items
          bar+=1;
          break;   
        case "r":
          items = {};
          items["notes"] = 60;
          items["dur"] = 1;
          items["vel"] = 1;
          max[bar] = items
          bar+=1;
          break;    
        case "s":
          items = {};
          items["notes"] = 62;
          items["dur"] = 1;
          items["vel"] = 1;
          max[bar] = items
          bar+=1;
          break;    
        case "t":
          items = {};
          items["notes"] = 64;
          items["dur"] = 1;
          items["vel"] = 1;
          max[bar] = items
          bar+=1;
          break;         
        case "u":
          items = {};
          items["notes"] = 65;
          items["dur"] = 1;
          items["vel"] = 1;
          max[bar] = items
          bar+=1;
          break;         
        case "v":
          items = {};
          items["notes"] = 67;
          items["dur"] = 1;
          items["vel"] = 1;
          max[bar] = items
          bar+=1;
          break;         
        case "w":
          items = {};
          items["notes"] = 69;
          items["dur"] = 1;
          items["vel"] = 1;
          max[bar] = items
          bar+=1;
          break;        
        case "x":
          items = {};
          items["notes"] = 71;
          items["dur"] = 1;
          items["vel"] = 1;
          max[bar] = items
          bar+=1;
          break;         
        case "y":
          items = {};
          items["notes"] = 72;
          items["dur"] = 1;
          items["vel"] = 1;
          max[bar] = items
          bar+=1;
          break;         
        case "z":
          items = {};
          items["notes"] = 74;
          items["dur"] = 1;
          items["vel"] = 1;
          max[bar] = items
          bar+=1;
          break;         
        case "{":
          items = {};
          items["notes"] = 76;
          items["dur"] = 1;
          items["vel"] = 1;
          max[bar] = items
          bar+=1;
          break;
        case "|":
          items = {};
          items["notes"] = 77;
          items["dur"] = 1;
          items["vel"] = 1;
          max[bar] = items
          bar+=1;
          break;         
        case "}":
          items = {};
          items["notes"] = 79;
          items["dur"] = 1;
          items["vel"] = 1;
          max[bar] = items
          bar+=1;
          break;         
        case "~":
          items = {};
          items["notes"] = 81;
          items["dur"] = 1;
          items["vel"] = 1;
          max[bar] = items
          bar+=1;
          break;        
        case "8":
          items = {};
          items["notes"] = 1;
          items["dur"] = 0.0625;
          items["vel"] = 1;
          max[bar] = items
          bar+=1;
          break;       
        case "9":
          items = {};
          items["notes"] = 1;
          items["dur"] = 0.125;
          items["vel"] = 1;
          max[bar] = items
          bar+=1;
          break;       
        case ":":
          items = {};
          items["notes"] = 1;
          items["dur"] = 0.25;
          items["vel"] = 1;
          max[bar] = items
          bar+=1;
          break;       
        case ";":
          items = {};
          items["notes"] = 1;
          items["dur"] = 0.5;
          items["vel"] = 1;
          max[bar] = items
          bar+=1;
          break;       
        case "<":
          items = {};
          items["notes"] = 1;
          items["dur"] = 1;
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
  score["tempo"]=tempo
  score["instrument"]=instrument
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

