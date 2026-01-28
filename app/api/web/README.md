# Web API Documentation

Bu klasör, web API endpoint'lerini, interface'leri ve servisleri organize eder.

## 📁 Klasör Yapısı

```
app/api/web/
├── interfaces/          # Type ve Interface tanımları
│   ├── user.interface.js
│   ├── auth.interface.js
│   └── index.js
├── endpoints/           # API route handler'ları (alternatif yapı)
├── get/                 # GET endpoint'leri
│   └── user/
│       └── me/
│           └── route.js
├── post/                # POST endpoint'leri
│   └── user/
│       └── update-password/
│           └── route.js
├── services/            # Client-side API servisleri
│   ├── user.service.js
│   └── index.js
└── README.md
```

## 🚀 Kullanım

### Interface'leri Kullanma

```javascript
import { UserInterfaces, AuthInterfaces } from '@/app/api/web/interfaces';

// Type tanımları JSDoc formatında mevcut
// TypeScript kullanıyorsanız, .ts uzantılı dosyalar oluşturabilirsiniz
```

### Endpoint'leri Kullanma

Endpoint'ler doğrudan Next.js route handler'ları olarak çalışır:

**GET Endpoint:**
```javascript
// app/api/web/get/user/me/route.js
GET /api/web/get/user/me
```

**POST Endpoint:**
```javascript
// app/api/web/post/user/update-password/route.js
POST /api/web/post/user/update-password
```

### Servisleri Kullanma

Client-side'da API çağrıları için servis fonksiyonlarını kullanın:

```javascript
import { 
  register, 
  login, 
  sendOTP, 
  verifyOTP,
  updatePassword, 
  getCurrentUser,
  getUserList,
  getUserById,
  createUser,
  updateUser,
  deleteUser
} from '@/app/api/web/services';

// Kayıt olma
try {
  const result = await register({
    phone: '+90 555 555 55 55',
    password: 'sifre123',
    confirmPassword: 'sifre123',
    email: 'user@example.com',
    firstName: 'Ad',
    lastName: 'Soyad',
    terms: true
  });
} catch (error) {
  console.error(error.message);
}

// Giriş yapma
try {
  const result = await login({
    phone: '+90 555 555 55 55',
    password: 'sifre123'
  });
} catch (error) {
  console.error(error.message);
}

// OTP gönderme
try {
  const result = await sendOTP({
    phone: '+90 555 555 55 55'
  });
} catch (error) {
  console.error(error.message);
}

// OTP doğrulama
try {
  const result = await verifyOTP({
    phone: '+90 555 555 55 55',
    code: '123456'
  });
} catch (error) {
  console.error(error.message);
}

// Şifre güncelleme
try {
  const result = await updatePassword({
    oldPassword: 'eskiSifre',
    newPassword: 'yeniSifre',
    confirmPassword: 'yeniSifre'
  });
} catch (error) {
  console.error(error.message);
}

// Profil güncelleme (ad, soyad, e-posta)
try {
  const result = await updateProfile({
    firstName: 'Ad',
    lastName: 'Soyad',
    email: 'user@example.com'
  });
} catch (error) {
  console.error(error.message);
}

// Kullanıcı bilgilerini alma
try {
  const result = await getCurrentUser();
  
} catch (error) {
  console.error(error.message);
}

// Kullanıcı listesini alma
try {
  const result = await getUserList({
    page: 1,
    limit: 10,
    search: 'test',
    role: 'user',
    status: 'active'
  });
} catch (error) {
  console.error(error.message);
}

// Kullanıcı detayını alma
try {
  const result = await getUserById('user-id');
  
} catch (error) {
  console.error(error.message);
}

// Yeni kullanıcı oluşturma
try {
  const result = await createUser({
    phone: '5XX XXX XX XX',
    password: 'sifre123',
    email: 'user@example.com',
    firstName: 'Ad',
    lastName: 'Soyad',
    role: 'user',
    status: 'active'
  });
} catch (error) {
  console.error(error.message);
}

// Kullanıcı güncelleme
try {
  const result = await updateUser({
    id: 'user-id',
    phone: '5XX XXX XX XX',
    email: 'user@example.com',
    firstName: 'Ad',
    lastName: 'Soyad',
    role: 'admin',
    status: 'active',
    password: 'yeniSifre123'
  });
} catch (error) {
  
}

// Kullanıcı silme
try {
  const result = await deleteUser('user-id');
  
} catch (error) {
  
}
```

