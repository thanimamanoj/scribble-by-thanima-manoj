import axios from "axios";

const list = () => axios.get("/articles");
const show = id => axios.get(`/articles/${id}`);
const create = payload => axios.post("/articles/", payload);
const update = ({ id, payload }) => axios.put(`/articles/${id}`, payload);

const articlesApi = {
  list,
  show,
  create,
  update,
};

export default articlesApi;
