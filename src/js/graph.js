/**
 * 
 */
 var psd3 = psd3 || {};
psd3.Graph = function(config) {
    var _this = this;
    this.config = config;
    this.defaults = {
        width: 400,
        height: 400,
        value: "value",
        inner: "inner",
        label: function(d) {
            return d.label;
        },
        tooltip: function(d) {
            if (_this.config.value !== undefined) {
                return d[_this.config.value];
            } else {
                return d.value;
            }

        },
        transition: "linear",
        transitionDuration: 1000,
        donutRadius: 0,
    };
    /*console.log("before defaults");
    for(var property in config){
        console.log(property);
    }*/
    for(var property in this.defaults){
        if(this.defaults.hasOwnProperty(property)){
            if(!config.hasOwnProperty(property)){
                config[property] = this.defaults[property];
            }
        }
    }
    /*console.log("after defaults");
    for(var property in config){
        console.log(property);
    }*/
};