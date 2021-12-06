import axios from "axios";

const list = () => axios.get("/redirections");
const create = payload => axios.post("/redirections/", payload);
const show = id => axios.get(`/redirections/${id}`);
const update = ({ id, payload }) => axios.put(`/redirections/${id}`, payload);
const destroy = id => axios.delete(`/redirections/${id}`);

const redirectionsApi = {
  list,
  create,
  show,
  update,
  destroy,
};

export default redirectionsApi;
