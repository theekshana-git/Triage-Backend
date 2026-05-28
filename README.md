# Triage - Core API & Database Engine

![Live Status](https://img.shields.io/badge/Status-Live_on_Vercel-success)
![Tech Stack](https://img.shields.io/badge/Node.js-Express-green)
![Database](https://img.shields.io/badge/Database-MongoDB_Atlas-brightgreen)

### ⚡ **[Live API Health Check](https://triage-backend-chi.vercel.app/api/health)**

This is the serverless backend architecture powering the **Triage** Quality Assurance dashboard. It provides a secure, fully-managed RESTful API built with Node.js and Express, connected to a NoSQL MongoDB Atlas cloud database.

*(Note: The React/Vite frontend repository can be found [here](https://github.com/theekshana-git/Triage-Frontend).)*

---

## ⚙️ Architecture & Features
* **Serverless Execution:** Deployed on Vercel as serverless functions for high availability and zero-maintenance scaling.
* **NoSQL Database:** MongoDB Atlas integration using Mongoose for flexible, scalable document storage of defect logs.
* **Cross-Origin Security:** Configured strict CORS policies to securely manage traffic from the verified frontend client.
* **RESTful Endpoints:** Complete CRUD (Create, Read, Update, Delete) architecture for ticket lifecycle management.

## 🛣️ API Routing
| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/health` | Server health check and uplink verification. |
| `GET` | `/api/tickets` | Retrieves all defect tickets, sorted by timestamp. |
| `POST` | `/api/tickets` | Generates a new defect payload (Requires `title`, `severity`, `status`). |
| `PUT` | `/api/tickets/:id`| Updates the lifecycle status of an existing ticket. |
| `DELETE`| `/api/tickets/:id`| Permanently eradicates a ticket from the cluster. |

---

## 💻 Local Development Setup

To run this server locally for development or testing:

**1. Clone the repository:**
`git clone https://github.com/theekshana-git/triage-backend.git`  
`cd triage-backend`

**2. Install dependencies:**
`npm install`

**3. Configure the Environment:**
Create a `.env` file in the root directory and securely inject your MongoDB connection string:
`MONGO_URI=mongodb+srv://<username>:<password>@cluster...`

**4. Ignite the Server:**
`npm start`

*The API will begin listening on `http://localhost:5000`.*
