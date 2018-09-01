import { takeLatest } from "redux-saga/effects";

// Sagas
import { dispatchSaga } from "../routes/home/modules/sagas";

/**
 * This saga will wait until DISPATCH message is dispatched and then go to function.
 * @returns {IterableIterator<*|ForkEffect>}
 */
export function* rootSaga() {
    yield takeLatest("DISPATCH", dispatchSaga);
}

