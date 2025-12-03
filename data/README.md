# Данные портфолио

## Структура файлов

```
data/
  portfolio.json    ← данные о работах
public/images/portfolio/
  work-1.jpg        ← фото работ
  work-2.jpg
  work-3.jpg
  ...
```

## Как добавить новую работу

1. Положи фото в `/public/images/portfolio/` (например `work-4.jpg`)

2. Добавь запись в `portfolio.json`:

```json
{
  "id": "work-4",
  "image": "/images/portfolio/work-4.jpg",
  "year": 2024,
  "dimensions": "100 × 150 см",
  "technique": {
    "kz": "Гобелен, жүн",
    "ru": "Гобелен, шерсть",
    "en": "Tapestry, wool"
  },
  "title": {
    "kz": "Атауы қазақша",
    "ru": "Название на русском",
    "en": "Title in English"
  },
  "description": {
    "kz": "Сипаттама қазақша.",
    "ru": "Описание на русском.",
    "en": "Description in English."
  }
}
```

## Рекомендации по фото

- Формат: JPG или WebP
- Размер: минимум 1200px по ширине
- Соотношение сторон: желательно 4:5 (вертикальное)
- Имя файла: без пробелов и кириллицы (например `morning-light.jpg`)
