var first = ['Create','Cut','Reticulate'];
var second = ['you','clients','artists','us'];
var firstM = [], secondM = [], el;

var $first = $('.the-first'); 
var $second = $('.the-second'); 
var $container = $('#container');

// init static //    
$first.text(first[0]);
$second.text(second[0]);

// create measurables //
for(var i = 0; i < first.length; i++){
    el = $('<div class="measurable">' + first[i] + '</div>');
    $container.append(el);
    firstM.push(el.width());
}
for(var i = 0; i < second.length; i++){
    el = $('<div class="measurable">' + second[i] + '</div>');
    $container.append(el);
    secondM.push(el.width());
}

// absolutize //
var positions = [];
$('#container > span').each(function(){
    positions.push($(this).position());
});
$('#container > span').each(function(){
    var pos = positions.shift();
    $(this).css({
        position: 'absolute',
        left: pos.left,
        top: pos.top
    });
});

// remember initial sizes //
var firstInitialWidth = $first.width();
var secondInitialWidth = $second.width();

// loop the loop //
var activeWordsIndex = 0;
setInterval(function(){
    activeWordsIndex++;
    var firstIndex = activeWordsIndex % first.length;
    var secondIndex = activeWordsIndex % second.length;
    
    $first.text( first[firstIndex] );
    $second.text( second[secondIndex] );
    
    var firstLineOffset = (firstM[firstIndex] - firstInitialWidth) / 2;
    var secondLineOffset = (secondM[secondIndex] - secondInitialWidth) / 2;
   
    $('.static.first').css({
        transform: 'translateX(' + firstLineOffset + 'px)'
    });
    $('.static.second').css({
        transform: 'translateX(' + (-secondLineOffset) + 'px)'
    });
    
    $first.css({
        transition: 'none', 
        transform: 'translate(' + (-firstLineOffset) + 'px, -30px)',
        opacity: '0'
    });
    setTimeout(function(){
        $first.css({
            transition: 'all 1s ease',
            transform: 'translate(' + (-firstLineOffset) + 'px, 0px)',
            opacity: '1'
        });
    }, 50);
    
    $second.css({
        transition: 'none', 
        transform: 'translate(' + (-secondLineOffset) + 'px, 30px)',
        opacity: '0'
    });
    setTimeout(function(){
        $second.css({
            transition: 'all 1s ease',
            transform: 'translate(' + (-secondLineOffset) + 'px, 0px)',
            opacity: '1'
        });
    }, 50);
}, 2000);