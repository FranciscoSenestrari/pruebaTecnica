import { axiosInstance } from "./../utils/utils";
import { type AxiosRequestConfig } from "axios";
import { toast } from "react-hot-toast";
export async function fetchData<T>(
  url: string,
  config?: AxiosRequestConfig
): Promise<T> {
  try {
    const response = await axiosInstance.get<T>(url, {
      ...config,
    });
    return response.data;
  } catch (error) {
    toast.error("Failed to fetch data, please try again.");
    throw error;
  }
}
export async function postData<T>(
  url: string,
  data: any,
  config?: AxiosRequestConfig
): Promise<T> {
  try {
    const response = await axiosInstance.post<T>(url, data, config);
    return response.data;
  } catch (error) {
    toast.error("Failed to post data, please try again.");
    throw error;
  }
}
