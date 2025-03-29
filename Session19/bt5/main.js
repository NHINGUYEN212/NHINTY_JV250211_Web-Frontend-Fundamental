document.addEventListener('DOMContentLoaded', loadBookmarks);

function toggleModal() {
    let modal = document.getElementById('bookmarkModal');
    modal.style.display = modal.style.display === 'flex' ? 'none' : 'flex';
}

function addBookmark() {
    let name = document.getElementById('name').value.trim().toUpperCase();
    let url = document.getElementById('url').value.trim();
    if (!name || !url) {
        alert('Please fill in both fields');
        return;
    }
    
    let bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];
    let newBookmark = { name, url };
    bookmarks.push(newBookmark);
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    
    document.getElementById('bookmarkList').innerHTML = '';
    loadBookmarks();
    
    document.getElementById('name').value = '';
    document.getElementById('url').value = '';
    toggleModal();
}

function renderBookmark(bookmark, index) {
    let bookmarkList = document.getElementById('bookmarkList');
    let item = document.createElement('div');
    item.classList.add('bookmark-item');
    item.dataset.id = index;
    item.innerHTML = `
        <a href="${bookmark.url}" target="_blank">
            <img src="https://www.google.com/s2/favicons?domain=${bookmark.url}" alt="favicon"> ${bookmark.name}
        </a>
        <button onclick="deleteBookmark(${index})">&times;</button>
    `;
    bookmarkList.appendChild(item);
}

function deleteBookmark(index) {
    let bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];
    bookmarks.splice(index, 1);
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    document.getElementById('bookmarkList').innerHTML = '';
    loadBookmarks();
}

function loadBookmarks() {
    let bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];
    document.getElementById('bookmarkList').innerHTML = '';
    bookmarks.forEach((bookmark, index) => renderBookmark(bookmark, index));
}
