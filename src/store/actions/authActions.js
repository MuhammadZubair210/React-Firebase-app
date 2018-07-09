import {
    SIGNUP, SIGNUP_SUCCESS, SIGNUP_FAILURE,
    SIGNIN, SIGNIN_SUCCESS, SIGNIN_FAILURE,
    LOGOUT, LOGOUT_SUCCESS, LOGOUT_FAILURE,
    CREATE_PREDICTORS_FIRSTDISPLAY, CREATE_PREDICTORS_SECONDDISPLAY, CREATE_PREDICTORS_THIRDDISPLAY,
    MODALTYPE_FIRSTDISPLAY, MODALTYPE_SECONDDISPLAY, MODALTYPE_THIRDDISPLAY,
    MODALTYPE2_FIRSTDISPLAY, MODALTYPE2_SECONDDISPLAY, MODALTYPE2_THIRDDISPLAY,
    PREDICTORS_EDIT_MODEL_DATA, DATASET_COMPONENT, DATASET_COMP_FEATURES, OPTIMIZER_EDIT_MODAL,
    CREATE_PREICTORS_FLAG, PREDICTORS_COMP_FEATURES, CREATE_AN_OPTIMIZER, EDIT_DASHBOARD_MODAL,
    STEPPER_STEP, CREATE_PREDICTORS_COMPONENT_CHANGE, OPTIMIZER_COMP_FEATURES, CREATE_A_DASHBOARD,
    PREDICTORS_EDIT_MODAL_FLAG, DATASET_POPOVER , PREDICTORS_POPOVER
} from '../constants'

export default class AuthActions {

    static signup(user) {
        return {
            type: SIGNUP,
            payload: user
        }
    }

    static signupSuccess(data) {
        return {
            type: SIGNUP_SUCCESS,
            payload: data
        }
    }

    static signupFailure(error) {
        return {
            type: SIGNUP_FAILURE,
            error: error
        }
    }

    static signin(user) {
        return {
            type: SIGNIN,
            payload: user
        }
    }

    static signinSuccess(data) {
        return {
            type: SIGNIN_SUCCESS,
            payload: data
        }
    }

    static signinFailure(error) {
        return {
            type: SIGNIN_FAILURE,
            error: error
        }
    }

    static logout() {
        return {
            type: LOGOUT
        }
    }

    static logoutSuccess() {
        return {
            type: LOGOUT_SUCCESS
        }
    }

    static logoutFailure(error) {
        return {
            type: LOGOUT_FAILURE,
            error: error
        }
    }

    static CreatePredictorsFirstDisplay(data) {
        return {
            type: CREATE_PREDICTORS_FIRSTDISPLAY,
            payload: data
        }
    }

    static CreatePredictorsSecondDisplay(data) {
        return {
            type: CREATE_PREDICTORS_SECONDDISPLAY,
            payload: data
        }
    }

    static CreatePredictorsThirdDisplay(data) {
        return {
            type: CREATE_PREDICTORS_THIRDDISPLAY,
            payload: data
        }
    }

    static ModalTypeFirstDisplay(data) {
        return {
            type: MODALTYPE_FIRSTDISPLAY,
            payload: data
        }
    }

    static ModalTypeSecondDisplay(data) {
        return {
            type: MODALTYPE_SECONDDISPLAY,
            payload: data
        }
    }

    static ModalTypeThirdDisplay(data) {
        return {
            type: MODALTYPE_THIRDDISPLAY,
            payload: data
        }
    }

    static modalType2FirstDisplay(data) {
        return {
            type: MODALTYPE2_FIRSTDISPLAY,
            payload: data
        }
    }

    static modalType2SecondDisplay(data) {
        return {
            type: MODALTYPE2_SECONDDISPLAY,
            payload: data
        }
    }

    static modalType2ThirdDisplay(data) {
        return {
            type: MODALTYPE2_THIRDDISPLAY,
            payload: data
        }
    }

    static createPredictorsComponent(flags) {
        return {
            type: CREATE_PREICTORS_FLAG,
            payload: flags
        }
    }

    static stepperActiveStep(activeStep) {
        return {
            type: STEPPER_STEP,
            payload: activeStep
        }
    }

    static createPredictorsComponentChange(change) {
        return {
            type: CREATE_PREDICTORS_COMPONENT_CHANGE,
            payload: change
        }
    }

    static PredictorsEditModalData(data) {
        return {
            type: PREDICTORS_EDIT_MODEL_DATA,
            payload: data
        }
    }

    static PredictorsEditModalFlag(flag) {
        return {
            type: PREDICTORS_EDIT_MODAL_FLAG,
            payload: flag
        }
    }

    static dataSetComponent(change) {
        return {
            type: DATASET_COMPONENT,
            payload: change
        }
    }

    static datsetCompfeatures(flag) {
        return {
            type: DATASET_COMP_FEATURES,
            payload: flag
        }
    }

    static predictorsCompFeatures(flag) {
        return {
            type: PREDICTORS_COMP_FEATURES,
            payload: flag
        }
    }

    static OptimizerEditModal(flag) {
        return {
            type: OPTIMIZER_EDIT_MODAL,
            payload: flag
        }
    }

    static CreateAnOptimizer(flag) {
        return {
            type: CREATE_AN_OPTIMIZER,
            payload: flag
        }
    }

    static optimizersCompFeatures(flag) {
        return {
            type: OPTIMIZER_COMP_FEATURES,
            payload: flag
        }
    }

    static EditDashboardModal(flag) {
        return {
            type: EDIT_DASHBOARD_MODAL,
            payload: flag
        }
    }

    static CreateADashboard(flag) {
        return {
            type: CREATE_A_DASHBOARD,
            payload: flag
        }
    }

    static DatasetPopover(flag) {
        return {
            type: DATASET_POPOVER,
            payload: flag
        }
    }

    static PredictorsPopover(obj){
        return {
            type : PREDICTORS_POPOVER,
            payload : obj
        }
    }
}