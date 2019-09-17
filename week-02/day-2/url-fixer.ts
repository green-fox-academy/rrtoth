'use strict';

let url: string = 'https//www.reddit.com/r/nevertellmethebots';

url = url.replace("bots", "odds");

url = url.substring(0, 5) + ":" + url.substring(5);

console.log(url);
