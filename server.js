// const express = require('express');
// const fetch = require('node-fetch');
import fetch from "node-fetch";
import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import cors from "cors";
// const path = require('path');

const app = express();

// Serve static files from the public directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));

// API endpoint to retrieve data from external API
app.get('/api/data', (req, res) => {
  fetch('https://unpkg.com/web3@latest/dist/web3.min.js')
    .then(response => response.json())
    .then(data => {
      res.json(data);
    })
    .catch(error => {
      console.error(error);
      res.status(500).send('Error retrieving data');
    });
});
app.get('/api2/data', (req, res) => {
  fetch('https://unpkg.com/@walletconnect/web3-provider@latest/dist/umd/index.min.js')
    .then(response => response.json())
    .then(data => {
      res.json(data);
    })
    .catch(error => {
      console.error(error);
      res.status(500).send('Error retrieving data');
    });
});
app.get('/api3/data', (req, res) => {
  fetch('https://unpkg.com/web3modal@latest/dist/index.js')
    .then(response => response.json())
    .then(data => {
      res.json(data);
    })
    .catch(error => {
      console.error(error);
      res.status(500).send('Error retrieving data');
    });
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
