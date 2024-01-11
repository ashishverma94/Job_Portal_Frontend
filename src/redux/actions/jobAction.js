import { 
    JOB_LOAD_FAIL, 
    JOB_LOAD_REQUEST, 
    JOB_LOAD_SUCCESS,
    
    JOB_LOAD_SINGLE_FAIL, 
    JOB_LOAD_SINGLE_REQUEST, 
    JOB_LOAD_SINGLE_SUCCESS,
} from "../constants/jobconstant"
import axios from 'axios';

export const jobLoadAction = (pageNumber = '', keyword = '', cat = '', location = '') => async (dispatch) => {
    dispatch({
        type: JOB_LOAD_REQUEST
    })

    try {                                 
        const { data } = await axios.get(`/api/jobs/show/?pageNumber=${pageNumber}&keyword=${keyword}&location=${location}&cat=${cat}`)
        dispatch({
            type: JOB_LOAD_SUCCESS,
            payload: data
        });
    } catch (error) {
        dispatch({
            type: JOB_LOAD_FAIL,
            payload: error.response.data.error
        })
    }
}

// SINGLE JOB ACTION
export const jobLoadSingleAction = (id) => async (dispatch) => {
    dispatch({
        type: JOB_LOAD_SINGLE_REQUEST
    })

    try {
        const { data } = await axios.get(`/api/job/${id}`)
        dispatch({
            type: JOB_LOAD_SINGLE_SUCCESS,
            payload: data
        });
    } catch (error) {
        dispatch({
            type: JOB_LOAD_SINGLE_FAIL,
            payload: error.response.data.error
        })
    }
}