import styles from '../styles/Home.module.css'

function validateEmail(mail) 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
  {
    return (true)
  }
    return (false)
}

const SignupForm = ({ title }) => {
 
    const registerUser = async event =>{
        let userName = document.getElementById("form_name").value;
        let userEmailAddress =document.getElementById("form_email_id").value;
        let userGithubname =document.getElementById("form_photo").value;

        if(!validateEmail(userEmailAddress)){
          alert("You have entered an invalid email address!")
          return
        }
        if(userName && userEmailAddress && userGithubname 
            && userGithubname.trim() !== '' && userEmailAddress.trim() !== ''&& userName.trim() !== ''){
          var userDetailsJSON={};
          userDetailsJSON.email = userEmailAddress;
          userDetailsJSON.name = userName;
          userDetailsJSON.photo = "https://github.com/"+userGithubname+".png";
    
          console.log("body print"+JSON.stringify(userDetailsJSON));
    
          const response = await fetch('https://green-lab-f5a9.viswacloudflare.workers.dev/', {
            method: 'POST',
            headers: {
              
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(userDetailsJSON)
        });
        var jsonResponse =await response.json()
        if(jsonResponse != null && jsonResponse.message == 'success'){
          alert("Your digital ticket is  "+jsonResponse.url +"  will be available after 10 misn");
        } else{
          alert("Try again later");
        }
        }else{
          alert('All the values are mandatory to enter');
        }
      }

    return (
      <>
        <p className="p-1 mb-2">{title}</p>

          <div className="">
              <div>
            <input
              id="form_name"
              className={styles.formrows}
              type="text"
              placeholder="Your Name" required
            />
            </div>
            <div>
            <input
              id="form_email_id"
              className={styles.formrows}
              type="email"
              placeholder="Email Address" required
            />
            </div>
            <div>
            <input
              id="form_photo"
              className={styles.formrows}
              type="text"
              placeholder="Github UserName" required
            />
            </div>
            <button
              className={styles.formbutton}
              onClick={registerUser}
            >
              Sign Up
            </button>
          </div>
      </>
    );
  };
  
  export default SignupForm;