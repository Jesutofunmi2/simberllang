import axios, { AxiosRequestConfig } from "axios";
import { getToken, removeToken } from "./token";

const token = getToken();
const baseURL = "http://35.174.253.210/";

if (token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
}

if (typeof window !== "undefined" && typeof document !== "undefined") {
    const csrfToken = document
        .querySelector('meta[name="csrf-token"]')
        ?.getAttribute("content");
    if (csrfToken) {
        axios.defaults.headers.common["X-CSRF-TOKEN"] = csrfToken;
    }
}

async function makeApiCall<T = any>(
    url: string,
    method: AxiosRequestConfig["method"] = "get",
    payload?: AxiosRequestConfig["data"],
    axiosRequestConfig?: Omit<AxiosRequestConfig, "url" | "method" | "data">,
): Promise<T> {
    try {
        if (!baseURL || typeof baseURL !== "string") {
            throw new Error("API_BASEURL is not defined");
        }
        const { data } = await axios({
            url,
            method,
            data: payload,
            baseURL,
            withCredentials: true,
            ...axiosRequestConfig,
        });
        return data;
    } catch (error: any) {
        if (error.response) {
            if (error.response.status === 401) {
                removeToken();
                // window.location.assign('/login')
            }

            throw new Error(error.response.data.message);
        }

        throw new Error(error.message);
    }
}

export default makeApiCall;
