
# Calculate the total number of posts, comments, likes, and views for each user, grouped by age range.

## Overview
The API provides endpoints to aggregate data and gain insights into user behavior based on age ranges.

## Features
- **Age Range Analytics**: Aggregate statistics on user interactions based on specified age ranges.

## API Endpoint

- **GET** `/api/stats/age-range`: Retrieve aggregated statistics (total posts, comments, likes, views) by age range.

## Data Model
The following collections are utilized in this API:
1. **Users**
2. **Posts**
3. **Comments**
4. **Likes**
5. **Followers**
6. **Tags**
7. **PostTags**
8. **Views**

## Installation
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <repository-directory>
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the MongoDB server:
   ```bash
   mongod
   ```

4. Start the API server:
   ```bash
   npm start
   ```

5. Access the API at `http://localhost:5000`.

## Testing
To test the API:
1. Use tools like **Postman** or **cURL** to send requests to the endpoints.

## Conclusion
This API demonstrates solid principles of RESTful design, efficient data management, and the ability to derive meaningful analytics from user interactions. It’s built for scalability and ease of use, making it suitable for further enhancements and production use.
