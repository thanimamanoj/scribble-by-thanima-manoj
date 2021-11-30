import React from "react";

import {
  Input,
  Button,
  Dropdown,
  Label,
  Textarea,
} from "@bigbinary/neetoui/v2";

const ArticleForm = ({
  title,
  setTitle,
  status,
  setStatus,
  body,
  setBody,
  selectedCategory,
  setSelectedCategory,
  categories,
  handleSubmit,
}) => {
  return (
    <form className="max-w-lg mx-auto">
      <div className="flex justify-between items-center my-4">
        <Input
          label="Article Title"
          value={title}
          placeholder="Title (Max 50 Characters Allowed)"
          onChange={e => setTitle(e.target.value)}
          className="mr-12"
        />
        <div>
          <Label>Category</Label>
          <Dropdown
            buttonStyle="text"
            position="bottom-end"
            label={selectedCategory?.name || "Select category"}
          >
            {categories.map((category, index) => (
              <li key={index} onClick={() => setSelectedCategory(category)}>
                {category.name}
              </li>
            ))}
          </Dropdown>
          <div className="p-4 mb-2"></div>
        </div>
      </div>
      <Textarea
        label="Body"
        value={body}
        onChange={e => setBody(e.target.value)}
      />
      <div className="flex">
        <Button
          label={status === "Draft" ? "Save Draft" : "Publish"}
          onClick={function noRefCheck() {}}
          style="primary"
        />
        <Dropdown
          buttonProps={{
            onClick: function noRefCheck() {},
          }}
          name="category"
          value={status}
          buttonStyle="primary"
          onClose={function noRefCheck() {}}
          position="bottom-end"
          onChange={handleSubmit}
        >
          <li
            value="Draft"
            onClick={() => {
              setStatus("Draft");
            }}
          >
            Save Draft
          </li>
          <li
            value="publish"
            onClick={() => {
              setStatus("Published");
            }}
          >
            Publish
          </li>
        </Dropdown>
      </div>
      {JSON.stringify(title)}
    </form>
  );
};

export default ArticleForm;
