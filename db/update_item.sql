update products
set name = $1,
    img = $2,
    price = $3
where id = $1;