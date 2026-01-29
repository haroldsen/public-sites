
import { getPostById } from './posts.mjs';

const params = new URLSearchParams(window.location.search);
const id = params.get('id');

const post = getPostById(id);
populateBlogData(post);

function populateBlogData(post) {
    const mainElement = document.getElementsByTagName('main')[0];
    mainElement.insertAdjacentHTML('beforeend', `<h1>${post.title}</h1>`);
    mainElement.insertAdjacentHTML('beforeend', `<p>${post.content}</p>`);
    mainElement.insertAdjacentHTML('beforeend', `<p>${post.date}</p>`);
}
