package com.example.Inventory_and_Product_Management_System.Service;

import java.util.List;
import com.example.Inventory_and_Product_Management_System.Entity.Supplier;

public interface SupplierService {

    List<Supplier> findAll();

    Supplier findById(Long id);

    Supplier addSupplier(Supplier supplier);

    Supplier updateSupplier(Long id, Supplier supplierDetails);

    boolean deleteSupplier(Long id);
}
