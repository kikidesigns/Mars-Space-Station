function chief()
{
  alert("Start")
  mysound = new sound("space-radio-interference-24866.mp3")
  mysound.play();
}

function sound(src)
{
  this.sound = document.createElement("audio");
  this.sound.src = src;
  this.play= function(){
    this.sound.play;}
}

function Start()
{
  alert("Alarm Activated");
  document.getElementById("startButton").disabled = true;
  document.getElementById("stopButton").disabled = false;
}

function Stop()
{
  alert("Alarm Stopped")

  document.getElementById("stopButton").disabled = true;
  document.getElementById("startButton").disabled = false;
}

function Open()
{
  alert("Crew Member Has Entered The Cockpit")

}

function Radio()
{
  alert("Radio is On")
  
}