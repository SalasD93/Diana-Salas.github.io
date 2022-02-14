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
        summary: "This application was created to help the elderly and disabled with fixed income save on delivery fees by having citizens in their local community volunteer to deliver their pick up orders.",
        deployedLink: "https://good-deeds-delivery.herokuapp.com/",
        repositoryLink: "https://github.com/SalasD93/good-deeds-delivery"
    },
    {
        _id: "2",
        imgUrl: project1Img,
        style: {width: "600px", height: "350px"},
        title: "IDK, You Pick!",
        description: "Server-Side APIs",
        summary: "This application was created for indecisive people who can't figure out what to eat at meal time.",
        deployedLink: "https://salasd93.github.io/idk-you-pick/",
        repositoryLink: "https://github.com/SalasD93/idk-you-pick"
    },
    {
        _id: "3",
        imgUrl: project2Img,
        style: {width: "600px", height: "350px"},
        title: "BookMe",
        description: "NodeJS/Express/MySQL",
        summary: "This application was created for people to sell their used books to people in their community.",
        deployedLink: "https://bookmebuyme.herokuapp.com/",
        repositoryLink: "https://github.com/SalasD93/bookme"
    },
    {
        _id: "4",
        imgUrl: weatherImg,
        style: {width: "600px", height: "350px"},
        title: "What's the Weather Like?",
        description: "jQuery/Bootrstap/API",
        summary: "This application was created for people to check the weather and the 5 day forecast to plan their activities.",
        deployedLink: "https://salasd93.github.io/whats-the-weather-like/",
        repositoryLink: "https://github.com/SalasD93/whats-the-weather-like"
    },
    {
        _id: "5",
        imgUrl: teamProfile,
        style: {width: "600px", height: "350px"},
        title: "Generate a Team Profile",
        description: "NodeJS/Jest",
        summary: "This application was created for employers who wants to keep track of their employee's roles and basic information for quick access.",
        videoLink: "https://drive.google.com/file/d/1RT5vH1dW-Y7bDf8vSYyfE0HQHLSvCQDy/view",
        repositoryLink: "https://github.com/SalasD93/generate-a-team-profile"
    },
];

export default projects;