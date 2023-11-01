$(document).ready(function(){
    // 버튼 active 추가 제거 해보기
    $('.btn li').click(function(){
        $(this).addClass('active')
        $(this).siblings().removeClass('active')

        // 탭메뉴 연결하기
        // li에 있는 data-alt 값을 변수에 저장시킴
        const tab = $(this).attr('data-alt')

        $('.tabs div').removeClass('active');
        $(`#${tab}`).addClass('active');
    });
});