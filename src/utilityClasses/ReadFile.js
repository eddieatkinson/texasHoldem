// import React from 'react';
import fs from 'fs';

class ReadFile{
	console(){
		console.log("New file!!");
		fs.readFile('/poker.txt', (error, fileContents)=>{
			if(error){
				throw error;
			}else{
				console.log(fileContents);
			}
		});
		
	}
}

export default ReadFile;