## 📋 Mevcut Endpoint'ler

### Authentication Endpoints

#### POST `/api/web/post/auth/register`
Yeni kullanıcı kaydı oluşturur.

**Request Body:**
```json
{
  "phone": "+90 555 555 55 55",
  "password": "sifre123",
  "confirmPassword": "sifre123",
  "email": "user@example.com",
  "firstName": "Ad",
  "lastName": "Soyad",
  "terms": true
}
```

**Response:**
```json
{
  "message": "Kayıt başarılı",
  "user": {
    "id": "user-id",
    "phone": "5551234567",
    "email": "user@example.com"
  }
}
```

#### POST `/api/web/post/auth/send-otp`
Telefon numarasına sıfırlama kodu gönderir.

**Request Body:**
```json
{
  "phone": "+90 555 555 55 55"
}
```

**Response:**
```json
{
  "message": "Sıfırlama kodu gönderildi"
}
```

#### POST `/api/web/post/auth/verify-otp`
OTP kodunu doğrular.

**Request Body:**
```json
{
  "phone": "+90 555 555 55 55",
  "code": "123456"
}
```

**Response:**
```json
{
  "message": "OTP kodu doğrulandı",
  "verified": true
}
```

### User Endpoints

#### POST `/api/web/post/user/update-password`
Kullanıcı şifresini günceller.

**Request Body:**
```json
{
  "oldPassword": "eskiSifre",
  "newPassword": "yeniSifre",
  "confirmPassword": "yeniSifre"
}
```

**Response:**
```json
{
  "message": "Şifre başarıyla güncellendi"
}
```

#### POST `/api/web/post/user/profile`
Kullanıcı profil bilgilerini günceller (ad, soyad, e-posta).

**Request Body:**
```json
{
  "firstName": "Ad",
  "lastName": "Soyad",
  "email": "user@example.com"
}
```

**Response:**
```json
{
  "message": "Profil başarıyla güncellendi",
  "user": {
    "id": "user-id",
    "phone": "5551234567",
    "email": "user@example.com",
    "firstName": "Ad",
    "lastName": "Soyad",
    "role": "user",
    "status": "active",
    "createdAt": "2024-01-01T00:00:00Z",
    "updatedAt": "2024-01-01T00:00:00Z"
  }
}
```

#### GET `/api/web/get/user/me`
Mevcut kullanıcının profil bilgilerini getirir.

**Response:**
```json
{
  "user": {
    "id": "user-id",
    "phone": "5551234567",
    "email": "user@example.com",
    "firstName": "Ad",
    "lastName": "Soyad",
    "role": "user",
    "status": "active",
    "createdAt": "2024-01-01T00:00:00Z",
    "updatedAt": "2024-01-01T00:00:00Z"
  }
}
```

#### GET `/api/web/get/user/list`
Kullanıcı listesini getirir (Admin/Moderator only). Sayfalama, arama ve filtreleme destekler.

**Query Parameters:**
- `page` (optional): Sayfa numarası (default: 1)
- `limit` (optional): Sayfa başına öğe sayısı (default: 10)
- `search` (optional): Arama sorgusu (telefon, email, ad, soyad)
- `role` (optional): Rol filtresi (admin, moderator, user)
- `status` (optional): Durum filtresi (active, inactive)

**Response:**
```json
{
  "users": [
    {
      "id": "user-id",
      "phone": "5551234567",
      "email": "user@example.com",
      "first_name": "Ad",
      "last_name": "Soyad",
      "role": "user",
      "status": "active",
      "created_at": "2024-01-01T00:00:00Z",
      "updated_at": "2024-01-01T00:00:00Z"
    }
  ],
  "pagination": {
    "page": 1,
    "limit": 10,
    "total": 100,
    "totalPages": 10
  }
}
```

