function getFormvalue() {
    //Write your code here
	let fname = document.querySelectorAll("input")[0];
	let lname = document.querySelectorAll("input")[1];
	alert(`${fname.value} ${lname.value}`);
}
