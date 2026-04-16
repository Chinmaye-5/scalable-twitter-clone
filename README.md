# scalable-twitter-clone

## Overview

A backend-driven social media platform designed to simulate a scalable microblogging system similar to Twitter.

The project focuses on **feed generation**, **data consistency**, and **scalable system design**, demonstrating how large-scale social platforms handle user interactions and content distribution.

---

## Features

* Post and delete tweets
* Follow and unfollow users
* Generate personalized user feeds
* Like tweets and interact with content
* Pagination support for efficient data retrieval

---

## Tech Stack

### Backend

* Java (Spring Boot) / Node.js (Express)

### Database

* PostgreSQL

### Caching

* Redis

### API

* RESTful APIs

---

## System Architecture

The system is designed with modular components:

1. User Service
   Handles user data and relationships

2. Tweet Service
   Manages tweet creation and storage

3. Feed Service
   Generates user timelines based on following relationships

4. Cache Layer
   Improves performance using Redis

---

## Feed Generation Strategy

Two approaches are considered:

* Fan-out on Write
  Push tweets to followers at write time

* Fan-out on Read
  Fetch tweets dynamically when user requests feed

The system demonstrates trade-offs between scalability and performance.

---


## Data Flow

User Action → API Layer → Service Layer → Database
→ Cache Layer → Feed Generation → Response

---

## Key Engineering Highlights

* Designed a **scalable feed generation system**
* Implemented **modular backend architecture**
* Applied **caching strategies for performance optimization**
* Considered **distributed system design trade-offs**
* Ensured **clean and maintainable code structure**

---
## 🚀 How to Run the Project

Follow these steps to set up and run the application locally:

### 1. Clone the Repository

git clone https://github.com/<your-username>/scalable-twitter-clone.git

### 2. Navigate to Project Folder

cd scalable-twitter-clone

### 3. Install Dependencies

npm install

### 4. Start the Server

node server.js

The server will start at:
http://localhost:5000

---

## 🧪 Testing the API

You can use Postman or any API client.

### Create User

POST /user

Body:
{
"name": "Alice"
}

---

### Create Tweet

POST /tweet

Body:
{
"userId": "<user_id>",
"content": "Hello world"
}

---

### Follow User

POST /follow

Body:
{
"userId": "<user_id>",
"followId": "<another_user_id>"
}

---

### Get Feed

GET /feed/<user_id>

---

### Like Tweet

POST /like/<tweet_id>

---

### Get Tweets (Pagination)

GET /tweets?page=1&limit=5


---

## 🧪 Testing the API

You can use Postman or any API client.

### Create User

POST /user

Body:
{
"name": "Alice"
}

---

### Create Tweet

POST /tweet

Body:
{
"userId": "<user_id>",
"content": "Hello world"
}

---

### Follow User

POST /follow

Body:
{
"userId": "<user_id>",
"followId": "<another_user_id>"
}

---

### Get Feed

GET /feed/<user_id>

---

### Like Tweet

POST /like/<tweet_id>

---

### Get Tweets (Pagination)

GET /tweets?page=1&limit=5

## Future Enhancements

* Real-time notifications
* Distributed microservices architecture
* Message queue integration
* Cloud deployment (AWS/GCP)

---

## Author

Chinmaye Ramesh
