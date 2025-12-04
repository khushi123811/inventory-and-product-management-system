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

import com.example.Inventory_and_Product_Management_System.Entity.Supplier;
import com.example.Inventory_and_Product_Management_System.Service.SupplierService;

@RestController
@RequestMapping("/suppliers")
@CrossOrigin("http://localhost:5173")
public class SupplierController {

    @Autowired
    private SupplierService supplierService;

    // ✅ 1. Get all suppliers
    @GetMapping("allSuppliers")
    public List<Supplier> findAll() {
        return supplierService.findAll();
    }

    // ✅ 2. Get supplier by ID
    @GetMapping("getSupplier/{id}")
    public ResponseEntity<Supplier> getSupplierById(@PathVariable Long id) {
        Supplier sup = supplierService.findById(id);
        if (sup != null) {
            return ResponseEntity.ok(sup);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    // ✅ 3. Add new supplier
    @PostMapping("addSupplier")
    public Supplier addSupplier(@RequestBody Supplier supplier) {
        return supplierService.addSupplier(supplier);
    }

    // ✅ 4. Update supplier
    @PutMapping("updateSupplier/{id}")
    public ResponseEntity<Supplier> updateSupplier(@PathVariable Long id, @RequestBody Supplier supplierDetails) {
        Supplier updatedSupplier = supplierService.updateSupplier(id, supplierDetails);
        if (updatedSupplier != null) {
            return ResponseEntity.ok(updatedSupplier);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    // ✅ 5. Delete supplier
    @DeleteMapping("deleteSupplier/{id}")
    public ResponseEntity<String> deleteSupplier(@PathVariable Long id) {
        boolean deleted = supplierService.deleteSupplier(id);
        if (deleted) {
            return ResponseEntity.ok("Supplier deleted successfully!");
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
