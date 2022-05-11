(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{510:function(t,a,v){"use strict";v.r(a);var _=v(19),s=Object(_.a)({},(function(){var t=this,a=t.$createElement,v=t._self._c||a;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h2",{attrs:{id:"垃圾回收算法"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#垃圾回收算法"}},[t._v("#")]),t._v(" 垃圾回收算法")]),t._v(" "),v("h3",{attrs:{id:"标记清除"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#标记清除"}},[t._v("#")]),t._v(" 标记清除")]),t._v(" "),v("ul",[v("li",[t._v("标记： 从根节点开始标记出依旧在使用的对象")]),t._v(" "),v("li",[t._v("清除： 清除没有被标记的其他所有对象")])]),t._v(" "),v("p",[t._v("-缺点： 会导致内存碎片化，内存利用率不高，因为每次都要从根节点进行标记，效率也不高")]),t._v(" "),v("h3",{attrs:{id:"copy"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#copy"}},[t._v("#")]),t._v(" copy")]),t._v(" "),v("p",[t._v("按照 8:1:1 的比例分为 A, B1，B2 两个区域，")]),t._v(" "),v("ul",[v("li",[t._v("第一次回收")])]),t._v(" "),v("p",[t._v("当变量创建的时候丢入 A 区域（伊甸园区）， 当 A 区域内存占满之后开始垃圾回收")]),t._v(" "),v("p",[t._v("将依旧在使用的对象直接丢入 B1 区域（幸存者区域）， 然后整体释放 A 区域。")]),t._v(" "),v("ul",[v("li",[t._v("第二次回收")])]),t._v(" "),v("p",[t._v("新变量创建依旧是丢入 A 区域， 当 A 区域占满之后， 垃圾回收 A 和 B1 区域， 将仍然在使用的对象扔进 B2 区域， 同步释放 A 和 B1 区域")]),t._v(" "),v("ul",[v("li",[t._v("第三次回收")])]),t._v(" "),v("p",[t._v("新变量创建依旧是丢入 A 区域， 当 A 区域占满之后， 垃圾回收 A 和 B2 区域，， 将仍然在使用的对象扔进 B1 区域， 同步释放 A 和 B2 区域")]),t._v(" "),v("p",[t._v("之后的每次回收都和重复上面的流程， b1 和 b2 每次回收后，都会有一个被释放")]),t._v(" "),v("h3",{attrs:{id:"标记整理"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#标记整理"}},[t._v("#")]),t._v(" 标记整理")]),t._v(" "),v("p",[t._v("和标记清除法类似， 但是他整理了内存碎片，内存使用效率比标记清除法高， 但是效率还是不如 copy")]),t._v(" "),v("h3",{attrs:{id:"二代算法"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#二代算法"}},[t._v("#")]),t._v(" 二代算法")]),t._v(" "),v("p",[t._v("二代指的是新生代 和 老生代， 新生代会对应自己的垃圾回收器， 老生代也会有一个对应的垃圾回收器，他们都是配套使用的")]),t._v(" "),v("h4",{attrs:{id:"新生代"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#新生代"}},[t._v("#")]),t._v(" 新生代")]),t._v(" "),v("p",[t._v("新生代中执行 copy 算法")]),t._v(" "),v("h4",{attrs:{id:"老生代"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#老生代"}},[t._v("#")]),t._v(" 老生代")]),t._v(" "),v("p",[t._v("老生代中执行标记整理方法")]),t._v(" "),v("h3",{attrs:{id:"增量回收算法"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#增量回收算法"}},[t._v("#")]),t._v(" 增量回收算法")])])}),[],!1,null,null,null);a.default=s.exports}}]);