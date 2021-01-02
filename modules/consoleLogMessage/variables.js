
// variable for consol log message , used in app.js
var serverIsListening = '\n' +
                        '\t' + '|----- Status ----------------------------------------|' + '\n' +
                        '\t' + '|                                                     |' + '\n' +
                        '\t' + '|             1. Server has been started.             |' ;
var mongodbStarted =    '\t' + '|                                                     |' + '\n' +
                        '\t' + '|             2. MongoDB is Connected.                |' + '\n' +
                        '\t' + '|                                                     |' + '\n' +
                        '\t' + '|-----------------------------------------------------|' + '\n' ;



var mongodbNotStarted = '\t' + '|                                                     |' + '\n' +
                        '\t' + '|             2. MongoDB is Not Connected.            |' + '\n' +
                        '\t' + '|                Check ERROR message                  |' + '\n' +
                        '\t' + '|                      ^^^^^                          |' + '\n' +
                        '\t' + '|--------------------- !!!!! -------------------------|' ;


var partition = '=======================================\n'




// variable for consol log message , used in seed.js
var setup_started       =   '\n' +
                            '\t' + '|--- Database CleanUp Status -------------------------|' + '\n' +
                            '\t' + '|                                                     |' ,
    instagram_deleted   =   '\t' + '|     > Successfully deleted database: Posts          |' ,
    comment_deleted     =   '\t' + '|     > Successfully deleted database: Comments       |' ,
    react_deleted       =   '\t' + '|     > Successfully deleted database: Reacts         |' ,
    placeholder_added   =   '\t' + '|     > Dummy placeholder added to   : Posts          |' ,
    comment_added       =   '\t' + '|     > Dummy comment added to       : Comments       |' ,
    react_added         =   '\t' + '|     > Dummy react added to         : Reacts         |' ,
    setup_done          =   '\t' + '|    --------------------------------------------     |' + '\n' +
                            '\t' + '|                                                     |' + '\n' +
                            '\t' + '|                    Setup is done                    |' + '\n' +
                            '\t' + '|                                                     |' + '\n' +
                            '\t' + '|-----------------------------------------------------|' + '\n' ;


// the below section exports a module
module.exports = {
    serverIsListening,
    mongodbStarted,
    mongodbNotStarted,
    partition,
    setup_started,
    instagram_deleted,
    comment_deleted,
    react_deleted,
    placeholder_added,
    comment_added,
    react_added,
    setup_done

};