import { NextApiRequest, NextApiResponse } from 'next';

export default function getUsers(req: NextApiRequest, res: NextApiResponse) {
  const users = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Dani' },
    { id: 3, name: 'Rafa' },
  ];

  return res.json(users);
}
