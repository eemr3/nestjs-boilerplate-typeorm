export default () => ({
  port: parseInt(process.env.PORT || '3000', 10),
  jwt: {
    secret: process.env.JWT_SECRET || 'super-segredo-muito-forte-2025',
    expiresIn: '15m',
    refreshExpiresIn: '7d',
  },
});
