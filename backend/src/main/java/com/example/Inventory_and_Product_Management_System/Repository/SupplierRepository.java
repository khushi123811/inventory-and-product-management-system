package com.example.Inventory_and_Product_Management_System.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.Inventory_and_Product_Management_System.Entity.Supplier;

@Repository
public interface SupplierRepository extends JpaRepository<Supplier, Long> {

}
