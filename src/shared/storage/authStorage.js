const STORAGE_KEY = 'books-manager-user';

export function loadUser() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw === null) {
      return null;
    }
    return JSON.parse(raw);
  }
  catch (error) {
    console.error("Ошибка при чтении пользователя из LocalStorage:", error);
    return null;
  }
}

export function saveUser(user) {
  try {
    if (user === null) {
      localStorage.removeItem(STORAGE_KEY);
      return;
    }

    localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
  } catch (err) {
    console.error("Ошибка при сохранении пользователя в LocalStorage:", err);
  }
}