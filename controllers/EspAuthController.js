

const postIPStatic = async (req, res) => {
    const configData = req.body;
  console.log('Received configuration data:', configData);

  // Lakukan sesuatu dengan data konfigurasi, misalnya menyimpan ke file atau database
  // ...

  res.json({ message: 'Configuration data received successfully' });
};

module.exports = {
  postIPStatic
};
