// Compiled by ClojureScript 1.10.764 {:target :nodejs}
goog.provide('figwheel.core');
goog.require('cljs.core');
goog.require('figwheel.tools.heads_up');
goog.require('goog.object');
goog.require('goog.string');
goog.require('goog.string.format');
goog.require('goog.log');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('goog.debug.Console');
goog.require('goog.async.Deferred');
goog.require('goog.Promise');
goog.require('goog.events.EventTarget');
goog.require('goog.events.Event');
figwheel.core.distinct_by = (function figwheel$core$distinct_by(f,coll){
var seen = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentHashSet.EMPTY);
return cljs.core.filter.call(null,(function (p1__9661_SHARP_){
var k = f.call(null,p1__9661_SHARP_);
var res = cljs.core.not.call(null,cljs.core.deref.call(null,seen).call(null,k));
cljs.core._vreset_BANG_.call(null,seen,cljs.core.conj.call(null,cljs.core._deref.call(null,seen),k));

return res;
}),coll);
});
figwheel.core.map_keys = (function figwheel$core$map_keys(f,coll){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__9662){
var vec__9663 = p__9662;
var k = cljs.core.nth.call(null,vec__9663,(0),null);
var v = cljs.core.nth.call(null,vec__9663,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f.call(null,k),v], null);
})),coll);
});
figwheel.core._STAR_inline_code_message_max_column_STAR_ = (80);
figwheel.core.wrap_line = (function figwheel$core$wrap_line(text,size){
return cljs.core.re_seq.call(null,cljs.core.re_pattern.call(null,[".{1,",cljs.core.str.cljs$core$IFn$_invoke$arity$1(size),"}\\s|.{1,",cljs.core.str.cljs$core$IFn$_invoke$arity$1(size),"}"].join('')),[clojure.string.replace.call(null,text,/\n/," ")," "].join(''));
});
figwheel.core.cross_format = (function figwheel$core$cross_format(var_args){
var args__4742__auto__ = [];
var len__4736__auto___9667 = arguments.length;
var i__4737__auto___9668 = (0);
while(true){
if((i__4737__auto___9668 < len__4736__auto___9667)){
args__4742__auto__.push((arguments[i__4737__auto___9668]));

var G__9669 = (i__4737__auto___9668 + (1));
i__4737__auto___9668 = G__9669;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return figwheel.core.cross_format.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(figwheel.core.cross_format.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,goog.string.format,args);
}));

(figwheel.core.cross_format.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(figwheel.core.cross_format.cljs$lang$applyTo = (function (seq9666){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9666));
}));

