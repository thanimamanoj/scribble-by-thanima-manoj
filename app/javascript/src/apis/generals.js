import axios from "axios";

const show = () => axios.get(`/generals/1`);
const update = ({ payload }) => axios.put(`/generals/1`, payload);

const generalsApi = {
  show,
  update,
};

export default generalsApi;
