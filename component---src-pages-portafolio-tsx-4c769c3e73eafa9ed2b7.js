(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"40XI":function(e,a,t){t("8+KV"),t("FLlr"),t("2Spj");e.exports={ScrollMagicPluginGsap:function(e,a,t){var i=a,n="animation.gsap",r=window.console||{},o=Function.prototype.bind.call(r.error||r.log||function(){},r);e||o("("+n+") -> ERROR: The ScrollMagic main module could not be found. Please make sure it's loaded before this plugin or use an asynchronous loader like requirejs."),i||o("("+n+") -> ERROR: TweenLite or TweenMax could not be found. Please make sure GSAP is loaded before ScrollMagic or use an asynchronous loader like requirejs."),e.Scene.addOption("tweenChanges",!1,(function(e){return!!e})),e.Scene.extend((function(){var e,a=this,r=function(){a._log&&(Array.prototype.splice.call(arguments,1,0,"("+n+")","->"),a._log.apply(this,arguments))};a.on("progress.plugin_gsap",(function(){o()})),a.on("destroy.plugin_gsap",(function(e){a.removeTween(e.reset)}));var o=function(){if(e){var t=a.progress(),i=a.state();e.repeat&&-1===e.repeat()?"DURING"===i&&e.paused()?e.play():"DURING"===i||e.paused()||e.pause():t!=e.progress()&&(0===a.duration()?t>0?e.play():e.reverse():a.tweenChanges()&&e.tweenTo?e.tweenTo(t*e.duration()):e.progress(t).pause())}};a.setTween=function(n,l,s){var c;arguments.length>1&&(arguments.length<3&&(s=l,l=1),n=i.to(n,l,s));try{(c=t?new t({smoothChildTiming:!0}).add(n):n).pause()}catch(w){return r(1,"ERROR calling method 'setTween()': Supplied argument is not a valid TweenObject"),a}if(e&&a.removeTween(),e=c,n.repeat&&-1===n.repeat()&&(e.repeat(-1),e.yoyo(n.yoyo())),a.tweenChanges()&&!e.tweenTo&&r(2,"WARNING: tweenChanges will only work if the TimelineMax object is available for ScrollMagic."),e&&a.controller()&&a.triggerElement()&&a.loglevel()>=2){var m=i.getTweensOf(a.triggerElement()),u=a.controller().info("vertical");m.forEach((function(e,a){var t=e.vars.css||e.vars;if(u?void 0!==t.top||void 0!==t.bottom:void 0!==t.left||void 0!==t.right)return r(2,"WARNING: Tweening the position of the trigger element affects the scene timing and should be avoided!"),!1}))}if(parseFloat(i.version)>=1.14)for(var d,g,v=e.getChildren?e.getChildren(!0,!0,!1):[e],p=function(){r(2,"WARNING: tween was overwritten by another. To learn how to avoid this issue see here: https://github.com/janpaepke/ScrollMagic/wiki/WARNING:-tween-was-overwritten-by-another")},f=0;f<v.length;f++)d=v[f],g!==p&&(g=d.vars.onOverwrite,d.vars.onOverwrite=function(){g&&g.apply(this,arguments),p.apply(this,arguments)});return r(3,"added tween"),o(),a},a.removeTween=function(t){return e&&(t&&e.progress(0).pause(),e.kill(),e=void 0,r(3,"removed tween (reset: "+(t?"true":"false")+")")),a}}))}}},S75j:function(e,a,t){"use strict";t.r(a);var i=t("q1tI"),n=t.n(i),r=t("zSlN"),o=t("nOaX"),l=t("z/o8"),s=t("pc+1"),c=t("40XI"),m=t("IP2g"),u=t("wHSu"),d=t("plVc"),g=t.n(d);l.b.registerPlugin(o.b);a.default=function(){Object(i.useEffect)((function(){Object(c.ScrollMagicPluginGsap)(r,l.a,s.d);var e=window.innerHeight,a=window.innerWidth,t=new r.Controller,i=(new s.d).to("#porfolioAnim",.5,{left:-a/3-a});new r.Scene({triggerElement:"#porfolioAnim",duration:2.5*e,offset:0,triggerHook:0}).setTween(i).setPin("#porfolioAnim").addTo(t)}),[]);var e=function(e){(new s.d).to("#"+e+"Page black",{width:"100vw"}).play()},a=function(e,a){console.log("exit");for(var t=document.getElementsByClassName("servicio"),i=0;i<t.length;i++)t[i].id!==e+"Servicios"&&(t[i].classList.remove("adelante"),t[i].classList.add("atras"));var n=window.innerWidth;(new s.d).to("#"+e+"Servicios",1,{width:"100vw"},"anim").to("#"+e+"Servicios h1",{fontSize:"4vw",top:"75%"},"anim").to("#porfolioAnim",1,{left:-n/3*a},"anim").play()};return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{id:"portafolio"},n.a.createElement("div",{id:"porfolioAnim",className:"servicios"},n.a.createElement(g.a,{id:"automatizacionServicios",className:"servicio adelante",to:"/servicios/automatizacion",exit:{trigger:function(){return a("automatizacion",0)},length:2},entry:{delay:2,trigger:function(){return e("automatizacion")}}},n.a.createElement("div",{className:"black"}),n.a.createElement("img",{src:"../automatizacionP.jpg"}),n.a.createElement("h1",{className:"titulo"},"Automatizacíon industrial")),n.a.createElement(g.a,{id:"energiaServicios",className:"servicio adelante",to:"/servicios/energia",exit:{trigger:function(){return a("energia",1)},length:2},entry:{delay:2,trigger:function(){return e("energia")}}},n.a.createElement("div",{className:"black"}),n.a.createElement("img",{src:"../energiaP.jpg"}),n.a.createElement("h1",{className:"titulo"},"Energias renovables")),n.a.createElement(g.a,{id:"industrialServicios",className:"servicio adelante",to:"/servicios/industrial",exit:{trigger:function(){return a("industrial",2)},length:2},entry:{delay:2,trigger:function(){return e("industrial")}}},n.a.createElement("div",{className:"black"}),n.a.createElement("img",{src:"../industrialP.jpg"}),n.a.createElement("h1",{className:"titulo"},"Diseño industrial")),n.a.createElement("div",{id:"ergonomiaServicios",className:"servicio adelante",onClick:function(){return a("ergonomia",3)}},n.a.createElement("div",{className:"black"}),n.a.createElement("img",{src:"../ergonomiaP.jpg"}),n.a.createElement("h1",{className:"titulo"},"Elevacion ergonomia")),n.a.createElement("div",{className:"servicio"},n.a.createElement("div",{className:"black"}),n.a.createElement("img",{src:"../basculasP.jpg"}),n.a.createElement("h1",{className:"titulo"},"Basculas camioneras")),n.a.createElement("div",{className:"servicio"},n.a.createElement("div",{className:"black"}),n.a.createElement("img",{src:"../softwareP.jpg"}),n.a.createElement("h1",{className:"titulo"},"Desarrollo de software")),n.a.createElement("div",{className:"servicio"},n.a.createElement("div",{className:"black"}),n.a.createElement("img",{src:"../solucionesP.jpg"}),n.a.createElement("h1",{className:"titulo"},"Soluciones inovadoras")))),n.a.createElement(m.a,{id:"flecha",icon:u.c}))}}}]);
//# sourceMappingURL=component---src-pages-portafolio-tsx-4c769c3e73eafa9ed2b7.js.map