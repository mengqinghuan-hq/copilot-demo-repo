# Copilot Demo Repository

This is a demonstration repository for GitHub Copilot CLI workflow.

## Features
- Basic Node.js project structure
- Simple API endpoint
- Enhanced health check endpoint with dependency monitoring
- README documentation

## Getting Started
1. Clone the repository
2. Run `npm install`
3. Start the server with `npm start`

## Endpoints

### GET /
Returns a welcome message.

### GET /health
Returns health status including:
- **status**: Overall health (OK or DEGRADED)
- **timestamp**: Current ISO timestamp
- **uptime**: Server uptime in seconds
- **dependencies**: Individual component health checks
- **version**: API version