const express = require("express");
const swaggerUi = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routers
app.use("/posts", require("./routers/posts.router"));

// Swagger setup
const swaggerOptions = {
  swaggerDefinition: {
    myapi: "3.0.0",
    info: {
      title: "Rest Api Students",
      version: "1.0.0",
      description: "API documentation",
    },
    servers: [
      {
        url: "http://localhost:3000",
      },
    ],
  },
  apis: ["./routers/*.js"], // files containing annotations as above
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
