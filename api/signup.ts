import type { VercelRequest, VercelResponse } from '@vercel/node';
import { neon } from '@neondatabase/serverless';

const sql = neon(process.env.DATABASE_URL!);

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

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
        monthly_bill NUMERIC,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `;

    await sql`
      ALTER TABLE waitlist ADD COLUMN IF NOT EXISTS monthly_bill NUMERIC
    `;

    const { name, whatsapp, email, city, discom, category, monthly_bill } = req.body;
    await sql`
      INSERT INTO waitlist (name, whatsapp, email, city, discom, category, monthly_bill)
      VALUES (${name}, ${whatsapp}, ${email}, ${city}, ${discom}, ${category}, ${monthly_bill ? Number(monthly_bill) : null})
    `;
    res.status(200).json({ success: true });
  } catch (err: any) {
    console.error(err);
    res.status(500).json({ error: err.message || 'Failed to save to database' });
  }
}
