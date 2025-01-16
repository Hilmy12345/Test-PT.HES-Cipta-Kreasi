const { getDB } = require("../config/db");

const getAllMahasiswa = async () => {
  try {
    const db = getDB();
    const collection = db.collection("mahasiswa");
    const mahasiswaList = await collection.find({}).toArray();

    return {
      kondisi: mahasiswaList.length > 0,
      data: mahasiswaList,
      pesan: mahasiswaList.length === 0 ? "Tidak ada data mahasiswa" : "",
    };
  } catch (error) {
    return {
      kondisi: false,
      pesan: `Gagal mendapatkan seluruh data mahasiswa: ${error.message}`,
    };
  }
};
const getMahasiswaByNpm = async (npm) => {
  try {
    const db = getDB();
    const collection = db.collection("mahasiswa");
    const mahasiswa = await collection.findOne({ npm });
    return {
      kondisi: true,
      data: mahasiswa,
    };
  } catch (error) {
    return {
      kondisi: false,
      pesan: `Gagal mendapatkan detail mahasiswa: ${error.message}`,
    };
  }
};

const checkNama = async (nama) => {
  try {
    const db = getDB();
    const collection = db.collection("Mahasiswa");
    const result = await collection.findOne({ nama });

    if (result) {
      return {
        hasil: true,
        pesan: `Mahasiswa sudah terdaftar`,
      };
    }

    return {
      hasil: false,
    };
  } catch (error) {
    return {
      hasil: false,
      pesan: `Terjadi kesalahan saat memeriksa nama: ${error.message}`,
    };
  }
};

const createMahasiswa = async (data) => {
  try {
    const db = getDB();
    const collection = db.collection("mahasiswa");

    const result = await collection.insertOne(data);

    if (result.insertedId) {
      return {
        kondisi: true,
        pesan: "Berhasil menambahkan mahasiswa",
      };
    } else {
      return {
        kondisi: false,
        pesan: "Gagal menambahkan mahasiswa.",
      };
    }
  } catch (error) {
    return {
      kondisi: false,
      pesan: `Terjadi kesalahan saat menambahkan data mahasiswa: ${error.message}`,
    };
  }
};

const deleteMahasiswa = async (npm) => {
  try {
    const db = getDB();
    const collection = db.collection("mahasiswa");

    const result = await collection.deleteOne({ npm });

    if (result.deletedCount === 0) {
      return {
        kondisi: false,
        pesan: `Data mahasiswa tidak ditemukan`,
      };
    }

    return {
      kondisi: true,
      pesan: `Data mahasiswa berhasil dihapus`,
    };
  } catch (error) {
    return {
      kondisi: false,
      pesan: `Gagal menghapus mahasiswa: ${error.message}`,
    };
  }
};

const updateMahasiswa = async (npm, updateData) => {
  try {
    const db = getDB();
    const collection = db.collection("mahasiswa");
    const result = await collection.updateOne(
      { npm: npm },
      { $set: updateData }
    );
    if (result.matchedCount === 0) {
      return {
        kondisi: false,
        pesan: `Gagal melakukan update data mahasiswa`,
      };
    }

    if (result.modifiedCount === 0) {
      return {
        kondisi: false,
        pesan: `Data tidak mengalami perubahan.`,
      };
    }

    return {
      kondisi: true,
      pesan: `Update berhasil dilakukan`,
    };
  } catch (error) {
    return {
      kondisi: false,
      pesan: `Gagal memperbarui mahasiswa: ${error.message}`,
    };
  }
};

module.exports = {
  getAllMahasiswa,
  getMahasiswaByNpm,
  checkNama,
  createMahasiswa,
  deleteMahasiswa,
  updateMahasiswa,
};
