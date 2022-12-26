import express, { Express, Request, Response } from 'express';
import http from 'http';

const app: Express = express();


app.get('/', function (req: Request, res: Response) {
   res.send('Hello World');
})

const port = 8081;
  
app.listen(port, () => {
    console.log(`[server]: Server is running at https://localhost:${port}`);
});