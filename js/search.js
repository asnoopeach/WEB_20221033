/*document.getElementById("search_btn").addEventListener('click', search_message);

var search_array = []; // 빈 배열 – 전역 변수
var forbidden_words = ["개자식", "지랄", "젠장"]; // 검색 제한 단어

function search_message() {
  let search_str = document.querySelector("#search_txt");

  if (search_str.value.length === 0) {
    alert("검색어가 비었습니다. 입력해주세요");
  } else {
    if (isForbiddenWord(search_str.value)) {
      alert("검색어에 비속어가 포함되어 있습니다. 다른 검색어를 입력해주세요.");
    } else {
      alert("검색을 수행합니다!");
      search_array.push(search_str.value); // 배열에 검색어 추가
      let text = document.getElementById("search_message").innerHTML = search_array.toString(); // 값 변환
      document.querySelector("#form_main").submit();
    }
  }
}

function isForbiddenWord(searchWord) {
	let search_str = document.querySelector("#search_txt");
  for (let i = 0; i < forbidden_words.length; i++) {
    if (search_str.value.includes(forbidden_words[i])) {
      return false ;
    }
  }
  return;
}
*/

/*document.getElementById("search_btn").addEventListener('click', search_message);

var search_array = []; // 빈 배열 – 전역 변수


function search_message(){
    let search_str = document.querySelector("#search_txt").value; // 변수에 저장

	 if(search_str.length === 0){
        alert("검색어가 비었습니다. 입력해주세요"); 
    }
    else{
        if (isForbiddenWord(search_str)) {
            alert(`${search_str}는 검색어로 적절하지 않습니다.`);
        } else {
            alert("검색을 수행합니다!");
         
          // 배열의 개수가 5개를 넘으면 맨 앞의 값을 삭제
            if (search_array.length >= 5) {
                search_array.shift();
            }
			 search_array.push(search_str); // 배열에 검색어 추가
            let text = document.getElementById("search_message").innerHTML =  search_array.toString(); // 값 변환
            document.querySelector("#form_main").submit();
        }
    }
}

	      

function isForbiddenWord(searchQuery) {
	const forbidden_words = ["개자식", "지랄", "젠장"]; // 검색 제한 단어
  for (let i = 0; i < forbidden_words.length; i++) {
	  const forbidden_word = forbidden_words[i];
	  
    if (searchQuery.includes(forbidden_word)) {
      return true ;
    }
  }
  return false;
}

*/


/*
  // 배열의 길이가 10을 초과하는지 검사
  if (searchHistory.length > 5) {
    // 맨 앞의 검색어 삭제
    searchHistory.shift();
  }

  // 검색어 출력
  console.log(searchHistory);
}
*/

document.getElementById("search_btn").addEventListener('click', search_message);

var search_array = []; // 빈 배열 – 전역 변수

function search_message(){
    let search_str = document.querySelector("#search_txt").value; // 변수에 저장

    if(search_str.length === 0){
        alert("검색어가 비었습니다. 입력해주세요"); 
    }
    else{
        if (no_str(search_str)) {
            alert(`검색어에 비속어가 포함되어 있습니다. 다른 검색어를 입력해주세요.`);
        } else {
            alert("검색을 수행합니다!");
         
          // 배열의 개수가 5개를 넘으면 맨 앞의 값을 삭제
            if (search_array.length >= 5) {
                search_array.shift();
            }
         
            search_array.push(search_str); // 배열에 검색어 추가
            let text = document.getElementById("search_message").innerHTML =  search_array.toString(); // 값 변환
            document.querySelector("#form_main").submit();
        }
    }
}

function no_str(searchQuery) {
    const bannedWords = ['젠장', '개자식', '지랄'];  // 비속어 목록

    for (let i = 0; i < bannedWords.length; i++) {
        const bannedWord = bannedWords[i];

        if (searchQuery.includes(bannedWord)) {
            return true;
        }
    }

    return false;
}
