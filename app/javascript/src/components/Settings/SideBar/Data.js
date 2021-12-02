import React from "react";

import { Settings, Repeat, Seo } from "@bigbinary/neeto-icons";

const Data = [
  {
    icon: <Settings size={28} />,
    label: "General",
    description: "Page Title, Brand Name & Meta Description ",
    link: "/settings/general",
  },
  {
    icon: <Repeat size={28} />,
    label: "Redirections",
    description: "Create & configure redirection rules",
    link: "/settings/redirections",
  },
  {
    icon: <Seo size={28} />,
    label: "Manage Categories",
    description: "Edit and Reorder KB Structure",
    link: "/settings/manage-categories",
  },
];

export default Data;
