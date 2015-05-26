var DATA = require("./data");

var $main = $("main");

for(var i = 0, len = DATA.length; i < len; i++) {
    var step = DATA[i];
    var index = i+2;

    if(step.content) {
        var content = step.content;
        var $content = $('<section class="pane content content-'+index+'"></section>');

        if(content.date) {
            var $date = $('<div class="date">'+content.date+'</div>');
            $content.append($date);
        }

        if(content.title) {
            var str = '<div class="title">' + content.title;
            var extras = getExtras(step);
            if(extras) {
                str += extras;
            }
            var $title = $(str);
            $content.append($title);
        }

        if(content.image) {
            var $image = $('<img class="image" src="'+content.image+'" />');
            $content.append($image);
        }
        else {
            var $image = $('<img class="image" src="img/'+index+'.png" />');
            $content.append($image);
        }

        $main.append($content);

    }


    if(step.more) {
        var more = step.more;
        var $more = $('<section class="pane more more-'+index+'"></section>');

        var $title = $('<h1 class="title">More info</h1>');
        $more.append($title);

        var $inner = $('<div class="inner"></div>');

        for(var j = 0, lenj = more.length; j < lenj; j++) {
            var part = more[j];
            if(typeof part === "object") {
                var $part = $(part.tag);
                var $content = $(part.content);
                $part.append($content);
            }
            else {
                var $part = $('<p>'+part+'</p>');
            }

            $inner.append($part);
        }

        $more.append($inner);
        $main.append($more);
    }


    if(step.sources) {
        var sources = step.sources;
        var $sources = $('<section class="pane sources sources-'+index+'"></section>');
        var $ul = $('<ul></ul>');

        var $title = $('<h1 class="title">Sources</h1>');
        $sources.append($title);

        for(var j = 0, lenj = sources.length; j < lenj; j++) {
            var source = sources[j];

            if(typeof source === "object") {
                var $source = $('<li><a href="'+source.url+'">'+source.text+'</a></li>');
                $ul.append($source);
            }
            else {
                var $source = $('<li><a href="'+source+'">'+source+'</a></li>');
                $ul.append($source);
            }
        }

        $sources.append($ul);
        $main.append($sources);
    }


    if(step.gallery) {
        var gallery = step.gallery;
        var $gallery = $('<section class="pane gallery gallery-'+index+'"></section>');
        var $inner = $('<div class="inner"></div>');

        for(var j = 0, lenj = gallery.length; j < lenj; j++) {
            var photo = gallery[j];
            var $photo = $('<div class="photo"></div>');

            if(typeof photo === "object") {
                var $title = $('<h1 class="title">'+photo.title+'</div>');
                $photo.css("background-image", "url("+photo.image+")");
            }
            else {
                var $title = $('<h1 class="title">'+photo+'</div>');
                $photo.css("background-image", "url(img/"+index+"."+ (j+1) +".jpg)");
            }

            $photo.append($title);
            $inner.append($photo);
        }

        $gallery.append($inner);
        $main.append($gallery);
    }
}






function getExtras(step) {
    if(!step.more && !step.gallery && !step.sources) {
        return;
    }

    var str = '<div class="extras">';

    if(step.more) {
        str += '<i class="fa fa-info"></i>';
    }
    if(step.gallery) {
        str += '<i class="fa fa-camera"></i>';
    }
    if(step.sources) {
        str += '<i class="fa fa-link"></i>';
    }

    str += '</div>';

    return str;
}