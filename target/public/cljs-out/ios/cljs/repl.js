// Compiled by ClojureScript 1.10.764 {:target :nodejs}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__11331){
var map__11332 = p__11331;
var map__11332__$1 = (((((!((map__11332 == null))))?(((((map__11332.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11332.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11332):map__11332);
var m = map__11332__$1;
var n = cljs.core.get.call(null,map__11332__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__11332__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,(function (){var or__4126__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return [(function (){var temp__5753__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})());

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__11334_11366 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__11335_11367 = null;
var count__11336_11368 = (0);
var i__11337_11369 = (0);
while(true){
if((i__11337_11369 < count__11336_11368)){
var f_11370 = cljs.core._nth.call(null,chunk__11335_11367,i__11337_11369);
cljs.core.println.call(null,"  ",f_11370);


var G__11371 = seq__11334_11366;
var G__11372 = chunk__11335_11367;
var G__11373 = count__11336_11368;
var G__11374 = (i__11337_11369 + (1));
seq__11334_11366 = G__11371;
chunk__11335_11367 = G__11372;
count__11336_11368 = G__11373;
i__11337_11369 = G__11374;
continue;
} else {
var temp__5753__auto___11375 = cljs.core.seq.call(null,seq__11334_11366);
if(temp__5753__auto___11375){
var seq__11334_11376__$1 = temp__5753__auto___11375;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11334_11376__$1)){
var c__4556__auto___11377 = cljs.core.chunk_first.call(null,seq__11334_11376__$1);
var G__11378 = cljs.core.chunk_rest.call(null,seq__11334_11376__$1);
var G__11379 = c__4556__auto___11377;
var G__11380 = cljs.core.count.call(null,c__4556__auto___11377);
var G__11381 = (0);
seq__11334_11366 = G__11378;
chunk__11335_11367 = G__11379;
count__11336_11368 = G__11380;
i__11337_11369 = G__11381;
continue;
} else {
var f_11382 = cljs.core.first.call(null,seq__11334_11376__$1);
cljs.core.println.call(null,"  ",f_11382);


var G__11383 = cljs.core.next.call(null,seq__11334_11376__$1);
var G__11384 = null;
var G__11385 = (0);
var G__11386 = (0);
seq__11334_11366 = G__11383;
chunk__11335_11367 = G__11384;
count__11336_11368 = G__11385;
i__11337_11369 = G__11386;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_11387 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_11387);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_11387)))?cljs.core.second.call(null,arglists_11387):arglists_11387));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Spec");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__11338_11388 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__11339_11389 = null;
var count__11340_11390 = (0);
var i__11341_11391 = (0);
while(true){
if((i__11341_11391 < count__11340_11390)){
var vec__11352_11392 = cljs.core._nth.call(null,chunk__11339_11389,i__11341_11391);
var name_11393 = cljs.core.nth.call(null,vec__11352_11392,(0),null);
var map__11355_11394 = cljs.core.nth.call(null,vec__11352_11392,(1),null);
var map__11355_11395__$1 = (((((!((map__11355_11394 == null))))?(((((map__11355_11394.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11355_11394.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11355_11394):map__11355_11394);
var doc_11396 = cljs.core.get.call(null,map__11355_11395__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_11397 = cljs.core.get.call(null,map__11355_11395__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_11393);

cljs.core.println.call(null," ",arglists_11397);

if(cljs.core.truth_(doc_11396)){
cljs.core.println.call(null," ",doc_11396);
} else {
}


var G__11398 = seq__11338_11388;
var G__11399 = chunk__11339_11389;
var G__11400 = count__11340_11390;
var G__11401 = (i__11341_11391 + (1));
seq__11338_11388 = G__11398;
chunk__11339_11389 = G__11399;
count__11340_11390 = G__11400;
i__11341_11391 = G__11401;
continue;
} else {
var temp__5753__auto___11402 = cljs.core.seq.call(null,seq__11338_11388);
if(temp__5753__auto___11402){
var seq__11338_11403__$1 = temp__5753__auto___11402;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11338_11403__$1)){
var c__4556__auto___11404 = cljs.core.chunk_first.call(null,seq__11338_11403__$1);
var G__11405 = cljs.core.chunk_rest.call(null,seq__11338_11403__$1);
var G__11406 = c__4556__auto___11404;
var G__11407 = cljs.core.count.call(null,c__4556__auto___11404);
var G__11408 = (0);
seq__11338_11388 = G__11405;
chunk__11339_11389 = G__11406;
count__11340_11390 = G__11407;
i__11341_11391 = G__11408;
continue;
} else {
var vec__11357_11409 = cljs.core.first.call(null,seq__11338_11403__$1);
var name_11410 = cljs.core.nth.call(null,vec__11357_11409,(0),null);
var map__11360_11411 = cljs.core.nth.call(null,vec__11357_11409,(1),null);
var map__11360_11412__$1 = (((((!((map__11360_11411 == null))))?(((((map__11360_11411.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11360_11411.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11360_11411):map__11360_11411);
var doc_11413 = cljs.core.get.call(null,map__11360_11412__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_11414 = cljs.core.get.call(null,map__11360_11412__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_11410);

cljs.core.println.call(null," ",arglists_11414);

if(cljs.core.truth_(doc_11413)){
cljs.core.println.call(null," ",doc_11413);
} else {
}


var G__11415 = cljs.core.next.call(null,seq__11338_11403__$1);
var G__11416 = null;
var G__11417 = (0);
var G__11418 = (0);
seq__11338_11388 = G__11415;
chunk__11339_11389 = G__11416;
count__11340_11390 = G__11417;
i__11341_11391 = G__11418;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5753__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n)),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5753__auto__)){
var fnspec = temp__5753__auto__;
cljs.core.print.call(null,"Spec");

var seq__11362 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__11363 = null;
var count__11364 = (0);
var i__11365 = (0);
while(true){
if((i__11365 < count__11364)){
var role = cljs.core._nth.call(null,chunk__11363,i__11365);
var temp__5753__auto___11419__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5753__auto___11419__$1)){
var spec_11420 = temp__5753__auto___11419__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_11420));
} else {
}


var G__11421 = seq__11362;
var G__11422 = chunk__11363;
var G__11423 = count__11364;
var G__11424 = (i__11365 + (1));
seq__11362 = G__11421;
chunk__11363 = G__11422;
count__11364 = G__11423;
i__11365 = G__11424;
continue;
} else {
var temp__5753__auto____$1 = cljs.core.seq.call(null,seq__11362);
if(temp__5753__auto____$1){
var seq__11362__$1 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11362__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__11362__$1);
var G__11425 = cljs.core.chunk_rest.call(null,seq__11362__$1);
var G__11426 = c__4556__auto__;
var G__11427 = cljs.core.count.call(null,c__4556__auto__);
var G__11428 = (0);
seq__11362 = G__11425;
chunk__11363 = G__11426;
count__11364 = G__11427;
i__11365 = G__11428;
continue;
} else {
var role = cljs.core.first.call(null,seq__11362__$1);
var temp__5753__auto___11429__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5753__auto___11429__$2)){
var spec_11430 = temp__5753__auto___11429__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_11430));
} else {
}


var G__11431 = cljs.core.next.call(null,seq__11362__$1);
var G__11432 = null;
var G__11433 = (0);
var G__11434 = (0);
seq__11362 = G__11431;
chunk__11363 = G__11432;
count__11364 = G__11433;
i__11365 = G__11434;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof Error))?cljs.core.symbol.call(null,"js",t.name):null
))], null),(function (){var temp__5753__auto__ = cljs.core.ex_message.call(null,t);
if(cljs.core.truth_(temp__5753__auto__)){
var msg = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.ex_data.call(null,t);
if(cljs.core.truth_(temp__5753__auto__)){
var ed = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})());
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__11435 = cljs.core.conj.call(null,via,t);
var G__11436 = cljs.core.ex_cause.call(null,t);
via = G__11435;
t = G__11436;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek.call(null,via);
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec.call(null,cljs.core.map.call(null,base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5753__auto__ = cljs.core.ex_message.call(null,root);
if(cljs.core.truth_(temp__5753__auto__)){
var root_msg = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.ex_data.call(null,root);
if(cljs.core.truth_(temp__5753__auto__)){
var data = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data.call(null,o));
if(cljs.core.truth_(temp__5753__auto__)){
var phase = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})());
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__11439 = datafied_throwable;
var map__11439__$1 = (((((!((map__11439 == null))))?(((((map__11439.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11439.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11439):map__11439);
var via = cljs.core.get.call(null,map__11439__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__11439__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__11439__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__11440 = cljs.core.last.call(null,via);
var map__11440__$1 = (((((!((map__11440 == null))))?(((((map__11440.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11440.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11440):map__11440);
var type = cljs.core.get.call(null,map__11440__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__11440__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__11440__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__11441 = data;
var map__11441__$1 = (((((!((map__11441 == null))))?(((((map__11441.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11441.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11441):map__11441);
var problems = cljs.core.get.call(null,map__11441__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__11441__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__11441__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__11442 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__11442__$1 = (((((!((map__11442 == null))))?(((((map__11442.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11442.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11442):map__11442);
var top_data = map__11442__$1;
var source = cljs.core.get.call(null,map__11442__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__11447 = phase;
var G__11447__$1 = (((G__11447 instanceof cljs.core.Keyword))?G__11447.fqn:null);
switch (G__11447__$1) {
case "read-source":
var map__11448 = data;
var map__11448__$1 = (((((!((map__11448 == null))))?(((((map__11448.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11448.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11448):map__11448);
var line = cljs.core.get.call(null,map__11448__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__11448__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__11450 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__11450__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__11450,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__11450);
var G__11450__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__11450__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__11450__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__11450__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__11450__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__11451 = top_data;
var G__11451__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__11451,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__11451);
var G__11451__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__11451__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__11451__$1);
var G__11451__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__11451__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__11451__$2);
var G__11451__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__11451__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__11451__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__11451__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__11451__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__11452 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__11452,(0),null);
var method = cljs.core.nth.call(null,vec__11452,(1),null);
var file = cljs.core.nth.call(null,vec__11452,(2),null);
var line = cljs.core.nth.call(null,vec__11452,(3),null);
var G__11455 = top_data;
var G__11455__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__11455,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__11455);
var G__11455__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__11455__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__11455__$1);
var G__11455__$3 = (cljs.core.truth_((function (){var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
})())?cljs.core.assoc.call(null,G__11455__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__11455__$2);
var G__11455__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__11455__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__11455__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__11455__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__11455__$4;
}

break;
case "execution":
var vec__11456 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__11456,(0),null);
var method = cljs.core.nth.call(null,vec__11456,(1),null);
var file = cljs.core.nth.call(null,vec__11456,(2),null);
var line = cljs.core.nth.call(null,vec__11456,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,(function (p1__11438_SHARP_){
var or__4126__auto__ = (p1__11438_SHARP_ == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__11438_SHARP_);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return line;
}
})();
var G__11459 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__11459__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__11459,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__11459);
var G__11459__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__11459__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__11459__$1);
var G__11459__$3 = (cljs.core.truth_((function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
}
})())?cljs.core.assoc.call(null,G__11459__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__11459__$2);
var G__11459__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__11459__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__11459__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__11459__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__11459__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__11447__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__11463){
var map__11464 = p__11463;
var map__11464__$1 = (((((!((map__11464 == null))))?(((((map__11464.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11464.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11464):map__11464);
var triage_data = map__11464__$1;
var phase = cljs.core.get.call(null,map__11464__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__11464__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__11464__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__11464__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__11464__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__11464__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__11464__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__11464__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = source;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = line;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name.call(null,(function (){var or__4126__auto__ = class$;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__11466 = phase;
var G__11466__$1 = (((G__11466 instanceof cljs.core.Keyword))?G__11466.fqn:null);
switch (G__11466__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__11467_11476 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__11468_11477 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__11469_11478 = true;
var _STAR_print_fn_STAR__temp_val__11470_11479 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__11469_11478);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__11470_11479);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__11461_SHARP_){
return cljs.core.dissoc.call(null,p1__11461_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__11468_11477);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__11467_11476);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})():format.call(null,"%s\n",cause)));

break;
case "macroexpansion":
return format.call(null,"Unexpected error%s macroexpanding %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compile-syntax-check":
return format.call(null,"Syntax error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compilation":
return format.call(null,"Unexpected error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "read-eval-result":
return format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "print-eval-result":
return format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "execution":
if(cljs.core.truth_(spec)){
return format.call(null,"Execution error - invalid arguments to %s at (%s).\n%s",symbol,loc,(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__11471_11480 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__11472_11481 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__11473_11482 = true;
var _STAR_print_fn_STAR__temp_val__11474_11483 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__11473_11482);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__11474_11483);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__11462_SHARP_){
return cljs.core.dissoc.call(null,p1__11462_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__11472_11481);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__11471_11480);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__11466__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map
