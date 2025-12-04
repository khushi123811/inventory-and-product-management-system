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

import com.example.Inventory_and_Product_Management_System.Entity.Product;
import com.example.Inventory_and_Product_Management_System.Service.ProductService;

@RestController
@RequestMapping("/products")
@CrossOrigin("http://localhost:5173")
public class ProductController {

    @Autowired
    private ProductService productService;

    // ✅ 1. Get all products
    @GetMapping("allProducts")
    public List<Product> findAll() {
        return productService.findAll();
    }

    // ✅ 2. Get product by ID
    @GetMapping("getProduct/{id}")
    public ResponseEntity<Product> getProductById(@PathVariable Long id) {
        Product prod = productService.findById(id);
        if (prod != null) {
            return ResponseEntity.ok(prod);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    // ✅ 3. Add new product
    @PostMapping("addProduct")
    public Product addProduct(@RequestBody Product product) {
        return productService.addProduct(product);
    }

    // ✅ 4. Update product
    @PutMapping("updateProduct/{id}")
    public ResponseEntity<Product> updateProduct(@PathVariable Long id, @RequestBody Product productDetails) {
        Product updatedProduct = productService.updateProduct(id, productDetails);
        if (updatedProduct != null) {
            return ResponseEntity.ok(updatedProduct);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    // ✅ 5. Delete product
    @DeleteMapping("deleteProduct/{id}")
    public ResponseEntity<String> deleteProduct(@PathVariable Long id) {
        boolean deleted = productService.deleteProduct(id);
        if (deleted) {
            return ResponseEntity.ok("Product deleted successfully!");
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
