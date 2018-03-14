INSERT INTO users (auth0_id, username, user_status, picture, email)
values ($1, $2, $3, $4, $5)
returning *