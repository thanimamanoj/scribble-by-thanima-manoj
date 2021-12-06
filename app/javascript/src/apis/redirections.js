import axios from "axios";

const list = () => axios.get("/redirections");
const create = payload => axios.post("/redirections/", payload);
const show = id => axios.get(`/redirections/${id}`);
const update = ({ id, payload }) => axios.put(`/redirections/${id}`, payload);

const redirectionsApi = {
  list,
  create,
  show,
  update,
};

export default redirectionsApi;
