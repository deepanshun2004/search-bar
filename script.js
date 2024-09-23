
const searchButton = document.getElementById('searchButton');
const clearHistoryButton = document.getElementById('clearHistoryButton');
const searchInput = document.getElementById('searchInput');
const searchHistoryList = document.getElementById('searchHistoryList');


let searchHistory = [];


document.addEventListener('DOMContentLoaded', loadSearchHistory);

function loadSearchHistory() {
    const history = JSON.parse(localStorage.getItem('searchHistory')) || [];

    
    searchHistory = history;

   
    updateHistoryList();
}

function updateHistoryList() {
    searchHistoryList.innerHTML = '';
    searchHistory.forEach(term => {
        const li = document.createElement('li');
        li.textContent = term;
        searchHistoryList.appendChild(li);
    });
}


searchButton.addEventListener('click', () => {
    const searchTerm = searchInput.value.trim();
    if (searchTerm) {
     
        searchHistory.push(searchTerm);

 
        localStorage.setItem('searchHistory', JSON.stringify(searchHistory));

        updateHistoryList();

        searchInput.value = '';
    }
});

clearHistoryButton.addEventListener('click', () => {
    localStorage.removeItem('searchHistory');
    searchHistory = [];
    updateHistoryList();
});
