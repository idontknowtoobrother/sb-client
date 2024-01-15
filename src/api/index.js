import axios from "axios";
import api from "../config/api";

export const requestReservation = async (reservationData) => {
    try {
        const request = await axios.post(`${api.apiEndpoint}/queue`, reservationData, {
            withCredentials: true
        });

        console.log('Response Status:', request.status);
        console.log('Response Data:', request.data);
        return request.data;
    } catch (error) {
        console.error('[requestReservation-error]:', error);
        throw error; // Rethrow the error to propagate it further
    }
}

export const getUserReservations = async () => {
    try {
        const request = await axios.get(`${api.apiEndpoint}/queue/user`, {
            withCredentials: true
        });

        console.log('Response Status:', request.status);
        console.log('Response Data:', request.data);
        return request.data;
    } catch (error) {
        console.error('[getUserReservations-error]:', error);
        throw error; // Rethrow the error to propagate it further
    }
}

export const getAllReservations = async () => {
    try {
        const request = await axios.get(`${api.apiEndpoint}/queue/`, {
            withCredentials: true
        });

        console.log('Response Status:', request.status);
        console.log('Response Data:', request.data);
        return request.data;
    } catch (error) {
        console.error('[getAllReservations-error]:', error);
        throw error; // Rethrow the error to propagate it further
    }
}

export const approveReservation = async (reservation) => {
    try {
        console.log(reservation);
        const request = await axios.patch(`${api.apiEndpoint}/queue/${reservation._id}`, {
            accepted: true
        }, {
            withCredentials: true
        });

        console.log('Response Status:', request.status);
        console.log('Response Data:', request.data);
        return request.data;
    } catch (error) {
        console.error('[approveReservation-error]:', error);
        throw error; // Rethrow the error to propagate it further
    }
}

export const getAllUsers = async () => {
    try {
        const request = await axios.get(`${api.apiEndpoint}/users/`, {
            withCredentials: true
        });

        console.log('Response Status:', request.status);
        console.log('Response Data:', request.data);
        return request.data;
    } catch (error) {
        console.error('[getAllUsers-error]:', error);
        throw error; // Rethrow the error to propagate it further
    }
}

export const deleteUser = async (userId) => {
    try {
        const request = await axios.delete(`${api.apiEndpoint}/users/${userId}`, {
            withCredentials: true
        });

        console.log('Response Status:', request.status);
        console.log('Response Data:', request.data);
        return request.data;
    } catch (error) {
        console.error('[deleteUser-error]:', error);
        throw error; // Rethrow the error to propagate it further
    }
}

export const getUserFromId = async (userId) => {
    try {
        const request = await axios.get(`${api.apiEndpoint}/users/${userId}`, {
            withCredentials: true
        });

        console.log('Response Status:', request.status);
        console.log('Response Data:', request.data);
        return request.data;
    } catch (error) {
        console.error('[getUserFromId-error]:', error);
        throw error; // Rethrow the error to propagate it further
    }
}

export const patchUserByStaff = async (userData) => {
    try {
        const request = await axios.patch(`${api.apiEndpoint}/users/staff/${userData.userId}`, userData, {
            withCredentials: true
        });

        console.log('Response Status:', request.status);
        console.log('Response Data:', request.data);
        return request.data;
    } catch (error) {
        console.error('[patchUserByStaff-error]:', error);
        throw error; // Rethrow the error to propagate it further
    }
}