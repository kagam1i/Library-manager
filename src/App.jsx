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

  // состояние пользователя - авторизован/не авторизован
  const [user, setUser] = useState(null);

  // логин (просто сохраняем пользователя в state)
  const handleSignIn = (payload) => {
    setUser(payload);
  }

  // регистрация 
  const handleSignUp = (payload) => {
    setUser(payload);
  }

  // выход
  const handleSignOut = () => {
    setUser(null);
  }



  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        {/* передаем в Header информацию об авторизации */}
        <Header user={user} onSignOut={handleSignOut} />

        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />

            {/* тут я передаю функцию добавления книги handleAddBook */}
            <Route
              path='/addBook'
              element={
                <ProtectedRoute user={user}>
                  <AddBook />
                </ProtectedRoute>
              }
            />

            {/* тут я передаю сами книги и функцию handleRemoveBook для удаления книги*/}
            <Route
              path='/library'
              element={
                <ProtectedRoute user={user}>
                  <Library />
                </ProtectedRoute>
              }
            />

            <Route path="/signIn" element={<SignIn onSignIn={handleSignIn} />} />
            <Route path="/signUp" element={<SignUp onSignUp={handleSignUp} />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </BrowserRouter >
  )
}

export default App
