package com.example.Inventory_and_Product_Management_System.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.Inventory_and_Product_Management_System.Entity.Category;
import com.example.Inventory_and_Product_Management_System.Repository.CategoryRepository;

@Service
public class CategoryServiceImpl implements CategoryService {

    @Autowired
    private CategoryRepository categoryRepository;

    // ✔ Get all categories
    @Override
    public List<Category> findAll() {
        return categoryRepository.findAll();
    }

    // ✔ Get category by ID
    @Override
    public Category findById(Long id) {
        Optional<Category> category = categoryRepository.findById(id);
        return category.orElse(null);
    }

    // ✔ Add new category
    @Override
    public Category addCategory(Category category) {
        return categoryRepository.save(category);
    }

    // ✔ Update category
    @Override
    public Category updateCategory(Long id, Category categoryDetails) {

        Optional<Category> existingCategory = categoryRepository.findById(id);

        if (existingCategory.isPresent()) {
            Category cat = existingCategory.get();

            cat.setName(categoryDetails.getName());
            cat.setDescription(categoryDetails.getDescription());

            return categoryRepository.save(cat);
        }
        return null;
    }

    // ✔ Delete category
    @Override
    public boolean deleteCategory(Long id) {
        Optional<Category> existingCategory = categoryRepository.findById(id);

        if (existingCategory.isPresent()) {
            categoryRepository.deleteById(id);
            return true;
        }
        return false;
    }
}
