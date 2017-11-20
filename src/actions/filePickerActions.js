import { FILES_PICKED } from '../constants/actionTypes';

export const filesPicked = (files) => {
    return {
        type: FILES_PICKED,
        files: files
    }
};