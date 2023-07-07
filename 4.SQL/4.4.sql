DELETE FROM sales_fact
WHERE product_key IN (
  SELECT product_key
  FROM product
  WHERE brand = 'wolf'
);