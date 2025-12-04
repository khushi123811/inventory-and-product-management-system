package com.example.Inventory_and_Product_Management_System.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.Inventory_and_Product_Management_System.Entity.Category;
import com.example.Inventory_and_Product_Management_System.Service.CategoryService;

@RestController
@RequestMapping("/categories")
@CrossOrigin("http://localhost:5173")
public class CategoryController {

    @Autowired
    private CategoryService categoryService;

    // ✅ 1. Get all categories
    @GetMapping("allCategories")
    public List<Category> findAll() {
        return categoryService.findAll();
    }

    // ✅ 2. Get category by ID
    @GetMapping("getCategory/{id}")
    public ResponseEntity<Category> getCategoryById(@PathVariable Long id) {
        Category cat = categoryService.findById(id);
        if (cat != null) {
            return ResponseEntity.ok(cat);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    // ✅ 3. Add new category
    @PostMapping("addCategory")
    public Category addCategory(@RequestBody Category category) {
        return categoryService.addCategory(category);
    }

    // ✅ 4. Update category
    @PutMapping("updateCategory/{id}")
    public ResponseEntity<Category> updateCategory(@PathVariable Long id, @RequestBody Category categoryDetails) {
        Category updatedCategory = categoryService.updateCategory(id, categoryDetails);
        if (updatedCategory != null) {
            return ResponseEntity.ok(updatedCategory);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    // ✅ 5. Delete category
    @DeleteMapping("deleteCategory/{id}")
    public ResponseEntity<String> deleteCategory(@PathVariable Long id) {
        boolean deleted = categoryService.deleteCategory(id);
        if (deleted) {
            return ResponseEntity.ok("Category deleted successfully!");
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
