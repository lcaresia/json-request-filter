# json-request-filter

 This library filters objects (json and arrays).

## Installation

#### For local installation
```
npm install --save json-request-filter
```

#### For global installation
```
npm install -g json-request-filter
```


## Docs

|Function        |Function                       |Return                     |
|----------------|-------------------------------|---------------------------|
|only            |(source, fields)            	 |Object(Array or JSON)      |

### only

##### Example:
```
const jrf = require('json-request-filter')

let data = {  
	uuid: '223b74dd-ca56-4cb8-a396-a911792f7092',  
	username: 'caresia',  
	password: '$2y$10$2OE6e9rvmnD2SO184HX5iOabD9cX87.l7pOFzyS2g/I5YCOWI22qa',  
	timestamp: {  
		uuid: 'b541e9ee-eb5f-4b70-a745-27171a2b3d9f',  
		created_at: '01/05/2019',  
		updated_at: '02/05/2019',  
		deleted_at: null  
	}  
}

jrf.only(data, ['uuid', 'username', 'created_at']) 
/* return this
{  
	uuid:'223b74dd-ca56-4cb8-a396-a911792f7092',  
	username:'caresia',  
	timestamp:{  
		uuid:'b541e9ee-eb5f-4b70-a745-27171a2b3d9f',  
		created_at:'01/05/2019'  
	}  
}
*/
```


## Contact

#### Email: lucascarezia@gmail.com