INSERT INTO posts (post_user, post_date, title, main_content, graphic)
VALUES ($1,$2,$3,$4,$5)
RETURNING *;