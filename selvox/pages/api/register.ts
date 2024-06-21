import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { firstName, lastName, email, passwordHash} = req.body;

  try {
    const response = await fetch('https://localhost:7095/swagger/index.html', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        firstName,
        lastName,
        email,
        passwordHash,
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to register user');
    }

    const data = await response.json();
    return res.status(200).json(data);
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
}