/**
 * * User settings persists in DB & indexDB respectively
 * ? @pattern: Singeton, enforce only one global settings Object
 */

export const ADD_SETTING = 'ADD_SETTING'
export const ADD_SETTING_SUCCESS = 'ADD_SETTING_SUCCESS'
export const ADD_SETTING_FAILED = 'ADD_SETTING_FAILED'

// //SETTINGS UPDATE MUST SYNC WITH UI & CACHE
export const UPDATE_SETTING = 'UPDATE_SETTING'
export const UPDATE_SETTING_FAILED = 'UPDATE_SETTING_FAILED'

export const DELETE_SETTING = 'DELETE_SETTING'
export const DELETE_SETTING_SUCCESS = 'DELETE_SETTING_FAILED'