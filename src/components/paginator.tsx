import React, { ReactElement, useState } from 'react';
import { AppContext, AppState, Artical, UpdateArticalsFn } from '../context/app-context';
import { get_articals, search_for_articals } from '../services/news-api-service';

export const Paginator: React.FunctionComponent = (): ReactElement => {
    // return range from..to as an array
    const range = (from: number, to: number, step: number = 1) =>
        [...Array(Math.floor((to - from) / step) + 1)].map((_, i) => from + i * step);

    const btns = (appState: AppState) => {
        const numPgaes = Number((appState.totalArticals / appState.itemPerPage).toFixed(0));
        // only allow 10 pages maximum, since after that we need newsapi paid account
        const pages = range(1, numPgaes > 10 ? 10 : numPgaes);
        return pages.map((num) => (
            <button key={num} className={num == appState.currentPage ? "rounded py-1 px-2 bg-blue-700 text-white m-1" : "border rounded py-1 px-2 m-1"} onClick={(_e) => {
                appState.gotoPage(num);
            }}> {num}</button >
        ))
    };

    return (
        <AppContext.Consumer>
            {(appState) => (
                <div className="flex flex-wrap items-center flex-none">
                    {btns(appState)}
                </div>
            )}
        </AppContext.Consumer>
    )
}
