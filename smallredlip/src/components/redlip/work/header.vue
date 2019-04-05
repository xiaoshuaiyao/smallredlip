<template>
  <div class="header">
     <div class="header_top">
              <div class="header_top_bg">
                   <img src="https://wicdn.xiaohongchun.com/28635e20417511e880ac5fae1be27040.jpg-avatars3x.jpg" alt="">
              </div>
              <div class="bg_img">
              </div>
              <div class="header_top_show">
                      <div class="header_top_show_top">
                            <div class="left">
                                <span>{{count}}</span>
                                <span>{{follow}}</span>
                            </div>
                            <div class="center">
                              <img src="https://wicdn.xiaohongchun.com/28635e20417511e880ac5fae1be27040.jpg-avatars3x.jpg" alt="">
                            </div>
                            <div class="right">
                                <span>{{number}}</span>
                                <span>{{bean}}</span>
                            </div>
                      </div>
                      <div class="header_top_show_bottom">
                              <p>{{nickname}}</p>
                           <div class="button">{{add}}</div>
                      </div>
                      <div>
                      </div>
              </div>
              <div class="bozhu">
                    <h3>{{bozhu}}</h3>
              </div>
             
     </div>
  </div>
  
</template>

<script>
export default {
  name: 'Header',
  data(){
    return{
      count:"38",
      follow:"关注",
      number:"102598",
      bean:"粉丝",
      nickname:"米儿姐姐",
      add:"+关注",
      bozhu:"护肤、美妆、穿搭博主|爱拍视频"

    }
  }
 
}
</script>


<style scoped lang="scss">
      .header{
        margin-top: .9rem;
        position: relative;        
      }
      .header_top_bg{
        width:7.5rem;
        height: 4.5rem; 
        img{
          position: absolute;
          left: -1.25rem;
          top: -5.5rem;
          width: 10rem;
          height: 10rem;
          border-radius: 50%;
        }
      }
      .bg_img{
        width:10rem;
        height: 10rem; 
        position: absolute;
        left: -1.25rem;
          top: -5.5rem;
        background: gray;
        opacity: .7;
        border-radius: 50%;
      }
      .header_top_show{               
        position: absolute;
        left: 0;
        top: 0;
        width: 7.5rem;
        height: 4.5rem;
        .header_top_show_top{
           display: flex;
           justify-content: space-around;
           align-items: center;
          position:absolute;
          bottom: .8rem;
          left: 1rem;
         margin:0 auto;
         width: 5.5rem;
         height: 1.4rem;
        }
      }
      .center>img{
          width: 1.2rem;
          height: 1.2rem;
      }
      .left>span{
        display: block;
        font-size: .32rem;
        font-weight: bolder;
        color: #fff;       
      }
      .right>span{
          display: block;
        font-size: .32rem;
        font-weight: bolder;
        color: #fff;    
      }
      .header_top_show_bottom{
        width: 1.8rem;
        height: .46rem;
        margin: 0 auto;
        position: relative;
        p{     
          position: absolute;
          font-size:.3rem;
          color: #fff;
          font-weight: bolder;
           top: 3.6rem;
        }
      }
      .button{
        width: 1.3rem;
        height: .5rem;
        background: #ff3167;
        border-radius:.5rem;
        position: absolute;
        top: 4.3rem;
        color: #fff;
        font-size: .24rem;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .bozhu{
       
        padding-top: .5rem;
        margin: 0 auto;
        text-align: center;
        h3{
             color: #222;
             font-size: 12px;
             font-weight: 400;
        }
      }
</style>
