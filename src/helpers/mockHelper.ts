import type { IncomingMessage, ServerResponse } from 'http';

type MockDataCallBackFunction<Type> = () => Type;

export const generateMockData = async <T>(req: IncomingMessage, res: ServerResponse, amountItems: number,
  generateMockData: MockDataCallBackFunction<T>): Promise<void> => {
  if (req.method === 'GET') {
    const data = Array.from({ length: amountItems }, generateMockData);
    const response = JSON.stringify(data);
    res.writeHead(200, {
      'Content-Length': Buffer.byteLength(response, 'utf-8'),
      'Content-Type': 'text/html; charset=utf-8',
    });
    res.write(response, 'utf-8');
    res.end();
  } else {
    res.statusCode = 404;
    res.end('404 Not Found');
  }
};