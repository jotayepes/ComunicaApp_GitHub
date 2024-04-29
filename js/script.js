let currentPictograms = {};
let lastWord;
var lang = document.getElementById('languaje').className;

document.getElementById('search-button').addEventListener('click', async function() {
    var words = document.getElementById('search-input').value.toLowerCase().split(' ');
    var resultDiv = document.getElementById('result');
    
    resultDiv.innerHTML = '';

    let skipNext = false;

    for (let index = 0; index < words.length; index++) {
        let word = words[index];
        if(skipNext){
            lastWord = null;
            skipNext = false;
            continue;
        }

        let nextWord = words[index+1];
        let twoWords = nextWord ? word + ' ' + nextWord : null;
        let searchWord = twoWords || word;
        var url = 'https://api.arasaac.org/api/pictograms/' + lang + '/bestsearch/' + searchWord;

        try {
            let response = await fetch(url);
            let data = await response.json();

            if (data.length > 0) {
                if(twoWords) {
                    lastWord = words[index+1];
                    skipNext = true;
                }
                let item = processPictograms(data, searchWord);
                if(item) resultDiv.appendChild(item);
            } else {
                url = 'https://api.arasaac.org/api/pictograms/' + lang + '/bestsearch/' + word;
                response = await fetch(url);
                data = await response.json();

                if (data.length > 0) {
                    let item = processPictograms(data, word);
                    if(item) resultDiv.appendChild(item);
                } else {
                    url = 'https://api.arasaac.org/api/pictograms/' + lang + '/search/' + word;
                    response = await fetch(url);
                    data = await response.json();

                    if (data.length > 0) {
                        let item = processPictograms(data, word);
                        if(item) resultDiv.appendChild(item);
                    } else {
                        let item = createItemDiv(word);
                        if(item) resultDiv.appendChild(item);
                    }
                }
            }
        } catch (error) {
            let item = createItemDiv(word);
            if(item) resultDiv.appendChild(item);
        }
    }

    document.getElementById('print-button').classList.remove('hidden');
    document.getElementById('read-button').classList.remove('hidden');
});

function processPictograms(data, word) {
    if (word != lastWord){
        currentPictograms[word] = data.map(item => 'https://api.arasaac.org/api/pictograms/' + item._id);
        var itemDiv = document.createElement('div');
        itemDiv.className = 'result-item';
        var img = document.createElement('img');
        var wordP = document.createElement('p');
        wordP.addEventListener('click', function() {
            textToVoice(word, lang);
        });
        wordP.textContent = word;
        if (currentPictograms[word].length > 0) {
            img.src = currentPictograms[word][0];
        }
        var arrowUp = document.createElement('div');
        arrowUp.className = 'arrow up';
        arrowUp.innerHTML = '&#8679;';
        var arrowDown = document.createElement('div');
        arrowDown.className = 'arrow down';
        arrowDown.innerHTML = '&#8681;';
        arrowUp.onclick = function() { changeImage(img, word, 1); };
        arrowDown.onclick = function() { changeImage(img, word, -1); };
        itemDiv.appendChild(arrowUp);
        itemDiv.appendChild(img);
        itemDiv.appendChild(wordP);
        itemDiv.appendChild(arrowDown);
        return itemDiv;
    }else{ 
        return null;}
}

function createItemDiv(word) {
    var itemDiv = document.createElement('div');
    itemDiv.className = 'result-item';
    var wordP = document.createElement('p');
    wordP.addEventListener('click', function() {
            textToVoice(word, lang);
    });
    wordP.textContent = word;
    itemDiv.appendChild(wordP);
    return itemDiv;
}

document.getElementById('search-input').addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        document.getElementById('search-button').click();
    }
});

document.getElementById('print-button').addEventListener('click', function() {
    var printWindow = window.open('', '_blank');
    var printContent = document.getElementById('result').innerHTML;
    printWindow.document.open();
    printWindow.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>ComunicaApp</title>
            <link rel="stylesheet" type="text/css" href="../css/print-styles.css">
        </head>
        <body>
            <div class="print-content">${printContent}</div>
            <script>
                window.onload = function() {
                    window.print();
                };
            </script>
        </body>
        </html>
    `);
    printWindow.document.close();
});

let currentIndexes = {};

function changeImage(img, word, direction) {
    if (currentIndexes[word] === undefined) {
        currentIndexes[word] = currentPictograms[word].indexOf(img.src);
    }

    var pictogramImages = currentPictograms[word];

    if (direction == 1 && currentIndexes[word] < pictogramImages.length) {
        currentIndexes[word]++;
    } else if (direction == -1 && currentIndexes[word] > 0) {
        currentIndexes[word] = currentIndexes[word] - 1;
    }

    if (currentIndexes[word] < 0) {
        currentIndexes[word] = pictogramImages.length - 1;
    } else if (currentIndexes[word] >= pictogramImages.length) {
        img.style.display = 'none';
        currentIndexes[word] = pictogramImages.length;
    } else {
        img.style.display = 'block';
        img.src = pictogramImages[currentIndexes[word]];
    }
}

var modal = document.getElementById("about-us-modal");
var btn = document.getElementById("about-us");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

document.getElementById('read-button').addEventListener('click', function() {
    var textToSpeak = document.getElementById('search-input').value;
    var lang = document.getElementById('languaje').className;
    
    var utterance = new SpeechSynthesisUtterance(textToSpeak);
    utterance.lang = lang;

    window.speechSynthesis.speak(utterance);
});

function textToVoice(text, lang) {
    var utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = lang;
    speechSynthesis.speak(utterance);
}