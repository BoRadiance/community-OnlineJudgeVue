<template>
    <div class="container">
      <div class="row">
        <div class="col-md-12 ">
          <textarea  rows="6" placeholder="来说几句吧......" class="mytextarea" id="content"></textarea>
        </div>
        <div class="col-md-12">
          <br>
          <div class="btn btn-info pull-right" id="comment">评论</div>
        </div>
      </div>

      <hr>

      <div class="row">
        <div class="col-md-12">
          <div class="comment-list">
              <div class="comment-info">
                <header>
                  <img src="../../.idea/img/author-main1.jpg" alt="">
                </header>
                <div class="comment-right">
                    <h4>波波</h4>
                  <div class="comment-content-header"><span><i class="glyphicon glyphicon-time"></i>2017-10-17 11:42:53</span>
                  </div>
                  <p class="content">到菜市场买菜，看到一个孩子在看摊，我问：“一只鸡多少钱？” 那孩子回答：“23。” 我又问：“两只鸡多少钱？” 孩子愣了一下，一时间没算过来，急中生智大吼一声：“一次只能买一只！”</p>

                  <div class="comment-content-footer">
                    <div class="row">
                      <div class="col-md-2" @click="reply"><span class="reply-btn">回复</span></div>
                    </div>
                  </div>

                  <div class="reply-list">
                    <div class="reply">
                      <div>
                        <a href="javascript:void(0)" class="replyname">帅大叔</a>:
                        <a href="javascript:void(0)">@匿名</a>
                        <span>来啊，我们一起吃鸡</span>
                      </div>
                      <p>
                        <span>2017-10-17 11:42:53</span>
                        <span class="reply-list-btn" @click="reply">回复</span>
                      </p>
                    </div>
                    <div class="reply">
                      <div>
                        <a href="javascript:void(0)" class="replyname">帅大叔</a>:
                        <a href="javascript:void(0)">@匿名</a>
                        <span>来啊，我们一起吃鸡</span>
                      </div>
                      <p>
                        <span>2017-10-17 11:42:53</span>
                        <span class="reply-list-btn">回复</span>
                      </p>
                    </div>


                  </div>

                </div>

              </div>
          </div>
        </div>



      </div>


      <el-dialog
        title="回复谁"
        :visible.sync="dialogVisible"
        width="100%">
        <textarea  rows="6" placeholder="来说几句吧......" class="mytextarea" ></textarea>


        <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="UpdateTagInfo">发 送</el-button>
  </span>
      </el-dialog>


    </div>
</template>

<script>
    export default {
        name: "test2",
      data(){
          return{
            dialogVisible: false,
            replaytoname:'',

          }
      },

      methods:{
        reply(){
          this.dialogVisible = !this.dialogVisible
        },






      },

      created() {

      },
    }
</script>

<style scoped>
  .reply-btn ,.reply-list-btn{

    border: 1px;
  }
  .comment-list .comment-info .comment-right .reply-list .reply p span {
    padding-right: 2em;
    color: #aaa;
  }
  a {
    color: #337ab7;
    text-decoration: none;
  }
  .mytextarea{
    width: 100%;
  }
  .comment-list .comment-info header {
    width: 10%;
    position: absolute;
  }
  .comment-list .comment-info header img {
    width: 100%;
    border-radius: 50%;
    padding: 5px;
  }
  .comment-list .comment-info .comment-right {
    padding: 5px 0px 5px 11%;
  }
  .comment-list .comment-info .comment-right h4 {
    margin: 5px 0px;
  }
  .comment-list .comment-info .comment-right .comment-content-header {
    height: 25px;
  }

  .comment-list .comment-info .comment-right .reply-list {
    border-left: 3px solid #ccc;
    padding-left: 7px;
  }
  .comment-list .comment-info .comment-right .reply-list .reply {
    border-bottom: 1px dashed #ccc;
  }
  .comment-info{
    border-bottom: 3px dotted white;
  }

</style>
