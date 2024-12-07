
async function searchWord() {
    const word = document.getElementById('wordInput').value;
    if (word === "") {
        alert("Please enter a word!");
        return;
    }

    const apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        
        if (response.ok) {
            const resultDiv = document.getElementById('result');
            resultDiv.innerHTML = `
                <h3><strong>Word:</Strong> ${data[0].word}</h3>
                <p><strong>Definition:</strong> ${data[0].meanings[0].definitions[0].definition}<br></p>
                <p><strong>Example:</strong> ${data[0].meanings[0].definitions[0].example || 'Not Found'}</p>
                <p><strong>Part of Speech:</strong> ${data[0].meanings[0].partOfSpeech}</p>
            `;
        } else {
            throw new Error(data.message);
            
        }
    } catch (error) {
        alert(`Error: ${error.message}`);
    }
}
