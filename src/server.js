import dotenv from 'dotenv';
dotenv.config({
  path: process.env.NODE_ENV === 'development' ? '.env.local' : '.env',
});

console.log('Test: Minor Update again 4...');

import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import { getPackageJson } from './utils/getPackageJson.js';

const pkgJson = getPackageJson();
const PORT = process.env.PORT || 3000;
const logFormat = process.env.NODE_ENV === 'production' ? 'combined' : 'dev';

const app = express();

// middlewares
app.use(cors());
app.use(helmet());
app.use(morgan(logFormat));
app.use(express.json());

// routes
app.get('/api/healthcheck', (_, res) => {
  res.status(200).json({
    message: 'Welcome to LoopFeed API',
    version: pkgJson?.version,
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    environment: process.env.NODE_ENV,
    status: 'OK',
  });
});

app.listen(PORT, () => {
  console.warn(
    `🚀 Server running on http://localhost:${PORT} | ENV: ${process.env.NODE_ENV}`
  );
});
