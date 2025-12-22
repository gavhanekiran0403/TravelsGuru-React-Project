import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./CategoryForm.css";
import {
  createCategory,
  getCategoryById,
  updateCategory,
} from "../../../services/categoryService";

function CategoryForm() {
  const { id } = useParams(); // category id from URL (edit mode)
  const navigate = useNavigate();

  const [category, setCategory] = useState({
    destiCategoryName: "",
  });

  const [loading, setLoading] = useState(false);

  const isEdit = Boolean(id);

  // 🔹 Load category when editing
  useEffect(() => {
    if (!id) return;

    const loadCategory = async () => {
      try {
        setLoading(true);
        const response = await getCategoryById(id);
        setCategory({
          destiCategoryName: response.data.destiCategoryName,
        });
      } catch (error) {
        console.error("Error loading category:", error);
        alert("Failed to load category");
      } finally {
        setLoading(false);
      }
    };

    loadCategory();
  }, [id]);

  // 🔹 Handle input change
  const handleChange = (e) => {
    setCategory({
      ...category,
      [e.target.name]: e.target.value,
    });
  };

  // 🔹 Handle submit (ADD / EDIT)
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (isEdit) {
        await updateCategory(id, category);
        alert("Category updated successfully");
      } else {
        await createCategory(category);
        alert("Category created successfully");
      }
      navigate("/categories");
    } catch (error) {
      console.error("Save failed:", error);
      alert("Operation failed");
    }
  };

  return (
    <div className="category-form-page">
      <h1 className="form-title">
        {isEdit ? "Edit Category" : "Add Category"}
      </h1>

      <form className="category-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Category Name</label>
          <input
            type="text"
            name="destiCategoryName"
            placeholder="Eg. International"
            value={category.destiCategoryName}
            onChange={handleChange}
            required
            disabled={loading}
          />
        </div>

        <div className="form-actions">
          <button type="submit" className="save-btn" disabled={loading}>
            {loading ? "Saving..." : isEdit ? "Update Category" : "Save Category"}
          </button>

          <button
            type="button"
            className="cancel-btn"
            onClick={() => navigate("/categories")}
            disabled={loading}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default CategoryForm;
