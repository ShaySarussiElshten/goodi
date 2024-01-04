export const ASTRIX = '*';
export const PROFILE_ID = 'profileId';

export enum BUTTONS {
    GO_BACK = 'go_back',
    FREE_REPORT = 'call_to_action_free_report',
    GET_STARTED = 'registration_get_stated',
    AGREE_TERMS =  'terms_condition_agree',
    CANCEL = 'cancel',
    SEND_MFA_CODE = 'send_mfa_code',
    RESEND = 'resend',
    CONTINUE = 'continue',
    SEND_EMAIL = 'send_email',
    LOGIN = 'login',
    UPDATE_PASSWORD = 'update_password',
    EDIT = 'edit',
    DELETE = 'delete',
    ADD = 'add_profile',
    UPGRADE_TO_PREMIUM = 'to_plans',
    EXPORT_DRUGS = 'export_drugs',
    TO_DIAGNOSIS = 'another_diasgnosis',
    TO_PERSONAL_AREA = 'to_my_account',
}

export enum INPUTS {
    EMAIL = 'registartion_email',
    PHONE = 'registration_phone',
    MFA = 'registration_mfa',
    USERNAME = 'registration_username',
    PASSWORD = 'registration_password',
    PASSWORD_VALIDATE = 'registration_password_validate',
    NAME = 'name',
    BIRTHDATE='birthYear',
    GENDER='gender',
    WEIGHT = 'weight',
    HMO='hmo',
    HEIGHT = 'height',
    ISDAILY = 'isDaily',
    ALLERGY = 'allergy',
    ALLERGY_COMPONENTS = 'allergy_components',
    LAST_YEAR_DOSAGE_CHANGE = 'last_year_dosage_change',
    PAST_HOSPITALIZATION = 'past_hospitalizations',
    PAST_DOCTOR_VISITS = 'past_doctor_visits',
    DRUG_NAME = 'drug_name',
    LAST_YEAR_DOSAGE='last_year_dosage_change',
    SIDE_EFFECTS='side_effects',
    DRUG_STOPPED='stoppedDrugs',
    NEW_PASSWORD = 'new_password',
    NEW_PASSWORD_VALIDATE = 'new_password_validate',
}

export enum POPUPS {
    LOGIN_NO_PROFILES = 'login_no_profiles',
    REGISTER_SUCCESS = 'registerSuccessPopup',
    DELETE_CONFIRMATION = 'delete_confirmation',
    SIDE_EFFECTS_POP ='side_effects'
}

export enum DELETE_CONFIRMATION_POPUPS {
    DRUG = 'drug',
    PROFILE = 'profile',
    REPORT = 'report',
    USER = 'user'
}

export enum CLINICAL_STATUS {
    IN_PROCESS = 0,
    ERROR = 1,
    NO_ALERTS = 2,
    AS_SIMULATED_ALERTS = 3,
    HAS_ALERTS = 4
}

export const CLINICAL_STATUS_COLORS = Object.freeze({
  [CLINICAL_STATUS.IN_PROCESS]: '#FFFFFF',
  [CLINICAL_STATUS.ERROR]: '#010000',
  [CLINICAL_STATUS.NO_ALERTS]: '#66CC00',
  [CLINICAL_STATUS.AS_SIMULATED_ALERTS]: '#FF9933',
  [CLINICAL_STATUS.HAS_ALERTS]: '#FF0000',
});

export enum REPORT_TYPE {
    INVALID = 0,
    FREE = 1,
    PREMIUM = 2
}

export enum SUCCESS_MESSAGE_ID {
    REPORT = 'reportSendSuccessMsg',
    MEDICATIONS = 'drugReportSendSuccessMsg',
}

export enum PROPFILE_FORM {
    DRUG_DETAILED = 'drug_detailed',
    TITLE = 'title',
    NO_RESULT = 'no_results',
    EDIT_TITLE = 'edit_title'
}

export enum DAILY_DOSAGE_AMOUNT_TYPE {
    INPUTS_CONST = 'inputs',
    SUM='sum'
}

export enum ERROR_MESSAGE {
    REQUIRED_MSG='requiredMsg',
    EMAIL_FORMAT_MSG = 'emailFormatMsg',
    SPECIAL_CHAR_PASSWORD = 'specialCharPasswordMsg',
    ISRALI_PHONE = 'israeliPhoneMsg',
    FULL_NAME = 'fullnameMsg',
    YEAR_MSG = 'yearMsg',
    NUMBER_MSG = 'numberMsg',
    MAX_MSG = 'maxMsg',
    MIN_MSG = 'minMsg',
    MSG_PROFILE_EXISTS = 'profileExistingMsg',
    PERIODIC_DOSAGE_PERIOD_MSG = 'periodicDosagePeriodMsg',
    PERIODIC_DOSAGE_AMOUNT_MSG = 'periodicDosageAmmountMsg',
    MINIMUM_WEIGHT_MSG = 'minimumWeightMsg',
    MINIMUM_HEIGHT_MSG = 'minimumHeightMsg',
}
