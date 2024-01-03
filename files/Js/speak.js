$(document).ready(function () {
    
    $(".speak").click(function (e) {
        speak = new webkitSpeechRecognition()
        speak.start()
        
        speak.interimResults = true
        speak.onresults = function (e) {
            
            if (event.results.length > 0) {
                
                spoken = event.results[event.results.length - 1]
                if (spoken.isFinal) {
                    $('.addt').val(spoken[0].transcript)
                }
            }
        }
    })
    

})