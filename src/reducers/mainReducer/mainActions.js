// import { timeoutPromise } from "../../utils/Tools";

export const LOADING = "LOADING";
export const DONE    = "DONE";

export const fetchData = () => {
    return async (dispatch) => {
        dispatch({
            type: LOADING,
        });
        // try {
        //     const response = await timeoutPromise(
        //         fetch(``)
        //     );
        //     if(!response.ok) {
        //         throw new Error("Error");
        //     }
        //     const resData = await response.json();
        //     dispatch({
        //         type: DONE,
        //         data: resData.data
        //     });
        // } catch (error) {
        //     throw error;
        // }
    }
}