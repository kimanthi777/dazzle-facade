export const UPLOAD_DOCUMENT = 'UPLOAD_DOCUMENT'
export const UPLOAD_DOCUMENT_UPLOADING = 'UPLOAD_DOCUMENT_UPLOADING'
export const UPLOAD_DOCUMENT_SUCCESS = 'UPLOAD_DOCUMENT_SUCCESS'
export const UPLOAD_DOCUMENT_FAILED = 'UPLOAD_DOCUMENT_FAILED'

export const DOWNLOAD_DOCUMENT = 'DOWNLOAD_DOCUMENT'
export const DOWNLOAD_DOCUMENT_DOWNLOADING = 'DOWNLOAD_DOCUMENT_DOWNLOADING'
export const DOWNLOAD_DOCUMENT_SUCCESS = 'DOWNLOAD_DOCUMENT_SUCCESS'
export const DOWNLOAD_DOCUMENT_FAILED = 'DOWNLOAD_DOCUMENT_FAILED'

export const EDIT_DOCUMENT = 'EDIT_DOCUMENT'
export const EDIT_DOCUMENT_EDITING = 'EDIT_DOCUMENT_EDITING'
export const EDIT_DOCUMENT_SUCCESS = 'EDIT_DOCUMENT_SUCCESS'
export const EDIT_DOCUMENT_FAILED = 'EDIT_DOCUMENT_FAILED' // network? support offline or lacks roles to [i/e view only]

export const DELETE_DOCUMENT = 'DELETE_DOCUMENT'
export const DELETE_DOCUMENT_LOADING = 'DELETE_DOCUMENT_LOADING'
export const DELETE_DOCUMENT_SUCCESS = 'DELETE_DOCUMENT_SUCCESS'
export const DELETE_DOCUMENT_FAILED = 'DELETE_DOCUMENT_FAILED'


/**
 * visibility ::
 * id
 * lastEdited
 */
// PRIVATE<only you> | PROTECTED<anyone with the link within & account> | PUBLIC<literally anonyone>