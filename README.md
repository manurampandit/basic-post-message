# basic-post-message
Example of postmessage from one web application to another (which is listed as iframe under)

Consists of two applications under this main directory:
1. broadcast
2. broadcasted

From boradcast project, the event is transmitted and is captured in broadcasted project. 



# Run project
For both the inner project
1. cd <project-name> (either broadcast or broadcasted) && npm install && nodemon
  a. cd broadcast && npm install && nodemon
  b. cd broadcasted && npm install && nodemon
  
 The projects will run on port 8000 and 8001 and in console.log output from one object can be seen on other.
