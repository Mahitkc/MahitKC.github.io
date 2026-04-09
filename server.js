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
app.use('/images', express.static(join(__dirname, 'images')))
app.use('/gallery', express.static(join(__dirname, 'Gallery')))

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

app.post('/api/contact', (req, res) => {
  const { name, email, subject, message } = req.body
  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: 'All fields are required.' })
  }
  // TODO: integrate an email service (e.g. nodemailer) here
  res.json({ success: true })
})

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`)
})
