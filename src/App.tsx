import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ListNewsApi } from './components/list-news-api';
import { Artical, AppState, AppContext } from './context/app-context';
import { get_articals } from './services/news-api-service';

class App extends React.Component<{}, AppState> {
    gotoPage: (num: number) => void;
    updateArticals: (articals: Artical[]) => void;
    state: AppState;

    constructor(props: {}) {
        super(props);

        this.gotoPage = (num: number) => {
            if (0 > num && num < 11) {
                this.setState(state => ({
                    currentPage: num
                }))
            }
        }

        this.updateArticals = (articals: Artical[]) => {
            this.setState(state => ({
                articals: articals
            }))
        }

        this.state = {
            articals: get_articals(1, 10),
            currentPage: 1,
            updateArticals: this.updateArticals,
            gotoPage: this.gotoPage,
        }
    }

    render() {
        return (
            <AppContext.Provider value={this.state}>
                <div className="App">
                    <ListNewsApi />
                </div>
            </AppContext.Provider>
        );
    }
}

export default App;
