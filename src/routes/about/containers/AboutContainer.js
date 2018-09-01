// Modules
import { connect } from "react-redux";
import About from "../components/About";
// Components

const mapStateToProps = (state, ownProps) => {
    return {
        state: state
    };
};

export default connect(
    mapStateToProps,
    {}
)(About);
