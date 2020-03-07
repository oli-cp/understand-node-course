const configValues = require("./config");

module.exports = {

    getDbConnectionString: () => {
        return "mongodb+srv://"
        + configValues.name 
        + ":" 
        + configValues.pwd 
        + "@clusteradvancednodecourse-lhmjh.mongodb.net/test?retryWrites=true&w=majority"
    }

}