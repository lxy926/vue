<template>
    <div class="cmt-container">
        <h3>发表评论</h3>
        <textarea placeholder="请输入要评论的内容(最多吐槽120字)" v-model="msg"></textarea>
        <mt-button type="primary" size="large" @click="postComment">发表评论</mt-button>

        <div class="cmt-list">
            <div class="cmt-item" v-for="(item,i) in comments" :key="i">
                <div class="cmt-title">
                    第{{ i+1 }}楼&nbsp;&nbsp;用户:{{ item.user_name }}&nbsp;&nbsp;发表时间:{{ item.add_time | deteFormat }}
                </div>
                <div class="cmt-body">
                    {{ item.content == 'undefined' || '' ? '这个用户很懒，啥都没说' : item.content }}
                </div>
            </div>
        </div>
        

        <mt-button type="danger" size="large" plain @click="getMore">点击加载</mt-button>
    </div>
</template>

<script>
import { Toast } from "mint-ui"
export default {
    data() {
        return {
            pageindex:1,   //默认展示第一页数据
            comments : [],
            msg:""
        }
    },
    created() {
        this.getComment();
    },
    methods:{
        getComment() {
            this.$http.get('api/getcomments/'+ this.id + '?pageindex='+ this.pageindex).then(function(result){
                if(result.body.status === 0){
                    // this.comments = result.body.message
                    //每当获取新数据的时候 不要把老数据清空
                    this.comments = this.comments.concat(result.body.message)
                }else {
                    Toast('获取评论失败')
                }
            })
        },
        getMore() {
            this.pageindex ++ ;
            this.getComment();
        },

        postComment() {
            if(this.msg.trim().length === 0) {
                return Toast('评论内容不能为空!')
            }

            this.$http.post('api/postcomment/' + this.$route.params.id, {content: this.msg.trim()}).then(function(result) {
                var cmt = {
                    user_name : "匿名用户",
                    add_time :new Date(),
                    content:this.msg.trim()
                }
                this.comments.unshift(cmt)
                this.msg = ""
            })
        }
    },
    props:["id"]
}
</script>

<style lang="scss" scoped>
    .cmt-container {
        h3{
            font-size: 18px;
        }
        textarea {
            font-size: 14px;
            height: 85px;
            margin: 0;
        }
        .cmt-list {
            margin: 5px 0;
            .cmt-item{
                font-size: 13px;
                .cmt-title {
                    line-height: 30px;
                    background: #ccc;
                }
                .cmt-body {
                    line-height: 35px;
                    text-indent: 2em;
                }
            }
        }
    }
</style>