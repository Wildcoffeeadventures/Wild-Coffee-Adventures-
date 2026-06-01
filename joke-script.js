// Joke Generator Script
let currentJoke = null;
let currentCategory = 'general';

// Get a random joke
async function getJoke() {
    const jokeDisplay = document.getElementById('jokeDisplay');
    const getJokeBtn = document.getElementById('getJokeBtn');
    const copyBtn = document.getElementById('copyBtn');
    const jokeInfo = document.getElementById('jokeInfo');

    // Show loading state
    getJokeBtn.disabled = true;
    jokeDisplay.innerHTML = '<div class="spinner"></div>';
    copyBtn.style.display = 'none';
    jokeInfo.classList.remove('show');

    try {
        let apiUrl = '';

        if (currentCategory === 'programming') {
            // Programming jokes API
            apiUrl = 'https://official-joke-api.appspot.com/jokes/programming/random';
        } else if (currentCategory === 'knock-knock') {
            // Knock-knock jokes API
            apiUrl = 'https://official-joke-api.appspot.com/jokes/knock-knock/random';
        } else {
            // General random joke
            apiUrl = 'https://official-joke-api.appspot.com/random_joke';
        }

        const response = await fetch(apiUrl);

        if (!response.ok) {
            throw new Error('Failed to fetch joke');
        }

        const joke = await response.json();
        currentJoke = joke;

        // Display the joke
        displayJoke(joke);

        // Show copy button and info
        copyBtn.style.display = 'block';
        showJokeInfo(`Joke from: ${joke.id ? 'Official Joke API' : 'Random Joke'}`);

        // Add success animation
        jokeDisplay.classList.add('success');
        setTimeout(() => jokeDisplay.classList.remove('success'), 500);

    } catch (error) {
        jokeDisplay.innerHTML = `
            <p style="color: #e74c3c;">
                😞 Oops! Couldn't fetch a joke.<br>
                <small>Error: ${error.message}</small><br>
                <small>Please try again!</small>
            </p>
        `;
        console.error('Error fetching joke:', error);
    } finally {
        getJokeBtn.disabled = false;
    }
}

// Display joke in the correct format
function displayJoke(joke) {
    const jokeDisplay = document.getElementById('jokeDisplay');

    if (joke.type === 'twopart') {
        // Two-part joke (setup and punchline)
        jokeDisplay.innerHTML = `
            <div>
                <p class="setup">${escapeHtml(joke.setup)}</p>
                <p class="punchline">👉 ${escapeHtml(joke.delivery)}</p>
            </div>
        `;
    } else {
        // Single joke
        jokeDisplay.innerHTML = `<p class="single-joke">${escapeHtml(joke.joke)}</p>`;
    }
}

// Get joke by category
function getJokeByCategory(category) {
    currentCategory = category;

    // Update active button
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');

    // Get new joke
    getJoke();
}

// Copy joke to clipboard
function copyToClipboard() {
    if (!currentJoke) return;

    let jokeText = '';

    if (currentJoke.type === 'twopart') {
        jokeText = `${currentJoke.setup}\n👉 ${currentJoke.delivery}`;
    } else {
        jokeText = currentJoke.joke;
    }

    // Copy to clipboard
    navigator.clipboard.writeText(jokeText).then(() => {
        const copyBtn = document.getElementById('copyBtn');
        const originalText = copyBtn.textContent;

        // Show feedback
        copyBtn.textContent = '✓ Copied!';
        copyBtn.style.background = '#4CAF50';

        // Reset after 2 seconds
        setTimeout(() => {
            copyBtn.textContent = originalText;
            copyBtn.style.background = '';
        }, 2000);
    }).catch(err => {
        console.error('Failed to copy:', err);
        alert('Failed to copy joke to clipboard');
    });
}

// Show joke info
function showJokeInfo(text) {
    const jokeInfo = document.getElementById('jokeInfo');
    jokeInfo.textContent = text;
    jokeInfo.classList.add('show');

    setTimeout(() => {
        jokeInfo.classList.remove('show');
    }, 5000);
}

// Escape HTML to prevent XSS
function escapeHtml(text) {
    const map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
    };
    return text.replace(/[&<>"']/g, m => map[m]);
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    // Optional: Load a joke on page load
    // getJoke();

    // Add keyboard support
    document.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            getJoke();
        }
    });

    console.log('Joke Generator ready!');
});
