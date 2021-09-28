import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ListNewsApi } from './components/list-news-api';
import { Artical, AppState, AppContext, GotoPageFn, UpdateArticalsFn, UpdateSearchFn } from './context/app-context';
import { get_articals, search_for_articals } from './services/news-api-service';
import { SearchBar } from './components/search-bar';
import { Paginator } from './components/paginator';

class App extends React.Component<{}, AppState> {
    gotoPage: GotoPageFn;
    updateArticals: UpdateArticalsFn;
    updateSearchText: UpdateSearchFn;
    state: AppState;

    constructor(props: {}) {
        super(props);

        const updateContent = (text: string) => {
            if (text == "") {
                get_articals(this.state.currentPage, this.state.itemPerPage)
                    .then(this.updateArticals)
            } else {
                search_for_articals(text, this.state.currentPage, this.state.itemPerPage)
                    .then(this.updateArticals)
            }
        }

        this.gotoPage = (num: number) => {
            // if num not in 1..10 exit
            if (!(0 < num && num < 11)) {
                return;
            }

            this.setState(state => ({
                currentPage: num
            }))

            updateContent(this.state.searchText);
        }

        this.updateArticals = (articals: Artical[]) => {
            this.setState(state => ({
                articals: articals
            }))
        }

        this.updateSearchText = (text: string) => {
            this.setState(state => ({
                searchText: text,
                currentPage: 1,
            }))

            updateContent(text);
        }

        this.state = {
            searchText: "",
            articals: [],
            currentPage: 1,
            itemPerPage: 10,
            updateArticals: this.updateArticals,
            gotoPage: this.gotoPage,
            updateSearchText: this.updateSearchText,
        }

    }

    componentDidMount() {
        get_articals(this.state.currentPage, this.state.itemPerPage)
            .then(result => this.state.updateArticals(result));
    }

    render() {
        return (
            <AppContext.Provider value={this.state}>
                <div className="App p-4 flex flex-col space-y-4">
                    <SearchBar />
                    <ListNewsApi />
                    <Paginator />
                </div>
            </AppContext.Provider>
        );
    }
}

export default App;
