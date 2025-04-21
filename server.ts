/*
Realizado por Cristian Luque.
Project Manager: Carolina de Jesus (no le funcionaba el mouse)
*/

import express from 'express'
import trigoRouter from "./src/routes/trigo"

const app = express()

app.use("/api/trigo", trigoRouter);

const port = process.env.PORT || 3000
app.listen(3000, () => {console.log(`Listening on port ${port}`)})