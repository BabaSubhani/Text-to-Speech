let text = document.getElementById("textToConvert");
let textToConvertBtn = document.getElementById("convertBtn");

textToConvertBtn.addEventListener("click", function() {

    let sppechSynth = window.speechSynthesis;
    let errorText = document.querySelector(".error-para");
    let entredText = text.value;

    if(!sppechSynth.speaking && !entredText.trim().length){
        errorText.textContent = `Nothing to Convert! Enter text in the text area.`

    }

    if(!sppechSynth.speaking && entredText.trim().length){
        errorText.textContent = "";
        const utterThis = new SpeechSynthesisUtterance(entredText);
        sppechSynth.speak(utterThis);
        textToConvertBtn.textContent = "sound is playing...";
    }


    

    setTimeout(()=>{
        textToConvertBtn.textContent = "Play Converted sound";
    }, 5000 );
    

});