function validEmail(str) {
  //your JS code here.

  // return String(email)
  //   .toLowerCase()
  //   .match(
  //     /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  //   );
	  var re = /\S+@\S+\.\S+/;
  return re.test(email);
	}

// Do not change the code below.
const str = prompt("Enter an email address.");
alert(validEmail(str));
