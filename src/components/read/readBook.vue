<template>
  <div class="readText-container" @click="setRead($event)" @touchstart="touchClick($event)"
       @touchend="touchRelease($event)" v-show="patternIndex==1">
    <section class="read-section" ref="myRef">
      <div class="read-section-inner" :style="{columns:50+'vw',columnGap:10+'vw'}">
        <h1 class="book-title" :style="{fontSize:fontSize.titleFont*0.8+'vw'}">第一章 阴阳诡异</h1>
        <div class="book-inner" :style="{fontSize:fontSize.contentFont*0.8+'vw'}" v-html="contentText"></div>
      </div>
    </section>
  </div>
  <div class="readText-container1" @click="setRead($event)" v-show="patternIndex==0">
    <section class="read-section">
      <div class="read-section-inner">
        <h1 class="book-title" :style="{fontSize:(fontSize.titleFont)*0.8+'vw'}">第一章 阴阳诡异</h1>
        <div class="book-inner" :style="{fontSize:(fontSize.contentFont)*0.8+'vw'}" v-html="contentText"></div>
      </div>
    </section>
  </div>
  <!--  <div><span style="z-index: 2">{{currentPaging}}/{{resultPaging}}</span></div>-->
</template>
<script lang="ts">
import {defineComponent, ref, reactive} from "vue";
import {Toast} from "vant";
// import number from "async-validator/dist-types/validator/number";
export default defineComponent({
  props: ['fontSize', 'resultPaging', 'currentPaging', 'patternIndex'],
  setup(props, conText) {
    let contentText = ref('一间小木屋内。\n' +
        '“嘶……”\n' +
        '林辰倒吸一口冷气，头部传来剧烈的疼痛，好似刚刚被人敲了一记闷棍，他想要睁开眼，却感觉眼皮像山一样重。\n' +
        '“怎么回事？明明刚才我还在练拳，难道有人暗中对我下手？”\n' +
        '突然，繁杂混乱的记忆从脑海深处涌出，林辰微微恍惚，脑袋像是一团被搅乱的浆糊，眩晕无比。\n' +
        '感觉过了十几年，又好像仅仅过了一瞬间，林辰脑海中的记忆慢慢平复下去。\n' +
        '感受着脑海内突然多出来的记忆，林辰有些难以置信。\n' +
        '自己居然从现代社会穿越到了另一个世界！\n' +
        '“没想到，这个家伙也叫林辰。”林辰心中讶然。\n' +
        '这是一个武道为尊的世界，两年前，林辰依靠家族关系，进入雁南域最大宗门之一的天极宗，成为一名外门弟子。\n' +
        '可惜，他的武学天赋实在一般，从六岁开始修炼，现在已经十五岁，整整九年，仅从炼体境第一重初期修炼到炼体境第四重后期。\n' +
        '虽然天赋平平，但林辰没有放弃，也没有丝毫松懈。\n' +
        '特别是在拜入天极宗，成为外门弟子后，他修炼的更加刻苦，一心想要晋升为内门弟子，朝更高的武道之路攀登。\n' +
        '三天前，林辰领取宗门每月发放的两瓶培元液时，遇到了一群恃强凌弱的弟子，威逼林辰交出一瓶培元液。林辰不愿意交出，和对方发生了争执。\n' +
        '原本林辰的实力在外门弟子中也是较低的，何况对方人数又多，最终林辰被一顿暴打，拖着重伤的身体回到住所，服用疗伤药。\n' +
        '三天过去，林辰身上的外伤倒没什么，只是脑袋上挨了一记闷棍，一直昏昏沉沉，最终不知为何，让现代的林辰来到这里，占据了这具身体。\n' +
        '将记忆理顺之后，林辰微微摇头：“我这前身，倒也是个有毅力的家伙，只是有些迂腐，放心吧，这仇我一定会给你报的。”\n' +
        '话刚说完，脑海深处一缕记忆引起了他的注意。\n' +
        '“家族规定，十七岁之前尚未成为内门弟子，就必须返回家族，为家族打理生意？”林辰不禁皱眉。\n' +
        '“对我而言，还有一条，如果十七岁前不能成为内门弟子，则会被剥夺家主之位继承人的身份！”\n' +
        '原本的林辰，是真武城三大家族之一的林家家主之子。\n' +
        '虽然他的武道天赋实在一般，但确实是林家名正言顺的家主之位继承人。\n' +
        '只是，天灵大陆，武道为尊，一个弱者哪有资格成为武道家族的家主。\n' +
        '为了能让林辰在武道有所成就，他的父亲利用关系，将他送进了天极宗。\n' +
        '家族年轻一辈中的天才子弟，也都拜入了雁南域各大宗门。\n' +
        '在林辰记忆中，其中资质最佳的林熊和林雪，分别拜入纯阳门和苍龙谷。\n' +
        '而且，他们都已突破至炼体境之上的天罡境，早已是内门弟子，比林辰不知道强了多少倍。\n' +
        '林辰却不然，他的天赋资质皆是一般。虽然勤奋苦练，但天极宗内门弟子要求颇高，想要十七岁之前晋升为内门弟子，对原本的林辰而言极其困难。\n' +
        '天极宗弟子无数，外门弟子想要成为内门弟子，有两条路可走。\n' +
        '第一，在二十岁之前修为达到天罡境，即可成为内门弟子。\n' +
        '第二，便是闯天罗山秘境！成功闯过，则进入内门。失败，便只能等待下一次天罗山秘境开启。\n' +
        '只是天罗山秘境并不是想闯就能闯。\n' +
        '不满十六岁的外门弟子，需要五百贡献点，才能兑换一次闯天罗山秘境的机会。\n' +
        '超过十六岁，则要一千贡献点！\n' +
        '之后年龄每增加一岁，都需要多出五百贡献点！\n' +
        '林辰的前身，加入天极宗两年，每日除了必要的修炼之外，都在想办法赚取贡献点。\n' +
        '到如今，筹足的贡献点不过一百三十三点，距离兑换闯天罗山秘境一次机会所需的五百贡献点，还差三百六十七点。\n' +
        '“这林辰原本也是颇为老实，每次都交出一瓶培元液，这次之所以不肯交出培元液，是因为他很快就要十六岁了，如果不能在今年赚取满五百贡献点，等到明年，就需要整整一千贡献点才能兑换闯天罗山秘境的机会。”\n' +
        '“所以他想要服用两瓶培元液提升修为，能够赚取更多贡献点，在今年得到闯天罗山秘境的机会。”林辰融合了前身的记忆，自然明白前身的想法。\n' +
        '原本的林辰，虽然天赋一般，但对于武道却十分痴迷，进入天极宗后就一心一意的苦练不辍，想要晋升为内门弟子，追求更强大的武道之路。\n' +
        '“想不到，这家伙的性格与我倒是有几分相似。”\n' +
        '前世，林辰乃是神州大地赫赫有名的年轻武学宗师，内家拳高手，对武学的痴迷让他达到了一个巅峰，想要突破却没有机会。\n' +
        '此刻来到如此一个武学至上的世界，林辰如何能不兴奋？\n' +
        '也只有这种地方，才能让他大展身手！\n' +
        '“在天极宗，可以一心一意的追求武道，回到家族打理生意，就要处理各种各样的繁琐事情，肯定不利于修炼。”\n' +
        '“更重要的是，天极宗位于一座灵脉上，天地灵气浓郁无比，修炼起来事半功倍，而外面，却很少有这种灵气极为浓郁的地方。”\n' +
        '“至于家主之位，虽然也很重要，但无论前身，还是现在的我，反而没那么在意。”\n' +
        '虽然现在林辰还没有满十七岁，但也仅仅剩下两年时间，如果今年得不到闯天罗山秘境的机会，明年的难度就会更大。\n' +
        '如果两年都没能成功，那就只能回归家族，被剥夺家主继承人身份，成为打理家族生意的小执事，想要追逐武道，将会无比艰难……\n' +
        '这种情况，以前的林辰不愿接受，现在的林辰更不想看到。\n' +
        '“看来，当务之急是尽快筹足五百贡献点。”林辰自语道，“我这前身，耗费两年，筹足不到一百五十的贡献点，还是他冒着身死的危险进入墨莲山脉猎杀妖兽得来的。”\n' +
        '“想要快速筹足贡献点，唯有去宗门领取任务，进入墨莲山脉猎杀高阶妖兽。”\n' +
        '“现在距离天罗山秘境开启还有三个月，也就是说，在接下来三个月里，我必须尽快提升实力，猎杀高阶妖兽获取贡献点，然后闯过天罗山秘境……”\n' +
        '想到这里，林辰深深吸了口气，眼神有些兴奋。\n' +
        '前世，他苦炼武学二十载，一直琢磨如何将体内真气修炼出来，但奈何地球上，天地灵气稀薄，根本不适合修炼真气，无法突破武道巅峰。\n' +
        '而天灵大陆，天地灵气比前世浓郁不知多少倍！甚至，强大至移山填海，翻云覆雨的武学，都数不胜数。\n' +
        '“上一世，我能够在灵气稀薄的神州大地成为一代武学宗师，这一世，天灵大陆灵气充足，那么，我更要成为天灵大陆的巅峰强者！”\n' +
        '林辰眼中绽放出自信的光芒，闪闪发亮。\n' +
        '他双眼微闭，感受到丹田内那丝丝缕缕的真气，内心激动无比。\n' +
        '然而这时，脑袋之中猛地传来一阵嗡嗡之声，令他一时精神有些恍惚。\n' +
        '林辰闭目内视，只见在他脑海深处，一尊三足小鼎，凌空漂浮。\n' +
        '从小鼎内散发出淡淡的雾气，将整个脑域笼罩，似乎正在滋养着脑域。\n' +
        '“这小鼎……怎么会在我的脑海里？”看着脑海中的小鼎，林辰心中诧异无比。\n' +
        '脑海中漂浮着的小鼎，林辰并不陌生，这是他前世贴身佩戴一件饰物，乃是祖传之物。林辰练拳的时候，戴着这尊小鼎，有着让人平心静气的功效。\n' +
        '只是，这小鼎为何会随着自己穿越时空，还融入了自己的脑海之中？\n' +
        '小鼎中散发出的雾气越来越多，变得也越来越浓厚，片刻之后，雾气被脑域一点点吸收进去，每吸收一分，脑域就扩大一丝。\n' +
        '片刻之后，林辰睁开眼，感觉神清气爽！\n' +
        '双眸犹如星辰，眼前的一切变的更为清晰。\n' +
        '双耳也变得更加聪慧，甚至连相距很远的细微之声，也犹如近在耳边一样清楚听到。\n' +
        '脑袋一改之前的浑噩，变的无比灵动，无比轻快，感知也变得更加敏锐。\n' +
        '“这小鼎，似乎对我很有帮助！”\n' +
        '这三足小鼎的历史，林辰前世也并不清楚，因为对于练拳颇有助益，林辰一直是贴身佩戴。\n' +
        '此刻，三足小鼎散发出的雾气，正滋润林辰的脑域，壮大着林辰的灵魂，带来的好处无法言喻！\n' +
        '琢磨了半响，仍旧没弄清楚这是怎么回事，林辰索性不去想了，翻身下床，洗漱了一番，提剑来到院子里。\n' +
        '“三个月后便是闯天罗山秘境，我必须尽快提升实力。”\n' +
        '在林辰的记忆中，武道分数大境界。\n' +
        '其中，炼体境是第一个大境界，是打基础的上佳时期。\n' +
        '炼体境共分九重，一重炼皮，二重炼肉，三重炼筋，四重炼骨，五重炼髓，六重炼血，七重炼脏，八重炼精，九重炼气。\n' +
        '炼体境之上，便是天罡境。\n' +
        '院子里，林辰持剑伫立，口中自语道：“我的前身，进入天极宗后就一直练习七星连环剑，且已学会第一式至第六式，只是卡在了第七式上面，始终未能练成。”\n' +
        '“这七星连环剑共分七式，七式剑招施展起来，延绵不绝，练至大成，可释放出米长的剑气，威力奇大无比。曾经有天才弟子依靠七星连环剑释放出的强大剑气，击败高出自身两个小境界修为的人。前身一心想将这七星连环剑练至大成，作为闯天罗山秘境的依仗。”\n' +
        '林辰微微摇头，“闯天罗山秘境的大部分都是炼体境第七重第八重，甚至第九重的外门弟子，光凭这七星连环剑恐怕还不足以应付。”\n' +
        '林辰闭上眼睛，七星连环剑的施展心法图在脑海内闪过。\n' +
        '片刻之后，他的双眸骤然睁开，手中的精钢剑斜斜的刺出，七星连环剑第一式施展。\n' +
        '与以往的晦涩蹩脚不同，这一次，林辰施展起来动作轻灵，有一种浑然天成的感觉。\n' +
        '宛如水到渠成一般。\n' +
        '嗤！\n' +
        '一片落叶划过，被精钢剑劈成两半，发出轻微的细声。\n' +
        '林辰恍若未闻，仍旧施展着七星连环剑。\n' +
        '渐渐的，林辰所施展的七星连环剑脱离了束缚，动作越来越快，越来越灵活，宛如对此剑法了然如心，已然练习过数百上千遍。\n' +
        '第一式，第二式，第三式，……第六式，第七式！\n' +
        '当七星连环剑施展到第七式时，一道有近一米长的剑气从精钢剑中冲出，轰击在一块百斤重的巨石上。\n' +
        '轰！\n' +
        '巨石应声爆裂。\n' +
        '“竟练成了！”\n' +
        '收剑伫立，林辰的眼眸中闪过一抹喜悦之色，同时也有些难以置信：“前身一直未能练成的七星连环剑第七式，我只是练习一遍，居然就如此轻松的练成了？”\n' +
        '没有多想，林辰再次练习起来。\n' +
        '施展剑招越发娴熟，行云流水。\n' +
        '只是林辰没注意，在他练习七星连环剑的时候，他的身体微微发热，四周天地间的灵气，正在不知不觉的涌进他的身体之中。\n' +
        '啪啪啪！\n' +
        '一阵宛如炒豆般的声音响起，将正沉醉于练剑中的林辰唤醒过来。\n' +
        '“怎么回事？我的修为也突破了？”\n' +
        '林辰一愣，而后大喜起来。\n' +
        '在他练剑之际，修为竟是从炼体境第四重后期，突破到第四重巅峰！')
    let myRef: any = ref<HTMLElement>()
    let positionData = reactive({
      start: Number,
      end: Number,
    })
    let touchClick = (e: any) => {
      // console.log(e)
      positionData.start = e.changedTouches[0].clientX
    }
    let offset = ref(0)
    //触摸屏幕离开
    let touchRelease = (e: any) => {
      positionData.end = e.changedTouches[0].clientX
      if (positionData.end < positionData.start) {
        if (props.currentPaging == props.resultPaging) {
          return
        }
        conText.emit('touchRelease', 'left')
        // offset.value += myRef.value.clientWidth
        offset.value += 105
        myRef.value.style.transform = 'translateX(' + -(offset.value) + 'vw' + ')'
        myRef.value.style.transitionDuration = '0.5s'
      } else if (positionData.end > positionData.start) {
        if (props.currentPaging == 1) {
          Toast('第一页了');
          return
        }
        conText.emit('touchRelease', 'right')
        // offset.value -= myRef.value.clientWidth
        offset.value -= 105
        myRef.value.style.transform = 'translateX(' + -(offset.value) + 'vw' + ')'
        myRef.value.style.transitionDuration = '0.5s'
      }
      // console.log(e)
    }
    //点击屏屏幕翻页
    let setRead = ((e: any) => {
      let clWidth = document.documentElement.clientWidth || document.body.clientWidth
      let currentX = e.pageX
      let offsetX = clWidth / 3
      if (currentX <= offsetX) { //点击左侧三分之一
        if (props.currentPaging == 1) {
          Toast('第一页了');
          return
        }
        offset.value -= 105
        myRef.value.style.transform = 'translateX(' + -(offset.value) + 'vw' + ')'
        myRef.value.style.transitionDuration = '0.5s'
        conText.emit('touchRelease', 'right')
        conText.emit('setRead', 'left')
      } else if (offsetX <= currentX && currentX <= offsetX * 2) {//点击中间三分之一
        conText.emit('setRead', 'center')
      } else if (currentX >= offsetX * 2 && currentX <= clWidth) { //点击右侧三分之一
        if (props.currentPaging == props.resultPaging) {
          return
        }
        offset.value += 105
        myRef.value.style.transform = 'translateX(' + -(offset.value) + 'vw' + ')'
        myRef.value.style.transitionDuration = '0.5s'
        conText.emit('touchRelease', 'left')
        conText.emit('setRead', 'right')
      }
    })
    return {
      contentText,
      positionData,
      myRef,
      touchClick,
      touchRelease,
      setRead,
    }
  },
})
</script>
<style lang="stylus" scoped>
.readText-container
  position absolute
  overflow hidden
  padding 0 10px /*no*/
  text-align justify;
  bottom 5vw /*no*/
  top: 10vw /*no*/

  .read-section
    height 100%

    .read-section-inner
      overflow visible
      height 100%

      .book-inner
        line-height 10vw /*no*/
        text-indent 2em

      .book-title
        line-height 10px
        font-weight 400

.readText-container1
  overflow-y scroll
  padding 0 10px /*no*/
  text-align justify;

  .read-section
    height 100%

    .read-section-inner
      overflow visible
      height 190vw

      .book-inner
        line-height 10vw /*no*/
        text-indent 2em

      .book-title
        line-height 10px
        font-weight 400
</style>