function loadmore(url,id,page,dom,load,data){
    $.ajax({
        url: url,
        type: "get",
        data:data,
        success: function (res) {
            var html = template(id, res[page]);
            $(dom).append(html);
        }
    })
    //  点击加载更多
    $(load).click(function () {
        alert(1)
        page++;
        $.ajax({
            url: url,
            type: "get",
            data:data,
            success: function (res) {
                console.log(res[page])
                if (!res[page]) {
                    $(load).html("没有更多数据了");
                    return false;
                }
                var html = template(id, res[page]);
                $(dom).append(html);
            }
        })
    
    })
}