#### GET `/api/web/get/user/[id]`
Belirli bir kullanıcının detaylarını getirir.

**Response:**
```json
{
  "user": {
    "id": "user-id",
    "phone": "5551234567",
    "email": "user@example.com",
    "firstName": "Ad",
    "lastName": "Soyad",
    "role": "user",
    "status": "active",
    "createdAt": "2024-01-01T00:00:00Z",
    "updatedAt": "2024-01-01T00:00:00Z"
  }
}
```

#### POST `/api/web/post/user/create`
Yeni kullanıcı oluşturur (Admin only).

**Request Body:**
```json
{
  "phone": "5XX XXX XX XX",
  "password": "sifre123",
  "email": "user@example.com",
  "firstName": "Ad",
  "lastName": "Soyad",
  "role": "user",
  "status": "active"
}
```

**Response:**
```json
{
  "message": "Kullanıcı başarıyla oluşturuldu",
  "user": {
    "id": "user-id",
    "phone": "5551234567",
    "email": "user@example.com",
    "firstName": "Ad",
    "lastName": "Soyad",
    "role": "user",
    "status": "active",
    "createdAt": "2024-01-01T00:00:00Z",
    "updatedAt": "2024-01-01T00:00:00Z"
  }
}
```

#### POST `/api/web/post/user/update`
Kullanıcı bilgilerini günceller (Admin/Moderator only).

**Request Body:**
```json
{
  "id": "user-id",
  "phone": "5XX XXX XX XX",
  "email": "user@example.com",
  "firstName": "Ad",
  "lastName": "Soyad",
  "role": "admin",
  "status": "active",
  "password": "yeniSifre123"
}
```

**Response:**
```json
{
  "message": "Kullanıcı başarıyla güncellendi",
  "user": {
    "id": "user-id",
    "phone": "5551234567",
    "email": "user@example.com",
    "firstName": "Ad",
    "lastName": "Soyad",
    "role": "admin",
    "status": "active",
    "createdAt": "2024-01-01T00:00:00Z",
    "updatedAt": "2024-01-01T00:00:00Z"
  }
}
```

#### POST `/api/web/post/user/delete`
Kullanıcıyı siler (Admin only).

**Request Body:**
```json
{
  "id": "user-id"
}
```

**Response:**
```json
{
  "message": "Kullanıcı başarıyla silindi"
}
```

## 🔧 Yeni Endpoint Ekleme

1. **Interface oluştur** (`interfaces/` klasörüne):
```javascript
// interfaces/new.interface.js
export const NewInterfaces = {
  RequestType: { ... },
  ResponseType: { ... }
};
```

2. **Endpoint oluştur** (`get/` veya `post/` klasörüne):
```javascript
// post/resource/action/route.js veya get/resource/route.js
export async function POST(request) {
  // Handler logic
}
```

3. **Servis fonksiyonu ekle** (`services/` klasörüne):
```javascript
// services/new.service.js
export async function newFunction(data) {
  const response = await fetch('/api/web/post/resource/action', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  return response.json();
}
```

## 📝 Best Practices

1. **Interface'leri her zaman tanımlayın** - Request/Response tipleri için
2. **Servis fonksiyonlarını kullanın** - Client-side'da doğrudan fetch yerine
3. **Hata yönetimi** - Tüm servis fonksiyonlarında try-catch kullanın
4. **Validation** - Zod schema'ları ile validate edin
5. **Authentication** - Session kontrolü yapın
6. **Error messages** - Kullanıcı dostu hata mesajları döndürün

## 🔐 Güvenlik

- Tüm endpoint'ler session kontrolü yapmalı
- Şifreler her zaman hash'lenmeli (bcrypt)
- Input validation yapılmalı (Zod)
- Rate limiting düşünülmeli (ileride)
