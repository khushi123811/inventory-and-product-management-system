package com.example.Inventory_and_Product_Management_System.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.Inventory_and_Product_Management_System.Entity.Product;
import com.example.Inventory_and_Product_Management_System.Repository.ProductRepository;

@Service
public class ProductServiceImpl implements ProductService {

    @Autowired
    private ProductRepository productRepository;

    // ✔ Get all products
    @Override
    public List<Product> findAll() {
        return productRepository.findAll();
    }

    // ✔ Get product by ID
    @Override
    public Product findById(Long id) {
        Optional<Product> product = productRepository.findById(id);
        return product.orElse(null);
    }

    // ✔ Add new product
    @Override
    public Product addProduct(Product product) {
        return productRepository.save(product);
    }

    // ✔ Update product
    @Override
    public Product updateProduct(Long id, Product productDetails) {

        Optional<Product> existingProduct = productRepository.findById(id);

        if (existingProduct.isPresent()) {
            Product prod = existingProduct.get();

            prod.setName(productDetails.getName());
            prod.setPrice(productDetails.getPrice());
            prod.setStockQty(productDetails.getStockQty());
            prod.setCategoryId(productDetails.getCategoryId());
            prod.setSupplierId(productDetails.getSupplierId());

            return productRepository.save(prod);
        }
        return null;
    }

    // ✔ Delete product
    @Override
    public boolean deleteProduct(Long id) {
        Optional<Product> existingProduct = productRepository.findById(id);

        if (existingProduct.isPresent()) {
            productRepository.deleteById(id);
            return true;
        }
        return false;
    }
}
