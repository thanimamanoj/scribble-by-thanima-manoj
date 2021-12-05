import axios from "axios";

const list = () => axios.get("/categories");
const show = id => axios.get(`/categories/${id}`);
const create = payload => axios.post("/categories/", payload);
const update = ({ id, payload }) => axios.put(`/categories/${id}`, payload);
const destroy = id => axios.delete(`/categories/${id}`);

const categoriesApi = {
  list,
  show,
  create,
  update,
  destroy,
};

export default categoriesApi;
