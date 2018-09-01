import { fetchApiGET } from "../../../services/api/apiSagas";
import { call } from "redux-saga/effects";

export function* dispatchSaga(action) {
    const request = transformer(action);

    // Call the function for doing the request
    yield call(fetchApiGET, request);
}

/**
 * Transformer: transform data into request data
 * @returns {{url: string}}
 */
function transformer(action) {
    console.log("transformer", action);

    return {
        url: "https://api.github.com"
    };
}
