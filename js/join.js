class SignUp {
  constructor(yourName, yourEmail, yourPassword, repeatPassword) {
    this.yourName = yourName;
    this.yourEmail = yourEmail;
    this.yourPassword = yourPassword;
    this.repeatPassword = repeatPassword;
  
  }

  get fullName() {
    return `${this.yourName}`;
  }

  set fullName(fullName) {
    
    this.yourName = yourName;
  }

  get contactInfo() {
    return `${this.yourEmail} ${this.yourPassword} ${this.repeatPassword}`;
  }

  set contactInfo(contactInfo) {
    const [yourEmail, yourPassword, repeatPassword] = contactInfo.split(" ");
    this.yourEmail = yourEmail;
    this.yourPassword = yourPassword;
	this.repeatPassword = repeatPassword;
  }
}


function join(){ // 회원가입
    let form = document.querySelector("#form_main");
    let y_name = document.querySelector("#yourName");
    let y_email = document.querySelector("#yourEmail");
    let y_password = document.querySelector("#yourPassword");
	let r_password = document.querySelector("#repeatPassword");
    let class_check = document.querySelector(".select form-control-lg");
    
    form.action = "../index_join.html";
    form.method = "get";
    
    if(y_name.value.length === 0 || y_email.value.length === 0 || y_password.value.length === 0 || r_password.value.length === 0){
        alert("회원가입 폼에 모든 정보를 입력해주세요.");
    }else{
		session_join_set(); // 회원가입 용 세션 생성
        form.submit();
    }
}

