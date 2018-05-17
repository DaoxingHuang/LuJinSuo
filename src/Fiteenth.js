//用最精简的方式把2s6,2d4et9uv4wa6ta 转换成　64942621
//方法一　正则表达式
"2s6,2d4et9uv4wa6ta".replace(/[^\d]/g,'').split('').reverse().join('')　
 //or
"2s6,2d4et9uv4wa6ta".split(/[^\d]/g).reverse().join('')

    //1.提取数字....value.replace(/[^\d]/g,'')
    //2.提取中文....value.replace(/[^\u4E00-\u9FA5]/g,'')
    //3.提取英文.....value.replace(/[^a-zA-Z]/g,'')
//方法二　
    for 循环　