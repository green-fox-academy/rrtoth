import { BlogPost } from "../week-03/day-2/blog-post"

class Blog {
    list: BlogPost[];

    constructor(list?: BlogPost[]) {
        if (list) {
            this.list = list;
        } else {
            this.list = [];
        }
    }

    public add(post: BlogPost): void {
        this.list.push(post);
    }

    public delete(e) {
        this.list.splice(e, 1)
    }

    public update(e, BlogPost) {
        this.list.splice(e, 1, BlogPost)
    }
}

let asd = new Blog;

let test1 = new BlogPost('1', '1', '1', '1');
let test2 = new BlogPost('2', '2', '2', '2');
let test3 = new BlogPost('3', '3', '3', '3');
let test4 = new BlogPost('4', '4', '4', '4');
let test5 = new BlogPost('5', '5', '5', '5');

asd.add(test1)
asd.add(test2)
asd.add(test3)
asd.add(test4)

asd.delete(2)
asd.update(1, test5)

console.log(asd)

// Reuse your BlogPost class
// Create a Blog class which can
// store a list of BlogPosts
// add BlogPosts to the list
// delete(int) one item at given index
// update(int, BlogPost) one item at the given index and update it with another BlogPost