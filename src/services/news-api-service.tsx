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

    const response = await fetch(url);
    return response
        .json()
        .then(function(result: any) {
            return result["articles"].map(function(article: any): Artical {
                return {
                    title: article["title"],
                    author: article["author"],
                    publishedAt: article["publishedAt"],
                    url: article["url"],
                    urlToImg: article["urlToImage"],
                    description: article["description"],
                }
            });
        });
}

export function search_for_articals(text: string): Artical[] {
    return []
}
