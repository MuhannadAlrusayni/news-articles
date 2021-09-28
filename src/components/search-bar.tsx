import React, { ReactElement, useState } from 'react';
import { AppContext, AppState, Artical, UpdateArticalsFn } from '../context/app-context';
import { get_articals, search_for_articals } from '../services/news-api-service';

type ChangeEvent = React.ChangeEvent<HTMLInputElement>;

export const SearchBar: React.FunctionComponent = (): ReactElement => {
    const [input, setInput] = useState<string>("");

    const inputChnaged = (event: ChangeEvent, appState: AppState): void => {
        let value = event.target.value;
        setInput(value);
        appState.updateSearchText(value);
    };

    return (
        <AppContext.Consumer>
            {(appState) => (
                <div className="flex items-center space-x-3">
                    <div className="text-gray-500" >Search</div>
                    <input onChange={(event) => inputChnaged(event, appState)} type="text" value={input} />
                </div>
            )}
        </AppContext.Consumer>
    )
}
