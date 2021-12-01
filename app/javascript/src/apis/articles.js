import axios from "axios";

const list = () => axios.get("/articles");
const show = id => axios.get(`/articles/${id}`);
const create = payload => axios.post("/articles/", payload);
const update = ({ id, payload }) => axios.put(`/articles/${id}`, payload);
const destroy = id => axios.delete(`/articles/${id}`);

const articlesApi = {
  list,
  show,
  create,
  update,
  destroy,
};

export default articlesApi;
