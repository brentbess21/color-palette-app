import React from 'react';
import './ErrorPage.scss';

const ErrorPage : React.FC = () : React.ReactElement => {
    return (
        <div className={'errorPage'}>
            <h1>There was an error!</h1>
        </div>
    )
}

export default ErrorPage;