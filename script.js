//Set interval
//moment js
//bootstreap input forms
//buttons to save to local storage
//


//Create a function that takes the moment time and using set interval constantly call it back every second
//create time blocks either dynamically in Jquery or do it manually in the HTML
//find a way to to parse the html and compare its time block with the a moment time in hours/minutes/seconds
// change color of anything past the current time to gray if time of time block is less than the current time
// change to green if the timeblock is after current time
//change red if current time is overlapping current time
//when pressing save button it saves the text in timeblock to local storage so when refresh the text is still there
//after end of day refresh local storage

var timeBlocks = document.getElementById("time_blocks")

var leadP = document.getElementById("currentDay")
var calendarDiv = document.getElementById("#calendar")
var rowTemp;



//Create timeblocks
//Am
function createTimeBlocks() {
    for (let i = 9; i <= 12; i++) {
        var elementAM = $(
        
            `<div class="row-${i}" >
            <div class="col-2">
            ${i}:00:00 am
            </div>
            <div class="col">
            <div class="input-group mb-3" >
            <input type="text" id = "input-${i}" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2">
           <div class="input-group-append">
             <button class="btn btn-outline-secondary" id ="button-${i}" type="button">Button</button>
           </div>
         </div>
            </div>
          </div>
           
  </div>`)
     
      elementAM.appendTo('#calendar')  
      
    }
  
    //end of AM
    //PM
    for (let i = 1; i <= 5; i++) {
        var elementPM = $(
        
            `
            <div class="row-${i}">
            <div class="col-2">
            ${i}:00:00 pm
            </div>
            <div class="col">
            <div class="input-group mb-3" >
            <input type="text" id = "input-${i}" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2">
           <div class="input-group-append">
             <button class="btn btn-outline-secondary" id ="button-${i}" type="button">Button</button>
           </div>
         </div>
            </div>
          </div>
           
  </div>`)
        elementPM.appendTo('#calendar')
        
        
    }
  
  }//End of PM
  //end of timeblocks
  function getTime() {
    var leadTemp = document.createElement("p")
    leadTemp.textContent = moment().format("MMM DD, YYYY [at] hh:mm:ss a");
    leadP.appendChild(leadTemp)
    compareTime()
  }
  //call back function so the time increments each second
  function timerIncrement() {
    var momentTime = moment().format("MMM DD, YYYY [at] hh:mm:ss a");
    leadP.textContent = momentTime
  
    
}


function compareTime() {
    var dt = moment().format("hh:mm:ss a");
    $('#test').text(dt)
    
    $(".col-2").each(function (index, element) {
  
      
      var timeblock = $(element).text().trim()
      var timeblockTime = Number(timeblock.split(":")[0])
     
    
      var currentTime = moment().hours()
  
    
      if (timeblockTime <= 5) {
        timeblockTime += 12;
      }
  
      if (currentTime > timeblockTime) {
  
        $(element).addClass("past")
      }
      else if (currentTime < timeblockTime) {
  
        $(element).addClass("future")
      }
      else {
  
        $(element).addClass("present")
      }
  
    })
    return;
  }
  