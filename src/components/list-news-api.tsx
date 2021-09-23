import React from 'react';
import { AppContext, AppState, Artical } from '../context/app-context';

export class ListNewsApi extends React.Component {
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <AppContext.Consumer>
                {({ articals }) => into_rows(articals)}
            </AppContext.Consumer>
        )
    }
}

function into_rows(articals: Artical[]): JSX.Element[] {
    return articals.map((artical: Artical, index: number) => (
        <div key={index}>
            <h1>{artical.title}</h1>
            <p>Author: {artical.author}</p>
            <p>Published at: {artical.publishedAt}</p>
            <p>URL: {artical.url}</p>
            <p>imgURL: {artical.urlToImg}</p>
            <p>description: {artical.description}</p>
        </div>
    ))
}
