import express from "express";
import models from "./models/index";

const router = express.Router();
// const services = ["помыть", "погладить", "прибить гвоздь", "йога", "зубной", "маникюр"];
// кто  Give(Can,Могу) Want(Хочу)
// const users = [[["Вася"], [], []], [["Петя"], [], ["йога", "помыть"]], [["Маша"], [], ["прибить гвоздь", "йога"]]];

router.post("/fetchAbout", (req, res) => {
  res.send();
});

router.get("/fetchServices", async (req, res) => {
  const serviceList = await models.service.readAll();
  res.send(serviceList);
});

router.post("/fetchUserArrayAbout", async (req, res) => {
  const requestUser = req.body.user;
  const userWantList = await models.user_give_service.readAll(requestUser);
  res.send(userWantList);
});

router.post("/fetchWriteGive", async (req, res) => {
  const giveUser = req.body.user;
  const giveServ = req.body.array;
  await models.user_give_service.change(giveUser, giveServ);
  res.send();
});

router.post("/fetchMeetings", async (req, res) => {
  const requestUser = req.body.user;
  const meetingListByUser = await models.Pairs.readByPerson(requestUser);
  res.send(meetingListByUser);
});

router.post("/fetchRegister", (req, res) => {
  setTimeout(
    () =>
      res.send({
        email: "Vasya@MediaList.ru",
        sequrityQuestion: "BlaBlaBla"
      }),
    1000
  );
});

router.post("/fetchLogin", (req, res) => {
  setTimeout(
    () =>
      res.send({
        email: "Buba@mail.ru",
        sequrityQuestion: "BlaBlaBla"
      }),
    1000
  );
});

export default router;
