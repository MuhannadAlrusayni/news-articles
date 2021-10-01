import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ListNewsApi } from './components/list-news-api';
import { Artical, AppState, AppContext, GotoPageFn, UpdateArticalsFn, UpdateSearchFn, defaultStateValue } from './context/app-context';
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
                    .then(([articals, total]) => this.updateArticals(articals, total))
            } else {
                search_for_articals(text, this.state.currentPage, this.state.itemPerPage)
                    .then(([articals, total]) => this.updateArticals(articals, total))
            }
        }

        this.gotoPage = (num: number) => {
            // if num less than 1 exit
            if (num < 1) {
                return;
            }

            this.setState({ currentPage: num }, () => { updateContent(this.state.searchText) });
        }

        this.updateArticals = (articals: Artical[], totalArticals: number) => {
            this.setState({ articals: articals, totalArticals: totalArticals })
        }

        this.updateSearchText = (text: string) => {
            const trimedText = text.trim();
            if (this.state.searchText != trimedText) {
                this.setState({
                    searchText: trimedText,
                    currentPage: 1,
                }, () => { updateContent(trimedText) });
            }
        }

        this.state = {
            ...defaultStateValue,
            updateArticals: this.updateArticals,
            gotoPage: this.gotoPage,
            updateSearchText: this.updateSearchText,
        }

    }

    componentDidMount() {
        get_articals(this.state.currentPage, this.state.itemPerPage)
            .then(([articals, total]) => this.state.updateArticals(articals, total));
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
