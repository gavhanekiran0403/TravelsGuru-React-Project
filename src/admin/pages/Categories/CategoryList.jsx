import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CategoryList.css";
import {
  getAllCategories,
  deleteCategory,
} from "../../../services/CategoryService";

function CategoryList() {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await getAllCategories();
      setCategories(response.data);
    } catch (error) {
      console.error("Error fetching categories", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    const confirm = window.confirm("Are you sure you want to delete?");
    if (!confirm) return;

    try {
      await deleteCategory(id);
      alert("Category deleted successfully");
      fetchCategories(); // refresh list
    } catch (error) {
      console.error("Delete failed", error);
      alert("Failed to delete category");
    }
  };

  return (
    <div className="category-page">
      <div className="category-header">
        <h1 className="category-title">Destination Categories</h1>

        <button
          className="add-category-btn"
          onClick={() => navigate("/categories/add")}
        >
          + Add Category
        </button>
      </div>

      <div className="table-wrapper">
        <table className="category-table">
          <thead>
            <tr>
              <th>Sr No</th>
              <th>Category Name</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {loading && (
              <tr>
                <td colSpan="3" className="no-data">
                  Loading...
                </td>
              </tr>
            )}

            {!loading &&
              categories.map((cat, index) => (
                <tr key={cat.destiCategoryId}>
                  <td>{index + 1}</td>
                  <td>{cat.destiCategoryName}</td>
                  <td className="action-cell">
                    <button
                      className="edit-btn"
                      onClick={() => {
                        console.log("Edit ID:", cat.destiCategoryId);
                        navigate(`/categories/edit/${cat.destiCategoryId}`);
                      }}
                    >
                      Edit
                    </button>
                    <button
                      className="delete-btn"
                      onClick={() =>
                        handleDelete(cat.destiCategoryId)
                      }
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}

            {!loading && categories.length === 0 && (
              <tr>
                <td colSpan="3" className="no-data">
                  No categories found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CategoryList;
