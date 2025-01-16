const mahasiswaService = require("../service/mahasiswa-Service");

const showAllMahasiswa = async (req, res) => {
  try {
    const allDataMahasiswa = await mahasiswaService.getAllMahasiswa();
    if (allDataMahasiswa.kondisi) {
      return res.status(200).json({ doc: allDataMahasiswa.data });
    }
    return res.status(404).json({ pesan: allDataMahasiswa.pesan });
  } catch (error) {
    return res.status(500).json({ message: "Terjadi kesalahan server" });
  }
};

const showDetailMahasiswa = async (req, res) => {
  try {
    const { npm } = req.params;
    const showDetail = await mahasiswaService.getMahasiswaByNpm(npm);

    if (showDetail.kondisi) {
      res.status(200).json(showDetail.data);
    } else {
      res.status(404).json({ message: showDetail.pesan });
    }
  } catch (error) {
    return res.status(500).json({ message: "Terjadi kesalahan server" });
  }
};

const createMahasiswa = async (req, res) => {
  try {
    const { nama, npm, provinsi, kota, jalan, hoby } = req.body;
    if (!nama || !provinsi || !kota || !jalan || !hoby) {
      return res.status(400).json({
        kondisi: false,
        pesan: "Semua data harus diisi",
      });
    }
    const checkNama = await mahasiswaService.checkNama(nama);
    if (checkNama == true) {
      return res.status(409).json({
        kondisi: true,
        pesan: `Mahasiswa sudah terdaftar dengan nama ${nama}`,
      });
    }

    const data = {
      nama: nama,
      npm: npm,
      alamat: {
        provinsi: provinsi,
        kota: kota,
        jalan: jalan,
      },
      hoby:
        typeof hoby === "string"
          ? hoby.split(",").map((item) => item.trim())
          : hoby,
    };

    const create = await mahasiswaService.createMahasiswa(data);

    if (create) {
      return res.status(201).json({
        kondisi: true,
        pesan: "Berhasil menambahkan mahasiswa",
      });
    }
    return res.status(400).json({
      kondisi: false,
      pesan: "Gagal menambahkan mahasiswa",
    });
  } catch (error) {
    return res.status(500).json({ message: "Terjadi kesalahan server" });
  }
};

const editFullMahasiswa = async (req, res) => {
  try {
    const { nama, provinsi, kota, jalan, hoby } = req.body;
    const { npm } = req.params;
    if (!nama || !provinsi || !kota || !jalan || !hoby) {
      return res.status(400).json({
        kondisi: false,
        pesan: "Semua data harus diisi",
      });
    }
    const checkNama = await mahasiswaService.checkNama(nama);
    if (checkNama.hasil == true) {
      return res.status(409).json({
        kondisi: true,
        pesan: `Mahasiswa sudah terdaftar dengan nama ${nama}`,
      });
    }
    const data = {
      nama: nama,
      alamat: {
        provinsi: provinsi,
        kota: kota,
        jalan: jalan,
      },
      hoby:
        typeof hoby === "string"
          ? hoby.split(",").map((item) => item.trim())
          : hoby,
    };
    const update = await mahasiswaService.updateMahasiswa(npm, data);
    res.status(200).json({ hasil: update, data: data });
  } catch (error) {
    return res.status(500).json({ message: "Terjadi kesalahan server" });
  }
};

const removeMahasiswa = async (req, res) => {
  try {
    const { npm } = req.params;
    const remove = await mahasiswaService.deleteMahasiswa(npm);

    if (remove.kondisi) {
      return res.status(200).json({
        message: remove.pesan,
      });
    } else {
      return res.status(404).json({
        message: remove.pesan,
      });
    }
  } catch (error) {
    res.status(500).json({ message: "Terjadi kesalahan internal server" });
  }
};

module.exports = {
  showAllMahasiswa,
  showDetailMahasiswa,
  createMahasiswa,
  editFullMahasiswa,
  removeMahasiswa,
};
