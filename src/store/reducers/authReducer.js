import {
    SIGNUP, SIGNUP_SUCCESS, SIGNUP_FAILURE,
    SIGNIN, SIGNIN_SUCCESS, SIGNIN_FAILURE,
    LOGOUT, LOGOUT_SUCCESS, LOGOUT_FAILURE,
    CREATE_PREDICTORS_FIRSTDISPLAY, CREATE_PREDICTORS_SECONDDISPLAY, CREATE_PREDICTORS_THIRDDISPLAY,
    MODALTYPE_FIRSTDISPLAY, MODALTYPE_SECONDDISPLAY, MODALTYPE_THIRDDISPLAY,
    MODALTYPE2_FIRSTDISPLAY, MODALTYPE2_SECONDDISPLAY, MODALTYPE2_THIRDDISPLAY, OPTIMIZER_EDIT_MODAL,
    CREATE_PREICTORS_FLAG, PREDICTORS_EDIT_MODEL_DATA, DATASET_COMPONENT, DATASET_COMP_FEATURES,
    STEPPER_STEP, CREATE_PREDICTORS_COMPONENT_CHANGE, PREDICTORS_COMP_FEATURES, CREATE_AN_OPTIMIZER, OPTIMIZER_COMP_FEATURES,
    EDIT_DASHBOARD_MODAL, CREATE_A_DASHBOARD, PREDICTORS_EDIT_MODAL_FLAG, DATASET_POPOVER, PREDICTORS_POPOVER
} from '../constants'

const initialState = {
    user: {},
    authUser: {},
    isLoading: false,
    isError: false,
    error: {},
    isLoggedIn: false,
    createPredictorsFirstDisplay: '',
    createPredictorsSecondDisplay: '',
    CreatePredictorsThirdDisplay: '',
    modalTypeFirstDisplay: '',
    modalTypeSecondDisplay: '',
    modalTypeThirdDisplay: '',
    modalType2FirstDisplay: '',
    modalType2SecondDisplay: '',
    modalType2ThirdDisplay: '',
    createPredictorsflag: '',
    modalType: '',
    modaltypeflags: '',
    activeStepper: '',
    createPredictorscomponentchange: '',
    predictorsEditModalData: '',
    dataSetComponent: true,
    datsetCompfeatures: '',
    predictorsCompFeatures: '',
    OptimizerEditModal: '',
    CreateAnOptimizer: true,
    optimizersCompFeatures: '',
    EditDashboardModal: '',
    CreateADashboard: true,
    PredictorsEditModalFlag: '',
    DatasetPopover: '',
    PredictorsPopover: ''
}

export default function authReducer(state = initialState, action) {
    switch (action.type) {
        case SIGNUP:
            return {
                ...state,
                authUser: {},
                user: {},
                isLoading: true,
                isError: false,
                error: {},
                isLoggedIn: false,
            }
        case SIGNUP_SUCCESS:
            return {
                ...state,
                authUser: action.payload,
                isLoading: false,
            }
        case SIGNUP_FAILURE:
            return {
                ...state,
                isLoading: false,
                isError: true,
                error: action.error
            }
        case SIGNIN:
            return {
                ...state,
                user: {},
                authUser: {},
                isLoading: true,
                isError: false,
                error: {},
                isLoggedIn: false,
            }
        case SIGNIN_SUCCESS:
            return {
                ...state,
                user: action.payload,
                authUser: action.payload,
                isLoading: false,
                isLoggedIn: true,
            }
        case SIGNIN_FAILURE:
            return {
                ...state,
                isLoading: false,
                isError: true,
                error: action.error
            }
        case LOGOUT:
            return {
                ...state,
                isLoading: true
            }
        case LOGOUT_SUCCESS:
            return {
                ...state,
                authUser: {},
                user: {},
                isLoading: false,
                isError: false,
                error: {},
                isLoggedIn: false,
            }
        case LOGOUT_FAILURE:
            return {
                ...state,
                isLoading: false,
                isError: true,
                error: action.error
            }

        case CREATE_PREDICTORS_FIRSTDISPLAY:
            return {
                ...state,
                createPredictorsFirstDisplay: action.payload
            }

        case CREATE_PREDICTORS_SECONDDISPLAY:
            return {
                ...state,
                createPredictorsSecondDisplay: action.payload
            }

        case CREATE_PREDICTORS_THIRDDISPLAY:
            return {
                ...state,
                CreatePredictorsThirdDisplay: action.payload
            }

        case MODALTYPE_FIRSTDISPLAY:
            return {
                ...state,
                modalTypeFirstDisplay: action.payload
            }

        case MODALTYPE_SECONDDISPLAY:
            return {
                ...state,
                modalTypeSecondDisplay: action.payload
            }

        case MODALTYPE_THIRDDISPLAY:
            return {
                ...state,
                modalTypeThirdDisplay: action.payload
            }

        case MODALTYPE2_FIRSTDISPLAY:
            return {
                ...state,
                modalType2FirstDisplay: action.payload
            }

        case MODALTYPE2_SECONDDISPLAY:
            return {
                ...state,
                modalType2SecondDisplay: action.payload
            }

        case MODALTYPE2_THIRDDISPLAY:
            return {
                ...state,
                modalType2ThirdDisplay: action.payload
            }

        case CREATE_PREICTORS_FLAG:
            return {
                ...state,
                createPredictorsflag: action.payload
            }

        case STEPPER_STEP:
            return {
                ...state,
                activeStepper: action.payload
            }

        case CREATE_PREDICTORS_COMPONENT_CHANGE:
            return {
                ...state,
                createPredictorscomponentchange: action.payload
            }

        case PREDICTORS_EDIT_MODEL_DATA:
            return {
                ...state,
                predictorsEditModalData: action.payload
            }

        case PREDICTORS_EDIT_MODAL_FLAG:
            return {
                ...state,
                PredictorsEditModalFlag: action.payload
            }

        case DATASET_COMPONENT:
            return {
                ...state,
                dataSetComponent: action.payload
            }

        case DATASET_COMP_FEATURES:
            return {
                ...state,
                datsetCompfeatures: action.payload
            }

        case PREDICTORS_COMP_FEATURES:
            return {
                ...state,
                predictorsCompFeatures: action.payload
            }

        case OPTIMIZER_EDIT_MODAL:
            return {
                ...state,
                OptimizerEditModal: action.payload
            }

        case CREATE_AN_OPTIMIZER:
            return {
                ...state,
                CreateAnOptimizer: action.payload
            }

        case OPTIMIZER_COMP_FEATURES:
            return {
                ...state,
                optimizersCompFeatures: action.payload
            }

        case EDIT_DASHBOARD_MODAL:
            return {
                ...state,
                EditDashboardModal: action.payload
            }

        case CREATE_A_DASHBOARD:
            return {
                ...state,
                CreateADashboard: action.payload
            }

        case DATASET_POPOVER:
            return {
                ...state,
                DatasetPopover: action.payload
            }

        case PREDICTORS_POPOVER:
            return {
                ...state,
                PredictorsPopover: action.payload
            }

        default:
            return state
    }
}