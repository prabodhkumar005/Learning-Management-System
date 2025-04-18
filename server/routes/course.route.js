import express from "express";
import isAuthenticated from "../middlewares/isAuthenticated.js";
import { createCourse, getCreatorCourses, getPublishedCourse, searchCourse } from "../controllers/course.controller.js";

const router=express.Router();

router.route("/").post(isAuthenticated,createCourse);
router.route("/search").get(isAuthenticated, searchCourse);
router.route("/published-courses").get( getPublishedCourse);
router.route("/").get(isAuthenticated,getCreatorCourses);

export default router;