import request from 'supertest';
import { describe, it, expect } from '@jest/globals';
import app from '../../server.js';

describe('GET /api/healthcheck', () => {
  it('should return 200 status', async () => {
    const response = await request(app).get('/api/healthcheck');
    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Welcome to LoopFeed API');
    expect(response.body.version).toBeDefined();
    expect(response.body.timestamp).toBeDefined();
    expect(response.body.uptime).toBeDefined();
    expect(response.body.environment).toBeDefined();
    expect(response.body.status).toBe('OK');
  });
});
