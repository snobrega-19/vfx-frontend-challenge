# Forex Prices App

A user-friendly React application that provides daily forex prices and allows management of beneficiaries. This application connects to the **Alpha Vantage API** to retrieve and display forex data.

## 📌 Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Running the Application](#running-the-application)
- [Login Credentials](#login-credentials)  
- [Fallback Data](#fallback-data)  
- [Folder Structure](#folder-structure)  
- [Contributing](#contributing)  


## 🚀 Features

✅ **Login functionality** with dummy validation.

✅ **Display of daily forex prices** in a table format.

✅ **Dynamic currency selection** with automatic updates.

✅ **Manual refresh option** for real-time data updates.

✅ **Fallback to local JSON data** if the API fails.

## 🛠 Technologies Used

- **Frontend:** React.js, TypeScript, Tailwind CSS  
- **Backend:** Express.js, Node.js  
- **API Calls:** Axios  
- **Containerization:** Docker & Docker Compose 

## ⚡ Getting Started

### 📌 Prerequisites

To run this project, you need to have Docker and Docker Compose installed on your machine. If you haven't installed them yet, you can follow the links below:

- [Install Docker](https://docs.docker.com/get-docker/)
- [Install Docker Compose](https://docs.docker.com/compose/install/)

### 🏃 Running the Application

1. **Clone this repository:**

   ```bash
   git clone https://github.com/snobrega-19/vfx-frontend-challenge.git

   cd vfx-frontend-challenge

2. **Build and run the application** using Docker Compose:
 
    ```bash
    docker-compose up --build

3. Open your browser and **navigate to http://localhost:3000**

### 🔑 Login Credentials

To login sucessfully in this application, you need to enter the following credentials:

    Client ID: 123  
    User ID: 345  
    Password: password  


### 🔄 Fallback Data

If any problem occurs with the API, the application will use a json file as backup data.


### 📂 Folder Structure

  ```bash
  vfx-frontend-challenge/
  │── client/        # Frontend code (React, TypeScript, Tailwind)
  │── server/        # Backend code (Express, Node.js)
  │── docker-compose.yml  # Docker configuration
  │── forexDailyPrices.json  # Backup JSON data
  │── README.md      # Documentation

- Frontend (client):
    - Built with React.js & TypeScript.
    - Uses React Context for authentication state.
    - Calls the backend to fetch forex data.

- Backend (server):
    - Built with Express.js.
    - Acts as a proxy to prevent API key exposure.