figwheel.core.pointer_message_lines = (function figwheel$core$pointer_message_lines(p__9672){
var map__9673 = p__9672;
var map__9673__$1 = (((((!((map__9673 == null))))?(((((map__9673.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9673.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9673):map__9673);
var message = cljs.core.get.call(null,map__9673__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var column = cljs.core.get.call(null,map__9673__$1,new cljs.core.Keyword(null,"column","column",2078222095));
if(((column + cljs.core.count.call(null,message)) > figwheel.core._STAR_inline_code_message_max_column_STAR_)){
return cljs.core.mapv.call(null,(function (p1__9671_SHARP_){
return cljs.core.vec.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error-message","error-message",1756021561),null], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__9671_SHARP_], null)));
}),cljs.core.cons.call(null,figwheel.core.cross_format.call(null,(function (){var col = (column - (1));
return ["%",cljs.core.str.cljs$core$IFn$_invoke$arity$1((((col === (0)))?null:col)),"s%s"].join('');
})(),"","^---"),cljs.core.map.call(null,(function (p1__9670_SHARP_){
return figwheel.core.cross_format.call(null,["%",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.core._STAR_inline_code_message_max_column_STAR_),"s"].join(''),p1__9670_SHARP_);
}),figwheel.core.wrap_line.call(null,message,(figwheel.core._STAR_inline_code_message_max_column_STAR_ - (10))))));
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error-message","error-message",1756021561),null,figwheel.core.cross_format.call(null,(function (){var col = (column - (1));
return ["%",cljs.core.str.cljs$core$IFn$_invoke$arity$1((((col === (0)))?null:col)),"s%s %s"].join('');
})(),"","^---",message)], null)], null);
}
});
figwheel.core.inline_message_display_data = (function figwheel$core$inline_message_display_data(p__9676){
var map__9677 = p__9676;
var map__9677__$1 = (((((!((map__9677 == null))))?(((((map__9677.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9677.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9677):map__9677);
var message_data = map__9677__$1;
var message = cljs.core.get.call(null,map__9677__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var line = cljs.core.get.call(null,map__9677__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__9677__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var file_excerpt = cljs.core.get.call(null,map__9677__$1,new cljs.core.Keyword(null,"file-excerpt","file-excerpt",-1132330744));
if(cljs.core.truth_(file_excerpt)){
var map__9679 = file_excerpt;
var map__9679__$1 = (((((!((map__9679 == null))))?(((((map__9679.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9679.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9679):map__9679);
var start_line = cljs.core.get.call(null,map__9679__$1,new cljs.core.Keyword(null,"start-line","start-line",-41746654));
var path = cljs.core.get.call(null,map__9679__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var excerpt = cljs.core.get.call(null,map__9679__$1,new cljs.core.Keyword(null,"excerpt","excerpt",219850763));
var lines = cljs.core.map_indexed.call(null,(function (i,l){
var ln = (i + start_line);
return (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[((cljs.core._EQ_.call(null,line,ln))?new cljs.core.Keyword(null,"error-in-code","error-in-code",-1661931357):new cljs.core.Keyword(null,"code-line","code-line",-2138627853)),ln,l],null));
}),clojure.string.split_lines.call(null,excerpt));
var vec__9680 = cljs.core.split_with.call(null,(function (p1__9675_SHARP_){
return cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"error-in-code","error-in-code",-1661931357),cljs.core.first.call(null,p1__9675_SHARP_));
}),lines);
var begin = cljs.core.nth.call(null,vec__9680,(0),null);
var end = cljs.core.nth.call(null,vec__9680,(1),null);
return cljs.core.concat.call(null,cljs.core.take_last.call(null,(5),begin),cljs.core.take.call(null,(1),end),figwheel.core.pointer_message_lines.call(null,message_data),cljs.core.take.call(null,(5),cljs.core.rest.call(null,end)));
} else {
return null;
}
});
figwheel.core.file_line_column = (function figwheel$core$file_line_column(p__9684){
var map__9685 = p__9684;
var map__9685__$1 = (((((!((map__9685 == null))))?(((((map__9685.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9685.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9685):map__9685);
var file = cljs.core.get.call(null,map__9685__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__9685__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__9685__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__9687 = "";
var G__9687__$1 = (cljs.core.truth_(file)?[G__9687,"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__9687);
var G__9687__$2 = (cljs.core.truth_(line)?[G__9687__$1," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__9687__$1);
if(cljs.core.truth_((function (){var and__4115__auto__ = line;
if(cljs.core.truth_(and__4115__auto__)){
return column;
} else {
return and__4115__auto__;
}
})())){
return [G__9687__$2,", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__9687__$2;
}
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.core !== 'undefined') && (typeof figwheel.core.logger !== 'undefined')){
} else {
figwheel.core.logger = goog.log.getLogger("Figwheel");
}

figwheel.core.console_logging = (function figwheel$core$console_logging(){
if(cljs.core.truth_(goog.object.get(goog.debug.Console,"instance"))){
} else {
var c_9742 = (new goog.debug.Console());
var G__9694_9743 = c_9742.getFormatter();
goog.object.set(G__9694_9743,"showAbsoluteTime",false);

goog.object.set(G__9694_9743,"showRelativeTime",false);


goog.object.set(goog.debug.Console,"instance",c_9742);

}

var temp__5753__auto__ = goog.object.get(goog.debug.Console,"instance");
if(cljs.core.truth_(temp__5753__auto__)){
var console_instance = temp__5753__auto__;
console_instance.setCapturing(true);

return true;
} else {
return null;
}
});
goog.exportSymbol('figwheel.core.console_logging', figwheel.core.console_logging);

if((typeof figwheel !== 'undefined') && (typeof figwheel.core !== 'undefined') && (typeof figwheel.core.log_console !== 'undefined')){
} else {
figwheel.core.log_console = figwheel.core.console_logging.call(null);
}

figwheel.core.event_target = (((typeof document !== 'undefined'))?document:(new goog.events.EventTarget()));
goog.exportSymbol('figwheel.core.event_target', figwheel.core.event_target);

if((typeof figwheel !== 'undefined') && (typeof figwheel.core !== 'undefined') && (typeof figwheel.core.listener_key_map !== 'undefined')){
} else {
figwheel.core.listener_key_map = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}

figwheel.core.unlisten = (function figwheel$core$unlisten(ky,event_name){
var temp__5753__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.core.listener_key_map),ky);
if(cljs.core.truth_(temp__5753__auto__)){
var f = temp__5753__auto__;
return figwheel.core.event_target.removeEventListener(cljs.core.name.call(null,event_name),f);
} else {
return null;
}
});

figwheel.core.listen = (function figwheel$core$listen(ky,event_name,f){
figwheel.core.unlisten.call(null,ky,event_name);

figwheel.core.event_target.addEventListener(cljs.core.name.call(null,event_name),f);

return cljs.core.swap_BANG_.call(null,figwheel.core.listener_key_map,cljs.core.assoc,ky,f);
});

figwheel.core.dispatch_event = (function figwheel$core$dispatch_event(event_name,data){
return figwheel.core.event_target.dispatchEvent((function (){var G__9695 = (((figwheel.core.event_target instanceof goog.events.EventTarget))?(new goog.events.Event(cljs.core.name.call(null,event_name),figwheel.core.event_target)):(new Event(cljs.core.name.call(null,event_name),figwheel.core.event_target)));
goog.object.add(G__9695,"data",(function (){var or__4126__auto__ = data;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})());

return G__9695;
})());
});

figwheel.core.event_data = (function figwheel$core$event_data(e){
return goog.object.get((function (){var temp__5751__auto__ = e.event_;
if(cljs.core.truth_(temp__5751__auto__)){
var e__$1 = temp__5751__auto__;
return e__$1;
} else {
return e;
}
})(),"data");
});


/**
 * @define {boolean}
 */
figwheel.core.load_warninged_code = goog.define("figwheel.core.load_warninged_code",false);


/**
 * @define {boolean}
 */
figwheel.core.heads_up_display = goog.define("figwheel.core.heads_up_display",true);

if((typeof figwheel !== 'undefined') && (typeof figwheel.core !== 'undefined') && (typeof figwheel.core.state !== 'undefined')){
} else {
figwheel.core.state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),cljs.core.PersistentArrayMap.EMPTY], null));
}

figwheel.core.heads_up_display_QMARK_ = (function figwheel$core$heads_up_display_QMARK_(){
var and__4115__auto__ = figwheel.core.heads_up_display;
if(cljs.core.truth_(and__4115__auto__)){
return (!((goog.global.document == null)));
} else {
return and__4115__auto__;
}
});

var last_reload_timestamp_9744 = cljs.core.atom.call(null,(0));
var promise_chain_9745 = (new goog.Promise((function (r,_){
return r.call(null,true);
})));
figwheel.core.render_watcher = (function figwheel$core$render_watcher(_,___$1,o,n){
if(cljs.core.truth_(figwheel.core.heads_up_display_QMARK_.call(null))){
var temp__5751__auto__ = (function (){var temp__5753__auto__ = cljs.core.get_in.call(null,n,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"reload-started","reload-started",-1932451477)], null));
if(cljs.core.truth_(temp__5753__auto__)){
var ts = temp__5753__auto__;
if((cljs.core.deref.call(null,last_reload_timestamp_9744) < ts)){
return ts;
} else {
return false;
}
} else {
return null;
}
})();
if(cljs.core.truth_(temp__5751__auto__)){
var ts = temp__5751__auto__;
var warnings = cljs.core.not_empty.call(null,cljs.core.get_in.call(null,n,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"warnings","warnings",-735437651)], null)));
var exception = cljs.core.get_in.call(null,n,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"exception","exception",-335277064)], null));
cljs.core.reset_BANG_.call(null,last_reload_timestamp_9744,ts);

if(cljs.core.truth_(warnings)){
return promise_chain_9745.then((function (){
var warn = cljs.core.first.call(null,warnings);
var _STAR_inline_code_message_max_column_STAR__orig_val__9696 = figwheel.core._STAR_inline_code_message_max_column_STAR_;
var _STAR_inline_code_message_max_column_STAR__temp_val__9697 = (132);
(figwheel.core._STAR_inline_code_message_max_column_STAR_ = _STAR_inline_code_message_max_column_STAR__temp_val__9697);

try{return figwheel.tools.heads_up.display_warning.call(null,cljs.core.assoc.call(null,warn,new cljs.core.Keyword(null,"error-inline","error-inline",1073987185),figwheel.core.inline_message_display_data.call(null,warn))).then((function (){
var seq__9698 = cljs.core.seq.call(null,cljs.core.rest.call(null,warnings));
var chunk__9699 = null;
var count__9700 = (0);
var i__9701 = (0);
while(true){
if((i__9701 < count__9700)){
var w = cljs.core._nth.call(null,chunk__9699,i__9701);
figwheel.tools.heads_up.append_warning_message.call(null,w);


var G__9746 = seq__9698;
var G__9747 = chunk__9699;
var G__9748 = count__9700;
var G__9749 = (i__9701 + (1));
seq__9698 = G__9746;
chunk__9699 = G__9747;
count__9700 = G__9748;
i__9701 = G__9749;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq.call(null,seq__9698);
if(temp__5753__auto__){
var seq__9698__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9698__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__9698__$1);
var G__9750 = cljs.core.chunk_rest.call(null,seq__9698__$1);
var G__9751 = c__4556__auto__;
var G__9752 = cljs.core.count.call(null,c__4556__auto__);
var G__9753 = (0);
seq__9698 = G__9750;
chunk__9699 = G__9751;
count__9700 = G__9752;
i__9701 = G__9753;
continue;
} else {
var w = cljs.core.first.call(null,seq__9698__$1);
figwheel.tools.heads_up.append_warning_message.call(null,w);


var G__9754 = cljs.core.next.call(null,seq__9698__$1);
var G__9755 = null;
var G__9756 = (0);
var G__9757 = (0);
seq__9698 = G__9754;
chunk__9699 = G__9755;
count__9700 = G__9756;
i__9701 = G__9757;
continue;
}
} else {
return null;
}
}
break;
}
}));
}finally {(figwheel.core._STAR_inline_code_message_max_column_STAR_ = _STAR_inline_code_message_max_column_STAR__orig_val__9696);
}}));
} else {
if(cljs.core.truth_(exception)){
return promise_chain_9745.then((function (){
var _STAR_inline_code_message_max_column_STAR__orig_val__9702 = figwheel.core._STAR_inline_code_message_max_column_STAR_;
var _STAR_inline_code_message_max_column_STAR__temp_val__9703 = (132);
(figwheel.core._STAR_inline_code_message_max_column_STAR_ = _STAR_inline_code_message_max_column_STAR__temp_val__9703);

try{return figwheel.tools.heads_up.display_exception.call(null,cljs.core.assoc.call(null,exception,new cljs.core.Keyword(null,"error-inline","error-inline",1073987185),figwheel.core.inline_message_display_data.call(null,exception)));
}finally {(figwheel.core._STAR_inline_code_message_max_column_STAR_ = _STAR_inline_code_message_max_column_STAR__orig_val__9702);
}}));
} else {
return promise_chain_9745.then((function (){
return figwheel.tools.heads_up.flash_loaded.call(null);
}));

}
}
} else {
return null;
}
} else {
return null;
}
});

cljs.core.add_watch.call(null,figwheel.core.state,new cljs.core.Keyword("figwheel.core","render-watcher","figwheel.core/render-watcher",2046135910),figwheel.core.render_watcher);

figwheel.core.immutable_ns_QMARK_ = (function figwheel$core$immutable_ns_QMARK_(ns){
var ns__$1 = cljs.core.name.call(null,ns);
var or__4126__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, ["cljs.nodejs",null,"goog",null,"figwheel.connect",null,"cljs.core",null,"figwheel.preload",null], null), null).call(null,ns__$1);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return ((goog.string.startsWith("clojure.",ns__$1)) || (goog.string.startsWith("goog.",ns__$1)));
}
});

figwheel.core.ns_exists_QMARK_ = (function figwheel$core$ns_exists_QMARK_(ns){
return (!((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,ns),".")) == null)));
});

figwheel.core.reload_ns_QMARK_ = (function figwheel$core$reload_ns_QMARK_(namespace){
var meta_data = cljs.core.meta.call(null,namespace);
if(cljs.core.not.call(null,figwheel.core.immutable_ns_QMARK_.call(null,namespace))){
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_data))){
var or__4126__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_data);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_data);
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
return figwheel.core.ns_exists_QMARK_.call(null,namespace);
}
}
} else {
return false;
}
} else {
return false;
}
});

