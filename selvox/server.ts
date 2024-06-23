import express, { Request, Response } from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';
import next from 'next';

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const PORT = process.env.PORT || 3000;

app.prepare().then(() => {
  const server = express();

  // Proxy API requests
  server.use('/api', createProxyMiddleware({
    target: 'http://localhost:7095', // Adjust the port as needed
    changeOrigin: true,
    pathRewrite: {
      '^/api': '/api',
    },
  }));

  server.all('*', (req: Request, res: Response) => {
    return handle(req, res);
  });

  server.listen(PORT, (err?: any) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${PORT}`);
  });
});
