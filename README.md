# Learn Flux Sample

A sample project demonstrating TypeScript development with Flux architecture in a Node.js 22 devcontainer environment.

## Features

- TypeScript development environment
- Flux architecture implementation
- Node.js 22 devcontainer configuration

## Prerequisites

- [Visual Studio Code](https://code.visualstudio.com/)
- [Docker](https://www.docker.com/)
- [VS Code Remote - Containers extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers)

## Getting Started

1. Clone this repository
2. Open the project in VS Code
3. When prompted, click "Reopen in Container" or run the "Remote-Containers: Reopen in Container" command
4. Wait for the container to build and initialize

## Development

- Build the project: `npm run build`
- Build for Node.js: `npm run build:node`
- Build for browser: `npm run build:browser`
- Run the Node.js application: `npm start`
- Development mode with watch: `npm run dev`
- Start development server with hot reload: `npm run dev:server`
- Serve the application with http-server: `npm run serve`

## Project Structure

- `src/` - TypeScript source files
  - `index.ts` - Main entry point for Node.js application
  - `browser.ts` - Entry point for browser application
  - `flux/` - Flux architecture implementation
    - `actions.ts` - Action creators
    - `actionTypes.ts` - Action type definitions
    - `dispatcher.ts` - Flux dispatcher
    - `store.ts` - Store implementation
- `dist/` - Compiled JavaScript output
- `index.html` - HTML template for browser application
- `index.sass` - Sass styles for browser application
- `.devcontainer/` - Development container configuration
- `webpack.config.js` - Webpack configuration

## Flux Architecture

This project demonstrates the Flux architecture with:

- Dispatcher: Central hub that broadcasts actions
- Stores: Maintain application state and update in response to actions
- Actions: Payloads of information that send data to the dispatcher

The example implements a simple counter that can be incremented or decremented.
