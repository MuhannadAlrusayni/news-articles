import React, { ReactElement, useState } from 'react';
import { AppContext, AppState, Artical, UpdateArticalsFn } from '../context/app-context';
import { get_articals, search_for_articals } from '../services/news-api-service';

export const Paginator: React.FunctionComponent = (): ReactElement => {
    const pages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    return (
        <AppContext.Consumer>
            {(appState) => (
                <div className="flex items-center space-x-3">
                    {
                        pages.map((num) => <button key={num} onClick={(_e) => appState.gotoPage(num)}>{num}</button>)
                    }
                </div>
            )}
        </AppContext.Consumer>
    )
}
