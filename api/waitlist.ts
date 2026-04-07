import type { VercelRequest, VercelResponse } from '@vercel/node';
import { sql } from '@vercel/postgres';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

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
}
