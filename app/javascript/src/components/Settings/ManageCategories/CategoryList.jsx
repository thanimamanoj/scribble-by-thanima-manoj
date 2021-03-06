import React, { useState } from "react";

import { Plus, Check } from "@bigbinary/neeto-icons";
import { Typography, Input, Button } from "@bigbinary/neetoui/v2";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

import categoriesApi from "apis/categories";

import Item from "./Item";

const CategoryList = ({
  categories,
  handleAdd,
  addCategory,
  setAddCategory,
  fetchCategories,
}) => {
  const [name, setName] = useState("");

  const handleOnDragEnd = result => {
    const { source, destination } = result;
    if (!destination) return;

    const items = Array.from(categories);
    const [reordered_items] = items.splice(source.index, 1);
    items.splice(destination.index, 0, reordered_items);
    reorderCategories(items.map(({ id }) => id));
  };

  const reorderCategories = async items => {
    const payload = {
      category: items,
    };
    try {
      await categoriesApi.sort(payload);
      await fetchCategories();
    } catch (error) {
      logger.log(error);
    }
  };
  return (
    <div>
      <Typography style="h2">Manage Categories</Typography>
      <Typography style="body1" className="text-gray-600">
        Create and configure the categories inside your scribble.
      </Typography>
      <div className="divide-y divide-gray-300 ">
        {!addCategory && (
          <Button
            className="mt-12 mb-8 "
            label="Add New Category"
            style="link"
            icon={() => <Plus size={20} />}
            onClick={() => setAddCategory(true)}
            size="large"
          />
        )}
        {addCategory && (
          <div className="flex mt-12 mb-8">
            <Input onChange={e => setName(e.target.value)} />
            <Check onClick={() => handleAdd(name)} />
          </div>
        )}
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId="categories">
            {provided => (
              <ul {...provided.droppableProps} ref={provided.innerRef}>
                {categories.map((category, index) => (
                  <Draggable
                    key={category.id}
                    draggableId={String(category.id)}
                    index={index}
                  >
                    {provided => (
                      <Item
                        category={category}
                        provided={provided}
                        fetchCategories={fetchCategories}
                      />
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </ul>
            )}
          </Droppable>
        </DragDropContext>
      </div>
    </div>
  );
};

export default CategoryList;
