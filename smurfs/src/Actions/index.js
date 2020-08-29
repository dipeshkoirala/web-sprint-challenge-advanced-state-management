import axios from 'axios'

export const ActionTypes={
    FETCH:"FETCH_SMURFS",
    FETCH_SUCCESS: "FETCH_SMURFS_SUCCESS",
    FETCH_ERROR: "FETCH_SMURFS_ERROR",
};

const theAxios=axios.create({
    headers:{
        Accept:"Application/json",
    },
    baseURL:"http://localhost:3333"
})

/*  [*] Retrieve an array all the Smurfs in the Smurf DB by writing a `GET` to the endpoint `/smurfs`. */
export const fetchSmurfs = () => (dispatch) => {
    dispatch({ type: ActionTypes.FETCH });
    theAxios.get("/smurfs")
    .then((res) => {
    console.log("RESPONSE", res);
    dispatch({
    type: ActionTypes.FETCH_SUCCESS,
    payload: res.data,
    });
    })
    .catch((err) => {
    dispatch({
    type: ActionTypes.FETCH_ERROR,
    payload: err,
    });
    });
    };

    export const addSmurf = (smurf) => (dispatch) => {
        theAxios.post("/smurfs", smurf)
        .then((res) => {
        dispatch({
        type: ActionTypes.FETCH_SUCCESS,
        payload: res.data,
        });
        })
        .catch((err) => {
        dispatch({
        type: ActionTypes.FETCH_ERROR,
        payload: err,
        });
        });
       };