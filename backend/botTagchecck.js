const New_serviceTag = "별이#5995";
const NowBotTag = "별이#5136";

let ask = prompt("현재 확인하시려는 봇의 태그를 아래 칸에 입력해주세요.");

if(ask === `${New_serviceTag}`){
    alert("해당 클라이언트는 서비스가 종료된 버전입니다 초대하기를 통해 새로운 봇을 초대해주세요!")
} else if(ask === `${NowBotTag}`){
    alert("최신상태의 봇입니다! 많은 사용 부탁드리며 앞으로 더 발전하는 별이봇 개발부가 될 수 있도록 하겠습니다!")
} else {
    return alert("봇의 태그 혹은 닉네임 또는 문장이 잘못되었습니다");
}
