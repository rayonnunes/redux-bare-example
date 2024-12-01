import React, { FormEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { addCategory } from "../../../store/voting/actions";
import {
  selectCategories,
} from "../../../store/voting/selectors";


const CategoryList: React.FC = () => {
    const [newCategory, setNewCategory] = useState("");
  
    const categories = useSelector(selectCategories);
    const dispatch = useDispatch()
  
    const handleAddCategory = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
  
      if (newCategory.trim()) {
        dispatch(addCategory(newCategory))
        setNewCategory("");
      }
    };
  
    return (
      <div className="category-list">
        <h2>Categories</h2>
        <div className="add-category">
          <form onSubmit={handleAddCategory}>
            <input
              type="text"
              placeholder="New Category Name"
              value={newCategory}
              onChange={(e) => setNewCategory(e.target.value)}
            />
            <button type="submit">Add Category</button>
          </form>
        </div>
        {categories.map((category) => (
          <div key={category.id}>{category.name}</div>
        ))}
      </div>
    );
  };

  export default CategoryList