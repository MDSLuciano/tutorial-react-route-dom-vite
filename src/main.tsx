import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/global.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './components/Home'
import { About } from './components/About'
import { Nav } from './components/Nav'
import { Posts } from './components/Posts'
import { Redirect } from './components/Redirect'
import { NotFound } from './components/NotFound'
import { Post } from './components/Post'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/posts/" element={<Posts />}>
          <Route path=":id" element={<Post />} />
        </Route>
        <Route path="/posts/" element={<Posts />} />
        <Route path="/redirect" element={<Redirect />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
