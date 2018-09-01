// Modules
import React from "react";

/**
 * Our Presentational, Stateless Component that just renders data for us
 * @param props
 * @returns {void | *}
 * @constructor
 */
const Home = props =>
    console.log(props) || (
        <div onClick={props.dispatchAction}>
            <p>Click here to call API</p>
            <p>
                The status of the API request:{" "}
                <span className={props.statusApi}> {props.statusApi}</span>
            </p>
        </div>
    );

export default Home;
