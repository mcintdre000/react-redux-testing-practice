import React from 'react';
import Header from './Header';

const App = ({ children }) => {
    return (
        <div>
            App
            <Header />
            { children }
        </div>
    );
};

export default App;