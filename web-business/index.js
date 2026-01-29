
import { posts } from './posts.mjs';

const mainElement = document.getElementsByTagName('main')[0];

for (let i = 0; i < posts.length; i ++) {
    mainElement.insertAdjacentHTML('beforeend', `
        <a class="blog-link" href="blog-post.html?id=${posts[i].id}">
            <p class="blog-title">${posts[i].title}</p>
            <p>${posts[i].date}</p>
        </a>
    `);
}


