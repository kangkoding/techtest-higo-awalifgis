# BE Test - Awalif Ghotamicha Irfan Saputra

Ini adalah proyek Backend API dan Frontend Dashboard sederhana untuk kebutuhan visualisasi dan pengelolaan data visitor menggunakan stack modern.

## Dokumentasi API

Dokumentasi endpoint lengkap tersedia di Postman:
👉 [Klik untuk melihat dokumentasi Postman](https://documenter.getpostman.com/view/46116227/2sB34fngXe)

## Tech Stack

### Backend

- **Node.js** – Runtime environment
- **Express.js** – Backend framework
- **MongoDB Atlas** – Database cloud NoSQL
- **Mongoose** – ODM MongoDB
- **CORS, dotenv** – Utilities untuk keamanan & konfigurasi

### Frontend

- **React.js** – Library UI
- **Next.js** – Framework React (optional)
- **Tailwind CSS v3** – Styling modern dan responsive
- **Chart.js** – Visualisasi data
- **Lucide React** – Icon set
- **Axios** – HTTP request

## Fitur

- CRUD visitor data (via DB seed)
- Visualisasi chart: Gender, Digital Interest, Device
- Responsive table visitor dengan search & pagination full backend
- Modal detail visitor
- Modal Chart untuk visualisasi data
- Loader saat fetch data
- Search dan filter real-time
- REST API response < 30 detik ✅

## Cara Jalankan (Local)

```bash
# 1. Clone project
git clone https://github.com/kangkoding/techtest-higo-awalifgis.git

# 2. Backend
cd backend
npm install
npm start

# 3. Frontend
cd frontend
npm install
npm run dev
```
