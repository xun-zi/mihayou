// pages/aricle/comment/comment.ts
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        comment:{
            type:Object,
            value:{
                id:'',
                openid:'',
                avatarUrl:'',
                name:'',
                time:'',
                content:'',
                aim:'',
                replayAim:'',
                replayName:'',
                replayCnt:0
            }
        },
        comment2:{
            type:Array,
            value:[{
                id:'0',
                openid:'name',
                avatarUrl:'',
                name:'zsc',
                time:'2222',
                content:'2',
                aim:'2',
                replayAim:'2',
                replayName:'2',
                replayCnt:0
            }]
        }
    },
    lifetimes:{
        attached(){
            console.log(this.data);
            
        },
    },
    /**
     * 组件的初始数据
     */
    data: {

    },

    /**
     * 组件的方法列表
     */
    methods: {

    }
})
