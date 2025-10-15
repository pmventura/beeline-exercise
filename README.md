# Beeline User List App

A simple React + TypeScript + Tailwind CSS app to display and manage a list of users.

## Features

- Fetches users from a public API
- Displays users in table list
- Remove users from the list
- Clear and refetch users
- Loading spinner and empty state

## Tech Stack

- React
- TypeScript
- Tailwind CSS
- Vite

## Getting Started

```bash
# Install dependencies
npm install

# Start the development server
npm run dev
```

## Deployment to AWS S3

### GitHub Actions (Recommended)

This project includes a GitHub Actions workflow for automatic deployment to AWS S3 on every push to `main`.

1. Set the following secrets in your GitHub repository:

   - `AWS_S3_BUCKET`: Your S3 bucket name
   - `AWS_ACCESS_KEY_ID`: Your AWS access key
   - `AWS_SECRET_ACCESS_KEY`: Your AWS secret key
   - `AWS_REGION`: Your AWS region (e.g. `us-east-1`)

2. On push to `main`, the workflow will build and deploy the app to S3.

See `.github/workflows/deploy.yml` for details.

---

#### Manual Deployment

1. Build the app for production:
   ```bash
   npm run build
   ```
2. Upload the contents of the `dist/` folder to your S3 bucket:
   ```bash
   aws s3 sync dist/ s3://your-bucket-name --delete
   ```
3. Make sure your S3 bucket is configured for static website hosting.
4. (Optional) Set up your domain and SSL in AWS Route 53 and Certificate Manager.

For more details, see the [AWS S3 static website documentation](https://docs.aws.amazon.com/AmazonS3/latest/userguide/WebsiteHosting.html).

## Running Tests

```bash
npm test
```

## Folder Structure

- `src/` - Main source code
- `src/components/` - Reusable React components
