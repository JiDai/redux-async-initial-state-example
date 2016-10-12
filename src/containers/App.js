import React from 'react';
import ReactDOM from 'react-dom';

import {connect} from 'react-redux';
import Inner from '../components/Inner'

class App extends React.Component {
    render () {
        if (this.props.loading) {
            return <div>Loading...</div>
        }
        return (<div>OK :
            <Inner user={this.props.user}/>
        </div>);
    }
}

// Link state to props
export default connect(
    state => {
        return {
            user: state.user.user,
            loading: state.asyncInitialState.loading,
        }
    }
)(App)
