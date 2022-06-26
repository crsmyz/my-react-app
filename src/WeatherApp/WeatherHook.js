import { useState } from "react";
import { fetchData } from './FetchData';

const useGetFetchData = (apiEndpoint) => {
    const [response, setResponse] = useState(null);
    const [apiError, setApiError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    console.log('rendering bitch!!!')

    const onClickFetchData = () => {
        fetchData(apiEndpoint, setResponse, setApiError, setIsLoading);
    }

    return {response, apiError, isLoading, onClickFetchData};
}

export default useGetFetchData;