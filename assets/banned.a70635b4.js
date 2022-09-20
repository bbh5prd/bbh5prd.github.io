import{_ as h,k as b,d as p,b as i,m as n,t as f,w as c,r as o,o as a,F as M,x as _,u as v,v as L,a as I}from"./index.6ba046f5.js";import{M as y}from"./memberItem.986d76ac.js";import"./avatar.3c9bf6f2.js";import"./roleTag.96e5e000.js";const $={name:"banned",components:{MemberItem:y},computed:{groupInfo(){var e;return(e=this.$store.state)==null?void 0:e.group}},data(){return{groupMemberList:[],bannedTotalMembers:0,loading:!1,finished:!1,error:!1,pageSize:1,pageNumber:1}},mounted(){this.init()},methods:{getRole(e){return this.$store.state.group.providers.includes(e)?2:this.$store.state.group.managers.includes(e)?1:0},async init(){this.loading=!1,this.finished=!1,this.error=!1,this.pageSize=20,this.pageNumber=1;try{this.$store.state.group.groupId||await this.$store.dispatch("getGroupDetail",this.$route.params.groupId),await this.getMemberList()}catch(e){console.log(e)}},async getMemberList(){this.loading=!0;try{let e=this.groupInfo.groupId;if(!e)return;let t=await b.groupMember.getMemberList(e,this.pageSize,this.pageNumber,[1,2]);this.pageNumber==1&&(this.groupMemberList=[]),t.status==1?(this.bannedTotalMembers=t.data.total,this.groupMemberList=this.groupMemberList.concat(t.data.list),t.data.list.length<this.pageSize||this.groupMemberList.length>=this.groupInfo.totalMembers?this.finished=!0:(this.pageNumber++,console.log(this.pageNumber))):this.error=!0}catch{this.error=!0}finally{setTimeout(()=>{this.loading=!1},1e3)}}}},w={class:"banned"},N={class:"member-box"},k={class:"member-number"};function S(e,t,x,z,r,l){const u=o("van-nav-bar"),m=o("MemberItem"),d=o("van-empty"),g=o("van-list");return a(),p("div",w,[i("div",null,[n(u,{"left-arrow":"",onClickLeft:t[0]||(t[0]=s=>e.$router.push({name:"GroupDetail",params:{groupId:e.$route.params.groupId}})),fixed:"","safe-area-inset-top":"","z-index":"2",title:e.$t("banList")},null,8,["title"])]),i("div",N,[i("div",k,f(`${e.$t("groupMembers")}(${r.bannedTotalMembers})`),1),n(g,{loading:r.loading,"onUpdate:loading":t[1]||(t[1]=s=>r.loading=s),offset:"100","loading-text":e.$t("loading"),finished:r.finished,"finished-text":e.$t("noMore"),error:r.error,"onUpdate:error":t[2]||(t[2]=s=>r.error=s),onLoad:l.getMemberList,"immediate-check":!1},{default:c(()=>[(a(!0),p(M,null,_(r.groupMemberList,(s,D)=>(a(),I(m,{groupMemberItem:s,role:l.getRole(e.$store.state.user.userAddress),userRole:e.$store.state.user.role},null,8,["groupMemberItem","role","userRole"]))),256)),v(n(d,{class:"empty",description:e.$t("emptyData")},null,8,["description"]),[[L,r.groupMemberList&&r.groupMemberList.length===0&&!r.loading]])]),_:1},8,["loading","loading-text","finished","finished-text","error","onLoad"])])])}const F=h($,[["render",S],["__scopeId","data-v-b09d8420"]]);export{F as default};
