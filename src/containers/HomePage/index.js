import React from 'react';
import HomePage from './HomePage';
import { searchAsync } from '../../actions';
import { connect } from 'react-redux';

export class HomePageContainer extends React.Component {
    state = {
        form: {
            city: "",
            country: ""
        }
    }

    onSearch = (e) => {
        e.preventDefault();
        this.props.dispatch(searchAsync(this.state.form, () => this.props.history.push("/Result")));
    }
    render(){
        return (
            <HomePage form={this.state.form} onSearch={this.onSearch}
                    />
        )
    }
}

const mapStateToProps = (state, props) => {
    return {
        //isLoading: state.loading.active
    }
}

HomePageContainer = connect(
    mapStateToProps
)(HomePageContainer);

export default connect(mapStateToProps)(HomePageContainer);