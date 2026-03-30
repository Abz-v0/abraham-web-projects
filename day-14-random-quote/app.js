const quoteText = document.querySelector('#quoteText');
const quoteAuthor = document.querySelector('#quoteAuthor');
const newQuoteBtn = document.querySelector('#newQuoteBtn');
const portrait = document.querySelector('.portrait');

// Expanded gallery - now 30 sages with multiple quotes each
const authorPortraits = {
    "Socrates": "https://upload.wikimedia.org/wikipedia/commons/a/a4/Socrates_Louvre.jpg",
    "Seneca": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/0_S%C3%A9n%C3%A8que_-_Mus%C3%A9e_du_Prado_-_Cat._144_-_%282%29.JPG/250px-0_S%C3%A9n%C3%A8que_-_Mus%C3%A9e_du_Prado_-_Cat._144_-_%282%29.JPG",
    "Marcus Aurelius": "https://hips.hearstapps.com/hmg-prod/images/marcus-aurelius-gettyimages-122316830.jpg?crop=1xw:1.0xh;center,top&resize=640:*",
    "Epictetus": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk4ncymxB38Q54e3bNFHocH4eyDyEJ_pdFEQ&s",
    "Plato": "https://www.worldhistory.org/uploads/images/12427.jpg",
    "Aristotle": "https://upload.wikimedia.org/wikipedia/commons/a/ae/Aristotle_Altemps_Inv8575.jpg",
    "Nelson Mandela": "https://upload.wikimedia.org/wikipedia/commons/0/02/Nelson_Mandela_1994.jpg",
    "Bruce Lee": "https://i.pinimg.com/736x/dd/96/18/dd9618e2dd8c8a0cc0a83263f513aad5.jpg",
    "Steve Jobs": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpc28b1PoQfqoueAB4gLph_lBW1t4oX8fmUQ&s",
    "Buddha": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzCn_iBScdx93LlpPV4wLdU2PDlQauuieb0A&s",
    "Mahatma Gandhi": "https://res.cloudinary.com/aenetworks/image/upload/c_fill,ar_2,w_3840,h_1920,g_auto/dpr_auto/f_auto/q_auto:eco/v1/mahatma-gandhi-gettyimages-102701091-2048x2048-1?_a=BAVAZGB00",
    "Thomas Edison": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrXh5JG4sznLEySn7QltFmdikhO82Q_Poufg&s",
    "Albert Einstein": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQEEw7e0uEqfH-31jevGZU4WKdknJruD50Xw&s",
    "Maya Angelou": "https://hips.hearstapps.com/hmg-prod/images/maya_angelou_photo_by_deborah_feingold_corbis_entertainment_getty_533084708.jpg",
    "Confucius": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFwukn1iRO8QTYEu2Ue1NUd4POkkHDs1LrTw&s",
    "Lao Tzu": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmQLfCtxItGtTO71m0OQk0pVI5Ls3vD6EM0g&s",
    "Rumi": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeGsQ2FDCWYiqHItmHhzZZuuXhVT73rxbiwg&s",
    "Marcus Garvey": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXThp9SFsgwjDE4APt6oVcil7p522o4VXKmg&s",
    "Helen Keller": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZLLfK9dWsPqvs7PcB0b-IqIhIolXJT4sF0Q&s",
    "Leonardo da Vinci": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEDQ5OZv1icvOXTS5au6otty1GbKtu0NQZWg&s",
    "Frederick Douglass": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTS8-Ld-VOto6dI-s6SmalmvVRo2lDVf37-Lw&s",
    "Nikola Tesla": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgBmXa3vVOvWKVuLY7rY4MWaimI-UYvXXbhg&s",
    "Marie Curie": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqljTnYTEZpFtoTTd355gwlaiJjnOlwW3WxA&s",
    "Winston Churchill": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv9TAlgHAQnMrLw10VoYASoElj02VFgwF0SA&s",
    "Oscar Wilde": "https://upload.wikimedia.org/wikipedia/commons/9/9c/Oscar_Wilde_portrait.jpg",
    "Sun Tzu": "https://upload.wikimedia.org/wikipedia/commons/c/cf/%E5%90%B4%E5%8F%B8%E9%A9%AC%E5%AD%99%E6%AD%A6.jpg",
    "Benjamin Franklin": "https://cdn.britannica.com/72/110272-050-6E610A2C/Benjamin-Franklin.jpg?w=400&h=300&c=crop",
    "Eleanor Roosevelt": "https://upload.wikimedia.org/wikipedia/commons/7/7d/Eleanor_Roosevelt_at_the_United_Nations%2C_circa_1946-1947_%283x4_cropped%29.jpg",
    "Cleopatra": "https://res.cloudinary.com/jerrick/image/upload/d_642250b563292b35f27461a7.png,f_jpg,fl_progressive,q_auto,w_1024/645ae17855dbf1001d55ebf1.jpg",
    "Hypatia": "https://i.natgeofe.com/k/c1b61078-b55a-4aa1-8896-59c860447557/Hypatia_Painting_KIDS_Women-Heroes_02-21_3x4.jpg"
};

