// Username and Password of database
const seedRequired = false,  // if Database seeding is required then this will be 'true', else 'false'.
      isProduction = false;  // if the project is in Production-Mode then this will be 'true', else if in Development-Mode then 'false'. 

function getDatabaseUrl (){  // this function generates MongoDB DatabaseUrl for moongose connect.
  return isProduction ? generate_Production_Database_Url() : generate_Development_Database_Url();
}

function isSeedRequired (){  // this function generates Database Seeding status, either 'required(true)' or 'not-required(false)'
  return seedRequired;
}


// the below section exports a module
module.exports = {
  getDatabaseUrl,
  isSeedRequired
}

function generate_Development_Database_Url (){  // this function generates MongoDB DatabaseUrl for Development-mode use
  const development_username = "quixoDev_InstagramClone",
        development_password = "oKQ2zn2GiWf6ejv9";
        databaseName = "InstagramClone" 

  /* const databaseUrl = `mongodb+srv://${development_username}:${development_password}@learning-tgj3g.mongodb.net/YelpCampBD?retryWrites=true&w=majority`; */
  const databaseUrl = `mongodb+srv://${development_username}:${development_password}@learning-tgj3g.mongodb.net/${databaseName}?retryWrites=true&w=majority`;

  return databaseUrl;
}

function generate_Production_Database_Url (){  // this function generates MongoDB DatabaseUrl for Production-mode use
  const production_username = "InstagramClone",
        production_password = "null",
        databaseName = "InstagramClone"

  const databaseUrl = `mongodb+srv://${production_username}:${production_password}@partiallycompleted-gc37d.mongodb.net/${databaseName}?retryWrites=true&w=majority`;

  return databaseUrl;
}