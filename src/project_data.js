
const projects = [
    {
        "id":0,
        "name": "GSOC 2015",
        "short_description":"Contributed to a 3D python game engine called PySoy. Implemented different force fields.",
        "long_description":
            "In this project I work with Copyleft Games to enhance their 3d game engine called PySoy."+
            " I implemented different forces in their library, like wind, drag, elecrtostatic, gravidy and bouyancy on different polygon mesh objects."+
            " This addition to the games engine, helped the game developers to quick add different forces in the game environment using the simple exposed APIs. "+
            " Everything was programmed in a language called Genie." + 
            " You can check out the demo video and the archieved gsoc link below.",
        "tags":["GSOC", "genie", "open source"],
        "date":"1622641682",
        "links":{
            "youtube":"https://www.youtube.com/watch?v=-hNkUgNdd98",    
            "gsoc_site":"https://www.google-melange.com/archive/gsoc/2015/orgs/copyleftgames/projects/karan_purohit.html",
        },
        "banner_image":"gsoc.jpg"
    },

    {
        "id":1,
        "name": "Google Blockly Minimap",
        "short_description":"Contributed to Google's Blocky project. Implemented a minimap demo.",
        "long_description": 
        "This was an open source contrubution where I implemented a minimap demo for the Blockly's drag and drop editor."+
        " Blocky is an drag and drop visual editor used by many organisations like mit scratch and app inventor."+
        " This was implemented in Vanilla Javascript with the blockly's opensource community."+
        " You can checkout the final demo and link to merged PR below.",
        "tags":["open source", "javascript"],
        "date":"1622641682",
        "links":{
            "github":"https://github.com/google/blockly/pull/965",
            "demo":"https://k-ran.github.io/blockly/demos/minimap/index.html",  
        },
        "banner_image":"blockly.png"
    },
    {
        "id":2,
        "name": "JustACalC",
        "short_description":"A caluclator app with a twist i.e. programmable and sharable function.",
        "long_description": 
        "This was a personal project which I created with the help of my designer friend Srajal."+
        " This is a calculater app where user can create new custom functions and share it with others."+
        " Other users and search for available functions and use then in their calculations."+
        " New functions could be programmed in the app itself using javascript as the language."+
        " Backend was written in php and slim framework."+
        " Currently the backend seervices are down but you can checkout the offline app on play store, links below.",
        "tags":["java", "android", "php", "mysql"],
        "date":"1622641682",
        "links":{
            "github":"https://github.com/K-ran/JustACalC",
            "google_play":"https://play.google.com/store/apps/details?id=in.karanpurohit.justacalc",  
        },
        "banner_image":"calc.jpg"
    },
    {
        "id":3,
        "name": "Autonomous Quadcopter",
        "short_description":"A survelance quadcopter with autonomous takeoff, landing and waypoint following.",
        "long_description": 
        " This was my final engineering capstone project and was made in a team of 3 members."+
        " We wanted to create a aerial survelance drone where users doesn't have to be a master in flying drones."+
        " All the user has to do was open up an android app, select the flight path and press launch!"+
        " The drone would then autonomously fly, take picutres using the onboard camer and and send it to the user's phone."+
        " We build the drone using commercial off the shelf components and stacked a Raspberry Pi computer on top, running dronekit library to make it smart."+
        " Firebase was used to send images in real time. You can check out the demo youtube video of the project given below.",
        "tags":["java", "android", "node", "python", "firebase"],
        "date":"1622641682",
        "links":{
            "github":"https://github.com/K-ran/ThaparQuadcopterProject",
            "youtube":"https://www.youtube.com/watch?v=ElcYbNINarg",  
        },
        "banner_image":"quadcopter.jpg"
    }
]

export default projects;