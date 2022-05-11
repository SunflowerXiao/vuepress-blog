(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{443:function(t,a,v){t.exports=v.p+"assets/img/handshake.06b12e0c.png"},444:function(t,a,v){t.exports=v.p+"assets/img/wave.b79977a7.png"},487:function(t,a,v){"use strict";v.r(a);var _=v(19),s=Object(_.a)({},(function(){var t=this,a=t.$createElement,_=t._self._c||a;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h2",{attrs:{id:"网络分层原理"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#网络分层原理"}},[t._v("#")]),t._v(" 网络分层原理")]),t._v(" "),_("h3",{attrs:{id:"应用层"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#应用层"}},[t._v("#")]),t._v(" 应用层")]),t._v(" "),_("ul",[_("li",[t._v("http, https, ssh, ftp, Dns")])]),t._v(" "),_("h3",{attrs:{id:"传输层"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#传输层"}},[t._v("#")]),t._v(" 传输层")]),t._v(" "),_("ul",[_("li",[t._v("Tcp, Udp, Sctp")])]),t._v(" "),_("h3",{attrs:{id:"网络层"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#网络层"}},[t._v("#")]),t._v(" 网络层")]),t._v(" "),_("ul",[_("li",[t._v("IPv4, Ipv6,")])]),t._v(" "),_("h3",{attrs:{id:"数据链路曾"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#数据链路曾"}},[t._v("#")]),t._v(" 数据链路曾")]),t._v(" "),_("ul",[_("li",[t._v("以太网 ,无线 LAN")])]),t._v(" "),_("h3",{attrs:{id:"物理层"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#物理层"}},[t._v("#")]),t._v(" 物理层")]),t._v(" "),_("ul",[_("li",[t._v("光纤，电缆，无线设备")])]),t._v(" "),_("h2",{attrs:{id:"tcp-的特点"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#tcp-的特点"}},[t._v("#")]),t._v(" TCP 的特点")]),t._v(" "),_("ul",[_("li",[t._v("基于连接： 必须先建立连接才能进行通信")]),t._v(" "),_("li",[t._v("全双工： 客户端和服务端可以进行互相通信")]),t._v(" "),_("li",[t._v("字节流： 大数据传输： segment 分片， 重新排序， 重复的包会被丢弃")]),t._v(" "),_("li",[t._v("流量缓冲：首次握手传输的数据量只能是 4kb？")]),t._v(" "),_("li",[t._v("数据重发： 如果数据丢包，会重新进行数据的发送")]),t._v(" "),_("li",[t._v("拥塞控制")])]),t._v(" "),_("h2",{attrs:{id:"tcp-的报文结构"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#tcp-的报文结构"}},[t._v("#")]),t._v(" TCP 的报文结构")]),t._v(" "),_("p",[t._v("源端口\n目标端口")]),t._v(" "),_("h2",{attrs:{id:"如何抓包分析"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#如何抓包分析"}},[t._v("#")]),t._v(" 如何抓包分析")]),t._v(" "),_("h2",{attrs:{id:"tcp-的拥塞控制"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#tcp-的拥塞控制"}},[t._v("#")]),t._v(" TCP 的拥塞控制")]),t._v(" "),_("h2",{attrs:{id:"tcp-的重传"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#tcp-的重传"}},[t._v("#")]),t._v(" TCP 的重传")]),t._v(" "),_("h2",{attrs:{id:"tcp-的三次握手"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#tcp-的三次握手"}},[t._v("#")]),t._v(" TCP 的三次握手")]),t._v(" "),_("ul",[_("li",[_("p",[t._v("通过 TCP 的三次握手，就建立了一个连接")])]),t._v(" "),_("li",[_("p",[t._v("客户端和浏览器端需要 3 个数据包， 握手是为了互相确认对方的接收和发送能力是否正常。\nISN(Initial Sequence Number): TCP 发送方的字节数据编号的原点，告诉对方我要开始发送数据的初始化序列号\nSequence Number： 数据包开始的序列号\nacknowledgement number ： 期望下一次接收的数据包开始的序列号\n"),_("code",[t._v("SYN")]),t._v(": synchronous 建立联机\n"),_("code",[t._v("ACK")]),t._v(" : Acknowledgement 确认\n"),_("code",[t._v("PSH")]),t._v(": push 传送\n"),_("code",[t._v("FIN")]),t._v("： 完毕\n"),_("code",[t._v("RST")]),t._v(": reset 重传\n"),_("code",[t._v("URG")]),t._v(": 紧急")]),t._v(" "),_("p",[_("img",{attrs:{src:v(443),alt:"三次握手流程图"}})]),t._v(" "),_("h3",{attrs:{id:"tcp-的三次握手能不能换成两次"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#tcp-的三次握手能不能换成两次"}},[t._v("#")]),t._v(" TCP 的三次握手能不能换成两次？")]),t._v(" "),_("blockquote",[_("p",[t._v("不能")])])]),t._v(" "),_("li",[_("p",[t._v("确认双方的收发能力")]),t._v(" "),_("ul",[_("li",[_("p",[t._v("TCP 第一次握手是为了确认 客户端的发送能力、服务端的接收能力")])]),t._v(" "),_("li",[_("p",[t._v("TCP 第二次握手是为了确认 服务端的接收能力、服务端的发送能力")])]),t._v(" "),_("li",[_("p",[t._v("TCP 第三次握手 确认 客户端的接收能力")])]),t._v(" "),_("li",[_("p",[t._v("省略到任何一次都不能完全确认整个流程")])])])]),t._v(" "),_("li",[_("p",[t._v("两次不能判断数据是否丢失")])]),t._v(" "),_("li",[_("p",[t._v("阻止重复历史连接的初始化")])])]),t._v(" "),_("h3",{attrs:{id:"半连接队列"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#半连接队列"}},[t._v("#")]),t._v(" 半连接队列")]),t._v(" "),_("p",[t._v("服务器第一次接收到 SYN 之后，会处于 "),_("code",[t._v("SYN_RCVD")]),t._v(" 的状态，用于存储这种状态的队列就是半连接队列。"),_("br"),t._v("\n同样的如果完成了三次握手"),_("code",[t._v("established")]),t._v("状态，用于存储这种状态的就是全连接队列")]),t._v(" "),_("h2",{attrs:{id:"tcp-的四次挥手"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#tcp-的四次挥手"}},[t._v("#")]),t._v(" TCP 的四次挥手")]),t._v(" "),_("p",[t._v("之所以要四次挥手，是因为被要求关闭连接的一方可能存在未发送完毕的数据， 所以需要等待数据都发送完毕之后，在主动发起一次 FIN")]),t._v(" "),_("h3",{attrs:{id:"tcp-的四次挥手能不能减少"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#tcp-的四次挥手能不能减少"}},[t._v("#")]),t._v(" TCP 的四次挥手能不能减少？")]),t._v(" "),_("blockquote",[_("p",[t._v("不能")])]),t._v(" "),_("ul",[_("li",[t._v("四次可以确认服务器全部发送完毕了消息，并且客户端也接收完毕了消息")])]),t._v(" "),_("h3",{attrs:{id:"为什么-time-wait-状态需要经过-2msl-才能返回到-close-状态"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#为什么-time-wait-状态需要经过-2msl-才能返回到-close-状态"}},[t._v("#")]),t._v(" 为什么 TIME_WAIT 状态需要经过 2MSL 才能返回到 CLOSE 状态？")]),t._v(" "),_("ul",[_("li",[t._v("如果 2MSL 内没有任何新的请求到达客户端， 那么客户端认为本次连接可以断开")]),t._v(" "),_("li",[t._v("重传包的影响。 假设客户端在第四次挥手的时候，服务端发现接收到的的 seq num 不正确，那么会触发重传包。 此时会重复挥手流程，2MSL 内 客户端就会又接收到数据，就表示它不能关闭")])]),t._v(" "),_("p",[t._v("超时重传指的是，发送数据包在一定的时间周期内没有收到相应的 ACK，等待一定的时间，超时之后就认为这个数据包丢失，就会重新发送。这个等待时间被称为 "),_("code",[t._v("RTO")]),t._v(".")]),t._v(" "),_("ul",[_("li",[t._v("避免新旧连接混淆")])]),t._v(" "),_("p",[_("img",{attrs:{src:v(444),alt:"四次挥手流程图"}})])])}),[],!1,null,null,null);a.default=s.exports}}]);