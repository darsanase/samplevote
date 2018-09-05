	
var userPref;
var ballotBox=[];
var voterList=["Asterix","Obilix","Kakofonix","Madukix","Martix"];
var referenceNo=0;

function vote(userPref){
	referenceNo++;
	var tempUserPref;
	tempUserPref=voterList[userPref];
	ballotBox.push(tempUserPref);
	console.log("Your Preference is Captured. Your Reference No is : "+referenceNo)
	console.log("You Voted for  : "+tempUserPref)
}
