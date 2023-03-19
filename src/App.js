const express = require("express");
const app = express();
const port = 3000;


const path = require("path")
const viewsDirectory = path.join(__dirname, "./temp1/views")
app.set("views", viewsDirectory);


var hbs = require("hbs");
const partialpath = path.join(__dirname, "./temp1/partials")
hbs.registerPartials(partialpath)

app.use(express.static(path.join(__dirname, '../public')));

app.set("view engine", "hbs");
app.get("/", (req, res) => {
    res.render("index", {
        icons:"💟💟💟",
        title: "Build The Community Your Fans Will Love",
        desc: "Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create connections with your users as you engage in genuine discussion.",
    img:"https://livedemo00.template-help.com/wt_64402_v1/images/event-02-570x370.jpg"
    })
})



app.get("/contact", (req, res) => {
    res.render("contact", {
        phone: "Phone: +1-543-123-4567",
        gmail: "gmail:example@huddle.come",
        fb: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/150px-2021_Facebook_icon.svg.png",
        insta: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/1000px-Instagram_logo_2022.svg.png",
        twitter: "https://www.mosoah.com/wp-content/uploads/2019/09/logo-twitter1-300x300.png"
    })
})


app.get("/about", (req, res) => {
    res.render("about", {
        name: "Hala",
        age:26,
        city:"sharqia",
        job:'web developer',
        title:"Profile"
    })
})


app.get("/team", (req, res) => {
    res.render("team", {
       img1:"https://livedemo00.template-help.com/wt_64402_v1/images/team-01-270x270.jpg",
       img2:"https://livedemo00.template-help.com/wt_64402_v1/images/team-02-270x270.jpg",
       img3:"https://livedemo00.template-help.com/wt_64402_v1/images/team-03-270x270.jpg",
       img4:"https://livedemo00.template-help.com/wt_64402_v1/images/team-04-270x270.jpg",
       img5:"https://livedemo00.template-help.com/wt_64402_v1/images/team-05-270x270.jpg"
    })
})


app.get("/service", (req, res) => {
    res.render("service", {
       title:"  NEWSLETTER",
       para:"To recieve tips on how to grow your community, sign up to our weekly newsletter. We’ll never send you spam or pass on your email address",
       btn:"Subscribe",
tips:"donot forget to contact us",
img:"https://www.pngitem.com/pimgs/m/482-4828929_hugging-face-emoji-hugging-face-emoji-png-transparent.png"
    })
})


app.listen(3000, () => {
    console.log(`this is the port of the server `)
})