const searchBar = document.querySelector('.search-bar');
const searchBtn = document.querySelector('.search-btn');

searchBtn.onclick = () => {
    searchBar.classList.toggle('show');
}
