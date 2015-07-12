/**
 * Created by Praveen on 12/7/15.
 */
module.exports=(function probridge(){
    var conf,isMobile;
    /**
     * @description
     * @param confFile
     * @returns {*}
     */
    function getConfJSON(confFile){
        if(!confFile) throw new Exception('init function expects an initialization file');
        return require(confFile);
    }

    function getCapabilities(confFile){
        conf = (conf==undefined)?getConfJSON(confFile):conf;
        var cap = process.argv[process.argv.indexOf('--params.cap') + 1];
        if(conf.CAPABILITIES[cap].hasOwnProperty('isMob')) {
            isMobile = true;
            delete conf.CAPABILITIES[cap].isMob
        }
        return conf.CAPABILITIES[cap];
    }

    /**
     * @description
     * @param confFile
     */
    function init(confFile){
        try{
        conf = (conf==undefined)?getConfJSON(confFile):conf;
        var env = (browser.params.env == undefined)?'DEV':browser.params.env.toUpperCase();
        if (!conf.Env.hasOwnProperty(env)) throw new Exception('Environment cannot be set');
        for(key in conf.Env[env]){
            if(key === 'baseUrl'){
                browser.baseUrl = conf.Env[env][key];
            }else{
                browser.params[key] = conf.Env[env][key];
            }
        }
        if(isMobile){ browser.params.isMob=true};
        }catch(err){
            console.log('Error at probridge > at init : '+ err)
        }
    }

    return{
        init: init,
        getCapabilities: getCapabilities
    }
})();
