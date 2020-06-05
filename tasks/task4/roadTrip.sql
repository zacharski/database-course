\c postgres
DROP DATABASE IF EXISTS taskfour;
CREATE DATABASE taskfour;
\c taskfour

CREATE TABLE attractions (
	id SERIAL PRIMARY KEY,
	name TEXT NOT NULL,
	location TEXT,
    url TEXT
);

INSERT INTO attractions (name, location, url) VALUES
  ('Lincoln Historic Site', 'Lincoln, NM', 'http://www.nmhistoricsites.org/lincoln' ),
  ('Smokey Bear Historical Park', 'Capitan, NM', 'https://www.newmexico.org/listing/smokey-bear-historical-park/1859/'),
  ('Very Large Array', 'Magdalena, NM', 'https://public.nrao.edu/visit/very-large-array/'),
  ('Kelly Ghost Town', 'Magdalena, NM', 'https://www.ghosttowns.com/states/nm/kelly.html'),
  ('New Mexico Rails-to-Trails', 'Cloudcroft,  NM', 'https://www.tripadvisor.com/Attraction_Review-g46989-d3159993-Reviews-New_Mexico_Rails_to_Trails-Cloudcroft_New_Mexico.html');  


CREATE TABLE campgrounds (
	id SERIAL PRIMARY KEY,
	name TEXT NOT NULL,
	location TEXT,
    maxlength NUMERIC,
    elevation NUMERIC,
    sites NUMERIC,
    padtype TEXT
);

INSERT INTO campgrounds (name, location, maxlength, elevation, sites, padtype) VALUES
    ('Three Rivers Petroglyph Site', 'Lincoln, NM', 25, 4986, 7, 'gravel'),
    ('Baca Campground', 'Lincoln, NM', 32, 6397, 7, 'dirt'),
    ('South Fork Campground', 'Nogal, NM', 19, 7513, 60, NULL),
    ('Valley of Fires Recreation Area', 'Carrizozo, NM', 38,  5249,  19, 'asphalt'),
    ('Oak Grove Campground', 'Alto, NM', 25, 8464, 30, NULL),
    ('Three Rivers Campground', NULL, 25, 6332,  12, 'dirt'),
    ('Silver Campground', 'Cloudcroft, NM',  30, 8956,  30, 'gravel'),
    ('Springtime Campground', 'Magdalena, NM', NULL, 7381, 6, 'dirt'),
    ('Bear Trap Campground', 'Magdalena, NM', 21,  8497, 4, 'grass'),
    ('Datil Well Campground','Datil, NM', 35, 7414,  22, 'dirt'),
    ('Apache Creek',  'Reserve, NM', 19, 6397,  10,'gravel');
-- const campgrounds = [{name: "Three Rivers Petroglyph Site", town: "Lincoln, NM", lengthLimit: 25, elevation: 4986, numberOfSites: 7, padType: "gravel"},
--                      {name: "Baca Campground", town: "Lincoln, NM", lengthLimit: 32, elevation: 6397, numberOfSites: 7, padType: "dirt"},
--                      {name: "South Fork Campground", town: "Nogal, NM", lengthLimit: 19, elevation: 7513, numberOfSites: 60, padType: "unknown"},
--                      {name: "Valley of Fires Recreation Area", town: "Carrizozo, NM", lengthLimit: 38, elevation: 5249, numberOfSites: 19, padType: "asphalt"},
--                      {name: "Oak Grove Campground", town: "Alto, NM", lengthLimit: 25, elevation: 8464, numberOfSites: 30, padType: "unknown"},
--                      {name: "Three Rivers Campground", lengthLimit: 25, elevation: 6332, numberOfSites: 12, padType: "dirt"},
--                      {name: "Silver Campground", town: "Cloudcroft, NM", lengthLimit: 30, elevation: 8956, numberOfSites: 30, padType: "gravel"},
--                      {name: "Springtime Campground", town: "Magdalena, NM",  elevation: 7381, numberOfSites: 6, padType: "dirt"},
--                      {name: "Bear Trap Campground", town: "Magdalena, NM", lengthLimit: 21, elevation: 8497, numberOfSites: 4, padType: "grass"},
--                      {name: "Datil Well Campground", town: "Datil, NM", lengthLimit: 35, elevation: 7414, numberOfSites: 22, padType: "dirt"},
--                      {name: "Apache Creek",  town: "Reserve, NM", lengthLimit: 19, elevation: 6397, numberOfSites: 10, padType: "gravel"},


