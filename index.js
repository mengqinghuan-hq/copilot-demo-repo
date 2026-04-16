const express = require('express');
const app = express();
const port = 3000;

const startTime = Date.now();

function getUptime() {
  return Math.floor((Date.now() - startTime) / 1000);
}

function checkDependencies() {
  const checks = {
    expressServer: app.listening ? 'OK' : 'FAILED',
    memory: process.memoryUsage().heapUsed < process.memoryUsage().heapTotal ? 'OK' : 'WARNING'
  };
  
  return checks;
}

app.get('/', (req, res) => {
  res.json({ message: 'Hello from Copilot Demo!' });
});

app.get('/health', (req, res) => {
  const dependencies = checkDependencies();
  const allHealthy = Object.values(dependencies).every(status => status === 'OK');
  
  res.status(allHealthy ? 200 : 503).json({
    status: allHealthy ? 'OK' : 'DEGRADED',
    timestamp: new Date().toISOString(),
    uptime: getUptime(),
    dependencies,
    version: '1.1.0'
  });
});

const server = app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

module.exports = { app, server };