module.exports =  function(check_exists,cb){
  var err_result = []
  var i = 0;
  function run_exists(){
    fs.exists(check_exists[i].file, function(exists){
      if (!exists){
        err_result.push(check_exists[i].name+" does not exist");
      }

      if(check_exists[i].directory){

        if (fs.lstatSync(check_exists[i].file).isDirectory() == false){
          err_result.push(check_exists[i].name + " is not a directory")
        }
      }
      if(i<check_exists.length-1){

        i++
        run_exists();
      }
      else {

        if(err_result.length > 0){
          return cb(err_result);
        }
        else {
          cb(null)
        }
      }
    })
  }
  run_exists();
}
