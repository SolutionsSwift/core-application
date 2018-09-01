import api from "axios";
import { call, put } from "redux-saga/effects";

const headers = {
    headers: {
        //Authorization:
        //Add Token here
    }
}

/**
 * Saga that handles GET requests
 * @param action
 * @returns {IterableIterator<*|CallEffect>}
 */
export function* fetchApiGET(action) {
    yield put({ type: "FETCH_API_LOADING" });
    try {
        const result = yield call(api.get, action.url, headers);
        console.log("success", result);
        yield put({ type: "FETCH_API_SUCCESS", payload: result });
    } catch (error) {
        console.log("error", error);
        yield put({ type: "FETCH_API_ERROR", payload: error });
    }
}
