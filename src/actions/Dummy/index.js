import * as ActionType from "./action-type";

export const dummy = () => ({
    type: ActionType.DUMMY,
    payload: {
        request: {
            url: "https://dummyjson.com/posts",
            method: "GET",
        }
    }
})