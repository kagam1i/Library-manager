import React from 'react'
import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { Field } from '../components/UI/Field'
import { signIn } from "../redux/authSlice";

export const SignIn = () => {

  const navigate = useNavigate(); // переход на другую страницу с помощью кода

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


  const [error, setError] = useState({})
  const [touched, setTouched] = useState({})

  const emailRegex = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/;

  // Метод trim() удаляет пробельные символы с начала и конца строки.
  const canSubmit =
    emailRegex.test(email.trim()) &&
    password.trim().length >= 8;

  const handleBlur = (field) => {
    // отмечаем поле как "потроганное"
    setTouched((prev) => ({ ...prev, [field]: true }));

    // пересчитываем ошибки (чтобы они появились после выхода из поля)
    validate();
  };


  // валидация полей формы
  const validate = () => {
    const nextError = {}

    const emailValue = email.trim();
    const passwordValue = password.trim();

    if (!emailValue) nextError.email = "Please, enter your email"
    else if (!emailRegex.test(emailValue)) nextError.email = "Please, enter a valid email";


    if (!passwordValue) nextError.password = "Please, enter your password"
    else if (passwordValue.length < 8)
      nextError.password = "The password must contain at least 8 characters";


    setError(nextError)

    return Object.keys(nextError).length === 0;

  }



  // отправка формы
  const handleSubmit = (event) => {
    event.preventDefault(); // отмена перезагрузки страницы, чтобы не потерят данные введенные пользователем


    setTouched({
      email: true,
      password: true,
    });


    const isValid = validate()
    if (!isValid) return;

    dispatch(signIn({ email: email.trim() }));

    navigate('/addBook')
  }



  return (
    <main className="min-h-[70vh]">
      <section
        className="relative overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: "url('/addBook_background.jpg')" }}
      >
        {/* затемнение */}
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/55 to-black/75" />

        {/* центрирование */}
        <div className="relative z-10 min-h-[70vh] flex items-center">
          <div className="w-full max-w-6xl mx-auto px-6 py-10">
            {/* заголовок */}
            <div className="mb-8 text-center">
              <p className="text-bm-accent-2/90 tracking-[0.22em] uppercase text-xs mb-2">
                Member access
              </p>

              <h1 className="font-heading text-4xl md:text-5xl text-bm-text">
                Sign in
              </h1>

              <p className="mt-3 text-bm-text/75 max-w-2xl mx-auto">
                Enter the archive using your credentials.
              </p>
            </div>

            {/* форма */}
            <div className="max-w-xl mx-auto">
              <div className="card-archive p-6 md:p-8">
                <form onSubmit={handleSubmit} className="grid gap-5">
                  <Field label="Email *" error={touched.email && error.email}>
                    <input
                      className={`input transition-all duration-200 ${touched.email && error.email
                          ? "ring-2 ring-red-500/40"
                          : ""
                        }`}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      onBlur={() => handleBlur("email")}
                      placeholder="name@example.com"
                    />
                  </Field>

                  <Field
                    label="Password *"
                    error={touched.password && error.password}
                  >
                    <input
                      type="password"
                      className={`input transition-all duration-200 ${touched.password && error.password
                          ? "ring-2 ring-red-500/40"
                          : ""
                        }`}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      onBlur={() => handleBlur("password")}
                      placeholder="••••••••"
                    />
                  </Field>

                  <button
                    type="submit"
                    disabled={!canSubmit}
                    className={`mt-1 px-6 py-2.5 rounded-full font-semibold tracking-wide transition-all
                      ${canSubmit
                        ? "bg-bm-accent text-bm-bg hover:brightness-110 active:scale-95"
                        : "bg-white/10 text-bm-text/40 cursor-not-allowed"
                      }`}
                  >
                    Sign in
                  </button>

                  {/* нижние ссылки */}
                  <div className="text-center text-xs text-bm-text/60 mt-3">
                    <span>Don't have an account yet? </span>
                    <Link
                      to="/signup"
                      className="underline hover:text-bm-text"
                    >
                      Sign up
                    </Link>
                  </div>

                  <div className="text-center text-xs text-bm-text/60">
                    <Link to="/" className="underline hover:text-bm-text">
                      Back to Home
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