figwheel.core.call_hooks = (function figwheel$core$call_hooks(var_args){
var args__4742__auto__ = [];
var len__4736__auto___9758 = arguments.length;
var i__4737__auto___9759 = (0);
while(true){
if((i__4737__auto___9759 < len__4736__auto___9758)){
args__4742__auto__.push((arguments[i__4737__auto___9759]));

var G__9760 = (i__4737__auto___9759 + (1));
i__4737__auto___9759 = G__9760;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return figwheel.core.call_hooks.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(figwheel.core.call_hooks.cljs$core$IFn$_invoke$arity$variadic = (function (hook_key,args){
var hooks = cljs.core.keep.call(null,(function (p__9706){
var vec__9707 = p__9706;
var n = cljs.core.nth.call(null,vec__9707,(0),null);
var mdata = cljs.core.nth.call(null,vec__9707,(1),null);
var temp__5753__auto__ = cljs.core.get_in.call(null,mdata,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"figwheel-hooks","figwheel-hooks",720015356),hook_key], null));
if(cljs.core.truth_(temp__5753__auto__)){
var f = temp__5753__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,f], null);
} else {
return null;
}
}),new cljs.core.Keyword("figwheel.core","metadata","figwheel.core/metadata",-720139885).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,figwheel.core.state)));
var seq__9710 = cljs.core.seq.call(null,hooks);
var chunk__9711 = null;
var count__9712 = (0);
var i__9713 = (0);
while(true){
if((i__9713 < count__9712)){
var vec__9720 = cljs.core._nth.call(null,chunk__9711,i__9713);
var n = cljs.core.nth.call(null,vec__9720,(0),null);
var f = cljs.core.nth.call(null,vec__9720,(1),null);
var temp__5751__auto___9761 = cljs.core.reduce.call(null,((function (seq__9710,chunk__9711,count__9712,i__9713,vec__9720,n,f,hooks){
return (function (p1__9688_SHARP_,p2__9689_SHARP_){
if(cljs.core.truth_(p1__9688_SHARP_)){
return goog.object.get(p1__9688_SHARP_,p2__9689_SHARP_);
} else {
return null;
}
});})(seq__9710,chunk__9711,count__9712,i__9713,vec__9720,n,f,hooks))
,goog.global,cljs.core.map.call(null,cljs.core.str,cljs.core.concat.call(null,clojure.string.split.call(null,n,/\./),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [f], null))));
if(cljs.core.truth_(temp__5751__auto___9761)){
var hook_9762 = temp__5751__auto___9761;
goog.log.info(figwheel.core.logger,["Calling ",cljs.core.pr_str.call(null,hook_key)," hook - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join(''));

cljs.core.apply.call(null,hook_9762,args);
} else {
goog.log.warning(figwheel.core.logger,["Unable to find ",cljs.core.pr_str.call(null,hook_key)," hook - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join(''));
}


var G__9763 = seq__9710;
var G__9764 = chunk__9711;
var G__9765 = count__9712;
var G__9766 = (i__9713 + (1));
seq__9710 = G__9763;
chunk__9711 = G__9764;
count__9712 = G__9765;
i__9713 = G__9766;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq.call(null,seq__9710);
if(temp__5753__auto__){
var seq__9710__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9710__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__9710__$1);
var G__9767 = cljs.core.chunk_rest.call(null,seq__9710__$1);
var G__9768 = c__4556__auto__;
var G__9769 = cljs.core.count.call(null,c__4556__auto__);
var G__9770 = (0);
seq__9710 = G__9767;
chunk__9711 = G__9768;
count__9712 = G__9769;
i__9713 = G__9770;
continue;
} else {
var vec__9723 = cljs.core.first.call(null,seq__9710__$1);
var n = cljs.core.nth.call(null,vec__9723,(0),null);
var f = cljs.core.nth.call(null,vec__9723,(1),null);
var temp__5751__auto___9771 = cljs.core.reduce.call(null,((function (seq__9710,chunk__9711,count__9712,i__9713,vec__9723,n,f,seq__9710__$1,temp__5753__auto__,hooks){
return (function (p1__9688_SHARP_,p2__9689_SHARP_){
if(cljs.core.truth_(p1__9688_SHARP_)){
return goog.object.get(p1__9688_SHARP_,p2__9689_SHARP_);
} else {
return null;
}
});})(seq__9710,chunk__9711,count__9712,i__9713,vec__9723,n,f,seq__9710__$1,temp__5753__auto__,hooks))
,goog.global,cljs.core.map.call(null,cljs.core.str,cljs.core.concat.call(null,clojure.string.split.call(null,n,/\./),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [f], null))));
if(cljs.core.truth_(temp__5751__auto___9771)){
var hook_9772 = temp__5751__auto___9771;
goog.log.info(figwheel.core.logger,["Calling ",cljs.core.pr_str.call(null,hook_key)," hook - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join(''));

cljs.core.apply.call(null,hook_9772,args);
} else {
goog.log.warning(figwheel.core.logger,["Unable to find ",cljs.core.pr_str.call(null,hook_key)," hook - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join(''));
}


var G__9773 = cljs.core.next.call(null,seq__9710__$1);
var G__9774 = null;
var G__9775 = (0);
var G__9776 = (0);
seq__9710 = G__9773;
chunk__9711 = G__9774;
count__9712 = G__9775;
i__9713 = G__9776;
continue;
}
} else {
return null;
}
}
break;
}
}));

(figwheel.core.call_hooks.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(figwheel.core.call_hooks.cljs$lang$applyTo = (function (seq9704){
var G__9705 = cljs.core.first.call(null,seq9704);
var seq9704__$1 = cljs.core.next.call(null,seq9704);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__9705,seq9704__$1);
}));


figwheel.core.reload_namespaces = (function figwheel$core$reload_namespaces(namespaces,figwheel_meta){
var figwheel_meta__$1 = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__9726){
var vec__9727 = p__9726;
var k = cljs.core.nth.call(null,vec__9727,(0),null);
var v = cljs.core.nth.call(null,vec__9727,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.name.call(null,k),v], null);
})),cljs.core.js__GT_clj.call(null,figwheel_meta,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true));
var namespaces__$1 = cljs.core.map.call(null,(function (p1__9690_SHARP_){
return cljs.core.with_meta.call(null,cljs.core.symbol.call(null,p1__9690_SHARP_),cljs.core.get.call(null,figwheel_meta__$1,p1__9690_SHARP_));
}),namespaces);
cljs.core.swap_BANG_.call(null,figwheel.core.state,(function (p1__9691_SHARP_){
return cljs.core.assoc_in.call(null,cljs.core.assoc.call(null,p1__9691_SHARP_,new cljs.core.Keyword("figwheel.core","metadata","figwheel.core/metadata",-720139885),figwheel_meta__$1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"reload-started","reload-started",-1932451477)], null),(new Date()).getTime());
}));

