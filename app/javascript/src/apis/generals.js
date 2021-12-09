import axios from "axios";

const show = () => axios.get(`/general`);
const update = ({ payload }) => axios.put(`/general`, payload);

const generalsApi = {
  show,
  update,
};

export default generalsApi;