// Rich wisdom library - 60 quotes, multiple per author
const ancientQuotes = [
    // Socrates (3)
    { text: "The unexamined life is not worth living.", author: "Socrates" },
    { text: "I know that I know nothing.", author: "Socrates" },
    { text: "The only true wisdom is in knowing you know nothing.", author: "Socrates" },
    
    // Seneca (3)
    { text: "It is not the man who has too little, but the man who craves more, that is poor.", author: "Seneca" },
    { text: "Luck is what happens when preparation meets opportunity.", author: "Seneca" },
    { text: "We suffer more often in imagination than in reality.", author: "Seneca" },
    
    // Marcus Aurelius (4)
    { text: "You have power over your mind - not outside events. Realize this, and you will find strength.", author: "Marcus Aurelius" },
    { text: "The happiness of your life depends upon the quality of your thoughts.", author: "Marcus Aurelius" },
    { text: "Waste no more time arguing about what a good man should be. Be one.", author: "Marcus Aurelius" },
    { text: "Everything we hear is an opinion, not a fact. Everything we see is a perspective, not the truth.", author: "Marcus Aurelius" },
    
    // Epictetus (3)
    { text: "He who is not satisfied with a little is satisfied with nothing.", author: "Epictetus" },
    { text: "It is not what happens to you, but how you react to it that matters.", author: "Epictetus" },
    { text: "No man is free who is not master of himself.", author: "Epictetus" },
    
    // Plato (3)
    { text: "The greatest wealth is to live content with little.", author: "Plato" },
    { text: "Courage is knowing what not to fear.", author: "Plato" },
    { text: "At the touch of love everyone becomes a poet.", author: "Plato" },
    
    // Aristotle (3)
    { text: "We are what we repeatedly do. Excellence, then, is not an act, but a habit.", author: "Aristotle" },
    { text: "Quality is not an act, it is a habit.", author: "Aristotle" },
    { text: "The whole is greater than the sum of its parts.", author: "Aristotle" },
    
    // Buddha (3)
    { text: "Peace comes from within. Do not seek it without.", author: "Buddha" },
    { text: "The mind is everything. What you think you become.", author: "Buddha" },
    { text: "Three things cannot be long hidden: the sun, the moon, and the truth.", author: "Buddha" },
    
    // Lao Tzu (2)
    { text: "The journey of a thousand miles begins with one step.", author: "Lao Tzu" },
    { text: "Being deeply loved by someone gives you strength, while loving someone deeply gives you courage.", author: "Lao Tzu" },
    
    // Confucius (3)
    { text: "It does not matter how slowly you go as long as you do not stop.", author: "Confucius" },
    { text: "Our greatest glory is not in never falling, but in rising every time we fall.", author: "Confucius" },
    { text: "Wheresoever you go, go with all your heart.", author: "Confucius" },
    
    // Rumi (2)
    { text: "What you seek is seeking you.", author: "Rumi" },
    { text: "The wound is the place where the Light enters you.", author: "Rumi" },
    
    // Sun Tzu (2)
    { text: "The supreme art of war is to subdue the enemy without fighting.", author: "Sun Tzu" },
    { text: "Opportunities multiply as they are seized.", author: "Sun Tzu" },
    
    // Modern Leaders
    { text: "The greatest glory in living lies not in never falling, but in rising every time we fall.", author: "Nelson Mandela" },
    { text: "It always seems impossible until it's done.", author: "Nelson Mandela" },
    { text: "I learned that courage was not the absence of fear, but the triumph over it.", author: "Nelson Mandela" },
    
    { text: "Do not pray for an easy life, pray for the strength to endure a difficult one.", author: "Bruce Lee" },
    { text: "Be water, my friend.", author: "Bruce Lee" },
    
    { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    { text: "Stay hungry, stay foolish.", author: "Steve Jobs" },
    
    { text: "Be the change that you wish to see in the world.", author: "Mahatma Gandhi" },
    { text: "An eye for an eye only ends up making the whole world blind.", author: "Mahatma Gandhi" },
    
    // Scientists & Inventors
    { text: "I have not failed. I've just found 10,000 ways that won't work.", author: "Thomas Edison" },
    { text: "Genius is one percent inspiration and ninety-nine percent perspiration.", author: "Thomas Edison" },
    
    { text: "In the middle of difficulty lies opportunity.", author: "Albert Einstein" },
    { text: "Imagination is more important than knowledge.", author: "Albert Einstein" },
    
    { text: "Be less curious about people and more curious about ideas.", author: "Marie Curie" },
    { text: "Nothing in life is to be feared, it is only to be understood.", author: "Marie Curie" },
    
    { text: "The present is theirs; I, however, dwell in the future.", author: "Nikola Tesla" },
    
    // Artists & Thinkers
    { text: "Learning never exhausts the mind.", author: "Leonardo da Vinci" },
    { text: "Simplicity is the ultimate sophistication.", author: "Leonardo da Vinci" },
    
    { text: "People will forget what you said, but they will never forget how you made them feel.", author: "Maya Angelou" },
    { text: "We delight in the beauty of the butterfly, but rarely admit the changes it has gone through to achieve that beauty.", author: "Maya Angelou" },
    { text: "You may not control all the events that happen to you, but you can decide not to be reduced by them.", author: "Maya Angelou" },
    
    { text: "Be yourself; everyone else is already taken.", author: "Oscar Wilde" },
    { text: "To live is the rarest thing in the world. Most people exist, that is all.", author: "Oscar Wilde" },
    
    // Revolutionary Thinkers
    { text: "Emancipate yourselves from mental slavery. None but ourselves can free our minds.", author: "Marcus Garvey" },
    { text: "If there is no struggle, there is no progress.", author: "Frederick Douglass" },
    { text: "Without struggle there is no progress.", author: "Frederick Douglass" },
    
    { text: "Although the world is full of suffering, it is full also of the overcoming of it.", author: "Helen Keller" },
    { text: "The only thing worse than being blind is having sight but no vision.", author: "Helen Keller" },
    
    // Statesmen
    { text: "Success is not final, failure is not fatal: it is the courage to continue that counts.", author: "Winston Churchill" },
    { text: "If you're going through hell, keep going.", author: "Winston Churchill" },
    
    { text: "An investment in knowledge pays the best interest.", author: "Benjamin Franklin" },
    { text: "Tell me and I forget. Teach me and I remember. Involve me and I learn.", author: "Benjamin Franklin" },
    
    { text: "No one can make you feel inferior without your consent.", author: "Eleanor Roosevelt" },
    { text: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
    
    // Ancient Women
    { text: "I will not be triumphed over.", author: "Cleopatra" },
    
    { text: "Reserve your right to think, for even to think wrongly is better than not to think at all.", author: "Hypatia" }
];

let currentIndex = 0;

newQuoteBtn.addEventListener('click', () => {
    if (newQuoteBtn.disabled) return;
    newQuoteBtn.disabled = true;

    const loadingText = document.getElementById('loadingText');
    const quoteCard = document.querySelector('.quote-card');

    loadingText.style.opacity = '1';
    quoteCard.classList.add('fade-out');

    setTimeout(() => {
        try {
            let newIndex;
            do {
                newIndex = Math.floor(Math.random() * ancientQuotes.length);
            } while (newIndex === currentIndex && ancientQuotes.length > 1);
            
            currentIndex = newIndex;
            const quote = ancientQuotes[currentIndex];

            portrait.src = authorPortraits[quote.author] || "https://via.placeholder.com/100x100/8B4513/FFFFFF?text=Sage";
            portrait.alt = `Portrait of ${quote.author}`;

            quoteText.textContent = `"${quote.text}"`;
            quoteAuthor.textContent = `— ${quote.author}`;

        } catch (error) {
            console.error("Error:", error);
            quoteText.textContent = "The oracle is silent...";
            quoteAuthor.textContent = "";
        } finally {
            loadingText.style.opacity = '0';
            quoteCard.classList.remove('fade-out');
            quoteCard.classList.add('fade-in');
        }

        setTimeout(() => {
            quoteCard.classList.remove('fade-in');
            newQuoteBtn.disabled = false;
        }, 400);

    }, 500); 
});

const copyBtn = document.querySelector('.copy-button');
const iconCopy = document.querySelector('.icon-copy');
const iconCheck = document.querySelector('.icon-check');

copyBtn.addEventListener('click', async () => {
    const textCopy = `${quoteText.textContent} ${quoteAuthor.textContent}`;

    try {
        await navigator.clipboard.writeText(textCopy)
        copyBtn.classList.add('copied');
        
        setTimeout (() => {
            copyBtn.classList.remove('copied');
        },2000);

    } catch (error) {
        console.error ('Copy failed:', error);
        alert('Could not copy to clipboard');
    }

});

// Preload images
Object.values(authorPortraits).forEach(url => {
    const img = new Image();
    img.src = url;
});