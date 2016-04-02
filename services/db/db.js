var redis = require('redis');
var async = require('async');
var uuid = require('node-uuid');
var winston = require('winston');

var port = "6379";
//var host = "192.168.1.21";
var host = "172.16.4.2";

var client = redis.createClient(port, host);

client.on("connect", function(){
    winston.info("Connexion du client sur " + host + ':' + port);
});

var RESOURCES = "resources";

var db = {
    RESOURCES: RESOURCES,
    client: client,

    //Fonctions

    /**
     * Récupère les IDs d'un certain type
     * @param type
     * @param callback
     */
    getAll: function (schema, type, callback) {
        console.log("Get all key : " + type);
        return client.keys('*', callback);
    },
    /**
     * Récupère la valeur d'un champ selon son type
     * @param nom du champ
     * @param type
     * @param callback
     */
    get: function (schema, type, callback) {
        console.log("Get value of " + schema + ":" + type);
         switch(type){
            case 'hset' :
                return client.hgetall(schema, callback);
                break; 
            case 'set' : 
                return client.get(schema, callback);
                break; 
            }
    },

    /**
     * Supprime un élément d'un certain type
     * @param type
     * @param key
     * @param callback
     */
    delete: function (type, key, callback) {

        //Génération de la clef suivant le type et l'id
        db.generateKey(type, key, function(generatedKey){
            //Traitement parallèle
            async.parallel([
                function (callback) {
                    //Suppression de la clef
                    client.del(generatedKey, callback)
                },
                function (callback) {
                    //Suppression de l'ID sur la "table"
                    client.srem(type, db.getSuffixKey(generatedKey), callback)
                }
            ], function (err, results) {

                if(results[0] == 1 && results[1] == 1) {
                    winston.info("Suppression " + generatedKey);
                    callback(true);
                }else {
                    winston.error("Suppression " + generatedKey);
                    winston.error("Suppression clef:" + results[0] + "|"+type+":"+results[1])
                    callback(false);
                }

            });
        });
    },

    /**
     * Génération de la clef suivant le type et la clef
     * @param type
     * @param key
     * @param callback
     */
    generateKey: function(type, key, callback) {

        if (key !== undefined)
            callback(type + ":" + key);
        else {
            callback(type + ":" + uuid.v4());
        }
    },

    /**
     * Récupère le suffixe d'une clef générée
     * @param generatedKey
     * @returns {*}
     */
    getSuffixKey: function(generatedKey){

        return generatedKey.split(":")[1];
    },

    exitClients: function(){
        winston.info("Déconnexion du client");
        client.end();
    }


};

module.exports = db;