var to_reload = (cljs.core.truth_(((cljs.core.not.call(null,figwheel.core.load_warninged_code))?cljs.core.not_empty.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.core.state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"warnings","warnings",-735437651)], null))):false))?null:cljs.core.filter.call(null,(function (p1__9692_SHARP_){
return figwheel.core.reload_ns_QMARK_.call(null,p1__9692_SHARP_);
}),namespaces__$1));
if(cljs.core.empty_QMARK_.call(null,to_reload)){
} else {
figwheel.core.call_hooks.call(null,new cljs.core.Keyword(null,"before-load","before-load",-2060117064),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),namespaces__$1], null));

setTimeout((function (){
return figwheel.core.dispatch_event.call(null,new cljs.core.Keyword(null,"figwheel.before-load","figwheel.before-load",58978771),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),namespaces__$1], null));
}),(0));
}

var seq__9730_9777 = cljs.core.seq.call(null,to_reload);
var chunk__9731_9778 = null;
var count__9732_9779 = (0);
var i__9733_9780 = (0);
while(true){
if((i__9733_9780 < count__9732_9779)){
var ns_9781 = cljs.core._nth.call(null,chunk__9731_9778,i__9733_9780);
goog.require(cljs.core.name.call(null,ns_9781),true);


var G__9782 = seq__9730_9777;
var G__9783 = chunk__9731_9778;
var G__9784 = count__9732_9779;
var G__9785 = (i__9733_9780 + (1));
seq__9730_9777 = G__9782;
chunk__9731_9778 = G__9783;
count__9732_9779 = G__9784;
i__9733_9780 = G__9785;
continue;
} else {
var temp__5753__auto___9786 = cljs.core.seq.call(null,seq__9730_9777);
if(temp__5753__auto___9786){
var seq__9730_9787__$1 = temp__5753__auto___9786;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9730_9787__$1)){
var c__4556__auto___9788 = cljs.core.chunk_first.call(null,seq__9730_9787__$1);
var G__9789 = cljs.core.chunk_rest.call(null,seq__9730_9787__$1);
var G__9790 = c__4556__auto___9788;
var G__9791 = cljs.core.count.call(null,c__4556__auto___9788);
var G__9792 = (0);
seq__9730_9777 = G__9789;
chunk__9731_9778 = G__9790;
count__9732_9779 = G__9791;
i__9733_9780 = G__9792;
continue;
} else {
var ns_9793 = cljs.core.first.call(null,seq__9730_9787__$1);
goog.require(cljs.core.name.call(null,ns_9793),true);


var G__9794 = cljs.core.next.call(null,seq__9730_9787__$1);
var G__9795 = null;
var G__9796 = (0);
var G__9797 = (0);
seq__9730_9777 = G__9794;
chunk__9731_9778 = G__9795;
count__9732_9779 = G__9796;
i__9733_9780 = G__9797;
continue;
}
} else {
}
}
break;
}

