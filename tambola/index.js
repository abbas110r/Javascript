let arr = [];
      while (arr.length !== 90) {
        let r = Math.floor(Math.random() * 90 + 1);
        if (arr.indexOf(r) === -1 && r !== 0) {
          arr.push(r);
        }
      }
      function display() {
        document.getElementById('output').style.fontSize = '300%';
        document.getElementById('output').style.marginTop = '2rem';
        document.getElementById('output').style.textAlign = 'center';
        document.getElementById('output').style.marginBottom = '2rem';
        document.getElementById('output').innerHTML = arr[arr.length - 1];
        var voiceList = document.querySelector('#voiceList');
        let synth = window.speechSynthesis;
        let voices = [];
        PopulateVoices();
      if (speechSynthesis !== undefined) {
        speechSynthesis.onvoiceschanged = PopulateVoices;
      }
     let toSpeak = new SpeechSynthesisUtterance( arr[arr.length - 1]);
        let selectedVoiceName =
          voiceList.selectedOptions[0].getAttribute('data-name');
        voices.forEach((voice) => {
          if (voice.name === selectedVoiceName) {
            toSpeak.voice = voice;
          }
        });
        synth.speak(toSpeak);
        function PopulateVoices() {
          voices = synth.getVoices();
          var selectedIndex =
            voiceList.selectedIndex < 0 ? 0 : voiceList.selectedIndex;
          voiceList.innerHTML = '';
          voices.forEach((voice) => {
            var listItem = document.createElement('option');
            listItem.textContent = voice.name;
            listItem.setAttribute('data-lang', voice.lang);
            listItem.setAttribute('data-name', voice.name);
            voiceList.appendChild(listItem);
          });
  
          voiceList.selectedIndex = selectedIndex;
        }
  
        let arrayClass = document.getElementsByClassName('box');
        for (let i = 0; i < arrayClass.length; i++) {
          if (arrayClass[i].innerHTML == arr[arr.length - 1]) {
            arrayClass[i].style.backgroundColor = 'rgb(89, 208, 248)';
            arrayClass[i].style.color = 'white';
          }
        }
        arr.pop();
      }