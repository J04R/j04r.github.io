function buttonPress() {alert("You shouldn't be here..")
alert("You have doomed us all..")
alert("WHY!? It said 'Do not click!' And you clicked it..")
alert("You have one more chance to save us...")
alert("All you need to do is exit the webpage..")
alert("Stop pressing it!")
alert("You don't know what will happen..")
alert("Please stop...")
alert("Stop!")
alert("You will never be the same..")
alert("You wont stop, will you?")
alert("Ill show you okay!")
alert("But im telling you now you will regret this.")
alert("Dont say i didnt warn you..")
window.location.href = "https://youtu.be/xvFZjo5PgG0";
}

onload=function timer(){
    var sec = 60;
    var timer = setInterval(function(){
        document.getElementById('safeTimerDisplay').innerHTML='00:'+sec;
        sec--;
        if (sec < 0) {
            clearInterval(timer);
        }
    }, 1000);
}

setTimeout(function() { 
    alert("Congrats! You didn't let your intrusive thoughts take over! Here is your reward! Press OK to contnue!")
    window.location.href = "https://youtu.be/LCrCCgjdKx8"; }, 61000 );

 
