// Modules
import { connect } from "react-redux";

// Components
import Home from "../components/Home";

// ActionCreators
import { dispatchAction } from "../modules/actionCreators";

// Selectors
import { selectState, selectApiStatus } from "../modules/selectors";

/**
 * Selectors: select something from the state and pass it through as prop
 * @param state
 * @param ownProps
 * @returns {{location: *}}
 */
const mapStateToProps = (state, ownProps) => {
    return {
        state: selectState(state),
        statusApi: selectApiStatus(state)
    };
};

/**
 * Actions: pass ActionCreators as prop
 * @param dispatch
 * @param ownProps
 * @returns {{dispatchAction: dispatchAction}}
 */
const mapDispatchToProps = {
    dispatchAction
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);
