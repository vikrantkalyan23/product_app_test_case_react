# product_app_test_case_react 

Test Case for Product Application in React

# Steps

npx create-react-app product_app_test_case_react

npm install redux react-redux redux-thunk axios json-server

npm install web-vitals

npm install react-router-dom

npm install @reduxjs/toolkit

npx json-server --watch db.json --port 3001

# Endpoints:

http://localhost:3001/courses

http://localhost:3001/enquiries

# More Steps

npm install --save-dev jest @testing-library/react @testing-library/jest-dom redux-mock-store

# Docker Build

docker build -t product_app_test_case_react .

docker run -d -p 3000:3000 --name product_app_test_case_react product_app_test_case_react

# Tag the image for Docker Hub

docker tag product_app_test_case_react https://hub.docker.com/r/vikrantkalyan23/product_app_test_case_react/product_app_test_case_react:latest

# Push the image

docker push https://hub.docker.com/r/vikrantkalyan23/product_app_test_case_react/product_app_test_case_react:latest

# Docker Hub repository URL

https://hub.docker.com/r/vikrantkalyan23/product_app_test_case_react





