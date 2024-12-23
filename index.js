import express from 'express';
import axios from 'axios';
import { verifyChecklist } from './src/verifyCheckList.js';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const PORT = 4100;

// Set EJS as the templating engine
app.set('view engine', 'ejs');
app.set('views', path.join(path.dirname(fileURLToPath(import.meta.url)), 'views'));

// Serve static files
app.use(express.static(path.join(path.dirname(fileURLToPath(import.meta.url)), 'public')));

// Route to evaluate and display the checklist
app.get('/', async (req, res) => {
  try {
    const response = await axios.get('http://qa-gb.api.dynamatix.com:3100/api/applications/getApplicationById/67339ae56d5231c1a2c63639');
    const data = response.data;
    const results = verifyChecklist(data);

    res.render('dashboard', { results });
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
