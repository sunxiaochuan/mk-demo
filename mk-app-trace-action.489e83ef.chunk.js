webpackJsonp([19],{2108:function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r,c,o=n(2),a=i(o),u=n(53),f=i(u),s=n(5),d=i(s),l=n(11),h=i(l),p=n(6),_=i(p),m=n(7),g=i(m),v=n(0),A=(i(v),n(301)),w=n(809),S=i(w),k=(r=(0,A.wrapper)(S.default))(c=function(t){function e(){return(0,d.default)(this,e),(0,_.default)(this,(e.__proto__||(0,f.default)(e)).apply(this,arguments))}return(0,g.default)(e,t),(0,h.default)(e,[{key:"render",value:function(){return this.props.monkeyKing((0,a.default)({},this.props,{path:"root"}))}}]),e}(v.Component))||c;e.default=k,t.exports=e.default},2109:function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}function r(t){var e=new h.action(t),n=new v((0,f.default)({},t,{metaAction:e})),i=(0,f.default)({},e,n);return e.config({metaHandlers:i}),i}Object.defineProperty(e,"__esModule",{value:!0});var c,o,a,u=n(2),f=i(u),s=n(5),d=i(s);e.default=r;var l=n(0),h=(i(l),n(70),n(301)),p=n(707),_=i(p),m=n(714),g=i(m),v=(o=c=function t(e){(0,d.default)(this,t),a.call(this),this.metaAction=e.metaAction,this.config=_.default.current},a=function(){var t=this;this.onInit=function(e){var n=e.component,i=e.injections;t.component=n,t.injections=i,i.reduce("init",{tracing:window.__mk_record_action__})},this.tracing=function(){var e=!t.metaAction.gf("data.tracing");window.__mk_record_action__=e,t.metaAction.sf("data.tracing",e)},this.refresh=function(){t.component.forceUpdate()},this.actions=function(){return t.actions=window.__mk_actions__,t.actions},this.diff=function(){t.getDiff()},this.getDiff=function(){if(t.currentAction){var e=t.currentAction.oldState.toJS(),n=t.currentAction.newState.toJS();delete e["@@require"],delete n["@@require"];return{__html:g.default.diffHtml(e,n)}}},this.rowClick=function(e,n){var i=t.actions[n];t.currentAction!=i&&(t.currentAction=i,t.component.forceUpdate())},this.getCellClassName=function(e){return t.currentAction==t.actions[e]?"mk-app-trace-action-content-cell mk-app-trace-action-content-selectrow":"mk-app-trace-action-content-cell"},this.getCurrentAction=function(){return t.currentAction},this.getOldState=function(){if(t.currentAction){var e=t.currentAction.oldState.toJS();return delete e["@@require"],e}},this.getNewState=function(){if(t.currentAction){var e=t.currentAction.newState.toJS();return delete e["@@require"],e}},this.isSelectAll=function(){if(t.actions&&0!=t.actions.length)return t.actions.every(function(t){return t.selected})},this.selectAll=function(e){t.actions&&0!=t.actions.length&&(t.actions.forEach(function(t){t.selected=e.target.checked}),t.component.forceUpdate())},this.rowSelectedChange=function(e,n){t.actions&&0!=t.actions.length&&(t.actions[n.rowIndex].selected=e.target.checked,t.component.forceUpdate())}},o);t.exports=e.default},2110:function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}function r(t){var e=new l.reducer(t),n=new m((0,f.default)({},t,{metaReducer:e}));return(0,f.default)({},e,n)}Object.defineProperty(e,"__esModule",{value:!0});var c,o,a,u=n(2),f=i(u),s=n(5),d=i(s);e.default=r;var l=(n(70),n(301)),h=n(707),p=i(h),_=n(810),m=(o=c=function t(e){(0,d.default)(this,t),a.call(this),this.metaReducer=e.metaReducer,this.config=p.default.current},a=function(){var t=this;this.init=function(e,n){var i=(0,_.getInitState)();return i.data.tracing=n.tracing,t.metaReducer.init(e,i)},this.selectAll=function(e,n){var i=t.metaReducer.gf(e,"data.actions");if(!i||0==i.size)return e;for(var r=0;r<i.size;r++)e=t.metaReducer.sf(e,"data.actions."+r+".selected",n);return e}},o);t.exports=e.default}});