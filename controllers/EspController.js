const AdminConfig = require('../config/Firebase')


const getDeviceInfo = (req, res) => {
  try {
    const dataRef = AdminConfig.database().ref('/device_info/about');

    // Set header untuk SSE
    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');

    // Kirim data saat ada perubahan
    const sendDeviceInfo = (data) => {
      res.write(`data: ${JSON.stringify({ success: true, data })}\n\n`);
    };

    // Langganan perubahan pada Firebase
    const handleSnapshot = (snapshot) => {
      const data = snapshot.val();
      sendDeviceInfo(data);
    };
    dataRef.on('value', handleSnapshot);

    // Menangani penutupan koneksi SSE
    req.on('close', () => {
      dataRef.off('value', handleSnapshot);
      res.end();
    });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ success: false, error: error.message });
  }
};

const getMemoryInfo = (req, res) => {
  try {
    const dataRef = AdminConfig.database().ref('/device_info/memory');

    // Set header untuk SSE
    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');

    // Kirim data saat ada perubahan
    const sendDeviceInfo = (data) => {
      res.write(`data: ${JSON.stringify({ success: true, data })}\n\n`);
    };

    // Langganan perubahan pada Firebase
    const handleSnapshot = (snapshot) => {
      const data = snapshot.val();
      sendDeviceInfo(data);
    };
    dataRef.on('value', handleSnapshot);

    // Menangani penutupan koneksi SSE
    req.on('close', () => {
      dataRef.off('value', handleSnapshot);
      res.end();
    });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ success: false, error: error.message });
  }
};

  const getFlameSensor = (req, res) => {
    try {
      const dataRef = AdminConfig.database().ref('/device_info/flame_sensor/zone_1');
  
      // Set header untuk SSE
      res.setHeader('Content-Type', 'text/event-stream');
      res.setHeader('Cache-Control', 'no-cache');
      res.setHeader('Connection', 'keep-alive');
  
      // Kirim data saat ada perubahan
      const sendFlameSensorData = (data) => {
        res.write(`data: ${JSON.stringify({ status: 'Status Api', data })}\n\n`);
      };
  
      // Langganan perubahan pada Firebase
      const handleSnapshot = (snapshot) => {
        const data = snapshot.val();
        sendFlameSensorData(data);
      };
      dataRef.on('value', handleSnapshot);
  
      // Menangani penutupan koneksi SSE
      req.on('close', () => {
        dataRef.off('value', handleSnapshot);
        res.end();
      });
  
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ success: false, error: error.message });
    }
  };

module.exports = {
    getDeviceInfo,
    getMemoryInfo,
    getFlameSensor
}