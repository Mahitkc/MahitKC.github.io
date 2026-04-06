import express from 'express'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const app = express()
const PORT = process.env.PORT || 3000

// View engine
app.set('view engine', 'ejs')
app.set('views', join(__dirname, 'views'))

// Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(join(__dirname, 'public')))

// Routes
app.get('/', (req, res) => {
  res.render('index', { title: 'Mahit KC — Web Developer' })
})

app.get('/projects/waitwell', (req, res) => {
  res.render('projects/waitwell', { title: 'WaitWell — Mahit KC' })
})

app.get('/projects/himalaya-hearth', (req, res) => {
  res.render('projects/himalaya-hearth', { title: 'Himalaya Hearth — Mahit KC' })
})

app.get('/projects/movie-reviews', (req, res) => {
  res.render('projects/movie-reviews', { title: 'Movie Reviews — Mahit KC' })
})

// API route
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from Express v5!' })
})

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`)
})
