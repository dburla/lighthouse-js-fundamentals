function caculateAge (date){
  var today = new Date();
  var yy = today.getFullYear();

  return yy - date;

}

console.log(caculateAge(1984) + ' years old');