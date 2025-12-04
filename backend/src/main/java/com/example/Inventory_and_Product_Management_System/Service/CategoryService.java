package com.example.Inventory_and_Product_Management_System.Service;

import java.util.List;
import com.example.Inventory_and_Product_Management_System.Entity.Category;

public interface CategoryService {

    List<Category> findAll();

    Category findById(Long id);

    Category addCategory(Category category);

    Category updateCategory(Long id, Category categoryDetails);

    boolean deleteCategory(Long id);
}
