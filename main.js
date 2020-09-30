$(document).ready(function () {
    var myAudio = new Audio('./video/bakamitai_template.mp3')
    $('.start-btn').click(function(){
        $(this).hide()
        myAudio.play();
        $('.grid-1').show()
        document.getElementById('main-vd-1').play()
        document.getElementById('main-vd-2').play()
        document.getElementById('main-vd-3').play()
        document.getElementById('main-vd-4').play()
        document.getElementById('main-vd-5').play()
        document.getElementById('main-vd-6').play()
        document.getElementById('main-vd-7').play()
        document.getElementById('main-vd-8').play()
        document.getElementById('main-vd-9').play()
        
    })
})