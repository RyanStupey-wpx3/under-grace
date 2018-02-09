INSERT INTO bins (prod_name, prod_price)
values ($1, $2)
returning *