
import React from 'react';
import createReactClass from 'create-react-class';
import ReactDOM from 'react-dom';

var FirstComponent = createReactClass({
    render: function() {
        return (<p>Hello world.</p>);
    }
});

ReactDOM.render(<FirstComponent />, document.getElementById('mount-point') );