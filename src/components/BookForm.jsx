import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {Field} from './UI/Field'
// import CoverDetective from '../../public/detective.jpg'
// import CoverFantasy from '../../public/fantasy.jpg'
// import CoverRoman from '../../public/roman.jpg'

export const BookForm = ({ onAddBook }) => {

  const navigate = useNavigate(); // переход на другую страницу с помощью кода

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publishedAt, setPublishedAt] = useState('');
  const [genre, setGenre] = useState('');
  const [cover, setCover] = useState(null); // File
  const [description, setDescription] = useState('')

  const [error, setError] = useState({})
  const [touched, setTouched] = useState({});


  // проверка можно ли сохранить книгу
  // Метод trim() удаляет пробельные символы с начала и конца строки.
  const canSubmit =
    title.trim().length >= 2 &&
    author.trim().length >= 2 &&
    publishedAt !== "" &&
    genre.trim().length > 0 &&
    description.trim().length > 0 &&
    cover !== null;

  // загрузка обложки
  const handleCoverChange = (event) => {
    const file = event.target.files?.[0]
    if (!file) return

    setCover(file);

    setError((prev) => ({ ...prev, cover: undefined }))
  }

  // валидация полей формы
  const validate = () => {
    const nextError = {}

    if (title.trim().length < 2) nextError.title = "Please, enter the title, it must contain at least 2 characters"
    if (author.trim().length < 2) nextError.author = "Please, enter the author's name, it must contain at least 2 characters"
    if (!publishedAt) nextError.publishedAt = "Please, select a publication date"
    if (genre.trim().length === 0) nextError.genre = "Please, enter the genre of the book"
    if (description.trim().length === 0) nextError.description = "Please, enter a short description of the book"
    if (!cover) nextError.cover = "Please, choose the cover of the book"

    setError(nextError)

    return Object.keys(nextError).length === 0;

  }


  const handleBlur = (fieldName) => {
    // отмечаем поле как "потроганное"
    setTouched((prev) => ({ ...prev, [fieldName]: true }));

    // пересчитываем ошибки (чтобы они появились после выхода из поля)
    validate();
  };


  // отправка формы
  const handleSubmit = (event) => {
    event.preventDefault(); // отмена перезагрузки страницы, чтобы не потерят данные введенные пользователем


    setTouched({
      title: true,
      author: true,
      publishedAt: true,
      genre: true,
      description: true,
      cover: true,
    });


    const isValid = validate()
    if (!isValid) return;

    const book = {
      // Метод crypto.randomUUID() является текущим стандартом для генерации уникальных ID-значений в современных окружениях. 
      id: crypto.randomUUID(),
      title: title.trim(),
      author: author.trim(),
      publishedAt: publishedAt,
      genre: genre.trim(),
      description: description.trim(),

      // пока сохраняем только имя файла
      coverName: cover.name,
    }

    onAddBook(book) // передаем книгу назад родителю, т.е.в App.js

    // очищаем форму
    setTitle("");
    setAuthor("");
    setPublishedAt("");
    setGenre("");
    setCover(null);
    setDescription("");


    navigate('/library')
  }



  return (
    <div className="card-archive p-6 md:p-8">
      <div className="relative z-10">
        <div className="flex items-start justify-between gap-6 border-b border-white/10 pb-5 mb-6">
          <div>
            <h2 className="font-heading text-xl text-bm-text">Catalog card</h2>
            <p className="text-sm text-bm-text/60 italic mt-1">
              Add what you know — the archive accepts incomplete stories.
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="grid gap-5">
          <div className="grid gap-4 md:grid-cols-2">
            <Field label="Title *" error={touched.title && error.title}>
              <input
                className={`input transition-all duration-200 ${touched.title && error.title ? "ring-2 ring-red-500/40" : ""}`}
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                onBlur={() => handleBlur("title")}
                placeholder="The Secret History"
              />
            </Field>


            <Field label="Author *" error={touched.author && error.author}>
              <input
                className={`input transition-all duration-200 ${touched.author && error.author ? "ring-2 ring-red-500/40" : ""}`}
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                onBlur={() => handleBlur("author")}
                placeholder="Donna Tartt"
              />
            </Field>

          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <Field label="Published date *" error={touched.publishedAt && error.publishedAt}>
              <input
                type="date"
                className={`input date-input transition-all duration-200 ${touched.publishedAt && error.publishedAt ? "ring-2 ring-red-500/40" : ""}`}
                value={publishedAt}
                onChange={(e) => setPublishedAt(e.target.value)}
                onBlur={() => handleBlur("publishedAt")}
              />
            </Field>


            <Field label="Genre *" error={touched.genre && error.genre}>
              <input
                className={`input transition-all duration-200 ${touched.genre && error.genre ? "ring-2 ring-red-500/40" : ""}`}
                value={genre}
                onChange={(e) => setGenre(e.target.value)}
                onBlur={() => handleBlur("genre")}
                placeholder="Dark Academia"
              />
            </Field>

          </div>

          <Field label="Description *" error={touched.description && error.description}>
            <textarea
              className={`input resize-none transition-all duration-200 ${touched.description && error.description ? "ring-2 ring-red-500/40" : ""}`}
              rows={4}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              onBlur={() => handleBlur("description")}
              placeholder="A quiet story hidden between old walls..."
            />
          </Field>


          <Field label="Cover image *" error={touched.cover && error.cover}>
            <input
              type="file"
              accept="image/*"
              onChange={handleCoverChange}
              onBlur={() => handleBlur("cover")}
              className="block w-full text-sm text-bm-text/70
               file:mr-4 file:rounded-full file:border-0
               file:bg-white/10 file:px-4 file:py-2
               file:text-bm-text file:hover:bg-white/15
               transition"
            />
          </Field>


          <div className="mt-2 flex justify-end">
            <button
              type="submit"
              className={`px-6 py-2.5 rounded-full font-semibold tracking-wide transition-all
                ${canSubmit
                  ? "bg-bm-accent text-bm-bg hover:brightness-110 active:scale-95"
                  : "bg-white/10 text-bm-text/40 cursor-not-allowed"
                }`}
            >
              Seal the entry
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};







// Сделать плавное появление ошибок, Сделать SignIn / SignUp


// 👉 Следующий шаг — Library.jsx
// Мы:

// используем эти поля

// научимся .map()

// увидим, зачем реально нужен id

// подготовим код к Redux