import React from 'react';
import { AppContext, AppState, Artical } from '../context/app-context';

export class ListNewsApi extends React.Component {
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <div className="flex flex-col space-y-8">
                <AppContext.Consumer>
                    {({ articals }) => into_rows(articals)}
                </AppContext.Consumer>
            </div>
        )
    }
}

function into_rows(articals: Artical[]): JSX.Element[] {
    return articals.map((artical: Artical, index: number) => (
        <div key={index} className="p-7 bg-white flex shadow items-center space-x-4 space-y-2">
            <div className="w-96 h-52 items-center flex">
                <img className="object-contain h-full w-full" src={artical.urlToImg} alt="News Image" />
            </div>
            <div className="flex flex-col items-start space-y-1 text-left">
                <div className="text-xl font-md text-black">{artical.title}</div>
                <div className="text-sm font-large text-gray-500">{artical.description}</div>
                <div className="text-sm font-large text-gray-500">Author: {artical.author} published at: {artical.publishedAt}</div>
                <div className="text-sm font-large text-gray-500">Source: {artical.url}</div>
            </div>
        </div>
    ))
}
