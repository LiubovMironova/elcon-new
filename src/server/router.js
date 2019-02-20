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

// router.post("/fetchAbout", (req, res) => {
//   res.send();
// });


router.get('/fetchAllUsers', async function (req, res) {
  const usersList = await models.user.readAll()
  res.send(usersList);
})


router.get('/fetchServices', async function (req, res) {
  const serviceList = await models.service.readAll()
  res.send(serviceList);
})

router.post('/fetchUserArrayAbout', async function (req, res) {
  console.log(JSON.stringify(req.body));
  const requestUser = req.body.user;
  const requestTag = req.body.tag;

  const userWantList = await models.user_give_service.readAll(requestUser, requestTag)
  res.send(userWantList)
})



router.post('/fetchWriteGive', async function (req, res) {

  console.log(JSON.stringify(req.body));
  const giveUser = req.body.user
  const giveServ = req.body.array
  const giveTag = req.body.tag
  await models.user_give_service.change(giveUser, giveServ, giveTag)
  res.send()
})

router.post('/fetchSelectUsers', async function (req, res) {

  console.log(JSON.stringify(req.body));
  console.log("fetchSelectUsers -req.body = ", req.body)
  let userFromFront = req.body.user
  console.log(" userFromFront = ", userFromFront)
  let usersToFront = await models.user_give_service.takeAboutUsers(userFromFront[0])

  res.send(usersToFront)
})

router.post('/fetchMeetings', async function (req, res) {

  console.log(JSON.stringify(req.body));
  const requestUser = req.body.user;
  const meetingListByUser = await models.Pairs.readByPerson(requestUser);
  res.send(meetingListByUser);
});

router.post("/fetchRegister", (req, res) => {
  setTimeout(
    () =>
      res.send({
        email: "Vasya@MediaList.ru",
        password: "BlaBlaBla"
      }),
    1000
  );
});

router.post("/fetchLogin", (req, res) => {
  setTimeout(
    () =>
      res.send({
        email: "Buba@mail.ru",
        password: "BlaBlaBla"
      }),
    1000
  );
});

export default router;
