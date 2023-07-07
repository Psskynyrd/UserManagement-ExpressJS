select store.store_key as StoreKey, 
	store.city as City,
	store.region as Region,
	product.product_key as ProductKey,
	product.brand as Brand,
	product.description as Description,
	sales_fact.sales as Sales,
	sales_fact.cost as Cost,
	sales_fact.profit as Profit 
from ((sales_fact 
left join store on sales_fact.store_key = store.store_key)
left join product on sales_fact.product_key = product.product_key) 
where city='New York'