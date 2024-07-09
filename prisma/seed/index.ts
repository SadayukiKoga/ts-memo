import { createTestMemos } from './test-memos';

// テストデータ登録用関数
const seed = async () => {
  await createTestMemos();
};

seed();
