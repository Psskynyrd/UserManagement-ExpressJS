select Sum(sales_fact.profit) as NewYorkProfit 
from ((sales_fact 
left join store on sales_fact.store_key = store.store_key)
left join product on sales_fact.product_key = product.product_key) 
where city='New York'