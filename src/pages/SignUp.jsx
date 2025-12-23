import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Field } from "../components/UI/Field";
import { signUp } from "../redux/authSlice";

export const SignUp = () => {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [error, setError] = useState({});
  const [touched, setTouched] = useState({});

  const emailRegex = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/;

  // простая валидация — как в SignIn
  const validate = () => {
    const nextError = {};

    const emailValue = email.trim();
    const passwordValue = password.trim();
    const confirmValue = confirmPassword.trim();

    if (!emailValue) nextError.email = "Please, enter your email";
    else if (!emailRegex.test(emailValue))
      nextError.email = "Please, enter a valid email";

    if (!passwordValue)
      nextError.password = "Please, create a password";
    else if (passwordValue.length < 8)
      nextError.password = "The password must contain at least 8 characters";

    if (!confirmValue)
      nextError.confirmPassword = "Please, confirm your password";
    else if (confirmValue !== passwordValue)
      nextError.confirmPassword = "Passwords do not match";

    setError(nextError);
    return Object.keys(nextError).length === 0;
  };

  const canSubmit =
    emailRegex.test(email.trim()) &&
    password.trim().length >= 8 &&
    confirmPassword.trim() === password.trim();

  const handleBlur = (field) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    validate();
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setTouched({
      email: true,
      password: true,
      confirmPassword: true,
    });

    if (!validate()) return;

    dispatch(signUp({ email: email.trim() }));

    navigate("/addBook");
  };

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
                Create account
              </p>

              <h1 className="font-heading text-4xl md:text-5xl text-bm-text">
                Sign up
              </h1>

              <p className="mt-3 text-bm-text/75 max-w-2xl mx-auto">
                Join the archive and start building your personal library.
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

                  <Field
                    label="Confirm password *"
                    error={
                      touched.confirmPassword && error.confirmPassword
                    }
                  >
                    <input
                      type="password"
                      className={`input transition-all duration-200 ${touched.confirmPassword && error.confirmPassword
                        ? "ring-2 ring-red-500/40"
                        : ""
                        }`}
                      value={confirmPassword}
                      onChange={(e) =>
                        setConfirmPassword(e.target.value)
                      }
                      onBlur={() =>
                        handleBlur("confirmPassword")
                      }
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
                    Create account
                  </button>

                  {/* нижние ссылки */}
                  <div className="text-center text-xs text-bm-text/60 mt-3">
                    <span>Already have an account? </span>
                    <Link
                      to="/signin"
                      className="underline hover:text-bm-text"
                    >
                      Sign in
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
};