

var timeBlocks = document.getElementById("time_blocks")
var startButton = document.getElementById("start")
var leadP = document.getElementById("currentDay")
var calendarDiv = document.getElementById("#calendar")
// var reloadButton = document.getElementById("#button-reload")


  createTimeBlocks()
  getTime()

var momentGlobal = moment();
var currenthour = momentGlobal.format("H");



// reloadButton.addEventListener("click", function () {

//     localStoring("input-5", input5.value);
   
//     })

//Create timeblocks
//Am
function createTimeBlocks() {
  for (let i = 9; i <= 11; i++) {
      var elementAM = $(
      
          `<div class="row-${i}" >
          <div class="col-2">
          ${i}:00:00 am
          </div>
          <div class="col">
          <div class="input-group mb-3" >
          <input type="text" id = "input-${i}" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2">
         <div class="input-group-append">
           <button class="btn btn-outline-secondary" class="saveBtn" id ="button-${i}" type="button">Button</button>
         </div>
       </div>
          </div>
        </div>
         
</div>`)
   
    elementAM.appendTo('#calendar')  
    
    }
    
    var element12 = $(
      
        `<div class="row-12" >
        <div class="col-2">
        12:00:00 pm
        </div>
        <div class="col">
        <div class="input-group mb-3" >
        <input type="text" id = "input-12" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2">
       <div class="input-group-append">
         <button class="btn btn-outline-secondary" class="saveBtn" id ="button-12" type="button">Button</button>
       </div>
     </div>
        </div>
      </div>
       
</div>`)
 
  element12.appendTo('#calendar')  


    

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
//Create function to get the current moment time and display it in header
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
setInterval(timerIncrement, 1000);



function compareTime() {
  var dt = moment().format("hh:mm:ss a");
//   $('#test').text(dt)
  
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



var input9 = document.getElementById("input-9")
var input10 = document.getElementById("input-10")
var input11 = document.getElementById("input-11")
var input12 = document.getElementById("input-12")
var input1 = document.getElementById("input-1")
var input2 = document.getElementById("input-2")
var input3 = document.getElementById("input-3")
var input4 = document.getElementById("input-4")
var input5 = document.getElementById("input-5")

var button9 = document.getElementById("button-9");
var button10 = document.getElementById("button-10");
var button11 = document.getElementById("button-11");
var button12 = document.getElementById("button-12");
var button1 = document.getElementById("button-1");
var button2 = document.getElementById("button-2");
var button3 = document.getElementById("button-3");
var button4 = document.getElementById("button-4");
var button5 = document.getElementById("button-5");


button9.addEventListener("click", function () {
  localStoring("input-9", input9.value);

})

button10.addEventListener("click", function () {
  localStoring("input-10", input10.value);

})
  

button11.addEventListener("click", function () {
  localStoring("input-11", input11.value);

})

button12.addEventListener("click", function () {
  localStoring("input-12", input12.value);

})

button1.addEventListener("click", function () {
  localStoring("input-1", input1.value);

})

button2.addEventListener("click", function () {
  localStoring("input-2", input2.value);

  })

button3.addEventListener("click", function () {
  localStoring("input-3", input3.value);

  })


button4.addEventListener("click", function () {
  localStoring("input-4", input4.value);

})
  


button5.addEventListener("click", function () {

  localStoring("input-5", input5.value);
 
  })

function localStoring(key, value) {
localStorage.setItem(key, value)

}

// console.log(moment().hour())
  input9.value = localStorage.getItem("input-9")
  input10.value = localStorage.getItem("input-10")
  input11.value = localStorage.getItem("input-11")
  input12.value = localStorage.getItem("input-12")
  input1.value = localStorage.getItem("input-1")
  input2.value = localStorage.getItem("input-2")
  input3.value = localStorage.getItem("input-3")
  input4.value = localStorage.getItem("input-4")
  input5.value = localStorage.getItem("input-5")

