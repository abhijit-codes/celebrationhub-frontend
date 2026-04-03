import axios from "axios";

export const createOrder = async (amount) => {
  return axios.post("http://localhost:5000/api/payment/create-order", {
    amount,
  });
};