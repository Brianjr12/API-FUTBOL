import express from "express";
import routes from './routes/appRoutes.js'
const app = express();
app.use(express.json());

//*routes
app.use("/api", routes.routerTeams);

app.use((req, res, next) => {
  res.status(404).json({
    message: "Requested path not found",
  });
});

export default app;
