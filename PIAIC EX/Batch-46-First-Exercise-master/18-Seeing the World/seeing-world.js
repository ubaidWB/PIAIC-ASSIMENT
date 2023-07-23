var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var Places = ['Bangladesh', 'America', 'Denmark', 'Canada', 'England'];
console.log('\n Original Order', Places); //Print array in its original order.
var sorted = __spreadArray([], Places, true).sort(); //shadow array of Seeing_world
console.log('\n Alphabetical Sorted', sorted); //Print array in alphabetical order without modifying the actual list.
console.log('\n Original Order', Places); //Show that your array is still in its original order by printing it.
var SortedReverse = __spreadArray([], Places, true).sort().reverse();
console.log('\n Reverse Alphabetical Order', SortedReverse); //Print your array in reverse alphabetical order without changing the order of the original list.
console.log('\n Original Order', Places); //Show that your array is still in its original order by printing it again.
Places.reverse();
console.log('\n Reverse the Order', Places); //Reverse the order of your list. Print the array to show that its order has changed.
Places.reverse();
console.log('\n Reverse the order list again', Places);
Places.sort();
console.log('\n Sorted Alphabetical Order', Places); //Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
Places.sort().reverse();
console.log('\n Reverse Alphabetic Sort', Places); //Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
