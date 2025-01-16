# Mahasiswa API

API ini digunakan untuk menampilkan dan mengelola data mahasiswa.

---

## **Show Data Mahasiswa**

**Endpoint : GET /api/mahasiswa**

```json
{
  "nama": "Mahasiswa 1",
  "npm": 2212001,
  "alamat": {
    "provinsi": "Lampung",
    "kota": "Bandar Lampung",
    "jalan": "Jl. Raya. Gg Buntu. No.11"
  },
  "hobi": ["Renang", "Sepak Bola", "Baca Buku"]
}
```

---

## **Show Data Mahasiswa BY NPM**

**Endpoint : GET /api/mahasiswa/:npm**
Request Body Succes :

```json:
{
  "nama": "Mahasiswa 1",
  "npm": 2212001,
  "alamat": {
    "provinsi": "Lampung",
    "kota": "Bandar Lampung",
    "jalan": "Jl. Raya. Gg Buntu. No.11"
  },
  "hobi": ["Renang", "Sepak Bola", "Baca Buku"]
}
```

Request Body Error :

```json:
{
  "kondisi" : false,
  "pesan" : "Gagal mendapatkan detail mahasiswa"
}
```

---

## **Create Data Mahasiswa**

**Endpoint : POST /api/mahasiswa/add**
Request Body :

```json
{
  "nama": "Mahasiswa 1",
  "npm": 2212001,
  "alamat": {
    "provinsi": "Lampung",
    "kota": "Bandar Lampung",
    "jalan": "Jl. Raya. Gg Buntu. No.11"
  },
  "hobi": ["Renang", "Sepak Bola", "Baca Buku"]
}
```

Response Body Success Create:

```json
data: {
    "kondisi" : true
    "pesan" : "Berhasil menambahkan mahasiswa"
}
```

Response Body Erorr Create :

```json
data: {
    "kondisi" : false
    "pesan" : "Gagal menambahkan mahasiswa"
}
```

---

## **Update Data Mahasiswa**

**Endpoint : PUT /update/mahasiswa/:npm**
Request Body :

```json
{
  "nama": "Mahasiswa 1",
  "npm": 2212001,
  "alamat": {
    "provinsi": "Lampung",
    "kota": "Bandar Lampung",
    "jalan": "Jl. Raya. Gg Buntu. No.11"
  },
  "hobi": ["Renang", "Sepak Bola", "Baca Buku"]
}
```

Response Body Success Update:

```json
data: {
    "kondisi" : true
    "pesan" : "Update berhasil dilakukan"
}
```

Response Body Erorr Update :

```json
data: {
    "kondisi" : false
    "pesan" : "Gagal melakukan update data mahasiswa"
}
```

---

## **Delete Data Mahasiswa**

Response Body Success Delete:

```json
data: {
    "kondisi" : true
    "pesan" : "Data mahasiswa berhasil dihapus"
}
```

Response Body Erorr Delete :

```json
data: {
    "kondisi" : false
    "pesan" : "Data mahasiswa tidak ditemukan"
}
```
