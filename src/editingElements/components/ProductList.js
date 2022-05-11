import React from "react";
import { ProductListItem } from "./ProductListItem";

export const ProductList = ({ products, onDeleted, onEdit }) => {
  return (
    <ul>
      {products.map((product) => {
        return (
          <li key={product.id}>
            <ProductListItem
              product={product}
              onDeleted={onDeleted}
              onEdit={onEdit}
            />
          </li>
        );
      })}
    </ul>
  );
};
