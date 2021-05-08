<h1 align='center'>Aliferous Social🧡</h1>
<p align='center'>A social media web application with features like creating posts, adding likes and unlikes, following users, deleting posts, commenting on posts etc.</p>
<p float='center' align='center'>
<img src='https://github.com/sumana2001/social-media/blob/main/ss.png' width='750'>
</p>

## Web-Application features✨

* `Authentication` - Register, Login, Logout

* `Post` - Create and Delete Posts

* `Feed` - View posts of users you follow

* `Explore` - View posts of all users

* `Profile` - View your own profile as well as of other users. Profile consists of all the posts, no. of followers and following and an option to change your profile picture

* `Activity` - Like, unlike and comment on posts. You can also follow other users.

* `Search` - Search profiles of other users by searching using their email-id

* `Forgot Password` - Reset your password using sendgrid API  
<br/>



[![Starware](https://img.shields.io/badge/⭐-Starware-f5a91a?labelColor=black)](https://github.com/zepfietje/starware)

Aliferous-social is Starware.  
This means you're free to use the project, as long as you star its GitHub repository.  
Your appreciation makes us grow and glow up. ⭐


# Prerequisites 👨‍💻

### Install Node JS
Refer to https://nodejs.org/en/ to install nodejs

### Install create-react-app
Install create-react-app npm package globally. This will help to easily run the project and also build the source files easily. Use the following command to install create-react-app

```bash
npm install -g create-react-app
```

## Cloning and Running the Application in local 💻

Clone the project in localhost
```bash
git clone https://github.com/sumana2001/social-media.git
```
Navigate to client folder
```bash
cd client
```
Install all the npm packages. Go into the client folder and type the following command to install all npm packages

```bash
npm install
```

In order to run the application Type the following command

```bash
npm start
```

The Application Runs on **localhost:3000**

## Sendgrid API
Create a free account on <a href="https://sendgrid.com/">sendgrid</a> and generate an API key

### To spin up the backend server

Navigate to the main project folder in a seperate terminal. Then install all npm packages
```bash
npm install 
```

If you don't have nodemon globally installed on your system, install it so the server can autorefresh 
```bash
npm install -g nodemon
```

Now it's time to spin up the backend server. Run the lines
```bash
nodemon app.js
```
If you get an error immediately, don't worry. We will connect to the MongoDB database.

Note: The Server Runs on **localhost:5000**

## Connecting to the Database

Spin up your cluster in MongoDB and replace your connection with URI
Make a file `config/dev.js` and write the following:
```bash
module.exports={
    MONGOURI:"<YOUR CONNECTION URI HERE>",
    JWT_SECRET:"blahblahabcd",
    SENDGRID_API:"<YOUR SENDGRID API HERE>",
    EMAIL_URL: "http://localhost:3000"
}
```
If you face any problems, refer to the [MongoDB](https://www.mongodb.com/blog/postquick-start-nodejs-mongodb--how-to-get-connected-to-your-database) website.


## Connecting to the Database if you haven't used MongoDB Atlas before
Install the MongoDB Node.js Driver with the following command:
```bash
npm install mongodb
```

Set up a [MongoDB Atlas Database](https://www.youtube.com/watch?v=rPqRyYJmx2g) by following this short MongoDB setup video till the *3:20* mark. Stop after that mark!

On your Cluster home page, select CONNECT > Connect your application. 
1. Select Node.js in the drop down for your driver, and select the latest version. 
2. Then, copy the connecting string (URI).
3. Make a file `config/dev.js` and write the following:
```bash
module.exports={
    MONGOURI:"<YOUR CONNECTION URI HERE>",
    JWT_SECRET:"blahblahabcd"
    SENDGRID_API:"<YOUR SENDGRID API HERE>",
    EMAIL_URL: "http://localhost:3000"
}
```
4. Paste the connection string you copied as the value of mongoURI.
5. Replace the `<password>` section of the string with your Database Access password. Viola, your server should now successfuly connect to MongoDB!
