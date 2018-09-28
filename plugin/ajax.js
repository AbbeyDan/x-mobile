function ajax(url,id,dom,fn,data){
    $.ajax({
        url: url,
        type: "get",
        data:data,
        success: function (res) {
            console.log(res)
            var html = template(id, res);
            $(dom).append(html);
            // console.log(html)
            if(fn){
                fn();
            }
        }
    })
}