var after_reload_fn_9798 = (function (){
try{if(cljs.core.truth_(cljs.core.not_empty.call(null,to_reload))){
goog.log.info(figwheel.core.logger,["loaded ",cljs.core.pr_str.call(null,to_reload)].join(''));

figwheel.core.call_hooks.call(null,new cljs.core.Keyword(null,"after-load","after-load",-1278503285),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reloaded-namespaces","reloaded-namespaces",1589557425),to_reload], null));

figwheel.core.dispatch_event.call(null,new cljs.core.Keyword(null,"figwheel.after-load","figwheel.after-load",-1913099389),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reloaded-namespaces","reloaded-namespaces",1589557425),to_reload], null));
} else {
}

var temp__5753__auto__ = cljs.core.not_empty.call(null,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.set.call(null,to_reload)),namespaces__$1));
if(cljs.core.truth_(temp__5753__auto__)){
var not_loaded = temp__5753__auto__;
return goog.log.info(figwheel.core.logger,["did not load ",cljs.core.pr_str.call(null,not_loaded)].join(''));
} else {
return null;
}
}finally {cljs.core.swap_BANG_.call(null,figwheel.core.state,cljs.core.assoc,new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),cljs.core.PersistentArrayMap.EMPTY);
}});
if((((typeof figwheel !== 'undefined') && (typeof figwheel.repl !== 'undefined')) && ((typeof figwheel !== 'undefined') && (typeof figwheel.repl !== 'undefined') && (typeof figwheel.repl.after_reloads !== 'undefined')))){
figwheel.repl.after_reloads(after_reload_fn_9798);
} else {
setTimeout(after_reload_fn_9798,(100));
}

