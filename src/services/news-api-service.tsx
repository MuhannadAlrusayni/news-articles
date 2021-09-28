import { title } from "process";
import { Artical } from "../context/app-context";

// API KEY for newsapi: 7a1ef3d7a2b5423a8d742834c14ce906
const API_KEY = "7a1ef3d7a2b5423a8d742834c14ce906";

export async function get_articals(page: number, pageSize: number): Promise<Artical[]> {
    const url = 'https://newsapi.org/v2/top-headlines?' +
        'country=us' +
        '&pageSize=' + pageSize +
        '&page=' + page +
        '&apiKey=' + API_KEY;

    return fetch_articals(url);
}

export async function search_for_articals(text: string, page: number, pageSize: number): Promise<Artical[]> {
    const url = 'https://newsapi.org/v2/everything?' +
        '&q=' + text +
        '&pageSize=' + pageSize +
        '&page=' + page +
        '&apiKey=' + API_KEY;

    return fetch_articals(url);
}

async function fetch_articals(url: string): Promise<Artical[]> {
    const response = await fetch(url);
    const json = await response.json();
    if (response.ok) {
        return json["articals"].map(toArtical);
    } else {
        console.log("failed to fetch data from newsapi: " + json["message"]);
        return [];
    }
}

function toArtical(article: any): Artical {
    return {
        title: article["title"],
        author: article["author"],
        publishedAt: article["publishedAt"],
        url: article["url"],
        urlToImg: article["urlToImage"],
        description: article["description"],
    }
}
