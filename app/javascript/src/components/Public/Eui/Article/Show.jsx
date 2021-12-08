import React from "react";

import { Typography } from "@bigbinary/neetoui/v2";
import { Scrollable } from "@bigbinary/neetoui/v2/layouts";

const Show = ({ article }) => {
  return (
    <div className="mx-auto w-4/5 px-12 mt-6">
      <Typography style="h1">{article?.title}</Typography>
      <div className="flex">
        <Typography className="bg-blue-100 mr-4" style="body1">
          {article?.category}
        </Typography>
        <Typography className="text-gray-500" style="body1">
          {article?.date}
        </Typography>
      </div>
      <Scrollable className=" mt-6 space-y-6">
        <Typography className="font-normal text-xl  text-justify ">
          {article?.body}
        </Typography>
      </Scrollable>
    </div>
  );
};
export default Show;
