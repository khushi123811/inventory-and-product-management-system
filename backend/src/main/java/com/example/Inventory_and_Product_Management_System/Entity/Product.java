package com.example.Inventory_and_Product_Management_System.Entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.Data;

@Entity
@Data
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;


    @Column(nullable = false)
    private double price;

    @Column(nullable = false)
    private int stockQty;

    @Column(nullable = false)
    private Long categoryId;  // Foreign Key (no mapping)

    @Column(nullable = false)
    private Long supplierId;  // Foreign Key (no mapping)

}
