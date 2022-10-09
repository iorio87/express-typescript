import express from 'express'
import diaryRouter from './routes/diaries'

const app = express()
app.use(express.json()) //middleware para transformar el req.body a json

const PORT = 3000

app.get('/ping', (_req, res) => { //el guion bajo evita que ts se queje por un parametro no utilizado
    console.log('someone pinged here!');
    res.send('pong')
})

app.use('/api/diaries', diaryRouter)

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
})

 