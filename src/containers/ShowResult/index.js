import React from 'react';
import ShowResult from './ShowResult';

export class ShowResultContainer extends React.Component {

    state = {
    }

    render(){
        return (
            <ShowResult result={this.props.result} />
        )
    }
}

const mapStateToProps = (state, props) => {
    return {
        result: state.result
    }
}

ShowResultContainer = connect(
    mapStateToProps
)(ShowResultContainer);

export default connect(mapStateToProps)(ShowResultContainer);