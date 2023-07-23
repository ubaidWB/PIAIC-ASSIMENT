const Places=['Bangladesh','America','Denmark','Canada','England'];
console.log('\n Original Order',Places);//Print array in its original order.
const sorted=[...Places].sort();//shadow array of Seeing_world
console.log('\n Alphabetical Sorted',sorted);//Print array in alphabetical order without modifying the actual list.
console.log('\n Original Order',Places);//Show that your array is still in its original order by printing it.
const SortedReverse=[...Places].sort().reverse();
console.log('\n Reverse Alphabetical Order',SortedReverse);//Print your array in reverse alphabetical order without changing the order of the original list.
console.log('\n Original Order',Places);//Show that your array is still in its original order by printing it again.
Places.reverse();
console.log('\n Reverse the Order',Places);//Reverse the order of your list. Print the array to show that its order has changed.
Places.reverse();
console.log('\n Reverse the order list again',Places);
Places.sort();
console.log('\n Sorted Alphabetical Order',Places);//Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
Places.sort().reverse();
console.log('\n Reverse Alphabetic Sort',Places);//Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.




