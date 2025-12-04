package com.example.Inventory_and_Product_Management_System.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.Inventory_and_Product_Management_System.Entity.Supplier;
import com.example.Inventory_and_Product_Management_System.Repository.SupplierRepository;

@Service
public class SupplierServiceImpl implements SupplierService {

    @Autowired
    private SupplierRepository supplierRepository;

    // ✔ Get all suppliers
    @Override
    public List<Supplier> findAll() {
        return supplierRepository.findAll();
    }

    // ✔ Get supplier by ID
    @Override
    public Supplier findById(Long id) {
        Optional<Supplier> supplier = supplierRepository.findById(id);
        return supplier.orElse(null);
    }

    // ✔ Add new supplier
    @Override
    public Supplier addSupplier(Supplier supplier) {
        return supplierRepository.save(supplier);
    }

    // ✔ Update supplier
    @Override
    public Supplier updateSupplier(Long id, Supplier supplierDetails) {

        Optional<Supplier> existingSupplier = supplierRepository.findById(id);

        if (existingSupplier.isPresent()) {
            Supplier sup = existingSupplier.get();

            sup.setName(supplierDetails.getName());
            sup.setEmail(supplierDetails.getEmail());
            sup.setPhone(supplierDetails.getPhone());
            sup.setAddress(supplierDetails.getAddress());

            return supplierRepository.save(sup);
        }
        return null;
    }

    // ✔ Delete supplier
    @Override
    public boolean deleteSupplier(Long id) {
        Optional<Supplier> existingSupplier = supplierRepository.findById(id);

        if (existingSupplier.isPresent()) {
            supplierRepository.deleteById(id);
            return true;
        }
        return false;
    }
}
