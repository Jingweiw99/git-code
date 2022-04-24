const arr1 = [
    {name: '王经伟', age: '23' },
    {name: '许嵩' , age:'28'}
];
//讲数组arr1中的name属性，存储到数组arr2中
const arr2 = arr1.map((item) => item.name);
// 将数组arr1中的name、age这两个属性，改一下键的名字，存储到arr3中。
const arr3 = arr1.map((item) => ({
    myName:item.name,
    myAge:item,age,    
}));
console.log('arr1' +JSON.stringify(arr1));
console.log('arr2' + JSON.stringify(arr2));
console,log("arr3:" + JSON.stringify(arr3))
