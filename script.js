// This is where we'll store our data
let imageData = {};
let comments = [];
let likes = 0;

// When page loads, get the data
window.onload = function() {
    getImage();
    getComments();
    setupButtons();
};

// Get image from server
function getImage() {
    fetch('http://localhost:3000/images/1')
        .then(response => response.json())
        .then(data => {
            imageData = data;
            showImage();
        })
        .catch(error => {
            console.log('Error getting image:', error);
        });
}

// Get comments from server
function getComments() {
    fetch('http://localhost:3000/comments')
        .then(response => response.json())
        .then(data => {
            comments = data.filter(comment => comment.imageId === 1);
            showComments();
        })
        .catch(error => {
            console.log('Error getting comments:', error);
        });
}

// Show the image on page
function showImage() {
    document.getElementById('title').textContent = imageData.title;
    document.getElementById('image').src = imageData.image;
    document.getElementById('like-count').textContent = imageData.likes + ' likes';
    likes = imageData.likes;
}

// Show comments on page
function showComments() {
    const commentList = document.getElementById('comment-list');
    commentList.innerHTML = '';
    
    for (let i = 0; i < comments.length; i++) {
        const commentDiv = document.createElement('div');
        commentDiv.className = 'comment';
        commentDiv.textContent = comments[i].content;
        commentDiv.onclick = function() {
            deleteComment(comments[i].id);
        };
        commentList.appendChild(commentDiv);
    }
}

// Set up all button clicks
function setupButtons() {
    // Like button
    document.getElementById('like-btn').onclick = function() {
        likes++;
        document.getElementById('like-count').textContent = likes + ' likes';
    };
    
    // Add comment button
    document.getElementById('comment-btn').onclick = function() {
        const input = document.getElementById('comment-input');
        const text = input.value.trim();
        if (text) {
            addComment(text);
            input.value = '';
        }
    };
    
    // Title click to hide/show image
    document.getElementById('title').onclick = function() {
        const img = document.getElementById('image');
        if (img.classList.contains('hidden')) {
            img.classList.remove('hidden');
        } else {
            img.classList.add('hidden');
        }
    };
    
    // Image click for random dog
    document.getElementById('image').onclick = function() {
        getRandomDog();
    };
}

// Add new comment
function addComment(text) {
    const newComment = {
        id: Date.now(),
        imageId: 1,
        content: text
    };
    comments.push(newComment);
    showComments();
    
    // Save to server
    fetch('http://localhost:3000/comments', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            imageId: 1,
            content: text
        })
    });
}

// Delete comment
function deleteComment(commentId) {
    comments = comments.filter(comment => comment.id !== commentId);
    showComments();
    
    // Delete from server
    fetch('http://localhost:3000/comments/' + commentId, {
        method: 'DELETE'
    });
}

// Get random dog image
function getRandomDog() {
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json())
        .then(data => {
            document.getElementById('image').src = data.message;
            
            // Update server
            fetch('http://localhost:3000/images/1', {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    image: data.message
                })
            });
        })
        .catch(error => {
            console.log('Error getting random dog:', error);
        });
}