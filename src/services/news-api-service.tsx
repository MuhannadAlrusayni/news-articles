import { Artical } from "../context/app-context";

// API KEY for newsapi: 7a1ef3d7a2b5423a8d742834c14ce906
const API_KEY = "7a1ef3d7a2b5423a8d742834c14ce906";

export function get_articals(page: number, pageSize: number): Artical[] {
    /* const url = 'https://newsapi.org/v2/everything?' +
*     'pageSize=' + pageSize + '&' +
*     'page=' + page + '&' +
*     'apiKey=' + API_KEY;

* const response = await fetch(url); */
    return [
        {
            title: "test",
            author: "muhnnad",
            publishedAt: "2022-1-3 12:20PM",
            url: "expmaple.com",
            urlToImg: "image.com",
        },
        {
            title: "test1",
            author: "muhnnad22",
            publishedAt: "2022-1-3 12:20PM",
            url: "expmaple.com",
            urlToImg: "image.com",
        }
    ]
}

export function search_for_articals(text: string): Artical[] {
    return []
}
