import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import App from './App.jsx';
import { ProductPage } from './Pages/ProductPage.jsx';
import { AboutPage } from './Pages/AboutPage.jsx';
import { ContactsPage } from './Pages/ContactsPage.jsx';
import { HomePage } from './Pages/HomePage.jsx';

export const Root = () => {
  return (
    <BrowserRouter basename="/paletta">
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}