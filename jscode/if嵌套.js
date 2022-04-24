var bianhao = parseInt(prompt("您想加什么油？请填写92或者97."));
var sheng = parseFloat(prompt("请填写您添加的油量（单位：升）"));
if(bianhao == 92){
    if(sheng >= 20){
        price = sheng * 5.9;
        prompt("价格为" + price);
    } else {
        var price = sheng * 6
        prompt = ("价格为" + price);
    }
}else if(bianhao = 97){
    if(sheng >= 30){
        let price = sheng * 6.95;
        prompt("价格为" + price);
    }else{
        price = sheng * 7;
        prompt("价格为" + price)
    }

} else {
    alert("不好意思，没有这个编号的汽油。")

}