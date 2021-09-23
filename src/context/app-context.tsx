import React from "react";

export interface Artical {
    title: string,
    author: string,
    publishedAt: string,
    url: string,
    urlToImg: string,
    description: string,
}

export interface AppState {
    articals: Artical[],
    currentPage: number,
    updateArticals: (articals: Artical[]) => void,
    gotoPage: (num: number) => void,
}

const defaultValue: AppState = {
    articals: [],
    currentPage: 1,
    updateArticals: () => { },
    gotoPage: (_num: number) => { },
}

export const AppContext = React.createContext<AppState>(defaultValue);
