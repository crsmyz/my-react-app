import axios from "axios";

export const httpGetAPIData = async (apiEndpoint) => {
    return await axios.get(apiEndpoint);
}