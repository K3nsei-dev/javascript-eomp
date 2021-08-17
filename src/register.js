async function registerUser() {
    const name = document.getElementById("first_name").value;
    const surname = document.getElementById("last_name").value;
    const email = document.getElementById("email").value;
    const cell = document.getElementById("cell_num").value;
    const password = document.getElementById("password").value;
  
    if (
      typeof(name) === "number" ||
      typeof(surname) === "number"){
      return alert(`Please use the correct values for each section!`);
    }
      
    // console.log(name, surname, email, cell, password)
    try {
      const res = await fetch(
        "https://lca-pointofsales.herokuapp.com//register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            first_name: name,
            last_name: surname,
            email: email,
            cell_num: cell,
            password: password,
          }),
        }
      );
      const json = await res.json();
      console.log("You have succesfully registered");
      if (json["message"] == "Success"){
        alert("Please Sign In On Next Page");
        window.location.href = "./login.html";
      } else {
        alert("Please Fill In The Required Fields Correctly");
      }
    } catch (err) {
      console.error(err);
    }
  }

// try {
//     if (typeof name !== 'string' && typeof surname !== 'string' && typeof cell !== 'number') {
//       throw (new Error('An incorrect value was entered in one of the fields.'));
//     } else {
//       // Do something here if the above conditional passes.
//     }
//   } 
//   catch (e) {
//     console.error(e.message);
//   }