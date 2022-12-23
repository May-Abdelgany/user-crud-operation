import { Router } from "express";
import * as user from "./controller/user.js";

const router = Router();
//==============================Q1=================================//
router.get("/getUsers", user.getUsers);
//==============================Q2=================================//
router.post("/addUser", user.addUser);
//==============================Q3=================================//
router.patch("/updateUser/:id", user.updateUser);
//==============================Q4=================================//
router.delete("/deleteUser/:id", user.deleteUser);
//==============================Q5=================================//
router.get("/startWithKey", user.startWithKey);
//==============================Q6=================================//
router.get("/endWithKey", user.endWithKey);
//==============================Q7=================================//
router.get("/getUser/:id", user.getUser);
//==============================Q8=================================//
router.get("/userWithAgeCondition", user.userWithAgeCondition);
//==============================Q9=================================//
router.get("/startWithAndAge", user.startWithAndAge);
//==============================Q10=================================//
router.get('/getUserWithCondition',user.getUserWithCondition)
//==============================Q11=================================//
router.get('/searchWithName/:fname/:lname',user.seach)
//==============================Q12=================================//
router.get('/getUsersByIds',user.getUsersByIds)
export default router;
