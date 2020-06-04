const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.set("port", 8080);
app.use(bodyParser.json({ type: "application/json" }));
app.use(bodyParser.urlencoded({extended: true}));



const campgrounds = [{name: "Three Rivers Petroglyph Site", town: "Lincoln, NM", lengthLimit: 25, elevation: 4986, numberOfSites: 7, padType: "gravel"},
                     {name: "Baca Campground", town: "Lincoln, NM", lengthLimit: 32, elevation: 6397, numberOfSites: 7, padType: "dirt"},
                     {name: "South Fork Campground", town: "Nogal, NM", lengthLimit: 19, elevation: 7513, numberOfSites: 60, padType: "unknown"},
                     {name: "Valley of Fires Recreation Area", town: "Carrizozo, NM", lengthLimit: 38, elevation: 5249, numberOfSites: 19, padType: "asphalt"},
                     {name: "Oak Grove Campground", town: "Alto, NM", lengthLimit: 25, elevation: 8464, numberOfSites: 30, padType: "unknown"},
                     {name: "Three Rivers Campground", lengthLimit: 25, elevation: 6332, numberOfSites: 12, padType: "dirt"},
                     {name: "Silver Campground", town: "Cloudcroft, NM", lengthLimit: 30, elevation: 8956, numberOfSites: 30, padType: "gravel"},
                     {name: "Springtime Campground", town: "Magdalena, NM",  elevation: 7381, numberOfSites: 6, padType: "dirt"},
                     {name: "Bear Trap Campground", town: "Magdalena, NM", lengthLimit: 21, elevation: 8497, numberOfSites: 4, padType: "grass"},
                     {name: "Datil Well Campground", town: "Datil, NM", lengthLimit: 35, elevation: 7414, numberOfSites: 22, padType: "dirt"},
                     {name: "Apache Creek",  town: "Reserve, NM", lengthLimit: 19, elevation: 6397, numberOfSites: 10, padType: "gravel"},

]

//HELLO WORLD
app.get("/hello", (req, res) => {
	res.json({msg: "Hello, World!"});
});


// Hi with one parameter, name 
//
app.get("/hi", (req, res) => {
    res.json({msg: `Hi, ${req.query.name}`});
});


/*
List All get request. No Parameters,ype:   
    {"campgrounds":["Three Rivers Petroglyph Site",
                    "Baca Campground",
                    "South Fork Campground",
                    "Valley of Fires Recreation Area",
                    "Oak Grove Campground",
                    "Three Rivers Campground",
                    "Silver Campground",
                    "Springtime Campground",
                    "Bear Trap Campground",
                    "Datil Well Campground",
                    "Apache Creek"]}

*/
app.get("/listAll", (req, res) => {
    res.json({campgrounds: campgrounds.map((entry) => {return entry.name})});
});

                   
/*
   Search get request takes one parameter q with the value of a campground name
   It returns the json object containing all the information for a campground
*/
app.get('/search', (req, res) => {
    let searchTerm = req.query.q;
    console.log(`Search for ${searchTerm}`);
    
    // TODO

    res.json({});
})


/* Fit get request. One parameter called length which is the length of the RV.
   the request returns the campgrounds that can fit that length RV. 
   so, if the length parameter is 22 the method should return

   {
    "campgrounds": [
        {
            "campground": "Three Rivers Petroglyph Site",
            "location": "Lincoln, NM",
            "maxLength": 25
        },
        {
            "campground": "Baca Campground",
            "location": "Lincoln, NM",
            "maxLength": 32
        },
        {
            "campground": "Valley of Fires Recreation Area",
            "location": "Carrizozo, NM",
            "maxLength": 38
        },
        {
            "campground": "Oak Grove Campground",
            "location": "Alto, NM",
            "maxLength": 25
        },
        {
            "campground": "Three Rivers Campground",
            "maxLength": 25
        },
        {
            "campground": "Silver Campground",
            "location": "Cloudcroft, NM",
            "maxLength": 30
        },
        {
            "campground": "Datil Well Campground",
            "location": "Datil, NM",
            "maxLength": 35
        }
    ]
   }

   The output needs to match this format. The response json object has a key called 'campgrounds' 
   whose value is an array of json objects each representing a campground. Each of those Json 
   objects in the array have the keys 'campground', 'location', and 'maxLength'.

*/
app.get('/fit', (req, res) => {

    // TO DO

    res.json({campgrounds: results});
})


/*
    elevation get request. This request takes 2 parameters:

        altitude:  the elevation specified by the user
        direction: can be either the strings 'higher' or 'lower'

    The interpretation of this is as follows. If the request is

        /elevation?altitude=8000&direction=higher
    
    then the request should return all camggrounds higher than 8000 feet:

    {
    "campgrounds": [
        {
            "campground": "Oak Grove Campground",
            "elevation": 8464,
            "town": "Alto, NM"
        },
        {
            "campground": "Silver Campground",
            "elevation": 8956,
            "town": "Cloudcroft, NM"
        },
        {
            "campground": "Bear Trap Campground",
            "elevation": 8497,
            "town": "Magdalena, NM"
        }
    ]
}
*/

  // TO DO



//SERVER START
app.listen(app.get("port"), () => {
	console.log(`Find the server at http://localhost:${app.get("port")}`);
	 // eslint-disable-line no-console
});
