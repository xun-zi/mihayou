// components/paceContent/paceContent.ts
import paceList from '../../image/pace/pace';

const paceSet = new Set(paceList);
type textToken = {
    type:'pace' | 'text',
    value:string,
}
const textToken:textToken[] = [];
const textHandle = (text:string) => {
    const res:textToken[] = [];
    while(1){
        const result = text.match(/\[([^\]]*)\]/);
        if(!result){
            res.push({
                type:'text',
                value:text
            });
            break;
        }

        if(result.index)res.push({
            type:'text',
            value:text.slice(0,result.index)
        });

        res.push({
            type:paceSet.has(result[1]) ? 'pace' : 'text',
            value:result[1]
        })

        text = text.slice((result.index || 0) + result[0].length);
        if(!text.length)break;
    }
    return res;
}

Component({
    /**
     * 组件的属性列表
     */
    properties: {
        text:{
            type:String,
            value:'',
        }
    },

    /**
     * 组件的初始数据
     */
    data: {
        textToken,
    },
    lifetimes:{
        attached(){
            const {text} = this.data;
            this.setData({
                textToken:textHandle(text)
            })
        }
    },
    /**
     * 组件的方法列表
     */
    methods: {

    }
})