return null;
});
goog.exportSymbol('figwheel.core.reload_namespaces', figwheel.core.reload_namespaces);

figwheel.core.compile_warnings = (function figwheel$core$compile_warnings(warnings){
if(cljs.core.empty_QMARK_.call(null,warnings)){
} else {
setTimeout((function (){
return figwheel.core.dispatch_event.call(null,new cljs.core.Keyword(null,"figwheel.compile-warnings","figwheel.compile-warnings",-2015032448),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"warnings","warnings",-735437651),warnings], null));
}),(0));
}

cljs.core.swap_BANG_.call(null,figwheel.core.state,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"warnings","warnings",-735437651)], null),cljs.core.concat,warnings);

var seq__9734 = cljs.core.seq.call(null,warnings);
var chunk__9735 = null;
var count__9736 = (0);
var i__9737 = (0);
while(true){
if((i__9737 < count__9736)){
var warning = cljs.core._nth.call(null,chunk__9735,i__9737);
goog.log.warning(figwheel.core.logger,["Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(warning))," in ",figwheel.core.file_line_column.call(null,warning)].join(''));


var G__9799 = seq__9734;
var G__9800 = chunk__9735;
var G__9801 = count__9736;
var G__9802 = (i__9737 + (1));
seq__9734 = G__9799;
chunk__9735 = G__9800;
count__9736 = G__9801;
i__9737 = G__9802;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq.call(null,seq__9734);
if(temp__5753__auto__){
var seq__9734__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9734__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__9734__$1);
var G__9803 = cljs.core.chunk_rest.call(null,seq__9734__$1);
var G__9804 = c__4556__auto__;
var G__9805 = cljs.core.count.call(null,c__4556__auto__);
var G__9806 = (0);
seq__9734 = G__9803;
chunk__9735 = G__9804;
count__9736 = G__9805;
i__9737 = G__9806;
continue;
} else {
var warning = cljs.core.first.call(null,seq__9734__$1);
goog.log.warning(figwheel.core.logger,["Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(warning))," in ",figwheel.core.file_line_column.call(null,warning)].join(''));


var G__9807 = cljs.core.next.call(null,seq__9734__$1);
var G__9808 = null;
var G__9809 = (0);
var G__9810 = (0);
seq__9734 = G__9807;
chunk__9735 = G__9808;
count__9736 = G__9809;
i__9737 = G__9810;
continue;
}
} else {
return null;
}
}
break;
}
});
goog.exportSymbol('figwheel.core.compile_warnings', figwheel.core.compile_warnings);

