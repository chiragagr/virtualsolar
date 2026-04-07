import express from 'express';
import { createServer as createViteServer } from 'vite';
import { sql } from '@vercel/postgres';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.set('trust proxy', 1);
  app.use(express.json());

  // Initialize DB
  try {
    await sql`
      CREATE TABLE IF NOT EXISTS waitlist (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        whatsapp VARCHAR(20) NOT NULL,
        email VARCHAR(255),
        city VARCHAR(255) NOT NULL,
        discom VARCHAR(255) NOT NULL,
        category VARCHAR(255) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `;
    console.log('Database initialized');
  } catch (err) {
    console.error('Failed to initialize database:', err);
  }

  app.post('/api/signup', async (req, res) => {
    try {
      const { name, whatsapp, email, city, discom, category } = req.body;
      await sql`
        INSERT INTO waitlist (name, whatsapp, email, city, discom, category)
        VALUES (${name}, ${whatsapp}, ${email}, ${city}, ${discom}, ${category})
      `;
      res.status(200).json({ success: true });
    } catch (err: any) {
      console.error(err);
      res.status(500).json({ error: 'Failed to save to database' });
    }
  });

  app.get('/api/waitlist', async (req, res) => {
    const authHeader = req.headers.authorization;
    if (authHeader !== `Bearer ${process.env.ADMIN_PASSWORD}`) {
      return res.status(401).json({ error: 'Unauthorized' });
    }
    try {
      const { rows } = await sql`SELECT * FROM waitlist ORDER BY created_at DESC`;
      res.status(200).json(rows);
    } catch (err: any) {
      console.error(err);
      res.status(500).json({ error: 'Failed to fetch waitlist' });
    }
  });

  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on port ${PORT}`);
  });
}

startServer();
