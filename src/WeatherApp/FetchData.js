import { httpGetAPIData } from './HttpRequestService';

export const fetchData = async (apiEndpoint, updateDataState, updateApiErrorState, updateLoadingState) => {
    try {
        updateLoadingState(true);
        const response = await httpGetAPIData(apiEndpoint);
        updateDataState(response.data);
    } catch (error) {
        updateApiErrorState(error.message);
        updateDataState(null);
    } finally {
        updateLoadingState(false);
    }
}