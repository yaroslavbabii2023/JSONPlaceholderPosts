
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(array => {
       const list = document.querySelector(".posts-list");
       array.forEach((item, index) => {
        // create element
         const post = document.createElement("li");
         const postIndex = document.createElement("span");
         const postTitle = document.createElement("h4");
         const postText = document.createElement("p");
         const postReadMoreLink = document.createElement("a");
        // add class 
         post.classList.add('post-list-item');
         postIndex.classList.add('post-index');
         postTitle.classList.add('post-title');
         postText.classList.add('post-text');
         postReadMoreLink.classList.add('post-link');
        //  modification element
         postIndex.innerHTML = index + 1;
         postTitle.innerHTML = item.title;
         postText.innerHTML = item.body;
         postReadMoreLink.innerHTML = 'Read more';
        // 
         post.append(postIndex, postTitle, postText, postReadMoreLink);
         list.appendChild(post);
       });
    });



