# Patterns (Dasturiy Arxitektura va Patternlar)

Ushbu loyiha dasturiy ta'minot arxitekturasi va dizayn patternlari bo'yicha o'zbek tilidagi qo'llanma hisoblanadi. Loyiha **Astro** va **Starlight** asosida qurilgan.

### 🧩 Umumiy (General)

- **Clean Architecture** — Biznes mantig'ini himoyalash va qatlamli arxitektura.

### 🖥️ Frontend

- **MVC (Model-View-Controller)** — Klassik arxitektura.
- **MVVM (Model-View-ViewModel)** — Vue.js va boshqalar uchun.
- **MVP (Model-View-Presenter)** — UI va Logic ajratish.
- **Flux** — Bir tomonlama ma'lumot oqimi (Redux).
- **Atomic Design** — Komponent tizimlarini qurish.
- **FSD (Feature-Sliced Design)** — Katta masshtabli loyihalar uchun.

### ⚙️ Backend

- **Microservices** — Kichik, mustaqil xizmatlar.
- **Hexagonal Architecture (Ports and Adapters)** — Moslashuvchan tizimlar qurish.
- **CQRS** — O'qish v Yozish mas'uliyatini ajratish.
- **Event-Driven** — Hodisalarga asoslangan arxitektura.

### ☕ JavaScript Patterns

- Singleton, Factory, Module, Observer, Proxy, Prototype.
- Performance Patterns: Bundle Splitting, Tree Shaking, Browser Hints.

## 🚀 Ishga tushirish

Loyihani local kompyuterda ishga tushirish uchun:

1.  Repozitoriyni klon qiling.
2.  Zaruriy kutubxonalarni o'rnating:

```bash
npm install
```

3.  Loyiha serverini ishga tushiring:

```bash
npm run dev
```

Loyiha `localhost:4321` manzilida ochiladi.

## 🛠️ Build

Production uchun build qilish:

```bash
npm run build
```

## 🤝 Hissa qo'shish

Agar sizda yangi patternlar yoki yaxshilanishlar bo'yicha takliflar bo'lsa, bemalol _Pull Request_ yuborishingiz mumkin.