figwheel.core.compile_warnings_remote = (function figwheel$core$compile_warnings_remote(warnings_json){
return figwheel.core.compile_warnings.call(null,cljs.core.js__GT_clj.call(null,warnings_json,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true));
});
goog.exportSymbol('figwheel.core.compile_warnings_remote', figwheel.core.compile_warnings_remote);

figwheel.core.handle_exception = (function figwheel$core$handle_exception(p__9738){
var map__9739 = p__9738;
var map__9739__$1 = (((((!((map__9739 == null))))?(((((map__9739.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9739.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9739):map__9739);
var exception_data = map__9739__$1;
var file = cljs.core.get.call(null,map__9739__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var type = cljs.core.get.call(null,map__9739__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__9739__$1,new cljs.core.Keyword(null,"message","message",-406056002));
try{setTimeout((function (){
return figwheel.core.dispatch_event.call(null,new cljs.core.Keyword(null,"figwheel.compile-exception","figwheel.compile-exception",1092880746),exception_data);
}),(0));

cljs.core.swap_BANG_.call(null,figwheel.core.state,(function (p1__9693_SHARP_){
return cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,p1__9693_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"reload-started","reload-started",-1932451477)], null),(new Date()).getTime()),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"exception","exception",-335277064)], null),exception_data);
}));

return goog.log.warning(figwheel.core.logger,(function (){var G__9741 = "Compile Exception - ";
var G__9741__$1 = (cljs.core.truth_((function (){var or__4126__auto__ = type;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return message;
}
})())?[G__9741,clojure.string.join.call(null," : ",cljs.core.filter.call(null,cljs.core.some_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,message], null)))].join(''):G__9741);
if(cljs.core.truth_(file)){
return [G__9741__$1," in ",figwheel.core.file_line_column.call(null,exception_data)].join('');
} else {
return G__9741__$1;
}
})());
}finally {cljs.core.swap_BANG_.call(null,figwheel.core.state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715)], null),cljs.core.PersistentArrayMap.EMPTY);
}});
goog.exportSymbol('figwheel.core.handle_exception', figwheel.core.handle_exception);

figwheel.core.handle_exception_remote = (function figwheel$core$handle_exception_remote(exception_data){
return figwheel.core.handle_exception.call(null,cljs.core.js__GT_clj.call(null,exception_data,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true));
});
goog.exportSymbol('figwheel.core.handle_exception_remote', figwheel.core.handle_exception_remote);

//# sourceMappingURL=core.js.map
