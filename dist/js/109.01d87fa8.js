"use strict";(self["webpackChunkmy_project"]=self["webpackChunkmy_project"]||[]).push([[109],{9109:function(s,e,n){n.r(e),n.d(e,{default:function(){return w}});var t=n(3396),a=n(9242);const o=s=>((0,t.dD)("data-v-59ef60d2"),s=s(),(0,t.Cn)(),s),r={class:"bg"},i={class:"container"},l={class:"col-md-6 mt-5 login"},d=o((()=>(0,t._)("h1",{class:"h3 mb-3 font-weight-normal my-5"},"SIRA SWIM 後台登入",-1))),c={class:"mb-4"},u=o((()=>(0,t._)("label",{for:"inputEmail",class:"sr-only"},"Email address",-1))),p={class:"mb-4"},m=o((()=>(0,t._)("label",{for:"inputPassword",class:"sr-only"},"Password",-1))),h=o((()=>(0,t._)("div",{class:"text-end my-4"},[(0,t._)("button",{class:"btn btn-lg btn-primary btn-block",type:"submit"},"登入")],-1)));function b(s,e,n,o,b,f){const _=(0,t.up)("loadingTip");return(0,t.wg)(),(0,t.iD)(t.HY,null,[(0,t.Wm)(_,{active:b.isLoading},null,8,["active"]),(0,t._)("div",r,[(0,t._)("div",i,[(0,t._)("form",{class:"row justify-content-center pt-5",onSubmit:e[2]||(e[2]=(0,a.iM)(((...s)=>f.signIn&&f.signIn(...s)),["prevent"]))},[(0,t._)("div",l,[d,(0,t._)("div",c,[u,(0,t.wy)((0,t._)("input",{type:"email",id:"inputEmail",class:"form-control",placeholder:"Email address",required:"",autofocus:"","onUpdate:modelValue":e[0]||(e[0]=s=>b.user.username=s)},null,512),[[a.nr,b.user.username]])]),(0,t._)("div",p,[m,(0,t.wy)((0,t._)("input",{type:"password",id:"inputPassword",class:"form-control",placeholder:"Password",required:"","onUpdate:modelValue":e[1]||(e[1]=s=>b.user.password=s)},null,512),[[a.nr,b.user.password]])]),h])],32)])])],64)}var f={data(){return{user:{username:"",password:""},isLoading:!1}},methods:{signIn(){const s="https://vue3-course-api.hexschool.io/admin/signin";console.log(s),this.isLoading=!0,this.$http.post(s,this.user).then((s=>{if(s.data.success){const e=s.data.token,n=s.data.expired;document.cookie=`hexToken=${e}; expires=${new Date(n)}`,console.log(s),this.$router.push("/dashboard/products"),this.isLoading=!1}}))}}},_=n(89);const g=(0,_.Z)(f,[["render",b],["__scopeId","data-v-59ef60d2"]]);var w=g}}]);
//# sourceMappingURL=109.01d87fa8.js.map