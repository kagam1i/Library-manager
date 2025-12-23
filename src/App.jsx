import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Header } from './components/Header';
import { Footer } from './components/Footer'

import { Home } from './pages/Home';
import { AddBook } from './pages/AddBook';
import { Library } from './pages/Library';

import { SignIn } from './pages/SignIn';
import { SignUp } from './pages/SignUp';

import { ProtectedRoute } from './components/ProtectedRoute';

function App() {

  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        {/* передаем в Header информацию об авторизации */}
        <Header />

        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />

            {/* тут я передаю функцию добавления книги handleAddBook */}
            <Route
              path='/addBook'
              element={
                <ProtectedRoute >
                  <AddBook />
                </ProtectedRoute>
              }
            />

            {/* тут я передаю сами книги и функцию handleRemoveBook для удаления книги*/}
            <Route
              path='/library'
              element={
                <ProtectedRoute >
                  <Library />
                </ProtectedRoute>
              }
            />

            <Route path="/signIn" element={<SignIn />} />
            <Route path="/signUp" element={<SignUp />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </BrowserRouter >
  )
}

export default App
