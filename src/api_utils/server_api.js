import axios from "axios";

const BE_URL = import.meta.env.VITE_BE_URL;
export const adduserapi = async (userdata) => {
  try {
    const response = await axios.post(`${BE_URL}/register`, userdata);
    return response.data;
  } catch (err) {
    return err.response.data;
  }
};
export const loginuserapi = async (userdata) => {
  try {
    const response = await axios.post(`${BE_URL}/login`, userdata);
    return response.data;
  } catch (err) {
    throw new Error(err.response.data.msg);
  }
};
export const emailverifyapi = async (useremail) => {
  try {
    const response = await axios.post(`${BE_URL}/verify-email`, useremail);
    return response.data;
  } catch (err) {
    throw new Error(err.response.data.msg);
  }
};
export const resetpasswordapi = async (token, resetpassword) => {
  try {
    const response = await axios.post(
      `${BE_URL}/reset-password?token=${token}`,
      resetpassword
    );
    return response.data;
  } catch (err) {
    console.log(err);
    throw new Error(err.response.data.msg);
  }
};
