//월~금 아침 09:00~19:00 체크하기
function timeCheck()
{
    var cal = new Date();       //오늘의 날짜 객체 생성
    var hour = cal.getHours();  //시 구하기
    var min = cal.getMinutes(); //분 구하기
    var day = cal.getDay();     //요일구하기 0-> 일요일
     
    if(min <10) 
    {
        min = "0"+min;          //1분이어도 01로 표시되게
    }
 
    //시간과 분을 문자열로 변환
    var hourTxt = hour.toString();  
    var minTxt = min.toString();
 
    //시간과 분을 문자열로 붙인다음 *1을 하여 다시 숫자형으로 변환, 요일도 숫자형으로 변환
    var nowTimeTxt = hourTxt+minTxt;
    var nowTimeNum = nowTimeTxt * 1;
    var nowDayNum = day * 1; 
     
    var minCheck = 1631;     //최소시간 8시30분
    var maxCheck = 1632;     //최대시간 9시10분
     
    console.log("현재 시간은" + hour + "시 " + min + " 분 입니다. \n한마디로 " + nowTimeNum);
     
    if( nowTimeNum > minCheck && nowTimeNum < maxCheck && nowDayNum != 0 && nowDayNum != 6)
    {
        $rootScope.status = false;
        return true;
    }
    else
    {
        $rootScope.status = true;
        return false;
    }
}