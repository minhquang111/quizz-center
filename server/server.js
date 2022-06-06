import cors from "cors";
import "dotenv/config";
import express, { json, urlencoded } from "express";
import "./models/mongo/db.js";
import sql from "./models/mysql/db.js";
import QuestionRouter from "./routers/mongo/question.router.js";
import QuestionGroupRouter from "./routers/mysql/questionGroup.routers.js";
import result from "./routers/mongo/result.router.js";
import ExamGroupRouter from "./routers/mysql/ExamGroup.js";
import SubExamGroupRouter from "./routers/mysql/SubExamGroup.js";
import {router} from './routers/mysql/index.js'
const app = express();
const corsOptions = {
  origin: "http://localhost:3000",
};

app.use(cors(corsOptions));
app.use(json());
app.use(urlencoded({ extended: true }));

app.use(QuestionGroupRouter);
app.use(QuestionRouter);
app.use(ExamGroupRouter);
app.use(SubExamGroupRouter);
app.use(result)
app.get("/", (req, res) => {
  res.send("hello");
});
router(app)
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
