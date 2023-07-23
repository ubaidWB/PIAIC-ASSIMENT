var More_Guests=['Imran', 'Khalid','Hamza', 'Kamran', ]
More_Guests.unshift('Ubaid');//to add one more guest in the start of list
More_Guests.push('Tariq');//to add one more guest in the end  of list
More_Guests.splice(3,0,'Azan');//to add one more guest in the middle of list

console.log("\nSorry to say but we can invite only two people for dinner due to shortage of space")

console.log('\nDear Mr. '+More_Guests[0]+', \nwe regret to inform you that we can not invite you on dinner');
More_Guests.splice(0,1);
console.log('\nDear Mr. '+More_Guests[0]+', \nwe regret to inform you that we can not invite you on dinner');
More_Guests.splice(0,1);
console.log('\nDear Mr. '+More_Guests[0]+', \nwe regret to inform you that we can not invite you on dinner');
More_Guests.splice(0,1);
console.log('\nDear Mr. '+More_Guests[0]+', \nwe regret to inform you that we can not invite you on dinner');
More_Guests.splice(0,1);
console.log('\nDear Mr. '+More_Guests[0]+', \nwe regret to inform you that we can not invite you on dinner\n');
More_Guests.splice(0,1);
console.log(More_Guests);//Only 2 guest are remaining

console.log('\nDear Mr. '+More_Guests[0]+', \nwe are happy to inform you that you are still invited for dinner')
console.log('\nDear Mr. '+More_Guests[1]+', \nwe are happy to inform you that you are still invited for dinner\n')

More_Guests.splice(0,1);//Remove Second last remaining guest 'Kamran'
More_Guests.splice(0,1);//Remove last remaining guest 'Tariq'

console.log(More_Guests);//Guest List is Empty
