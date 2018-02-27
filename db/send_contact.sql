INSERT INTO bins (name, subject, email, message)
values ($1, $2, $3, $4)
returning *