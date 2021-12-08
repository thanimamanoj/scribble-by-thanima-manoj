import React from "react";

import { Route, BrowserRouter as Router } from "react-router-dom";

import ShowArticle from "./ShowArticle";
import Sidebar from "./Sidebar";

const index = () => {
  // const [data, setData] = useState([]);
  // const [loading, setLoading] = useState(false);

  // const fetchContent = async () => {
  //   try {
  //     setLoading(true);
  //     const response = await categoriesApi.fetchCategory();
  //     setData(response.data.categories);
  //     setLoading(false);
  //   } catch (error) {
  //     logger.error(error);
  //     setLoading(false);
  //   }
  // };
  // useEffect(() => fetchContent(), []);
  return (
    <div className="flex">
      <Sidebar />
      <Router>
        <Route
          exact
          path="/preview/articles/show/:id"
          component={() => <ShowArticle />}
        />
      </Router>
    </div>
  );
};

export default index;
