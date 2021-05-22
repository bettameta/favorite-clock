var time = new Date().getHours();
var noon = 12;
var evening = 18; // 6PM
var wakeupTime = 7; // 7AM
var lunchTime = 12; // 12PM
var partyTime = 19; // 7PM
var napTime = lunchTime + 3; // 3PM
var dinnerTime = 17; // 5pm

// PARTY TIME BUTTON VARIABLE HERE //
var isPartyTime = false;

// NEW FUNCTION & CALLING IT //
// CODE TO GET STORE REAL TIME //
 
var updateClock = function() 
{
// the rest of the mykids code you wrote up until this step
// ADD NEW VARIABLES AND FUNCTION CODES HERE //

// MESSAGE TEXT FOR TIME OUTPUT HERE //
var whatTimeIsItJS = document.getElementById('timeEvent');
var messageText;

// IMAGE FOR TIME OUTPUT HERE //
var myKids = document.getElementById('mykids');
var image = "https://i.postimg.cc/fLQKk3FH/ozzy-else.jpg";

// START TIMED FUNCTIONS HERE //
if (time == partyTime){
	
    image = "https://i.postimg.cc/JzwWrxxZ/party-time3.jpg";
    messageText = "IT'S PARTEE TIME!!";

} else if (time == napTime) {	

    image = "https://i.postimg.cc/vZ1dMj5Q/george-nap.jpg";
    messageText = "IT'S NAP TIME...";
  
} else if (time == lunchTime) {	
    image = "https://i.postimg.cc/kMt1JmpY/henry-lunch.jpg";
    messageText = "IT'S NOM NOM TIME!!";
  
} else if (time == wakeupTime) {	
    image = "https://i.postimg.cc/7L0hPbSY/harry-wake-up.jpg";
    messageText = "IT'S TIME TO GET UP!!";

} else if (time == dinnerTime) {
    image = "https://i.postimg.cc/FKBzL0Qq/lunch2.jpg";
    messageText = "IT'S TIME FOR DINNER!!";
  
} else if (time < noon) {

    messageText = "Good morning!";
  
  
} else if (time > evening) {

    messageText = "Good Evening!";
  
} else {

    messageText = "Good afternoon!";
}

// MOVED THE BOTTOM OF CODE UP WHEN ADDED "CLOCK TIME KEEPERS"

// TIME TEXT CALL OUT HERE //
whatTimeIsItJS.innerText = messageText;

// TIME IMAGE CALL OUT HERE //
myKids.src = image;

 
showCurrentTime();
 
};

// CLOCK TIME KEEPERS //
var showCurrentTime = function()

{
    // display the string on the webpage
    var clock = document.getElementById('clock');
 
    var currentTime = new Date();
 
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var meridian = "AM";
 
    // Set hours 
    if (hours >= noon) 
    { 
        meridian = "PM"; 
    }  
    if (hours > noon) 
    { 
        hours = hours - 12; 
    }
 
    // Set Minutes
    if (minutes < 10)
    {
        minutes = "0" + minutes;
    }
 
    // Set Seconds
    if (seconds < 10)
    {
        seconds = "0" + seconds;
    }
 
    // put together the string that displays the time
    var clockTime = hours + ":" + minutes + ":" + seconds + " " + meridian + "!";
 
    clock.innerText = clockTime;
};


 
updateClock();
var oneSecond = 1000;
setInterval( updateClock, oneSecond);

// ------------------------------------- //

// PARTYTIMEBUTTON LINK TO HTML  //
var partyTimeButton = document.getElementById("partyTimeButton");

// BUTTON FUNCTION //
var partyEvent = function() {
   
    if (isPartyTime === false) {
       isPartyTime = true;
       time = partyTime;

       // text in the button should read "Party Over"
       partyTimeButton.innerText="Party Over Button"; //* IS THIS WRONG */

       // color of the button should be "#e69447" (bonus!)
       partyTimeButton.style.backgroundColor = "#e69447";  
           
    }

    else {
       isPartyTime = false;
       time = new Date().getHours();

       // text in the button should read "PARTY TIME!"
       partyTimeButton.innerText = "Instant Party Button!"; 
       // color of the button should be "##68a832" (bonus!)
       partyTimeButton.style.backgroundColor = "#9019b4";

    }
 };  

 // TIME SELECTOR VARIABLES //
 // WAKE UP //
 var wakeUpTimeSelector = document.getElementById("wakeUpTimeSelector");
 // LUNCH //
    var lunchTimeSelector = document.getElementById("lunchTimeSelector");
 // NAP //
    var napTimeSelector = document.getElementById("napTimeSelector");
 // DINNER //
    var dinnerTimeSelector = document.getElementById("dinnerTimeSelector");

 // FUNCTION TIME SELECTORS //

    var wakeUpEvent = function()
    {
        wakeupTime = wakeUpTimeSelector.value;
    };

    var lunchEvent = function()
    {
        lunchTime = lunchTimeSelector.value;
    };

    var napEvent = function()
    {
        napTime = napTimeSelector.value;
    };

    var dinnerEvent = function ()
    {
        dinnerTime = dinnerTimeSelector.value;
    };

    // EVENT LISTENERS //
    // PARTY BUTTON //
    partyTimeButton.addEventListener("click", partyEvent);
    // -------------------- //
    // WAKE UP TIME //
    wakeUpTimeSelector.addEventListener("change", wakeUpEvent);
    // LUNCH TIME //
    lunchTimeSelector.addEventListener("change", lunchEvent);
    // NAP TIME //
    napTimeSelector.addEventListener("change", napEvent);
    // DINNER TIME //
    dinnerTimeSelector.addEventListener("change", dinnerEvent);