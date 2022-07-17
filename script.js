const speach = document.querySelector('#speach')
const voiceList = document.querySelector('#voice')
const speachBtn = document.querySelector('button')

let synth = speechSynthesis

const voices = () => {
    for (let voice of synth.getVoices()) {
        let selected = voice.name === "Google US English" ? "selected" : ""
        let option = `<option value="${voice.name}" ${selected}>${voice.name} ${voice.lang}</option>`
        voiceList.insertAdjacentHTML('beforeend', option)
    }
}

synth.addEventListener('voiceschanged', voices)

const textToSpeach = text => {
    let utternance = new SpeechSynthesisUtterance(text)
    for (let voice of synth.getVoices()) {
        if (voice.name === voiceList.value) {
            utternance.voice = voice
        }
    }
    speechSynthesis.speak(utternance)
}

speachBtn.addEventListener('click', e => {
    e.preventDefault()

    if (speach.value !== "") {
        textToSpeach(speach.value)
    }

})