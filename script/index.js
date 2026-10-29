//Getting the posts from the API
//The API access key is read-only, so it shouldn't introduce any security issues.
function getPosts() {
  /*
  fetch("https://api.jsonbin.io/v3/b/6ae1f58eac6210605a5922e8", {
    headers: {
      "X-Access-Key": "$2a$10$Q3EcQaVKNd7EblzzwqHK8.58uWIoFKuv7ODeC0k7BbVHU9B6ZEuJC"
    }
    }).then(response => response.json()).then(data => {
      updateContent(data.record);
    });
  */
  fetch("posts.json")
    .then(response => response.json())
    .then(data => {
      updateContent(data);
    });
}
//Updating the page content from the API response data. 
function updateContent(posts) {
    let main = document.getElementsByTagName("main")[0];
    for (let i = 0; i < posts.length; i++) {
        let article = document.createElement("ARTICLE");
        article.setAttribute("class", "post");
        article.setAttribute("id", posts[i].id);
        article.innerHTML = `
        <header>
          <div class="post-author">
            <span class="avatar"></span>
            <span class="author-name">${posts[i].author}</span>
          </div>
          <time datetime="${posts[i].date}">${posts[i].date}</time>
        </header>
        <h2>${posts[i].title}</h2>
        <img src="${posts[i].picture_source}">
        <p class="post-content">${posts[i].content}</p>
        <button class="like" type="button" aria-label="Like">👍</button>
        `
        main.appendChild(article);
    }
}

//Calling the getPosts function when the page is loaded.
document.addEventListener("DOMContentLoaded", getPosts);

//open/close the user dropdown by clicking the avatar
function setupUserMenu() {
  let avatar = document.querySelector(".user-menu .avatar");
  let dropdown = document.querySelector(".user-menu-dropdown");

  avatar.addEventListener("click", function () {
    dropdown.classList.toggle("open");
  });
}

document.addEventListener("DOMContentLoaded", setupUserMenu);