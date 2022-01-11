# Dockerfile

FROM node:10.16.3

# Create app directory
WORKDIR /app

# Install app dependencies
COPY package*.json ./
RUN npm install
RUN npm install pm2 -g

# Copy app source code
COPY . .

#Expose port and start application
EXPOSE 3000

CMD ["npm", "run", "prod"]
