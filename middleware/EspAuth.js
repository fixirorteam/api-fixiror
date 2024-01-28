const admin = require('firebase-admin');

const checkFirebaseAuth = async (req, res, next) => {
  try {
    const idToken = req.headers.authorization;
    if (!idToken) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    const decodedToken = await admin.auth().verifyIdToken(idToken);
    req.user = decodedToken;
    next();
  } catch (error) {
    console.error('Error verifying Firebase token:', error);
    return res.status(401).json({ error: 'Unauthorized' });
  }
};

module.exports = {
  checkFirebaseAuth,
};