const moodInputEl = document.getElementById('moodInput');
const saveMoodEl = document.getElementById('saveMood');
const moodListEl = document.getElementById('moodList');
const statsEl = document.getElementById('stats');
const entryCountEl = document.getElementById('entryCount');

let moods = [];

const savedMoods = localStorage.getItem('myMoods');
if (savedMoods) {
    moods = JSON.parse(savedMoods);
    renderMoods();
}

function renderMoods() {
       moodListEl.innerHTML = '';

        moods.forEach((currentMood, index) => {
        const newLine = document.createElement('li');
        newLine.textContent = currentMood.mood + ' - ' + currentMood.time;
        const moodLower = currentMood.mood.toLowerCase();
        if (moodLower === 'happy' || moodLower === 'good' || moodLower === 'great') {
            newLine.style.backgroundColor = '#d1fae5';
            newLine.style.borderLeft = '4px solid #10b981';
        } else if (moodLower === 'sad' || moodLower === 'bad' || moodLower === 'down') {
            newLine.style.backgroundColor = '#fee2e2';
            newLine.style.borderLeft = '4px solid #ef4444';
        } else if (moodLower === 'stressed' || moodLower === 'tired' || moodLower === 'anxious') {
            newLine.style.backgroundColor = '#fef3c7';
            newLine.style.borderLeft = '4px solid #f59e0b';
        } else if (moodLower === 'focused' || moodLower === 'productive' || moodLower === 'energetic') {
            newLine.style.backgroundColor = '#dbeafe';
            newLine.style.borderLeft = '4px solid #3b82f6';
        } else if (moodLower === 'sleepy') {
            newLine.style.backgroundColor = '#c8bfe3';
            newLine.style.borderLeft = '4px solid #9c079c';
        } else {
            newLine.style.backgroundColor = '#f3f4f6';
            newLine.style.borderLeft = '4px solid #6b7280';
        }

        const deleteBtn = document.createElement('button');
        deleteBtn.classList.add('delete-btn');
        deleteBtn.innerHTML = '<i class= "fas fa-trash"></i>';

        deleteBtn.addEventListener('click', () => {
            if (index >= 0 && index < moods.length)
            moods.splice(index,1);
            renderMoods();
            saveMoods();
       });

       newLine.appendChild(deleteBtn)
       moodListEl.appendChild(newLine);
    });

       entryCountEl.textContent = moods.length;
       saveMoods();
    };

function saveMoods() {
    localStorage.setItem('myMoods',  JSON.stringify(moods));
}


saveMoodEl.addEventListener('click', () => {
    const moodText = moodInputEl.value.trim();
    if (moodText === '') {
        moodInputEl.classList.add('shake');
        setTimeout(() => {
            moodInputEl.classList.remove('shake');
        }, 600);
        return;
    }

    const now = new Date();
    const timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit'});

    const newMood = { mood: moodText, time: timeString }

    moods.push(newMood);
    moodInputEl.value = '';

    saveMoods();
    renderMoods();
});