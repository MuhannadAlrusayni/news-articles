import React from "react";

export interface Artical {
    title: string,
    author: string,
    publishedAt: string,
    url: string,
    urlToImg: string,
    description: string,
}

export type UpdateSearchFn = (text: string) => void;
export type UpdateArticalsFn = (articals: Artical[], totalArticals: number) => void;
export type GotoPageFn = (num: number) => void;

export interface AppState {
    searchText: string,
    articals: Artical[],
    currentPage: number,
    itemPerPage: number,
    totalArticals: number,
    updateSearchText: UpdateSearchFn,
    updateArticals: UpdateArticalsFn,
    gotoPage: GotoPageFn,
}

export const defaultStateValue: AppState = {
    searchText: "",
    articals: [],
    currentPage: 1,
    itemPerPage: 10,
    totalArticals: 0,
    updateSearchText: () => { },
    updateArticals: () => { },
    gotoPage: (_num: number) => { },
}

export const AppContext = React.createContext<AppState>(defaultStateValue);
