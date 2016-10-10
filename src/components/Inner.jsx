import React, {Component, PropTypes} from 'react';


class Inner extends Component {
    static propTypes = {
        user: PropTypes.object
    }

    render () {
        return (<div>
            {this.props.user.name}
        </div>)
    }
}

export default Inner;
