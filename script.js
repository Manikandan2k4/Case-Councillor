let loggedIn = false;


// Mock post data
const posts = [
    { id: 1, author: 'Author 1', description: 'Post 1 description.', likes: 10, comments: [] },
    { id: 2, author: 'Author 2', description: 'Post 2 description.', likes: 5, comments: [] },
    { id: 3, author: 'Author 3', description: 'Post 3 description.', likes: 2, comments: [] },
    { id: 4, author: 'Author 4', description: 'Post 4 description.', likes: 7, comments: [] },
    { id: 5, author: 'Author 5', description: 'Post 5 description.', likes: 12, comments: [] },
    { id: 6, author: 'Author 6', description: 'Post 6 description.', likes: 3, comments: [] },
    { id: 7, author: 'Author 7', description: 'Post 7 description.', likes: 4, comments: [] },
    { id: 8, author: 'Author 8', description: 'Post 8 description.', likes: 8, comments: [] },
    { id: 9, author: 'Author 9', description: 'Post 9 description.', likes: 11, comments: [] },
    { id: 10, author: 'Author 10', description: 'Post 10 description.', likes: 1, comments: [] },
    { id: 11, author: 'Author 11', description: 'Post 11 description.', likes: 15, comments: [] },
    { id: 12, author: 'Author 12', description: 'Post 12 description.', likes: 9, comments: [] },
    { id: 13, author: 'Author 13', description: 'Post 13 description.', likes: 2, comments: [] },
    { id: 14, author: 'Author 14', description: 'Post 14 description.', likes: 7, comments: [] },
    { id: 15, author: 'Author 15', description: 'Post 15 description.', likes: 12, comments: [] },
    { id: 16, author: 'Author 16', description: 'Post 16 description.', likes: 3, comments: [] },
    { id: 17, author: 'Author 17', description: 'Post 17 description.', likes: 4, comments: [] },
    { id: 18, author: 'Author 18', description: 'Post 18 description.', likes: 8, comments: [] },
    { id: 19, author: 'Author 19', description: 'Post 19 description.', likes: 11, comments: [] },
    { id: 20, author: 'Author 20', description: 'Post 20 description.', likes: 1, comments: [] },
    { id: 21, author: 'Author 21', description: 'Post 21 description.', likes: 15, comments: [] },
    { id: 22, author: 'Author 22', description: 'Post 22 description.', likes: 9, comments: [] }
];

let currentIndex = 0;
const postsPerPage = 10;

function displayPosts() {
    const postContainer = document.getElementById('post-container');
    
    for (let i = currentIndex; i < currentIndex + postsPerPage && i < posts.length; i++) {
        const post = posts[i];
        const postDiv = document.createElement('div');
        postDiv.classList.add('post');
        postDiv.innerHTML = `
            <h2 onclick="viewPost(${post.id})">${post.author}</h2>
            <p>${post.description}</p>
            <div class="actions">
                <button class="like-button" onclick="likePost(${post.id})">Like (${post.likes})</button>
            </div>
        `;
        postContainer.appendChild(postDiv);
    }
    
    currentIndex += postsPerPage;

    if (currentIndex >= posts.length) {
        document.getElementById('load-more-btn').style.display = 'none';
    }
}

function likePost(postId) {
    const post = posts.find(p => p.id === postId);
    if (post) {
        post.likes++;
        const likeButton = document.querySelector(`button[onclick="likePost(${postId})"]`);
        likeButton.innerText = `Like (${post.likes})`;
    }
}

function viewPost(postId) {
    const post = posts.find(p => p.id === postId);
    if (post) {
        document.getElementById('overlay-post-author').innerText = post.author;
        document.getElementById('overlay-post-description').innerText = post.description;
        document.getElementById('post-overlay').style.display = 'flex';
    }
}

function closeOverlay() {
    document.getElementById('post-overlay').style.display = 'none';
}

document.getElementById('load-more-btn').addEventListener('click', displayPosts);
document.getElementById('close-overlay-btn').addEventListener('click', closeOverlay);

// Initial load of posts
displayPosts();
