
# 🚀 Static Website Hosting with CI/CD using GitHub Actions & AWS S3

A DevOps project that demonstrates automated deployment of a static portfolio website using **GitHub Actions** and **AWS S3 Static Website Hosting**.

---

## 📌 Project Overview

This project automates the deployment process of a static website.

Whenever code is pushed to the GitHub repository:

1. GitHub Actions workflow is triggered  
2. Website files are built automatically  
3. Files are deployed to AWS S3  
4. Live website gets updated instantly  

---

## 🛠️ Tech Stack

- HTML
- CSS
- JavaScript / React + Vite
- GitHub Actions
- AWS S3
- Git & GitHub

---

## 📂 Project Structure

```bash
portfolio-cicd-project/
│
├── .github/
│   └── workflows/
│       └── main.yml
│
├── public/
├── src/
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

---

## ⚙️ CI/CD Workflow

```text
Developer Pushes Code
          ↓
GitHub Repository
          ↓
GitHub Actions Triggered
          ↓
Build Website
          ↓
Deploy to AWS S3
          ↓
Website Updated Automatically
```

---

## 🔥 Features

✅ Automated Deployment  
✅ CI/CD Pipeline using GitHub Actions  
✅ AWS S3 Static Website Hosting  
✅ Fast & Scalable Hosting  
✅ Beginner-Friendly DevOps Project  

---

## ☁️ AWS S3 Setup

### Step 1: Create S3 Bucket

- Create an S3 bucket
- Enable:
  - Static Website Hosting
  - Public Access
- Add bucket policy for public read access

---

### Step 2: Configure Website Hosting

Set:

- **Index document:** `index.html`

Example Website Endpoint:

```text
http://your-bucket-name.s3-website-us-east-1.amazonaws.com
```

---

## 🔑 GitHub Secrets Configuration

Go to:

```text
GitHub Repository → Settings → Secrets and Variables → Actions
```

Add the following secrets:

| Secret Name | Description |
|---|---|
| AWS_ACCESS_KEY_ID | AWS Access Key |
| AWS_SECRET_ACCESS_KEY | AWS Secret Key |
| AWS_REGION | AWS Region |
| S3_BUCKET_NAME | S3 Bucket Name |

---

## ⚡ GitHub Actions Workflow

Create file:

```text
.github/workflows/main.yml
```

Add:

```yaml
name: Deploy Static Website

on:
  push:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout Repository
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 20

      - name: Install Dependencies
        run: npm install

      - name: Build Project
        run: npm run build

      - name: Configure AWS Credentials
        uses: aws-actions/configure-aws-credentials@v4
        with:
          aws-access-key-id: ${{ secrets.AWS_ACCESS_KEY_ID }}
          aws-secret-access-key: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
          aws-region: ${{ secrets.AWS_REGION }}

      - name: Deploy to S3
        run: aws s3 sync dist/ s3://${{ secrets.S3_BUCKET_NAME }} --delete
```

---

## ▶️ Run Project Locally

Clone repository:

```bash
git clone https://github.com/your-username/your-repo-name.git
```

Move into project directory:

```bash
cd your-repo-name
```

Install dependencies:

```bash
npm install
```

Run development server:

```bash
npm run dev
```

Build project:

```bash
npm run build
```

---

## 🌐 Live Demo

```text
http://your-bucket-name.s3-website-us-east-1.amazonaws.com
```

---

## 📸 Screenshots

Add screenshots here:

- GitHub Actions Workflow
- AWS S3 Bucket
- Deployment Success
- Live Website

---

## 📈 Learning Outcomes

Through this project, I learned:

- CI/CD Pipeline Implementation
- GitHub Actions Automation
- AWS S3 Static Hosting
- Cloud Deployment
- DevOps Fundamentals

---

## 🚀 Future Improvements

- Add AWS CloudFront CDN
- Configure Custom Domain
- Enable HTTPS
- Add Terraform
- Infrastructure as Code (IaC)

---



## ⭐ Conclusion

This project demonstrates a real-world CI/CD workflow by integrating GitHub Actions with AWS S3 for automated static website deployment.
