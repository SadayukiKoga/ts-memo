import { PrismaClient } from '@prisma/client';
import express from 'express';

import { applyServerSettings } from './settings';

const app = express();
const port = 8000;

// Middlewares and settings
applyServerSettings(app);

// ↓↓↓ バックエンド処理を記述して実際に開発してみましょう！！

declare global {
  // eslint-disable-next-line no-var
  var __db__: PrismaClient | undefined;
}

const initPrisma = () => {
  if (process.env.NODE_ENV === 'production') return new PrismaClient();

  const db = (global.__db__ = global.__db__ ?? new PrismaClient());
  db.$connect();
  return db;
};

const prisma = initPrisma();

app.get('/memos', async (req, res) => {
  const records = await prisma.memo.findMany();

  const memos = records.map((memo) => {
    return {
      id: memo.id,
      title: memo.title,
      createdAt: formatDateInJa(memo.createdAt),
    };
  });

  res.json({ data: memos });
});

app.post('/memos/create', async (req, res) => {
  const { title, content } = req.body;
  console.log(title);

  if (typeof title !== 'string' || !title) {
    res.status(400).json({ error: { message: 'タイトルまたは内容が未入力です' } });
    return;
  }

  if (typeof content !== 'string' || !content) {
    res.status(400).json({ error: { message: 'タイトルまたは内容が未入力です' } });
    return;
  }

  const record = await prisma.memo.create({ data: { title, content } });

  res.json({ data: { id: record.id.toString(10) } });
});


const formatDateInJa = (date: Date) => {
  const year = date.getFullYear().toString();
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');

  return `${year}/${month}/${day} ${hours}:${minutes}`;
};


// ↑↑↑ バックエンド処理を記述して実際に開発してみましょう！！

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});


