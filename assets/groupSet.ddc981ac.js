import{_ as I,k as d,d as $,b as r,m as a,w as g,r as n,o as v,ae as _,y as k,t as l}from"./index.6ba046f5.js";import{E as y}from"./editAvatar.2ba56450.js";const b={name:"GroupSet",components:{EditAvatar:y},setup(){return{formatterSpace:o=>o.trim()}},watch:{"$store.state.authorization"(){this.init()},"$store.state.group.groupId"(){console.log(2222),this.initGroupInfo()},"$store.state.group.image"(){this.groupInfo.image=this.$store.state.group.image},"groupInfo.nickname"(t){t!==this.$store.state.group.nickname&&(this.isEdit=!0)},"groupInfo.description"(t){t!==this.$store.state.group.description&&(this.isEdit=!0)}},data(){return{timer:null,isEdit:!1,groupInfo:{},updateLogoLoading:!1}},mounted(){this.$store.state.group.groupId||(this.isEdit=!1,this.init()),console.log(111),this.initGroupInfo()},methods:{initGroupInfo(){this.groupInfo={groupId:this.$store.state.group.groupId,image:this.$store.state.group.image,address:this.$store.state.group.address,nickname:this.$store.state.group.nickname,description:this.$store.state.group.description}},async init(){try{await this.$store.dispatch("getGroupDetail",this.$route.params.groupId)}catch(t){console.log(t)}},async uoloadImg(t){if(this.updateLogoLoading)return;let o=this.$toast.loading({message:"Loading...",forbidClick:!0,duration:0});this.updateLogoLoading=!0;try{(await d.group.updateLogo(this.groupInfo.groupId,t)).status==1&&(console.log(222),await this.init())}catch(e){console.log(e)}finally{o.clear(),this.tipVisable=!1,this.updateLogoLoading=!1}},async submit(){if(!this.isEdit)return;let t=this.groupInfo.nickname,o=this.$toast.loading({message:"Loading...",forbidClick:!0,duration:0});try{let e=await d.group.updateInfo(this.groupInfo.groupId,t,this.groupInfo.description);console.log(e),e.status==1&&(console.log("success"),await this.init(),this.$router.push({name:"GroupDetail",params:{groupId:this.$route.params.groupId}}))}catch(e){console.log(e)}finally{o.clear()}console.log(this.groupInfo)}}},w={class:"group-set"},L={class:"set-content"},E={class:"form-item"},S={class:"form-item"};function G(t,o,e,m,s,u){const f=n("van-nav-bar"),c=n("EditAvatar"),p=n("van-field"),h=n("van-form");return v(),$("div",w,[r("div",null,[a(f,{"left-text":t.$t("cancel"),onClickLeft:o[1]||(o[1]=i=>t.$router.push({name:"GroupDetail",params:{groupId:t.$route.params.groupId}})),fixed:"","safe-area-inset-top":"","z-index":"2",title:t.$t("groupSettings")},{right:g(()=>[r("span",{class:"finish",onClick:o[0]||(o[0]=_(i=>t.$refs.form.submit(),["stop"])),style:k({color:s.isEdit?"#9505f9":"#999"})},l(t.$t("done")),5)]),_:1},8,["left-text","title"])]),r("div",L,[a(c,{image:s.groupInfo.image,defaultImg:t.$f.formatIcon(t.$route.params.groupId),address:s.groupInfo.address,onGetImgFile:u.uoloadImg},null,8,["image","defaultImg","address","onGetImgFile"]),a(h,{class:"form-box",ref:"form",onSubmit:u.submit},{default:g(()=>[r("div",E,[r("label",null,l(t.$t("groupNickname")),1),a(p,{modelValue:s.groupInfo.nickname,"onUpdate:modelValue":o[2]||(o[2]=i=>s.groupInfo.nickname=i),formatter:m.formatterSpace,maxlength:"30",placeholder:t.$t("groupNickname"),rules:[{required:!0,message:t.$t("enterGroupNickname")}]},null,8,["modelValue","formatter","placeholder","rules"])]),r("div",S,[r("label",null,l(t.$t("description")),1),a(p,{modelValue:s.groupInfo.description,"onUpdate:modelValue":o[3]||(o[3]=i=>s.groupInfo.description=i),rows:"3",autosize:"",type:"textarea",maxlength:"500",placeholder:t.$t("description"),"show-word-limit":""},null,8,["modelValue","placeholder"])])]),_:1},8,["onSubmit"])])])}const N=I(b,[["render",G],["__scopeId","data-v-a74df46f"]]);export{N as default};
