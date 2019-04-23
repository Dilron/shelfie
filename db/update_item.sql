update products
set name = $2,
    img = $3,
    price = $4
where id = $1;