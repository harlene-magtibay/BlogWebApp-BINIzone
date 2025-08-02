BINIzone is a vibrant and responsive fan-made blog web application dedicated to the P-Pop girl group BINI. 
Designed as a digital space for BLOOMs (BINI fans), the site brings together curated content, 
fan-written blog posts, music highlights, and coverage of the group's latest performances, fashion, and appearances.

Built using Node.js, Express.js, EJS, and Bootstrap for the frontend and server-side rendering, 
the application uses PostgreSQL as its database to manage and store blog posts and related metadata.

Fans can explore blog posts across different categories such as music & awards, performances, fashion & concepts, and more — all from a Bloom’s perspective

**Features**
1. Browse BINI-related blog posts by category
2. Add, edit, and delete posts
3. Responsive design with Bootstrap
4. Rich text editor integration with Quill.js
5. Clean and modern UI with custom CSS
6. Dynamic content rendered using EJS
7. PostgreSQL as the database

**Tech Stack**
1. Frontend: HTML, CSS, Bootstrap, EJS
2. Backend: Node.js, Express.js
3. Database: PostgreSQL
4. Editor: Quill.js

**Getting Started**
Follow these steps to run the project locally.
1. Prerequisites:
   Make sure you have the following installed:
    1. Node.js
    2. npm
    3. PostgreSQL
2. Clone the Repository
3. Install Dependencies:
     npm install
4. Set Up the PostgreSQL Database
   Create a PostgreSQL database named binizone at pgAdmin.
   Run the following query:
   
   CREATE TABLE blogposts(

     id SERIAL PRIMARY KEY,
  
     post_date DATE NOT NULL DEFAULT CURRENT_DATE,
  
     category VARCHAR(20) NOT NULL,
  
     title VARCHAR(100) NOT NULL,
  
     content TEXT NOT NULL

   );
6. Run the app with nodemon:
   nodemon index.js
7. Visit http://localhost:3000 in your browser.


     
