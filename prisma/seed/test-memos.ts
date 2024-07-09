import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const createTestMemos = async () => {
  await prisma.memo.create({
    data: {
      title: 'TypeScriptの学習',
      content: 'TypeScriptの学習をする\n- 変数\n- 配列\n- 関数\n etc...',
    },
  });
  await prisma.memo.create({
    data: {
      title: 'TypeScriptの復習',
      content: 'TypeScriptの復習をする\n- 変数\n- 配列\n- 関数\n etc...',
    },
  });
  await prisma.memo.create({
    data: {
      title: 'フレームワークの学習',
      content: 'フレームワークの学習をする\n- 変数\n- 配列\n- 関数\n etc...',
    },
  });
};
