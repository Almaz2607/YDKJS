import { create as newBlogPost } from './blogpost.js';

var post = newBlogPost(
    'For and against let',
    'Kyle Simpson',
    'June 2014',
    'https://world.mechanick'
);

post.print();
