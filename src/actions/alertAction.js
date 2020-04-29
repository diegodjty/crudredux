import {
    SHOW_ALERT,
    HIDE_ALERT
} from '../types'

// Show an alert

export function showAlertAction(alert){
    return(dispatch) =>{
        dispatch(showAlert())
    }
}

const showAlert = alert => ({
    type: SHOW_ALERT,
    payload: alert
})