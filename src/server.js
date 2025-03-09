import dotenv from 'dotenv';
dotenv.config({
  path: process.env.NODE_ENV === 'development' ? '.env.local' : '.env',
});

import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import { readFileSync } from 'fs';
import { join } from 'path';

// Read package.json manually
const pkgJson = JSON.parse(
  readFileSync(join(process.cwd(), 'package.json'), 'utf8')
);

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
