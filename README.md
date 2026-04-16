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

## Future Enhancements

* Real-time notifications
* Distributed microservices architecture
* Message queue integration
* Cloud deployment (AWS/GCP)

---

## Author

Chinmaye Ramesh
