package com.example.Inventory_and_Product_Management_System.Service;

import java.util.List;
import com.example.Inventory_and_Product_Management_System.Entity.Product;

public interface ProductService {

    List<Product> findAll();

    Product findById(Long id);

    Product addProduct(Product product);

    Product updateProduct(Long id, Product productDetails);

    boolean deleteProduct(Long id);
}
