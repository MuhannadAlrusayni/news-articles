import React from 'react';
import { AppContext, AppState, Artical } from '../context/app-context';

export class ListNewsApi extends React.Component {
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <div className="overflow-x-hidden overflow-y-auto flex-grow bg-gray-100 rounded border p-2">
                <div className="flex flex-col space-y-4">
                    <AppContext.Consumer>
                        {({ articals }) => into_rows(articals)}
                    </AppContext.Consumer>
                </div>
            </div>
        )
    }
}

function into_rows(articals: Artical[]): JSX.Element[] {
    if (articals.length == 0) {
        return [
            <div key="no-articels" className="text-xl font-lg text-gray-500">There is no articles, try another keywords</div>
        ];
    } else {
        return articals.map((artical: Artical, index: number) => (
            <div key={index} className="p-7 bg-white flex flex-col sm:flex-row shadow items-center space-x-4 space-y-2">
                <div className="w-full sm:w-96 h-52 items-center flex overflow-hidden">
                    <img className="object-contain h-full w-full" src={artical.urlToImg} alt="News Image" />
                </div>
                <div className="flex flex-col w-full overflow-hidden items-start text-left">
                    <div className="text-xl font-md text-black mt-1">{artical.title}</div>
                    <div className="text-sm font-large text-gray-500 mt-1">{artical.description}</div>
                    <div className="text-sm font-large text-gray-500 mt-1"><strong>Author:</strong> {artical.author}</div>
                    <div className="text-sm font-large text-gray-500 mt-1"><strong>Published at:</strong> {artical.publishedAt}</div>
                    <a className="rounded py-2 px-6 bg-blue-700 text-white mt-2" href={artical.url} target="_blank">Visit</a>
                </div>
            </div>
        ))
    }
}
