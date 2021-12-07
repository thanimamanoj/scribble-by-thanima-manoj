import React, { useState } from "react";

import { Edit, Delete, Check } from "@bigbinary/neeto-icons";
import { Typography, Input } from "@bigbinary/neetoui/v2";

import categoriesApi from "apis/categories";

const Item = ({ category, provided, fetchCategories }) => {
  const [editCategory, setEditCategory] = useState(0);
  const [editCategoryName, setEditCategoryName] = useState("");
  const handleDelete = async id => {
    var answer = window.confirm(
      "Are you sure you want to delete the category?"
    );
    if (answer) {
      try {
        await categoriesApi.destroy(id);
        await fetchCategories();
      } catch (error) {
        logger.error(error);
      }
    }
  };

  const handleEdit = async (id, name) => {
    setEditCategory(true);
    try {
      await categoriesApi.update({
        id,
        payload: { category: { name } },
      });
      await fetchCategories();
    } catch (error) {
      logger.error(error);
    }
  };

  return (
    <li
      {...provided.draggableProps}
      {...provided.dragHandleProps}
      ref={provided.innerRef}
    >
      {editCategory === category.id ? (
        <div className="flex">
          <Input
            value={editCategoryName}
            onChange={e => setEditCategoryName(e.target.value)}
          />
          <Check onClick={() => handleEdit(category.id, editCategoryName)} />
        </div>
      ) : (
        <div className="flex">
          <i className="ri-drag-move-2-fill flex items-center h-12 mr-2" />
          <Typography style="h5" className="flex items-center h-12">
            {category.name}
          </Typography>
          <Delete
            size={18}
            onClick={() => handleDelete(category.id)}
            className="flex items-center h-12 ml-auto cursor-pointer mr-2"
          />
          <Edit
            size={18}
            onClick={() => {
              setEditCategoryName(category.name);
              setEditCategory(category.id);
            }}
            className="flex items-center h-12 cursor-pointer"
          />
        </div>
      )}
    </li>
  );
};

export default Item;
