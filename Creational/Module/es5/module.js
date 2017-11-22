var moduleSimulation = function(){
    var save = function(id){
        console.log("Item saved,ID: ",id);
        return{
            id:id
        }
    }

    var getItem = function(id){
        console.log("Item fetched , id: ",id)
    }

    return{
        save:save,
        get:getItem
    }
}

module.exports = moduleSimulation()

