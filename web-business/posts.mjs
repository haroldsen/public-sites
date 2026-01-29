
export const posts = [
    {
        id: 1,
        date: '2026.01.28',
        title: 'A Supermodel',
        content: 'This is my content.'
    },
];

export function getPostById(id) {
    for (let i = 0; i < posts.length; i ++) {
        if (posts[i].id == id) {
            return posts[i];
        }
    }
}

