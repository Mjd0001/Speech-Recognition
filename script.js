

function startt(){
    var output = document.getElementById("txtarea");
    var instructions = document.getElementById("instructions");
    const SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    
    recognition.start();
    recognition.lang = "ar";

    recognition.onstart = function(){
       instructions.innerHTML = "جاري التسجيل، تحدث من فضلك... ";
    }

    recognition.onend = function(){
        instructions.innerHTML = "توقف التسجيل";
        recognition.stop();
    }

    recognition.onresult = function(event){
        var transcript = event.results[0][0].transcript;
        output.value = transcript;
    }
}



