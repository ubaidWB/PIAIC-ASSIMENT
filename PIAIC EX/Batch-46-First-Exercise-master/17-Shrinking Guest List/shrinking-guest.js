var More_Guests = ['Imran', 'Khalid', 'Hamza', 'Kamran',];
More_Guests.unshift('Ubaid');
More_Guests.push('Tariq');
More_Guests.splice(3, 0, 'Azan');
console.log("\nSorry to say but we can invite only two people for dinner due to shortage of space");
console.log('\nDear Mr. ' + More_Guests[0] + ', \nwe regret to inform you that we can not invite you on dinner');
More_Guests.splice(0, 1);
console.log('\nDear Mr. ' + More_Guests[0] + ', \nwe regret to inform you that we can not invite you on dinner');
More_Guests.splice(0, 1);
console.log('\nDear Mr. ' + More_Guests[0] + ', \nwe regret to inform you that we can not invite you on dinner');
More_Guests.splice(0, 1);
console.log('\nDear Mr. ' + More_Guests[0] + ', \nwe regret to inform you that we can not invite you on dinner');
More_Guests.splice(0, 1);
console.log('\nDear Mr. ' + More_Guests[0] + ', \nwe regret to inform you that we can not invite you on dinner\n');
More_Guests.splice(0, 1);
console.log(More_Guests); //Only 2 guest are remaining
console.log('\nDear Mr. ' + More_Guests[0] + ', \nwe are happy to inform you that you are still invited for dinner');
console.log('\nDear Mr. ' + More_Guests[1] + ', \nwe are happy to inform you that you are still invited for dinner\n');
More_Guests.splice(0, 1); //Remove Second last remaining guest 'Kamran'
More_Guests.splice(0, 1); //Remove last remaining guest 'Tariq'
console.log(More_Guests); //Guest List is Empty
