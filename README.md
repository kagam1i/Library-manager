# 📚 LibraManage — Books Manager 

> *A quiet digital library where every book you add finds its place on the shelf — instantly and forever.*

**LibraManage** is a small pet-project built with **React + Vite + Tailwind CSS** in a **Dark Academia** aesthetic.  
It includes mock authentication (no backend yet), protected routes, a personal library with genre filtering, a book creation form, and a modal for reading details & deleting entries.

---

## 🖼️ Screenshots

<p align="center">
  <img src="docs/screenshots/home.png" alt="Home" width="820" />
</p>

<p align="center">
  <img src="docs/screenshots/add-book.png" alt="Add book" width="820" />
</p>

<p align="center">
  <img src="docs/screenshots/library.png" alt="Library" width="820" />
</p>

<p align="center">
  <img src="docs/screenshots/sign-in.png" alt="Sign in" width="820" />
</p>

<p align="center">
  <img src="docs/screenshots/sign-up.png" alt="Sign up" width="820" />
</p>

---

## ✨ Features

### 🔐 Authentication (mock, no backend yet)
- **Sign In / Sign Up** pages with validation (touched + blur)
- Header navigation changes depending on auth state
- **Protected routes**:
  - non-authorized users **don’t see** `Library` and `Add book` in the header
  - direct access to `/library` and `/addBook` is blocked via `<ProtectedRoute />`

### 🗃️ Books library
- Books grid (cards)
- Book details in a modal
- Delete a book from the modal
- **Genre filter** (genres are derived dynamically from the books you add)
- Empty state supports:
  - “library is empty”
  - “no books for this filter”

### 🕯️ Dark Academia UI
- “Archive glass” cards with parchment texture (`.card-archive`)
- Atmospheric background images + overlay gradients
- Consistent typography (serif titles + serif body)

---

## 🎨 Design tokens (Tailwind)

These are the main theme tokens used across the UI.

### Fonts
- `font-heading`: **Playfair Display** (headings)
- `font-body`: **Source Serif 4** (body)

### Colors
| Token | Hex / value | Usage |
|------|-------------|-------|
| `bm-bg` | `#0B0F0D` | app background |
| `bm-surface` | `#121814` | panels / cards |
| `bm-surface-2` | `#182019` | secondary surfaces |
| `bm-border` | `rgba(255,255,255,0.08)` | subtle borders |
| `bm-text` | `#E8E1D6` | primary text (parchment) |
| `bm-muted` | `#B8B0A4` | muted text |
| `bm-accent` | `#2B8048` | accent / active states |
| `bm-accent-2` | `#76B27E` | soft accent / hover |

---

## 🧱 Tech Stack
- React
- Vite
- Tailwind CSS
- React Router DOM

---

## 🗂️ Project Structure

```bash
src/
  components/
    UI/
      Field.jsx
    BookCard.jsx
    BookForm.jsx
    BookModal.jsx
    BooksList.jsx
    EmptyState.jsx
    Footer.jsx
    Header.jsx
    ProtectedRoute.jsx
  pages/
    AddBook.jsx
    Home.jsx
    Library.jsx
    SignIn.jsx
    SignUp.jsx
  redux/              # reserved for the next step (Redux Toolkit)
  App.jsx
  main.jsx
  index.css
public/
  parchment.webp
  addBook_background.jpg
  library_background.jpg
  signup_background.jpg
```

---

## 🧭 Routes

| Route | Page | Access |
|------|------|--------|
| `/` | Home | Public |
| `/signIn` | Sign In | Public |
| `/signUp` | Sign Up | Public |
| `/library` | Library | Protected |
| `/addBook` | Add Book | Protected |

---

## 🚀 Getting Started

```bash
npm install
npm run dev
```

---

## 📜 License

Created for learning purposes.
