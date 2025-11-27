export const hash = async (value: string): Promise<string> => {
  const bcrypt = await import('bcrypt');
  return bcrypt.hash(value, 10);
};

export const compare = async (
  value: string,
  hash: string,
): Promise<boolean> => {
  const bcrypt = await import('bcrypt');
  return bcrypt.compare(value, hash);
};
