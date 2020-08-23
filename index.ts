import express from 'express'
import { testRouter } from './routes'
const app = express()
const PORT = 8000
app.get('/', (req, res) => res.send('Express + TypeScript Server'))

app.use('/test', testRouter);


app.listen(PORT, () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`)
})
