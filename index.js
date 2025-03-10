import app from './src/server.js';

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.warn(
    `🚀 Server running on http://localhost:${PORT} | ENV: ${process.env.NODE_ENV}`
  );
});
