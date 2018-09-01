// Modules
import React from "react";

/**
 * Our Presentational, Stateless Component that just renders data for us
 * @param props
 * @returns {void | *}
 * @constructor
 */
const About = props =>
    console.log(props) || <div onClick={props.dispatchAction}>About</div>;

export default About;
