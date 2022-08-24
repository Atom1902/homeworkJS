

const url = new URL(window.location.href)

const urlPost = url.searchParams.get('post');

const post = JSON.parse(urlPost);

document.title= `Comments ${post.title}`;

const wrapper = document.createElement('div');

document.body.appendChild(wrapper);

const postHeader = document.createElement('h2');
postHeader.innerText = `Post`;
postHeader.style.textAlign = 'center';

const postBlockDiv = document.createElement('div');
wrapper.append(postBlockDiv);



const userId = document.createElement('h2');
userId.innerText = `User id: ${post.userId}`;

const postTitle = document.createElement('h3');
postTitle.innerText = `Title: ${post.title}`;

const postBody = document.createElement('h3');
postBody.style.fontWeight = '200'
postBody.innerText = `${post.body}`;

const commentsBlock = document.createElement('div');
commentsBlock.classList.add('commentsBlock');


postBlockDiv.append(postHeader,userId, postTitle, postBody,commentsBlock);

fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
    .then(response => response.json())
    .then(comments => {
        for (const comment of comments) {
            const commentBlock = document.createElement('div');
            commentBlock.classList.add('commentBlock');

            commentsBlock.appendChild(commentBlock);

            const commentIdPost = document.createElement('h4');
            commentIdPost.innerText = `Post id: ${post.id}`;

            const  commentId = document.createElement('h4');
            commentId.innerText = `ID: ${comment.id}`;

            const  commentName = document.createElement('h5');
            commentName.innerText = `Name: ${comment.name}`;

            const  commentEmail = document.createElement('h5');
            commentEmail.style.fontWeight='200';
            commentEmail.innerText = `Email: ${comment.email}`;

            const  commentBody = document.createElement('h5');
            commentBody.style.fontWeight='200';
            commentBody.innerText = `${comment.body}`;


            commentBlock.append(commentIdPost, commentId, commentName, commentEmail, commentBody);
        }
    });


