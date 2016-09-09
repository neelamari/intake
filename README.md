# intake node.js rest api sample

This example shows A REST API CRUD Operation to a Compose MongoDB Service - wihh IBM Bluemix PaaS - Cloud foundry deployment model.

# Creating the compose Mongodb service
Visit the app.compose.io site and create an account.

Create a MongoDB deployment.

Provide a deployment name and the name of the desired deployment zone. 

Create a Database

Create users credentials 

# Adding the service in Bluemix

https://new-console.ng.bluemix.net/catalog/services/mongodb-by-compose

Add the MongoDB Service by Compose in your Bluemix console. 

# Deployment

--set endpoint and login

bluemix api https://api.ng.bluemix.net

--login

bluemix login -u "your userid" 

--set orgs and spaces

cf target -o "your organization"

cf target -s "your space"

--deploying application.

modify the manifest.yml with the  name you used for MongoDB Service

cf push 

//Note that if you haven't added the service the bind may not happen and you may need to restage

cf restage 

# Checking logs 

cf logs intake 
