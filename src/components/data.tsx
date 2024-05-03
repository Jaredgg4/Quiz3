import  axios  from 'axios';
import react from 'react';
import { ReactDOM } from "react";

async function FetchUserData(userid: any){
        try{
		const response = await axios.get(`https://api.testquestion.com/users/${userid}`);

		console.log('User Data: ', response.data);
		return response;
	} catch(error: any){
		if(error.response){
			console.error('Error fetching user data: ', error.data);
		} else{
			console.error('A unexpected error occured: ', error);
		}

		throw error;
	}
    
}

export default FetchUserData;