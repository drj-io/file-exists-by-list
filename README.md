# file-exists-by-list
Node.JS function to check to see if a list of files exists, from an array of paths.


```
npm install file-exists-by-list
```

```javascript
var fileExistsByList = require("file-exists-by-list");

var check_exists = [
  {
    name: 'app_path',
    file: '~/some/path.txt',
    directory: false
  },
  {
    name: 'write_directory_path',
    file: '~/some/path/to/directory/'
    directory: true
  }
];

fileExistsByList(err){
  if (err) { console.log("fail!", err) }
  else { console.log("success!") }
}
```
