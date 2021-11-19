import project1Img from "../../assets/images/project-1.png";
import project2Img from "../../assets/images/project-2.png";
import project3Img from "../../assets/images/project-3.png";
import weatherImg from "../../assets/images/weather.png";
import teamProfile from "../../assets/images/teamProfile.png";
import schedulerImg from "../../assets/images/scheduler.png";

const projects = [
    {
        _id: "1",
        imgUrl: project3Img,
        style: {width: "600px", height: "350px"},
        title: "Good Deeds Delivery",
        description: "MERN SPA",
        deployedLink: "https://good-deeds-delivery.herokuapp.com/",
        repositoryLink: "https://github.com/SalasD93/good-deeds-delivery"
    },
    {
        _id: "2",
        imgUrl: project1Img,
        style: {width: "600px", height: "350px"},
        title: "IDK, You Pick!",
        description: "Server-Side APIs",
        deployedLink: "https://salasd93.github.io/idk-you-pick/",
        repositoryLink: "https://github.com/SalasD93/idk-you-pick"
    },
    {
        _id: "3",
        imgUrl: project2Img,
        style: {width: "600px", height: "350px"},
        title: "BookMe",
        description: "NodeJS/Express/MySQL",
        deployedLink: "https://bookmebuyme.herokuapp.com/",
        repositoryLink: "https://github.com/SalasD93/bookme"
    },
    {
        _id: "4",
        imgUrl: weatherImg,
        style: {width: "600px", height: "350px"},
        title: "What's the Weather Like?",
        description: "jQuery/Bootrstap/API",
        deployedLink: "https://salasd93.github.io/whats-the-weather-like/",
        repositoryLink: "https://github.com/SalasD93/whats-the-weather-like"
    },
    {
        _id: "5",
        imgUrl: teamProfile,
        style: {width: "600px", height: "350px"},
        title: "Generate a Team Profile",
        description: "NodeJS/Jest",
        videoLink: "https://drive.google.com/file/d/1RT5vH1dW-Y7bDf8vSYyfE0HQHLSvCQDy/view",
        repositoryLink: "https://github.com/SalasD93/generate-a-team-profile"
    },
];

export default projects;