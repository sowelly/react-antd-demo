import axiosInstance from './axiosInstance'
import {AxiosResponse} from "axios";

interface IAxiosResponse extends AxiosResponse {
    code: number
}

export const getUsers = () => {
    return axiosInstance.get(`api/users`);
};

export const getUserByID = (userId: number) => {
    return axiosInstance.get(`api/users/${userId}`);
};

export const getWeatherFromCity = (city: string): Promise<IAxiosResponse> => {
    return axiosInstance.get(`api/weather/${city}`);
};

export const createUser = (userData: Object) => {
    return axiosInstance.post('/users', userData);
};

export const updateUser = (userId: number, userData: Object) => {
    return axiosInstance.put(`/users/${userId}`, userData);
};

export const deleteUser = (userId: number) => axiosInstance.delete(`/users/${userId}`);
//