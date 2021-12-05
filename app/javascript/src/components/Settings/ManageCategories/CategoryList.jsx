import React, { useState } from "react";

import { Plus, Edit, Delete, Check } from "@bigbinary/neeto-icons";
import { Typography, Input, Button } from "@bigbinary/neetoui/v2";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const CategoryList = ({
  categories,
  handleAdd,
  handleDelete,
  handleEdit,
  addCategory,
  setAddCategory,
  editCategory,
  setEditCategory,
}) => {
  const [name, setName] = useState("");
  const [editCategoryName, setEditCategoryName] = useState("");
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
        <DragDropContext>
          <Droppable droppableId="categories">
            {provided => (
              <ul {...provided.droppableProps} ref={provided.innerRef}>
                {categories.map(({ id, name }, index) => (
                  <Draggable key={id} draggableId={id} index={index}>
                    {provided => (
                      <li
                        {...provided.dragHandleProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                      >
                        {editCategory === id ? (
                          <div className="flex">
                            <Input
                              value={editCategoryName}
                              onChange={e =>
                                setEditCategoryName(e.target.value)
                              }
                            />
                            <Check
                              onClick={() => handleEdit(id, editCategoryName)}
                            />
                          </div>
                        ) : (
                          <div className="flex">
                            <i className="ri-drag-move-2-fill flex items-center h-12 mr-2" />
                            <Typography
                              style="h5"
                              className="flex items-center h-12"
                            >
                              {name}
                            </Typography>
                            <Delete
                              size={18}
                              onClick={() => handleDelete(id)}
                              className="flex items-center h-12 ml-auto cursor-pointer mr-2"
                            />
                            <Edit
                              size={18}
                              onClick={() => {
                                setEditCategoryName(name);
                                setEditCategory(id);
                              }}
                              className="flex items-center h-12 cursor-pointer"
                            />
                          </div>
                        )}
                      </li>
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
