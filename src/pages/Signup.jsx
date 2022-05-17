import React from "react";
import swal from "sweet-alert";

function Signup() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [phone, setPhone] = useState();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loader, setLoader] = useState("");

  const handleSubmit = async () => {
    const api = await fetch(
      "http://196.223.240.154:8099/supapp/api/auth/client/signup",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: email,
          firstName: firstname,
          lastName: lastname,
          mobile: phone,
          password: password,
        }),
      }
    );
    const data = await api.json()
    if(data.message=='Validation error'){
        swal('Error',"Provide password with atleast one uppercase letter,one sign, and special character","error")
    }

  };
  return <div className="w-screen h-screen signup-body">
  </div>;
}

export default Signup;
