# Puffer Frontend

A React-based frontend application for Puffer Finance, featuring real-time conversion rate tracking and visualization.

## Features

- Real-time conversion rate monitoring
- Interactive chart visualization
- Responsive design
- Wallet integration

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- assets-service running on port 3009

## Setup

1. Clone the repository:

```bash
git clone [repository-url]
cd puffer-frontend
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Start the assets.service:
Make sure [assets-service](https://github.com/robk99/puffer-assets-service) is running on port 3009

4. Start the development server:

```bash
npm start
# or
yarn start
```

The application will be available at `http://localhost:3000`

## Project Structure

- `src/components/` - React components
- `src/api/` - API integration
- `src/config/` - Configuration files
- `public/` - Static assets

## Technologies Used

- React
- TypeScript
- Tailwind CSS
- Chart.js
- React Router
## License

[Add your license information here]
