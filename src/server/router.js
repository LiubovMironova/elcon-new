import express from "express";
import models from "./models/index";

const router = express.Router();

// router.post('/fetchAbout', /* async */ function (req, res) {
//   console.log(JSON.stringify(req.body));
//   const requestText = req.body.text;
//   // await models.User.create({
//   //     "about_me": requestText
//   // })
// // const services = ["помыть", "погладить", "прибить гвоздь", "йога", "зубной", "маникюр"];
// // кто  Give(Can,Могу) Want(Хочу)
// // const users = [[["Вася"], [], []], [["Петя"], [], ["йога", "помыть"]], [["Маша"], [], ["прибить гвоздь", "йога"]]];

//   res.send();
// });

// router.get('/fetchCurrUser', async function (req, res) {
//   // const currUser = await models.curr_user.readAll()
//   // console.log(" currUser = ", currUser )
//   // console.log("req.session.user = ", req.session.user )
//   // res.send(currUser);
//   res.send(`${req.session.user}`)
// })

// router.post('/fetchCurrUser', async function (req, res) {
//   console.log(JSON.stringify(req.body));
//   const requestCurrUser = req.body.user;

//   const currUser = await models.curr_user.create(requestCurrUser)
//   res.send(currUser);
// })

router.get("/fetchCurrUser", async (req, res) => {
  console.log("ЦЦЦЦЦЦЦЦЦЦЦЦЦЦЦЦЦЦЦЦЦЦЦЦЦЦЦЦЦЦЦЦЦЦЦЦreq.session.user = ", req.session.user);
  res.send(`${req.session.user}`);
});

router.get("/fetchAllUsers", async (req, res) => {
  const usersList = await models.user.readAll();
  res.send(usersList);
});

router.get("/fetchServices", async (req, res) => {
  const serviceList = await models.service.readAll();
  res.send(serviceList);
});

router.post("/fetchUserArrayAbout", async (req, res) => {
  console.log(JSON.stringify(req.body));
  const requestUser = req.body.user;
  const requestTag = req.body.tag;

  const userWantList = await models.user_give_service.readAll(requestUser, requestTag);
  res.send(userWantList);
});

router.post("/fetchWriteGive", async (req, res) => {
  console.log(JSON.stringify(req.body));
  const giveUser = req.body.user;
  const giveServ = req.body.array;
  const giveTag = req.body.tag;
  await models.user_give_service.change(giveUser, giveServ, giveTag);
  res.send();
});

router.post("/fetchSelectUsers", async (req, res) => {
  console.log(JSON.stringify(req.body));
  let userFromFront = req.body.user;
  let usersToFront = await models.user_give_service.takeAboutUsers(userFromFront[0]);

  res.send(usersToFront);
});

// router.post('/fetchMeetings', async function (req, res) {

//   console.log(JSON.stringify(req.body));
//   const requestUser = req.body.user;
//   const meetingListByUser = await models.Pairs.readByPerson(requestUser);
//   res.send(meetingListByUser);
// });

// router.post("/fetchRegister", (req, res) => {
//   setTimeout(
//     () =>
//       res.send({
//         email: "Vasya@MediaList.ru",
//         sequrityQuestion: "BlaBlaBla"
//       }),
//     1000
//   );
// });

router.post("/fetchRegister", async (req, res) => {
  console.log(JSON.stringify(req.body));
  const dbAnswerReg = await models.user.entryStatus(req.body.email, req.body.password);
  console.log("dbAnswerReg = ", dbAnswerReg);
  res.status(200);
  res.send(dbAnswerReg);
});

router.post("/fetchLogin", async (req, res) => {
  console.log(JSON.stringify(req.body));
  const dbAnswerLogin = await models.user.entryStatusLogin(req.body.email, req.body.password);
  console.log("dbAnswerLogin = ", dbAnswerLogin);
  if (dbAnswerLogin != "неверные параметры входа") {
    // await models.curr_user.writeCurrUser(dbAnswerLogin.id)
    req.session.user = dbAnswerLogin.id;
  }
  res.status(200);
  res.send(dbAnswerLogin);
});

export default router;
