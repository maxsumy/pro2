import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Start from "./pages/start";


const App = () => {
    return (
       <div>
           <Start/>
       </div>
    )
};

ReactDOM.render(<App />, document.getElementById('root'));
