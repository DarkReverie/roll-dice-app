
import express from 'express';
import cors from 'cors';
import rn from 'random-number';

const numberGenerator = rn.generator({
    min: 1,
    max: 20,
    integer: true
});
const app = express();
app.use(cors());
const port = 3000;

app.get('/api/data', (req, res) => {
  res.json({ message: numberGenerator() });
});

app.listen(port, () => {
  console.log(`Backend server is running at http://localhost:${port}`);
});