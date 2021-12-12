self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var A={
awj(d,e){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
if(e==null)e=D.Jo
x=d.length
w=e[0]!==0
v=C.c.gI(e)!==1
u=w?x+1:x
if(v)++u
t=u*4
s=new Float32Array(t)
r=new Float32Array(t)
t=u-1
q=C.e.bO(t,4)
p=new Float32Array(4*(q+1))
if(w){q=d[0].a
s[0]=(q>>>16&255)/255
s[1]=(q>>>8&255)/255
s[2]=(q&255)/255
s[3]=(q>>>24&255)/255
p[0]=0
o=4
n=1}else{o=0
n=0}for(q=d.length,m=0;m<q;++m){l=o+1
k=d[m].a
s[o]=(k>>>16&255)/255
o=l+1
s[l]=(k>>>8&255)/255
l=o+1
s[o]=(k&255)/255
o=l+1
s[l]=(k>>>24&255)/255}for(q=e.length,m=0;m<q;++m,n=j){j=n+1
p[n]=e[m]}if(v){l=o+1
q=C.c.gI(d).a
s[o]=(q>>>16&255)/255
o=l+1
s[l]=(q>>>8&255)/255
s[o]=(q&255)/255
s[o+1]=(q>>>24&255)/255
p[n]=1}i=4*t
for(h=0;h<i;++h){n=h>>>2
r[h]=(s[h+4]-s[h])/(p[n+1]-p[n])}r[i]=0
r[i+1]=0
r[i+2]=0
r[i+3]=0
for(h=0;h<u;++h){g=p[h]
f=h*4
s[f]=s[f]-g*r[f]
t=f+1
s[t]=s[t]-g*r[t]
t=f+2
s[t]=s[t]-g*r[t]
t=f+3
s[t]=s[t]-g*r[t]}return new A.a0Y(p,s,r,u)},
ajR(d,e,f,g,h,i,j){var x,w,v,u,t
if(e===f){x=g+"_"+e
d.e5(g+" = "+x+";")
w=i+"_"+e
d.e5(i+" = "+w+";")}else{v=C.e.bO(e+f,2)
u=v+1
t=j+"_"+C.e.bO(u,4)+("."+"xyzw"[C.e.e0(u,4)])
d.e5("if ("+h+" < "+t+") {");++d.d
A.ajR(d,e,v,g,h,i,j);--d.d
d.e5("} else {");++d.d
A.ajR(d,u,f,g,h,i,j);--d.d
d.e5("}")}},
azC(d,e,f,g){var x,w,v,u,t,s="#00000000"
if(g){d.addColorStop(0,s)
x=0.999
w=0.0005000000000000004}else{x=1
w=0}if(f==null){v=B.cr(e[0])
v.toString
d.addColorStop(w,v)
v=B.cr(e[1])
v.toString
d.addColorStop(1-w,v)}else for(u=0;u<e.length;++u){t=C.d.L(f[u],0,1)
v=B.cr(e[u])
v.toString
d.addColorStop(t*x+w,v)}if(g)d.addColorStop(1,s)},
aBa(d,e,f,g){var x,w,v,u,t,s="tiled_st"
e.e5("vec4 bias;")
e.e5("vec4 scale;")
for(x=f.d,w=x-1,v=C.e.bO(w,4)+1,u=0;u<v;++u)d.jA(11,"threshold_"+u)
for(u=0;u<x;++u){d.jA(11,"bias_"+u)
d.jA(11,"scale_"+u)}switch(g.a){case 0:e.e5("float tiled_st = clamp(st, 0.0, 1.0);")
t=s
break
case 3:t="st"
break
case 1:e.e5("float tiled_st = fract(st);")
t=s
break
case 2:e.e5("float t_1 = (st - 1.0);")
e.e5("float tiled_st = abs((t_1 - 2.0 * floor(t_1 * 0.5)) - 1.0);")
t=s
break
default:t="st"}A.ajR(e,0,w,"bias",t,"scale","threshold")
return t},
axk(d){switch(d){case 0:return"bool"
case 1:return"int"
case 2:return"float"
case 3:return"bvec2"
case 4:return"bvec3"
case 5:return"bvec4"
case 6:return"ivec2"
case 7:return"ivec3"
case 8:return"ivec4"
case 9:return"vec2"
case 10:return"vec3"
case 11:return"vec4"
case 12:return"mat2"
case 13:return"mat3"
case 14:return"mat4"
case 15:return"sampler1D"
case 16:return"sampler2D"
case 17:return"sampler3D"
case 18:return"void"}throw B.c(B.ba(null,null))},
ai8:function ai8(d,e){var _=this
_.b=_.a=null
_.c=d
_.d=e},
ae2:function ae2(){},
a0Y:function a0Y(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
uq:function uq(){},
E2:function E2(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
ur:function ur(){},
J3:function J3(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.e=null
_.x=_.r=_.f=0
_.z=f
_.Q=g
_.ch=null
_.cx=h},
xs:function xs(d,e){this.b=d
this.c=e
this.d=1},
nI:function nI(d,e,f){this.a=d
this.b=e
this.c=f},
DZ:function DZ(d){this.a=d},
DY:function DY(d){var _=this
_.a=d
_.k3=_.k2=_.k1=_.fr=_.dy=_.dx=_.db=_.x=_.r=_.f=_.e=_.d=_.c=null},
uu:function uu(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.x=k
_.y=l},
V(d,e,f){var x
if(d!=e)if((d==null?null:isNaN(d))===!0)x=(e==null?null:isNaN(e))===!0
else x=!1
else x=!0
if(x)return d==null?null:d
if(d==null)d=0
if(e==null)e=0
return d*(1-f)+e*f},
alN(d,e,f,g,h){var x=new A.E2(d,e,f,g,h,null)
return x},
axC(d,e,f,g,h,i,j,k){return new A.uu(d,e,f,j,k,h,g,!0,null)},
y3:function y3(d,e){this.a=d
this.b=e},
bj:function bj(d,e){this.a=d
this.b=e},
b9:function b9(){},
bT(d,e,f,g,h){var x=new A.oy(0,1,d,D.Di,e,f,D.ah,D.M,new A.b4(B.a([],y.A),y.c),new A.b4(B.a([],y.b),y.F))
x.r=h.oY(x.gIb())
x.xX(g==null?0:g)
return x},
KW:function KW(d,e){this.a=d
this.b=e},
BT:function BT(d,e){this.a=d
this.b=e},
oy:function oy(d,e,f,g,h,i,j,k,l,m){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.x=_.r=null
_.y=$
_.z=null
_.Q=j
_.ch=$
_.cx=k
_.cO$=l
_.bD$=m},
ab6:function ab6(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
KT:function KT(){},
KU:function KU(){},
KV:function KV(){},
zu:function zu(){},
tw:function tw(){},
ml:function ml(){},
kZ:function kZ(){},
bi(d){return new A.b4(B.a([],d.j("n<0>")),d.j("b4<0>"))},
b4:function b4(d,e){var _=this
_.a=d
_.b=!1
_.c=$
_.$ti=e},
he:function he(d,e){this.b=d
this.a=e},
agA(d,e){var x,w,v=d===-1
if(v&&e===-1)return"Alignment.topLeft"
x=d===0
if(x&&e===-1)return"Alignment.topCenter"
w=d===1
if(w&&e===-1)return"Alignment.topRight"
if(v&&e===0)return"Alignment.centerLeft"
if(x&&e===0)return"Alignment.center"
if(w&&e===0)return"Alignment.centerRight"
if(v&&e===1)return"Alignment.bottomLeft"
if(x&&e===1)return"Alignment.bottomCenter"
if(w&&e===1)return"Alignment.bottomRight"
return"Alignment("+C.d.a7(d,1)+", "+C.d.a7(e,1)+")"},
agz(d,e){var x,w,v=d===-1
if(v&&e===-1)return"AlignmentDirectional.topStart"
x=d===0
if(x&&e===-1)return"AlignmentDirectional.topCenter"
w=d===1
if(w&&e===-1)return"AlignmentDirectional.topEnd"
if(v&&e===0)return"AlignmentDirectional.centerStart"
if(x&&e===0)return"AlignmentDirectional.center"
if(w&&e===0)return"AlignmentDirectional.centerEnd"
if(v&&e===1)return"AlignmentDirectional.bottomStart"
if(x&&e===1)return"AlignmentDirectional.bottomCenter"
if(w&&e===1)return"AlignmentDirectional.bottomEnd"
return"AlignmentDirectional("+C.d.a7(d,1)+", "+C.d.a7(e,1)+")"},
fZ:function fZ(){},
cd:function cd(d,e){this.a=d
this.b=e},
zF:function zF(d,e,f){this.a=d
this.b=e
this.c=f},
wS:function wS(d,e){this.a=d
this.b=e},
hI:function hI(){},
v6:function v6(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
alZ(d,e,f,g){return new A.hT(d,f,e,!1,g)},
apR(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=B.a([],y.M),j=y.L,i=B.a([],j)
for(x=d.length,w="",v="",u=0;u<d.length;d.length===x||(0,B.K)(d),++u){t=d[u]
if(t.e){k.push(new A.hT(w,v,null,!1,i))
i=B.a([],j)
k.push(t)
w=""
v=""}else{s=t.a
w+=s
r=t.b
s=r==null?s:r
for(q=t.f,p=q.length,o=v.length,n=0;n<q.length;q.length===p||(0,B.K)(q),++n){m=q[n]
l=m.a
i.push(m.zD(0,new B.dW(l.a+o,l.b+o)))}v+=s}}k.push(A.alZ(w,null,v,i))
return k},
BN:function BN(){this.a=0},
hT:function hT(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.e=g
_.f=h},
fx:function fx(){},
ZM:function ZM(d,e,f){this.a=d
this.b=e
this.c=f},
ZL:function ZL(d,e,f){this.a=d
this.b=e
this.c=f},
a7B(d,e,f,g,h,i,j,k,l,m){return new A.K0(h,i,j,l,d,e,f,g,m,k)},
xW:function xW(d,e){this.a=d
this.b=e},
k7:function k7(d,e){this.a=d
this.d=e},
K4:function K4(d,e){this.a=d
this.b=e},
a9z:function a9z(d,e){this.a=d
this.b=e},
K0:function K0(d,e,f,g,h,i,j,k,l,m){var _=this
_.a=null
_.b=!0
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.x=i
_.y=j
_.z=k
_.Q=l
_.ch=m
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=null
_.fx=$
_.go=_.fy=null},
kp(d,e,f){return new A.qU(f,d,C.cx,e)},
qU:function qU(d,e,f,g){var _=this
_.b=d
_.c=e
_.e=f
_.a=g},
eM(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,a0,a1,a2,a3){return new A.u(t,f,e,l,m,a0,o,q,p,v,a3,a2,s,u,w,r,d,h,i,j,k,g,a1,n,x)},
u:function u(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,a0,a1,a2,a3){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.x=k
_.y=l
_.z=m
_.Q=n
_.ch=o
_.cx=p
_.cy=q
_.db=r
_.dx=s
_.dy=t
_.fr=u
_.fx=v
_.fy=w
_.go=x
_.id=a0
_.k1=a1
_.k2=a2
_.k3=a3},
Qo:function Qo(){},
J8:function J8(){},
anr(d,e,f){return new A.a6l(d,f,e*2*Math.sqrt(d*f))},
As(d,e,f){var x,w,v,u,t,s=d.c,r=s*s,q=d.a,p=4*q*d.b,o=r-p
if(o===0){x=-s/(2*q)
return new A.a9J(x,e,f/(x*e))}if(o>0){s=-s
q=2*q
w=(s-Math.sqrt(o))/q
v=(s+Math.sqrt(o))/q
u=(f-w*e)/(v-w)
return new A.ac3(w,v,e-u,u)}t=Math.sqrt(p-r)/(2*q)
x=-(s/2*q)
return new A.adT(t,x,e,(f-x*e)/t)},
a6l:function a6l(d,e,f){this.a=d
this.b=e
this.c=f},
xC:function xC(d,e){this.a=d
this.b=e},
xB:function xB(d,e,f){this.b=d
this.c=e
this.a=f},
a9J:function a9J(d,e,f){this.a=d
this.b=e
this.c=f},
ac3:function ac3(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
adT:function adT(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
y8:function y8(d,e){this.a=d
this.c=e},
l1(d,e){var x,w,v=e==null,u=v?0:e
v=v?1/0:e
x=d==null
w=x?0:d
return new B.aC(u,v,w,x?1/0:d)},
l7:function l7(){},
cw:function cw(){},
a2u:function a2u(d,e,f){this.a=d
this.b=e
this.c=f},
yF:function yF(){},
h1:function h1(){},
be:function be(){},
wO:function wO(){},
e7:function e7(d,e,f){var _=this
_.e=null
_.cg$=d
_.ax$=e
_.a=f},
wU:function wU(d,e,f,g,h,i,j){var _=this
_.E=d
_.ah=_.O=null
_.af=$
_.u=e
_.w=f
_.aa=!1
_.bk=_.bw=_.bd=_.aS=null
_.dF$=g
_.b4$=h
_.f6$=i
_.r1=_.k4=null
_.r2=!1
_.ry=_.rx=null
_.x1=0
_.d=!1
_.f=_.e=null
_.x=_.r=!1
_.y=null
_.z=!1
_.Q=!0
_.ch=null
_.cx=!1
_.cy=null
_.db=!1
_.dx=j
_.dy=!1
_.fr=$
_.fx=!0
_.fy=null
_.go=!0
_.id=null
_.a=0
_.c=_.b=null},
a2O:function a2O(d){this.a=d},
a2Q:function a2Q(d,e,f){this.a=d
this.b=e
this.c=f},
a2R:function a2R(d){this.a=d},
a2P:function a2P(){},
A0:function A0(){},
Pf:function Pf(){},
Pg:function Pg(){},
an0(d){var x=new A.I2(d,null,B.an())
x.gaC()
x.gaJ()
x.fr=!1
x.sb9(null)
return x},
ja:function ja(){},
dT:function dT(){},
v0:function v0(d,e){this.a=d
this.b=e},
qh:function qh(){},
I2:function I2(d,e,f){var _=this
_.A=d
_.u$=e
_.r1=_.k4=null
_.r2=!1
_.ry=_.rx=null
_.x1=0
_.d=!1
_.f=_.e=null
_.x=_.r=!1
_.y=null
_.z=!1
_.Q=!0
_.ch=null
_.cx=!1
_.cy=null
_.db=!1
_.dx=f
_.dy=!1
_.fr=$
_.fx=!0
_.fy=null
_.go=!0
_.id=null
_.a=0
_.c=_.b=null},
Ie:function Ie(d,e,f,g){var _=this
_.A=d
_.X=e
_.u$=f
_.r1=_.k4=null
_.r2=!1
_.ry=_.rx=null
_.x1=0
_.d=!1
_.f=_.e=null
_.x=_.r=!1
_.y=null
_.z=!1
_.Q=!0
_.ch=null
_.cx=!1
_.cy=null
_.db=!1
_.dx=g
_.dy=!1
_.fr=$
_.fx=!0
_.fy=null
_.go=!0
_.id=null
_.a=0
_.c=_.b=null},
p3:function p3(){},
kG:function kG(){},
I_:function I_(d,e,f,g){var _=this
_.A=d
_.X=null
_.aD=e
_.b_=_.bs=null
_.u$=f
_.r1=_.k4=null
_.r2=!1
_.ry=_.rx=null
_.x1=0
_.d=!1
_.f=_.e=null
_.x=_.r=!1
_.y=null
_.z=!1
_.Q=!0
_.ch=null
_.cx=!1
_.cy=null
_.db=!1
_.dx=g
_.dy=!1
_.fr=$
_.fx=!0
_.fy=null
_.go=!0
_.id=null
_.a=0
_.c=_.b=null},
CW:function CW(d,e){this.a=d
this.b=e},
I6:function I6(d,e,f,g,h){var _=this
_.A=null
_.X=d
_.aD=e
_.bs=f
_.u$=g
_.r1=_.k4=null
_.r2=!1
_.ry=_.rx=null
_.x1=0
_.d=!1
_.f=_.e=null
_.x=_.r=!1
_.y=null
_.z=!1
_.Q=!0
_.ch=null
_.cx=!1
_.cy=null
_.db=!1
_.dx=h
_.dy=!1
_.fr=$
_.fx=!0
_.fy=null
_.go=!0
_.id=null
_.a=0
_.c=_.b=null},
Ip:function Ip(d,e,f){var _=this
_.aD=_.X=_.A=null
_.bs=d
_.cL=_.b_=null
_.u$=e
_.r1=_.k4=null
_.r2=!1
_.ry=_.rx=null
_.x1=0
_.d=!1
_.f=_.e=null
_.x=_.r=!1
_.y=null
_.z=!1
_.Q=!0
_.ch=null
_.cx=!1
_.cy=null
_.db=!1
_.dx=f
_.dy=!1
_.fr=$
_.fx=!0
_.fy=null
_.go=!0
_.id=null
_.a=0
_.c=_.b=null},
a2U:function a2U(d){this.a=d},
wV:function wV(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6){var _=this
_.A=d
_.X=e
_.aD=f
_.bs=g
_.b_=h
_.cL=i
_.dG=j
_.l5=k
_.fF=l
_.u2=m
_.l6=n
_.aa4=o
_.An=p
_.mN=q
_.u3=r
_.pl=s
_.pm=t
_.u4=u
_.l0=v
_.mL=w
_.Aj=x
_.en=a0
_.mM=a1
_.KC=a2
_.f5=a3
_.hc=a4
_.l1=a5
_.l2=a6
_.jS=a7
_.eM=a8
_.au=a9
_.bT=b0
_.bP=b1
_.bB=b2
_.by=b3
_.cg=b4
_.ax=b5
_.pd=b6
_.dF=b7
_.b4=b8
_.f6=b9
_.bz=c0
_.hP=c1
_.a9V=c2
_.pe=c3
_.pf=c4
_.pg=c5
_.a9W=c6
_.a9X=c7
_.a9Y=c8
_.a9Z=c9
_.aa_=d0
_.aa0=d1
_.ph=d2
_.aa1=d3
_.Ak=d4
_.u$=d5
_.r1=_.k4=null
_.r2=!1
_.ry=_.rx=null
_.x1=0
_.d=!1
_.f=_.e=null
_.x=_.r=!1
_.y=null
_.z=!1
_.Q=!0
_.ch=null
_.cx=!1
_.cy=null
_.db=!1
_.dx=d6
_.dy=!1
_.fr=$
_.fx=!0
_.fy=null
_.go=!0
_.id=null
_.a=0
_.c=_.b=null},
I8:function I8(d,e,f){var _=this
_.A=d
_.u$=e
_.r1=_.k4=null
_.r2=!1
_.ry=_.rx=null
_.x1=0
_.d=!1
_.f=_.e=null
_.x=_.r=!1
_.y=null
_.z=!1
_.Q=!0
_.ch=null
_.cx=!1
_.cy=null
_.db=!1
_.dx=f
_.dy=!1
_.fr=$
_.fx=!0
_.fy=null
_.go=!0
_.id=null
_.a=0
_.c=_.b=null},
A2:function A2(){},
A3:function A3(){},
nx:function nx(){},
a2S:function a2S(d,e,f){this.a=d
this.b=e
this.c=f},
Ii:function Ii(d,e,f,g){var _=this
_.A=null
_.X=d
_.aD=e
_.u$=f
_.r1=_.k4=null
_.r2=!1
_.ry=_.rx=null
_.x1=0
_.d=!1
_.f=_.e=null
_.x=_.r=!1
_.y=null
_.z=!1
_.Q=!0
_.ch=null
_.cx=!1
_.cy=null
_.db=!1
_.dx=g
_.dy=!1
_.fr=$
_.fx=!0
_.fy=null
_.go=!0
_.id=null
_.a=0
_.c=_.b=null},
qg:function qg(){},
In:function In(d,e,f,g,h,i){var _=this
_.bP=d
_.bB=e
_.A=null
_.X=f
_.aD=g
_.u$=h
_.r1=_.k4=null
_.r2=!1
_.ry=_.rx=null
_.x1=0
_.d=!1
_.f=_.e=null
_.x=_.r=!1
_.y=null
_.z=!1
_.Q=!0
_.ch=null
_.cx=!1
_.cy=null
_.db=!1
_.dx=i
_.dy=!1
_.fr=$
_.fx=!0
_.fy=null
_.go=!0
_.id=null
_.a=0
_.c=_.b=null},
A4:function A4(){},
aiv(){var x=new A.nZ(new B.as(new B.S($.P,y.D),y.Q))
x.Id()
return x},
nY:function nY(d,e){var _=this
_.a=null
_.b=!1
_.c=null
_.d=d
_.e=null
_.f=e
_.r=$},
nZ:function nZ(d){this.a=d
this.c=this.b=null},
a7I:function a7I(d){this.a=d},
y1:function y1(d){this.a=d},
qu:function qu(d){this.a=d},
a4d:function a4d(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.x=k
_.y=l
_.z=m
_.Q=n
_.ch=o
_.cx=p
_.cy=q
_.db=r
_.dx=s
_.dy=t
_.fr=u
_.fx=v
_.fy=w
_.go=x
_.id=a0
_.k1=a1
_.k2=a2
_.k3=a3
_.k4=a4
_.r1=a5
_.r2=a6
_.rx=a7
_.ry=a8
_.x1=a9
_.x2=b0
_.y1=b1
_.y2=b2
_.P=b3
_.N=b4
_.as=b5
_.ad=b6
_.aN=b7
_.ba=b8
_.aR=b9
_.aM=c0
_.a3=c1
_.ab=c2
_.a_=c3
_.ac=c4
_.a1=c5
_.b5=c6
_.bY=c7
_.bK=c8
_.bU=c9
_.E=d0
_.O=d1
_.ah=d2
_.af=d3
_.u=d4},
lH:function lH(){},
no:function no(d,e){this.b=d
this.a=e},
PH:function PH(){},
eZ(d){var x=d.J(y.I)
return x==null?null:x.f},
al2(d,e,f){return new A.Cx(f,e,d,null)},
Kc(d,e,f,g){return new A.lQ(f,d,g,null,e,null)},
h0(d,e,f){return new A.Cp(D.Y,f,e,d,null)},
ck(d,e,f){return new A.ic(f,e,d,null)},
avG(d,e,f){return new A.EG(f,e,d,null)},
an6(d,e,f,g,h,i,j,k,l,m,n){return new A.Iu(i,j,k,g,f,m,e,d,h,n,l,A.ax7(i),null)},
ax7(d){var x,w={}
w.a=0
x=B.a([],y.p)
d.bf(new A.a35(w,x))
return x},
c2(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,a0,a1,a2,a3,a4,a5,a6){var x=null
return new A.lG(new A.a4d(h,x,x,a2,d,x,l,x,x,x,x,j,k,x,x,x,x,a1,q,m,o,p,g,n,x,a6,x,x,x,x,x,x,x,x,a5,a3,a4,a0,v,x,x,x,x,x,x,r,s,w,x,x,x,x,t,x,u,x),f,i,!1,e,x)},
Cx:function Cx(d,e,f,g){var _=this
_.e=d
_.f=e
_.c=f
_.a=g},
lQ:function lQ(d,e,f,g,h,i){var _=this
_.e=d
_.r=e
_.x=f
_.y=g
_.c=h
_.a=i},
f9:function f9(d,e,f){this.e=d
this.c=e
this.a=f},
fY:function fY(d,e,f,g,h){var _=this
_.e=d
_.f=e
_.r=f
_.c=g
_.a=h},
Cp:function Cp(d,e,f,g,h){var _=this
_.e=d
_.f=e
_.r=f
_.c=g
_.a=h},
ic:function ic(d,e,f,g){var _=this
_.e=d
_.f=e
_.c=f
_.a=g},
fp:function fp(d,e,f){this.e=d
this.c=e
this.a=f},
EG:function EG(d,e,f,g){var _=this
_.e=d
_.f=e
_.c=f
_.a=g},
Iu:function Iu(d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
_.e=d
_.f=e
_.r=f
_.x=g
_.y=h
_.z=i
_.Q=j
_.ch=k
_.cx=l
_.cy=m
_.db=n
_.c=o
_.a=p},
a35:function a35(d,e){this.a=d
this.b=e},
lG:function lG(d,e,f,g,h,i){var _=this
_.e=d
_.f=e
_.r=f
_.x=g
_.c=h
_.a=i},
mI:function mI(d,e,f){this.e=d
this.c=e
this.a=f},
oV:function oV(d,e,f){this.e=d
this.c=e
this.a=f},
zV:function zV(d,e,f,g){var _=this
_.au=d
_.A=e
_.u$=f
_.r1=_.k4=null
_.r2=!1
_.ry=_.rx=null
_.x1=0
_.d=!1
_.f=_.e=null
_.x=_.r=!1
_.y=null
_.z=!1
_.Q=!0
_.ch=null
_.cx=!1
_.cy=null
_.db=!1
_.dx=g
_.dy=!1
_.fr=$
_.fx=!0
_.fy=null
_.go=!0
_.id=null
_.a=0
_.c=_.b=null},
alg(d,e,f){return new A.CS(e,f,d,null)},
bJ(d,e,f,g,h,i,j,k,l,m,n){var x
if(n!=null||j!=null){x=h==null?null:h.BQ(j,n)
if(x==null)x=A.l1(j,n)}else x=h
return new A.iH(e,d,m,g,i,x,l,f,k)},
CS:function CS(d,e,f,g){var _=this
_.e=d
_.f=e
_.c=f
_.a=g},
iH:function iH(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.y=i
_.z=j
_.cx=k
_.a=l},
LT:function LT(d,e,f){this.b=d
this.c=e
this.a=f},
axy(d){var x=d.az(),w=($.bK+1)%16777215
$.bK=w
w=new A.il(x,w,d,C.ai,B.bn(y.h))
x.c=w
x.a=d
return w},
avw(d){var x=y.h,w=B.dR(x,y.cM),v=($.bK+1)%16777215
$.bK=v
return new A.de(w,v,d,C.ai,B.bn(x))},
axp(d){var x=($.bK+1)%16777215
$.bK=x
return new A.qw(x,d,C.ai,B.bn(y.h))},
aw8(d){var x=y.h,w=B.bn(x),v=($.bK+1)%16777215
$.bK=v
return new A.nj(w,v,d,C.ai,B.bn(x))},
av:function av(){},
T:function T(){},
adc:function adc(d,e){this.a=d
this.b=e},
U:function U(){},
aA:function aA(){},
aE:function aE(){},
aV:function aV(){},
dE:function dE(){},
tY:function tY(){},
UA:function UA(d){this.a=d},
UB:function UB(d){this.a=d},
xE:function xE(d,e,f,g){var _=this
_.b=_.a=_.dy=null
_.c=d
_.d=null
_.e=$
_.f=e
_.r=null
_.x=f
_.y=g
_.Q=_.z=null
_.ch=!1
_.cx=!0
_.dx=_.db=_.cy=!1},
il:function il(d,e,f,g,h){var _=this
_.P=d
_.N=!1
_.b=_.a=_.dy=null
_.c=e
_.d=null
_.e=$
_.f=f
_.r=null
_.x=g
_.y=h
_.Q=_.z=null
_.ch=!1
_.cx=!0
_.dx=_.db=_.cy=!1},
kd:function kd(){},
de:function de(d,e,f,g,h){var _=this
_.bU=d
_.b=_.a=_.dy=null
_.c=e
_.d=null
_.e=$
_.f=f
_.r=null
_.x=g
_.y=h
_.Q=_.z=null
_.ch=!1
_.cx=!0
_.dx=_.db=_.cy=!1},
qw:function qw(d,e,f,g){var _=this
_.b=_.a=_.fx=_.dy=_.N=null
_.c=d
_.d=null
_.e=$
_.f=e
_.r=null
_.x=f
_.y=g
_.Q=_.z=null
_.ch=!1
_.cx=!0
_.dx=_.db=_.cy=!1},
nj:function nj(d,e,f,g,h){var _=this
_.N=$
_.as=d
_.b=_.a=_.fx=_.dy=null
_.c=e
_.d=null
_.e=$
_.f=f
_.r=null
_.x=g
_.y=h
_.Q=_.z=null
_.ch=!1
_.cx=!0
_.dx=_.db=_.cy=!1},
PX:function PX(){},
cX:function cX(d,e,f){this.a=d
this.b=e
this.c=f},
N9:function N9(){},
px:function px(){},
alh(d){var x=d.J(y.w)
return x==null?null:x.gq8(x)},
p7:function p7(d,e,f,g,h,i,j,k,l){var _=this
_.x=d
_.y=e
_.z=f
_.Q=g
_.ch=h
_.cx=i
_.cy=j
_.b=k
_.a=l},
Oc:function Oc(d){this.a=d},
nS:function nS(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.r=g
_.x=h
_.Q=i
_.cx=j
_.cy=k
_.a=l},
XN:function XN(){},
aaJ:function aaJ(d,e){this.a=d
this.d=!1
this.e=e},
Jj:function Jj(d,e){this.a=d
this.b=e},
cg:function cg(){},
XM:function XM(d,e){this.a=d
this.b=e},
m0:function m0(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=null
_.d=f
_.e=g
_.f=h
_.r=i
_.x=!1
_.y=j
_.$ti=k},
alV(d){var x=d.J(y.U),w=x==null?null:x.x
return w==null?D.i8:w},
EO(d){var x,w=d.J(y.o)
if(w==null)x=null
else{x=w.r
x=x.giN(x)}return x},
fz(d){var x=d.J(y.m)
return x==null?null:x.f},
ahS(d){var x=A.fz(d)
x=x==null?null:x.c
return x==null?1:x},
ajC(d,e){var x,w=d.gn(d),v=e.gn(e)
if(w!==v)return!1
if(d===e)return!0
for(w=J.aP(d.gay(d));w.q();){x=w.gC(w)
if(!e.a9(0,x)||!J.f(e.h(0,x),d.h(0,x)))return!1}return!0},
BA(d,e,f){if(d==null||!1)return d===e
return d>e-f&&d<e+f||d===e},
al0(d,e){return d.hk(e)},
aub(d,e){var x
d.dd(0,e,!0)
x=d.rx
x.toString
return x},
S2(d,e){var x,w
d.J(y.i)
x=$.Sn()
w=A.fz(d)
w=w==null?null:w.b
if(w==null)w=1
return new A.v6(x,w,A.EO(d),A.eZ(d),e,B.eR())},
apX(d,e){if(!e)$.aZ().toString},
ax9(d){var x,w=$.qk
if(w==null)return
w=$.x6.a9(0,w)
x=$.qk
if(w){x.toString
$.x6.h(0,x).push(d)}else $.x6.p(0,x,B.a([d],y.s))}},B,C,D,J
a.setFunctionNamesIfNecessary([A])
A=a.updateHolder(c[26],A)
B=c[0]
C=c[2]
D=c[32]
J=c[1]
A.ai8.prototype={
saI(d,e){return this.c=e},
saK(d,e){return this.d=e}}
A.ae2.prototype={
a3W(d,e,f,g,a0,a1){var x,w,v,u,t,s,r,q="uniform4f",p="bindBuffer",o="bufferData",n="vertexAttribPointer",m="enableVertexAttribArray",l=d.a,k=d.b,j=d.c,i=d.d,h=new Float32Array(8)
h[0]=l
h[1]=k
h[2]=j
h[3]=k
h[4]=j
h[5]=i
h[6]=l
h[7]=i
x=f.a
w=e.a
B.bL(w,"uniformMatrix4fv",[e.lD(0,x,"u_ctransform"),!1,B.eH().a])
B.bL(w,q,[e.lD(0,x,"u_scale"),2/a0,-2/a1,1,1])
B.bL(w,q,[e.lD(0,x,"u_shift"),-1,1,0,0])
v=w.createBuffer()
v.toString
B.bL(w,p,[e.gpC(),v])
v=e.gAX()
B.bL(w,o,[e.gpC(),h,v])
v=e.r
B.bL(w,n,[0,2,v==null?e.r=w.FLOAT:v,!1,0,0])
B.bL(w,m,[0])
u=w.createBuffer()
B.bL(w,p,[e.gpC(),u])
t=new Int32Array(B.ma(B.a([4278255360,4278190335,4294967040,4278255615],y.X)))
v=e.gAX()
B.bL(w,o,[e.gpC(),t,v])
v=e.dy
B.bL(w,n,[1,4,v==null?e.dy=w.UNSIGNED_BYTE:v,!0,0,0])
B.bL(w,m,[1])
s=w.createBuffer()
B.bL(w,p,[e.gAW(),s])
v=$.arx()
r=e.gAX()
B.bL(w,o,[e.gAW(),v,r])
if(B.bL(w,"getUniformLocation",[x,"u_resolution"])!=null)B.bL(w,"uniform2f",[e.lD(0,x,"u_resolution"),a0,a1])
x=e.x
B.bL(w,"clear",[x==null?e.x=w.COLOR_BUFFER_BIT:x])
w.viewport(0,0,a0,a1)
x=e.db
if(x==null)x=e.db=w.TRIANGLES
v=v.length
r=e.fr
B.bL(w,"drawElements",[x,v,r==null?e.fr=w.UNSIGNED_SHORT:r,0])}}
A.a0Y.prototype={
O4(d,e){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=this
for(x=k.d,w=k.c,v=d.a,u=k.b,t=e.a,s=0;s<x;++s){r="bias_"+s
q=v.getUniformLocation.apply(v,[t,r])
if(q==null){B.H(B.cF(r+" not found"))
p=null}else p=q
r=s*4
o=r+1
n=r+2
m=r+3
v.uniform4f.apply(v,[p,u[r],u[o],u[n],u[m]])
l="scale_"+s
q=v.getUniformLocation.apply(v,[t,l])
if(q==null){B.H(B.cF(l+" not found"))
p=null}else p=q
v.uniform4f.apply(v,[p,w[r],w[o],w[n],w[m]])}for(x=k.a,w=x.length,s=0;s<w;s+=4){u="threshold_"+C.e.bO(s,4)
q=v.getUniformLocation.apply(v,[t,u])
if(q==null){B.H(B.cF(u+" not found"))
p=null}else p=q
v.uniform4f.apply(v,[p,x[s],x[s+1],x[s+2],x[s+3]])}}}
A.uq.prototype={}
A.E2.prototype={
a3l(d,e,f){var x,w,v,u,t,s,r,q,p,o,n=this,m=n.e
if(m===D.ee||m===D.CO){x=n.f
w=e.a
v=e.b
u=n.a
t=n.b
s=u.a
r=t.a
u=u.b
t=t.b
if(x!=null){q=(s+r)/2-w
p=(u+t)/2-v
x.a95(0,s-q,u-p)
u=x.b
s=x.c
x.a95(0,r-q,t-p)
o=d.createLinearGradient(u+q-w,s+p-v,x.b+q-w,x.c+p-v)}else o=d.createLinearGradient(s-w,u-v,r-w,t-v)
A.azC(o,n.c,n.d,m===D.CO)
return o}else{m=d.createPattern(n.a3k(e,f,!1),"no-repeat")
m.toString
return m}},
a3k(c5,c6,c7){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7=this,b8="premultipliedAlpha",b9="u_resolution",c0="m_gradient",c1="attachShader",c2="bindBuffer",c3=c5.c,c4=c5.a
c3-=c4
x=C.d.f0(c3)
w=c5.d
v=c5.b
w-=v
u=C.d.f0(w)
if($.ajv==null)$.ajv=new A.ae2()
t=$.a16
if(t==null?$.a16="OffscreenCanvas" in window:t){t=new OffscreenCanvas(x,u)
s=null}else{t=B.U_(u,x)
t.className="gl-canvas"
s=B.b8()
r=B.b8()
q=t.style
q.position="absolute"
s=B.d(x/s)+"px"
q.width=s
s=B.d(u/r)+"px"
q.height=s
s=t
t=null}r=$.a16
if(r==null?$.a16="OffscreenCanvas" in window:r){t.toString
s=y.N
r=C.XD.qm(t,"webgl2",B.aN([b8,!1],s,y.z))
r.toString
p=new A.DY(r)
$.YC.b=B.w(s,y.a)
p.k1=t
t=$.YC}else{s.toString
t=$.Bm
t=(t==null?$.Bm=B.ajc():t)===1?"webgl":"webgl2"
r=y.N
t=C.hJ.qm(s,t,B.aN([b8,!1],r,y.z))
t.toString
p=new A.DY(t)
$.YC.b=B.w(r,y.a)
p.k1=s
t=$.YC}p.k2=x
p.k3=u
o=A.awj(b7.c,b7.d)
s=$.anY
if(s==null){s=$.Bm
if(s==null)s=$.Bm=B.ajc()
r=B.a([],y.u)
q=B.a([],y.l)
n=new A.J3(r,q,s===2,!1,new B.bx(""))
n.z7(11,"position")
n.z7(11,"color")
n.jA(14,"u_ctransform")
n.jA(11,"u_scale")
n.jA(11,"u_shift")
r.push(new A.nI("v_color",11,3))
m=new A.xs("main",B.a([],y.s))
q.push(m)
m.e5("gl_Position = ((u_ctransform * position) * u_scale) + u_shift;")
m.e5("v_color = color.zyxw;")
s=$.anY=n.c3(0)}r=b7.e
q=$.Bm
if(q==null)q=$.Bm=B.ajc()
l=B.a([],y.u)
k=B.a([],y.l)
q=q===2
n=new A.J3(l,k,q,!0,new B.bx(""))
n.e=1
n.z7(11,"v_color")
n.jA(9,b9)
n.jA(14,c0)
j=n.ch
if(j==null)j=n.ch=new A.nI(q?"gFragColor":"gl_FragColor",11,3)
m=new A.xs("main",B.a([],y.s))
k.push(m)
m.e5("vec4 localCoord = m_gradient * vec4(gl_FragCoord.x, u_resolution.y - gl_FragCoord.y, 0, 1);")
m.e5("float st = localCoord.x;")
i=A.aBa(n,m,o,r)
m.e5(j.a+" = "+i+" * scale + bias;")
h=n.c3(0)
g=s+"||"+h
f=J.aI(t.eZ(),g)
if(f==null){e=p.Jz(0,"VERTEX_SHADER",s)
d=p.Jz(0,"FRAGMENT_SHADER",h)
s=p.a
q=y.K.a(s.createProgram())
B.bL(s,c1,[q,e])
B.bL(s,c1,[q,d])
B.bL(s,"linkProgram",[q])
l=p.dx
if(!B.jx(B.bL(s,"getProgramParameter",[q,l==null?p.dx=s.LINK_STATUS:l])))B.H(B.cF(B.cB(B.bL(s,"getProgramInfoLog",[q]))))
f=new A.DZ(q)
J.fW(t.eZ(),g,f)}t=p.a
s=f.a
B.bL(t,"useProgram",[s])
q=b7.a
a0=q.a
a1=q.b
q=b7.b
a2=q.a
a3=q.b
a4=a2-a0
a5=a3-a1
a6=Math.sqrt(a4*a4+a5*a5)
q=a6<11920929e-14
a7=q?0:-a5/a6
a8=q?1:a4/a6
a9=r!==D.ee
b0=a9?c3/2:(a0+a2)/2-c4
b1=a9?w/2:(a1+a3)/2-v
b2=B.eH()
b2.qC(-b0,-b1,0)
b3=B.eH()
b4=b3.a
b4[0]=a8
b4[1]=a7
b4[4]=-a7
b4[5]=a8
b5=B.eH()
if(r!==D.a2G)b5.aZ(0,0.5,0)
if(a6>11920929e-14)b5.bx(0,1/a6)
c4=b7.f
if(c4!=null){c4=c4.a
b5.dg(0,1,-1)
b5.aZ(0,-c5.gb3().a,-c5.gb3().b)
b5.cr(0,new B.bS(c4))
b5.aZ(0,c5.gb3().a,c5.gb3().b)
b5.dg(0,1,-1)}b5.cr(0,b3)
b5.cr(0,b2)
o.O4(p,f)
B.bL(t,"uniformMatrix4fv",[p.lD(0,s,c0),!1,b5.a])
B.bL(t,"uniform2f",[p.lD(0,s,b9),x,u])
c4=$.ajv
c4.a3W(new B.x(0,0,0+c3,0+w),p,f,o,x,u)
b6=p.a84()
B.bL(t,c2,[p.gpC(),null])
B.bL(t,c2,[p.gAW(),null])
b6.toString
return b6}}
A.ur.prototype={}
A.J3.prototype={
z7(d,e){var x=new A.nI(e,d,1)
this.b.push(x)
return x},
jA(d,e){var x=new A.nI(e,d,2)
this.b.push(x)
return x},
IX(d,e){var x,w,v=this,u="varying ",t=e.c
switch(t){case 0:v.cx.a+="const "
break
case 1:if(v.z)x="in "
else x=v.Q?u:"attribute "
v.cx.a+=x
break
case 2:v.cx.a+="uniform "
break
case 3:x=v.z?"out ":u
v.cx.a+=x
break}x=v.cx
w=x.a+=A.axk(e.b)+" "+e.a
if(t===0)t=x.a=w+" = "
else t=w
x.a=t+";\n"},
c3(d){var x,w,v,u,t,s=this,r=s.z
if(r)s.cx.a+="#version 300 es\n"
x=s.e
if(x!=null){if(x===0)x="lowp"
else x=x===1?"mediump":"highp"
s.cx.a+="precision "+x+" float;\n"}if(r&&s.ch!=null){r=s.ch
r.toString
s.IX(s.cx,r)}for(r=s.b,x=r.length,w=s.cx,v=0;v<r.length;r.length===x||(0,B.K)(r),++v)s.IX(w,r[v])
for(r=s.c,x=r.length,u=w.ga9E(),v=0;v<r.length;r.length===x||(0,B.K)(r),++v){t=r[v]
w.a+="void "+t.b+"() {\n"
C.c.a8(t.c,u)
w.a+="}\n"}r=w.a
return r.charCodeAt(0)==0?r:r}}
A.xs.prototype={
e5(d){this.c.push(d)},
gam(d){return this.b}}
A.nI.prototype={
gam(d){return this.a}}
A.DZ.prototype={}
A.DY.prototype={
a3V(d,e,f,g){var x=this.k1,w=this.k2,v=this.k3
B.bL(e,"drawImage",[x,0,0,w,v,f,g,w,v])},
Jz(d,e,f){var x,w=this.a,v=w.createShader(w[e])
if(v==null)throw B.c(B.cF(B.aoZ(w,"getError")))
B.bL(w,"shaderSource",[v,f])
B.bL(w,"compileShader",[v])
x=this.c
if(!B.jx(B.bL(w,"getShaderParameter",[v,x==null?this.c=w.COMPILE_STATUS:x])))throw B.c(B.cF("Shader compilation failed: "+B.d(B.bL(w,"getShaderInfoLog",[v]))))
return v},
gpC(){var x=this.d
return x==null?this.d=this.a.ARRAY_BUFFER:x},
gAW(){var x=this.e
return x==null?this.e=this.a.ELEMENT_ARRAY_BUFFER:x},
gAX(){var x=this.f
return x==null?this.f=this.a.STATIC_DRAW:x},
lD(d,e,f){var x=B.bL(this.a,"getUniformLocation",[e,f])
if(x==null)throw B.c(B.cF(f+" not found"))
else return x},
a84(){var x,w=this,v=w.k1
if("transferToImageBitmap" in v){v.getContext("webgl2")
return w.k1.transferToImageBitmap()}else{v=w.k2
x=B.U_(w.k3,v)
w.a3V(0,x.getContext("2d"),0,0)
return x}}}
A.uu.prototype={
k(d,e){var x,w=this
if(e==null)return!1
if(w===e)return!0
if(J.R(e)!==B.C(w))return!1
if(e instanceof A.uu)if(e.a==w.a)if(e.c==w.c)if(e.d==w.d)if(e.f==w.f)x=B.ajz(e.b,w.b)
else x=!1
else x=!1
else x=!1
else x=!1
else x=!1
return x},
gt(d){var x=this
return B.W(x.a,x.b,x.c,x.d,x.e,x.y,x.f,x.r,!0,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a)}}
A.y3.prototype={
i(d){return"TileMode."+this.b}}
A.bj.prototype={
i(d){return"AnimationStatus."+this.b}}
A.b9.prototype={
i(d){return"<optimized out>#"+B.bZ(this)+"("+B.d(this.v4())+")"},
v4(){switch(this.gb8(this)){case D.c5:return"\u25b6"
case D.ba:return"\u25c0"
case D.J:return"\u23ed"
case D.M:return"\u23ee"}}}
A.KW.prototype={
i(d){return"_AnimationDirection."+this.b}}
A.BT.prototype={
i(d){return"AnimationBehavior."+this.b}}
A.oy.prototype={
gl(d){return B.b(this.y,"_value")},
sl(d,e){var x=this
x.ee(0)
x.xX(e)
x.aH()
x.r_()},
eu(d){this.sl(0,this.a)},
gez(){var x=this.r
if(!(x!=null&&x.a!=null))return 0
x=this.x
x.toString
return x.hb(0,this.z.a/1e6)},
xX(d){var x=this,w=x.a,v=x.b,u=C.d.L(d,w,v)
x.y=u
if(B.b(u,"_value")===w)x.ch=D.M
else if(B.b(x.y,"_value")===v)x.ch=D.J
else x.ch=x.Q===D.ah?D.c5:D.ba},
gb8(d){return B.b(this.ch,"_status")},
l7(d,e){var x=this
x.Q=D.ah
if(e!=null)x.sl(0,e)
return x.DW(x.b)},
c5(d){return this.l7(d,null)},
BM(d,e){var x=this
x.Q=D.el
if(e!=null)x.sl(0,e)
return x.DW(x.a)},
ds(d){return this.BM(d,null)},
fX(d,e,f){var x,w,v,u,t,s=this,r="_value"
B.b($.xn.u0$,"_accessibilityFeatures")
if(f==null){x=s.b-s.a
w=isFinite(x)?Math.abs(d-B.b(s.y,r))/x:1
if(s.Q===D.el&&s.f!=null){v=s.f
v.toString
u=v}else{v=s.e
v.toString
u=v}t=new B.az(C.d.aY(u.a*w))}else t=d===B.b(s.y,r)?C.C:f
s.ee(0)
v=t.a
if(v===C.C.a){if(B.b(s.y,r)!==d){s.y=C.d.L(d,s.a,s.b)
s.aH()}s.ch=s.Q===D.ah?D.J:D.M
s.r_()
return A.aiv()}return s.yE(new A.ab6(v/1e6,B.b(s.y,r),d,e,D.cp))},
DW(d){return this.fX(d,D.a4,null)},
KM(d){var x,w,v=this,u=$.as8(),t=d<0
v.Q=t?D.el:D.ah
x=t?v.a-0.01:v.b+0.01
B.b($.xn.u0$,"_accessibilityFeatures")
w=new A.xB(x,A.As(u,B.b(v.y,"_value")-x,d),D.cp)
w.a=D.a2J
v.ee(0)
return v.yE(w)},
yE(d){var x,w=this
w.x=d
w.z=C.C
w.y=C.d.L(d.ed(0,0),w.a,w.b)
x=w.r.qI(0)
w.ch=w.Q===D.ah?D.c5:D.ba
w.r_()
return x},
nV(d,e){this.z=this.x=null
this.r.nV(0,e)},
ee(d){return this.nV(d,!0)},
m(d){var x=this
x.r.m(0)
x.r=null
x.cO$.aL(0)
x.bD$.aL(0)
x.w7(0)},
r_(){var x=this,w=B.b(x.ch,"_status")
if(x.cx!==w){x.cx=w
x.pO(w)}},
a0P(d){var x,w=this
w.z=d
x=d.a/1e6
w.y=C.d.L(w.x.ed(0,x),w.a,w.b)
if(w.x.lb(x)){w.ch=w.Q===D.ah?D.J:D.M
w.nV(0,!1)}w.aH()
w.r_()},
v4(){var x,w,v=this,u=v.r,t=u==null,s=!t&&u.a!=null?"":"; paused"
if(t)x="; DISPOSED"
else x=u.b?"; silenced":""
u=v.c
w=u==null?"":"; for "+u
return B.d(v.w6())+" "+C.d.a7(B.b(v.y,"_value"),3)+s+x+w}}
A.ab6.prototype={
ed(d,e){var x,w,v=this,u=C.d.L(e/v.b,0,1)
if(u===0)return v.c
else{x=v.d
if(u===1)return x
else{w=v.c
return w+(x-w)*v.e.ao(0,u)}}},
hb(d,e){return(this.ed(0,e+0.001)-this.ed(0,e-0.001))/0.002},
lb(d){return d>this.b}}
A.KT.prototype={}
A.KU.prototype={}
A.KV.prototype={}
A.zu.prototype={
lt(d){return d}}
A.tw.prototype={
cw(){},
tW(){},
m(d){}}
A.ml.prototype={
ae(d,e){var x
this.cw()
x=this.bD$
x.b=!0
x.a.push(e)},
a5(d,e){if(this.bD$.B(0,e))this.tW()},
aH(){var x,w,v,u,t,s,r,q,p,o,n=this,m=n.bD$,l=B.c1(m,!0,y.aI)
for(u=l.length,t=0;t<u;++t){s={}
x=l[t]
s.a=null
try{if(m.v(0,x))x.$0()}catch(r){w=B.a8(r)
v=B.ap(r)
q=n instanceof B.bl?B.du(n):null
p=B.bq("while notifying listeners for "+B.aB(q==null?B.b6(n):q).i(0))
s=s.a
o=$.hB()
if(o!=null)o.$1(new B.bA(w,v,"animation library",p,s,!1))}}}}
A.kZ.prototype={
c2(d){var x
this.cw()
x=this.cO$
x.b=!0
x.a.push(d)},
dL(d){if(this.cO$.B(0,d))this.tW()},
pO(d){var x,w,v,u,t,s,r,q,p,o=this,n=o.cO$,m=B.c1(n,!0,y.cT)
for(u=m.length,t=0;t<u;++t){x=m[t]
try{if(n.v(0,x))x.$1(d)}catch(s){w=B.a8(s)
v=B.ap(s)
r=o instanceof B.bl?B.du(o):null
q=B.bq("while notifying status listeners for "+B.aB(r==null?B.b6(o):r).i(0))
p=$.hB()
if(p!=null)p.$1(new B.bA(w,v,"animation library",q,null,!1))}}}}
A.b4.prototype={
grK(){var x,w=this,v=w.c
if(v===$){x=B.bn(w.$ti.c)
B.bP(w.c,"_set")
w.c=x
v=x}return v},
B(d,e){this.b=!0
this.grK().aL(0)
return C.c.B(this.a,e)},
aL(d){this.b=!1
C.c.sn(this.a,0)
this.grK().aL(0)},
v(d,e){var x=this,w=x.a
if(w.length<3)return C.c.v(w,e)
if(x.b){x.grK().U(0,w)
x.b=!1}return x.grK().v(0,e)},
gT(d){var x=this.a
return new J.fn(x,x.length)},
gS(d){return this.a.length===0},
gb0(d){return this.a.length!==0}}
A.he.prototype={}
A.fZ.prototype={
i(d){var x=this
if(x.ghy(x)===0)return A.agA(x.ghA(),x.ghB())
if(x.ghA()===0)return A.agz(x.ghy(x),x.ghB())
return A.agA(x.ghA(),x.ghB())+" + "+A.agz(x.ghy(x),0)},
k(d,e){var x=this
if(e==null)return!1
return e instanceof A.fZ&&e.ghA()===x.ghA()&&e.ghy(e)===x.ghy(x)&&e.ghB()===x.ghB()},
gt(d){var x=this
return B.W(x.ghA(),x.ghy(x),x.ghB(),C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a)}}
A.cd.prototype={
ghA(){return this.a},
ghy(d){return 0},
ghB(){return this.b},
a0(d,e){return new A.cd(this.a-e.a,this.b-e.b)},
Y(d,e){return new A.cd(this.a+e.a,this.b+e.b)},
a2(d,e){return new A.cd(this.a*e,this.b*e)},
kJ(d){var x=d.a/2,w=d.b/2
return new B.o(x+this.a*x,w+this.b*w)},
zb(d){var x=d.a/2,w=d.b/2
return new B.o(x+this.a*x,w+this.b*w)},
a5K(d,e){var x=e.a,w=d.a,v=(e.c-x-w)/2,u=e.b,t=d.b,s=(e.d-u-t)/2
x=x+v+this.a*v
u=u+s+this.b*s
return new B.x(x,u,x+w,u+t)},
V(d){return this},
i(d){return A.agA(this.a,this.b)}}
A.zF.prototype={
a2(d,e){return new A.zF(this.a*e,this.b*e,this.c*e)},
V(d){var x=this
switch(d.a){case 0:return new A.cd(x.a-x.b,x.c)
case 1:return new A.cd(x.a+x.b,x.c)}},
ghA(){return this.a},
ghy(d){return this.b},
ghB(){return this.c}}
A.wS.prototype={
i(d){return"RenderComparison."+this.b}}
A.hI.prototype={
h(d,e){return this.b.h(0,e)},
k(d,e){var x=this
if(e==null)return!1
if(x===e)return!0
if(J.R(e)!==B.C(x))return!1
return x.OC(0,e)&&B.q(x).j("hI<hI.T>").b(e)&&A.ajC(e.b,x.b)},
gt(d){return B.W(B.C(this),this.a,this.b,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a)},
i(d){return"ColorSwatch(primary value: "+this.OD(0)+")"}}
A.v6.prototype={
JM(d){var x=this
return new A.v6(x.a,x.b,x.c,x.d,d,x.f)},
k(d,e){var x=this
if(e==null)return!1
if(J.R(e)!==B.C(x))return!1
return e instanceof A.v6&&e.a==x.a&&e.b==x.b&&J.f(e.c,x.c)&&e.d==x.d&&J.f(e.e,x.e)&&e.f==x.f},
gt(d){var x=this
return B.W(x.a,x.b,x.c,x.e,x.f,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a)},
i(d){var x,w=this,v=""+"ImageConfiguration(",u=w.a
if(u!=null){v+="bundle: "+u.i(0)
x=!0}else x=!1
u=w.b
if(u!=null){if(x)v+=", "
u=v+("devicePixelRatio: "+C.d.a7(u,1))
v=u
x=!0}u=w.c
if(u!=null){if(x)v+=", "
u=v+("locale: "+u.i(0))
v=u
x=!0}u=w.d
if(u!=null){if(x)v+=", "
u=v+("textDirection: "+u.i(0))
v=u
x=!0}u=w.e
if(u!=null){if(x)v+=", "
u=v+("size: "+u.i(0))
v=u
x=!0}u=w.f
if(u!=null){if(x)v+=", "
u=v+("platform: "+B.apY(u))
v=u}v+=")"
return v.charCodeAt(0)==0?v:v}}
A.BN.prototype={}
A.hT.prototype={
k(d,e){var x
if(e==null)return!1
if(e instanceof A.hT)if(e.a===this.a)if(e.b==this.b)x=B.eU(e.f,this.f)
else x=!1
else x=!1
else x=!1
return x},
gt(d){return B.W(this.a,this.b,this.c,!1,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a)},
i(d){return"InlineSpanSemanticsInformation{text: "+this.a+", semanticsLabel: "+B.d(this.b)+", recognizer: "+B.d(this.c)+"}"}}
A.fx.prototype={
Cx(d){var x={}
x.a=null
this.bf(new A.ZM(x,d,new A.BN()))
return x.a},
BU(d,e){var x,w=new B.bx("")
this.JE(w,d,e)
x=w.a
return x.charCodeAt(0)==0?x:x},
MS(d){return this.BU(d,!0)},
MR(){return this.BU(!0,!0)},
a91(d){return this.BU(!0,d)},
ak(d,e){var x={}
if(e<0)return null
x.a=null
this.bf(new A.ZL(x,e,new A.BN()))
return x.a},
k(d,e){if(e==null)return!1
if(this===e)return!0
if(J.R(e)!==B.C(this))return!1
return e instanceof A.fx&&J.f(e.a,this.a)},
gt(d){return J.cD(this.a)}}
A.xW.prototype={
i(d){return"TextOverflow."+this.b}}
A.k7.prototype={
i(d){return"PlaceholderDimensions("+this.a.i(0)+", "+B.d(this.d)+")"}}
A.K4.prototype={
i(d){return"TextWidthBasis."+this.b}}
A.a9z.prototype={}
A.K0.prototype={
a4(){this.go=this.fy=this.a=null},
scG(d,e){var x,w,v=this
if(J.f(v.c,e))return
x=v.c
x=x==null?null:x.a
if(!J.f(x,e.a))v.dx=null
x=v.c
x=x==null?null:x.aQ(0,e)
w=x==null?D.d8:x
v.c=e
x=w.a
if(x>=3)v.a4()
else if(x>=2)v.b=!0},
sls(d,e){if(this.d===e)return
this.d=e
this.a4()},
sbH(d,e){var x=this
if(x.e===e)return
x.e=e
x.a4()
x.dx=null},
snu(d){var x=this
if(x.f===d)return
x.f=d
x.a4()
x.dx=null},
sKm(d,e){if(this.r==e)return
this.r=e
this.a4()},
siN(d,e){if(J.f(this.x,e))return
this.x=e
this.a4()},
sn3(d,e){if(this.y==e)return
this.y=e
this.a4()},
sio(d,e){if(J.f(this.z,e))return
this.z=e
this.a4()},
snv(d){if(this.Q===d)return
this.Q=d
this.a4()},
lJ(d){if(d==null||d.length===0||B.eU(d,this.db))return
this.db=d
this.a4()},
EG(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null,e=g.c.a
if(e==null)e=f
else{x=g.d
w=g.e
if(w==null)w=d
v=g.f
u=g.y
t=g.r
s=g.x
r=g.z
q=e.x
p=e.y
o=e.d
n=e.r
if(n==null)n=14
e=e.cx
if(r==null)r=f
else{m=r.a
l=r.geo()
k=r.d
k=k==null?f:k*v
j=r.e
i=r.y
h=r.r
i=A.axC(m,l,k,r.x,h,!0,j,i)
r=i}w=B.aia(t,o,n*v,p,q,e,s,u,r,x,w,f)
e=w}if(e==null){e=g.d
x=g.e
if(x==null)x=d
w=g.f
v=g.y
u=g.ch
u=B.aia(g.r,f,14*w,f,f,f,g.x,v,f,e,x,u)
e=u}return e},
TT(){return this.EG(null)},
gcA(){var x,w,v=this,u=v.dx
if(u==null){x=B.ai9(v.EG(C.a_))
u=v.c
if(u==null)w=null
else{u=u.a
w=u==null?null:u.CB(v.f)}if(w!=null)x.uR(0,w)
x.oH(0," ")
u=x.c3(0)
u.hW(0,D.Y0)
v.dx=u}return u.gaK(u)},
gaI(d){var x=this.Q,w=this.a
x=x===D.a2B?w.gB3():w.gaI(w)
return Math.ceil(x)},
d8(d){var x
switch(d.a){case 0:x=this.a
return x.gkK(x)
case 1:x=this.a
return x.ga5C(x)}},
EF(){var x,w,v=this,u=v.c
if(u==null)throw B.c(B.a6("TextPainter.text must be set to a non-null value before using the TextPainter."))
x=B.ai9(v.TT())
w=v.f
u.Jp(0,x,v.db,w)
v.cy=x.ga7C()
v.a=x.c3(0)
v.b=!1},
Gb(d,e){var x,w,v=this
v.a.hW(0,new B.lu(e))
if(d!==e){switch(v.Q.a){case 1:x=Math.ceil(v.a.gB3())
break
case 0:x=Math.ceil(v.a.ga6s())
break
default:x=null}x=J.aki(x,d,e)
w=v.a
if(x!==Math.ceil(w.gaI(w)))v.a.hW(0,new B.lu(x))}},
ut(d,e,f){var x=this,w=x.a==null
if(!w&&f===x.dy&&e===x.fr)return
if(x.b||w)x.EF()
x.dy=f
x.fr=e
x.go=x.fy=null
x.Gb(f,e)
x.cx=x.a.vj()},
a6b(d){return this.ut(d,1/0,0)},
aP(d,e){var x,w=this,v=w.dy,u=w.fr
if(w.a==null||v==null||u==null)throw B.c(B.a6("TextPainter.paint called when text geometry was not yet calculated.\nPlease call layout() before paint() to position the text before painting it."))
if(w.b){w.EF()
w.Gb(v,u)}x=w.a
x.toString
d.iB(0,x,e)},
Cs(d){var x=this.c.ak(0,d)
if(x==null)return null
return(x&63488)===55296?d+2:d+1},
Ct(d){var x=d-1,w=this.c.ak(0,x)
if(w==null)return null
return(w&63488)===55296?d-2:x},
Fw(d,e){var x,w,v,u,t,s,r,q,p,o,n=this,m=n.c.MS(!1),l=n.c
l.toString
x=l.ak(0,Math.max(0,d-1))
if(x==null)return null
w=(x&63488)===55296||n.c.ak(0,d)===8205||x===8207||x===8206
v=w?2:1
u=B.a([],y.G)
for(l=-m.length,t=!w,s=x===10;u.length===0;){r=d-v
u=n.a.Cg(r,d,D.kj)
if(u.length===0){if(t&&s)break
if(r<l)break
v*=2
continue}q=C.c.gH(u)
if(s){l=q.d
return new B.x(n.gxh().a,l,n.gxh().a,l+l-q.b)}l=q.e
p=l===C.x?q.c:q.a
o=l===C.a_?p-(e.c-e.a):p
l=n.a
l=Math.min(o,B.d2(l.gaI(l)))
t=n.a
return new B.x(l,q.b,Math.min(o,B.d2(t.gaI(t))),q.d)}return null},
Fv(d,e){var x,w,v,u,t,s,r,q,p,o=this,n=o.c.MS(!1),m=o.c
m.toString
x=n.length
w=m.ak(0,Math.min(d,x-1))
if(w==null)return null
v=(w&63488)===55296||w===8205||w===8207||w===8206
u=v?2:1
t=B.a([],y.G)
for(m=x<<1>>>0,x=!v;t.length===0;){s=d+u
t=o.a.Cg(d,s,D.kj)
if(t.length===0){if(x)break
if(s>=m)break
u*=2
continue}r=C.c.gI(t)
m=r.e
q=m===C.x?r.a:r.c
p=m===C.a_?q-(e.c-e.a):q
m=o.a
m=Math.min(p,B.d2(m.gaI(m)))
x=o.a
return new B.x(m,r.b,Math.min(p,B.d2(x.gaI(x))),r.d)}return null},
gxh(){var x=this
switch(x.d.a){case 0:return C.i
case 1:return new B.o(x.gaI(x),0)
case 2:return new B.o(x.gaI(x)/2,0)
case 3:case 4:switch(x.e.a){case 0:return new B.o(x.gaI(x),0)
case 1:return C.i}break
case 5:switch(x.e.a){case 0:return C.i
case 1:return new B.o(x.gaI(x),0)}break}},
kx(d,e){var x,w,v,u,t=this
if(d.k(0,t.fy)&&e.k(0,t.go))return
x=d.a
switch(d.b.a){case 0:w=t.Fw(x,e)
if(w==null)w=t.Fv(x,e)
break
case 1:w=t.Fv(x,e)
if(w==null)w=t.Fw(x,e)
break
default:w=null}v=w!=null
u=v?new B.o(w.a,w.b):t.gxh()
t.fx=new A.a9z(u,v?w.d-w.b:null)
t.fy=d
t.go=e},
vk(d,e,f){return this.a.ql(d.a,d.b,e,f)}}
A.qU.prototype={
gJY(d){return this.e},
gCc(){return!0},
iG(d,e){y.Z.b(d)},
Jp(d,e,f,g){var x,w,v,u,t,s=this.a,r=s!=null
if(r)e.uR(0,s.CB(g))
s=this.b
if(s!=null)try{e.oH(0,s)}catch(v){s=B.a8(v)
if(s instanceof B.h_){x=s
w=B.ap(v)
B.dB(new B.bA(x,w,"painting library",B.bq("while building a TextSpan"),null,!1))
e.oH(0,"\ufffd")}else throw v}s=this.c
if(s!=null)for(u=s.length,t=0;t<s.length;s.length===u||(0,B.K)(s),++t)s[t].Jp(0,e,f,g)
if(r)e.dY(0)},
bf(d){var x,w,v
if(this.b!=null)if(!d.$1(this))return!1
x=this.c
if(x!=null)for(w=x.length,v=0;v<x.length;x.length===w||(0,B.K)(x),++v)if(!x[v].bf(d))return!1
return!0},
Nw(d,e){var x,w,v,u,t=this.b
if(t==null)return null
x=d.b
w=d.a
v=e.a
u=v+t.length
if(!(v===w&&x===C.p))if(!(v<w&&w<u))t=u===w&&x===C.ay
else t=!0
else t=!0
if(t)return this
e.a=u
return null},
JE(d,e,f){var x,w,v=this.b
if(v!=null)d.a+=v
v=this.c
if(v!=null)for(x=v.length,w=0;w<v.length;v.length===x||(0,B.K)(v),++w)v[w].JE(d,e,f)},
JD(d,e,f){var x,w,v=this.b
if(v!=null){x=B.a([],y.L)
d.push(A.alZ(v,null,null,x))}v=this.c
if(v!=null)for(x=v.length,w=0;w<v.length;v.length===x||(0,B.K)(v),++w)v[w].JD(d,e,!1)},
JC(d){return this.JD(d,null,!1)},
a2I(d,e){var x,w,v,u=this.b
if(u==null)return null
x=e.a
w=d-x
v=u.length
if(w<v)return C.b.ak(u,w)
e.a=x+v
return null},
aQ(d,e){var x,w,v,u,t,s=this
if(s===e)return D.e2
if(B.C(e)!==B.C(s))return D.d8
if(e.b==s.b){x=s.c
x=x==null?null:x.length
w=e.c
x=x!=(w==null?null:w.length)||s.a==null!==(e.a==null)}else x=!0
if(x)return D.d8
x=s.a
if(x!=null){w=e.a
w.toString
v=x.aQ(0,w)
u=v.a>0?v:D.e2
if(u===D.d8)return u}else u=D.e2
x=s.c
if(x!=null)for(w=e.c,t=0;t<x.length;++t){v=x[t].aQ(0,w[t])
if(v.a>u.a)u=v
if(u===D.d8)return u}return u},
k(d,e){var x,w=this
if(e==null)return!1
if(w===e)return!0
if(J.R(e)!==B.C(w))return!1
if(!w.P2(0,e))return!1
if(e instanceof A.qU)if(e.b==w.b)x=w.e.k(0,e.e)&&B.eU(e.c,w.c)
else x=!1
else x=!1
return x},
gt(d){var x=this,w=null
return B.W(A.fx.prototype.gt.call(x,x),x.b,w,w,w,w,x.e,B.eT(x.c),C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a)},
ct(){return"TextSpan"},
$iau:1,
$iiX:1,
gBl(){return null},
gBm(){return null}}
A.u.prototype={
geo(){return this.e},
gmh(d){return this.d},
oT(d,e,f,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.dx
if(g==null&&b1==null)x=f==null?h.b:f
else x=null
w=h.dy
if(w==null&&d==null)v=e==null?h.c:e
else v=null
u=a8==null?h.r:a8
t=b0==null?h.x:b0
s=b4==null?h.z:b4
r=c0==null?h.Q:c0
q=b9==null?h.ch:b9
p=b2==null?h.cx:b2
g=b1==null?g:b1
w=d==null?w:d
o=b8==null?h.k1:b8
n=a1==null?h.fr:a1
m=a2==null?h.fx:a2
l=a3==null?h.fy:a3
k=a4==null?h.go:a4
j=a5==null?h.gmh(h):a5
i=a6==null?h.geo():a6
return A.eM(w,v,x,null,n,m,l,k,j,i,h.k2,u,h.y,t,g,p,h.a,h.cy,s,h.db,h.k3,h.f,o,q,r)},
a34(d){return this.oT(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,d,null,null,null,null,null,null)},
eI(d){return this.oT(null,null,d,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)},
JO(d,e){return this.oT(null,null,d,null,null,null,null,null,null,null,null,e,null,null,null,null,null,null,null,null,null,null,null,null)},
JJ(d){return this.oT(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,d,null,null,null,null,null,null,null,null)},
bE(a1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0
if(a1==null)return this
if(!a1.a)return a1
x=a1.b
w=a1.c
v=a1.r
u=a1.x
t=a1.y
s=a1.z
r=a1.Q
q=a1.ch
p=a1.cx
o=a1.cy
n=a1.db
m=a1.dx
l=a1.dy
k=a1.k1
j=a1.k2
i=a1.fr
h=a1.fx
g=a1.fy
f=a1.go
e=a1.gmh(a1)
d=a1.geo()
a0=a1.f
return this.oT(l,w,x,null,i,h,g,f,e,d,j,v,t,u,m,p,o,s,n,a1.k3,a0,k,q,r)},
CB(d){var x,w,v=this,u=v.geo(),t=v.r
t=t==null?null:t*d
x=v.dy
if(x==null){x=v.c
if(x!=null){w=new B.bc(new B.bg())
w.saG(0,x)
x=w}else x=null}return B.anG(x,v.b,v.fr,v.fx,v.fy,v.go,v.d,u,v.k2,t,v.y,v.x,v.dx,v.cx,v.cy,v.z,v.db,v.k1,v.ch,v.Q)},
aQ(d,e){var x,w=this
if(w===e)return D.e2
if(w.a===e.a)if(w.d==e.d)if(w.r==e.r)if(w.x==e.x)if(w.z==e.z)if(w.Q==e.Q)if(w.ch==e.ch)if(w.cx==e.cx)x=w.dx!=e.dx||w.dy!=e.dy||!B.eU(w.k1,e.k1)||!B.eU(w.k2,e.k2)||!B.eU(w.geo(),e.geo())||!1
else x=!0
else x=!0
else x=!0
else x=!0
else x=!0
else x=!0
else x=!0
else x=!0
if(x)return D.d8
if(!J.f(w.b,e.b)||!J.f(w.c,e.c)||!J.f(w.fr,e.fr)||!J.f(w.fx,e.fx)||w.fy!=e.fy||w.go!=e.go)return D.Yc
return D.e2},
k(d,e){var x,w=this
if(e==null)return!1
if(w===e)return!0
if(J.R(e)!==B.C(w))return!1
if(e instanceof A.u)if(e.a===w.a)if(J.f(e.b,w.b))if(J.f(e.c,w.c))if(e.r==w.r)if(e.x==w.x)if(e.z==w.z)if(e.Q==w.Q)if(e.ch==w.ch)if(e.cx==w.cx)if(e.dx==w.dx)if(e.dy==w.dy)if(B.eU(e.k1,w.k1))if(B.eU(e.k2,w.k2))if(J.f(e.fr,w.fr))if(J.f(e.fx,w.fx))if(e.fy==w.fy)if(e.go==w.go)if(e.d==w.d)if(B.eU(e.geo(),w.geo()))x=!0
else x=!1
else x=!1
else x=!1
else x=!1
else x=!1
else x=!1
else x=!1
else x=!1
else x=!1
else x=!1
else x=!1
else x=!1
else x=!1
else x=!1
else x=!1
else x=!1
else x=!1
else x=!1
else x=!1
else x=!1
return x},
gt(d){var x=this
return B.eT([x.a,x.b,x.c,x.r,x.x,x.y,x.z,x.Q,x.ch,x.cx,x.cy,x.db,x.dx,x.dy,B.eT(x.k1),B.eT(x.k2),x.fr,x.fx,x.fy,x.go,x.d,B.eT(x.geo()),x.f,x.k3])},
ct(){return"TextStyle"}}
A.Qo.prototype={}
A.J8.prototype={
i(d){return"Simulation"}}
A.a6l.prototype={
i(d){return"SpringDescription(mass: "+C.d.a7(this.a,1)+", stiffness: "+C.e.a7(this.b,1)+", damping: "+C.d.a7(this.c,1)+")"}}
A.xC.prototype={
i(d){return"SpringType."+this.b}}
A.xB.prototype={
ed(d,e){return this.b+this.c.ed(0,e)},
hb(d,e){return this.c.hb(0,e)},
lb(d){var x=this.c
return A.BA(x.ed(0,d),0,this.a.a)&&A.BA(x.hb(0,d),0,this.a.c)},
i(d){var x=this.c
return"SpringSimulation(end: "+C.d.a7(this.b,1)+", "+x.gC0(x).i(0)+")"}}
A.a9J.prototype={
ed(d,e){return(this.b+this.c*e)*Math.pow(2.718281828459045,this.a*e)},
hb(d,e){var x=this.a,w=Math.pow(2.718281828459045,x*e),v=this.c
return x*(this.b+v*e)*w+v*w},
gC0(d){return D.ZY}}
A.ac3.prototype={
ed(d,e){var x=this
return x.c*Math.pow(2.718281828459045,x.a*e)+x.d*Math.pow(2.718281828459045,x.b*e)},
hb(d,e){var x=this,w=x.a,v=x.b
return x.c*w*Math.pow(2.718281828459045,w*e)+x.d*v*Math.pow(2.718281828459045,v*e)},
gC0(d){return D.a__}}
A.adT.prototype={
ed(d,e){var x=this,w=x.a*e
return Math.pow(2.718281828459045,x.b*e)*(x.c*Math.cos(w)+x.d*Math.sin(w))},
hb(d,e){var x,w=this,v=w.b,u=Math.pow(2.718281828459045,v*e),t=w.a,s=t*e,r=Math.cos(s),q=Math.sin(s)
s=w.d
x=w.c
return u*(s*t*r-x*t*q)+v*u*(s*q+x*r)},
gC0(d){return D.ZZ}}
A.y8.prototype={
i(d){return"Tolerance(distance: \xb1"+B.d(this.a)+", time: \xb10.001, velocity: \xb1"+B.d(this.c)+")"}}
A.l7.prototype={}
A.cw.prototype={
a3C(d){var x,w,v,u=this.b4$
for(x=B.q(this).j("cw.1?");u!=null;){w=x.a(u.e)
v=u.ia(d)
if(v!=null)return v+w.a.b
u=w.ax$}return null},
zR(d){var x,w,v,u,t=this.b4$
for(x=B.q(this).j("cw.1"),w=null;t!=null;){v=t.e
v.toString
x.a(v)
u=t.ia(d)
if(u!=null){u+=v.a.b
w=w!=null?Math.min(w,u):u}t=v.ax$}return w},
tL(d,e){var x,w,v={},u=v.a=this.f6$
for(x=B.q(this).j("cw.1");u!=null;u=w){u=u.e
u.toString
x.a(u)
if(d.kI(new A.a2u(v,e,u),u.a,e))return!0
w=u.cg$
v.a=w}return!1},
kR(d,e){var x,w,v,u,t,s=this.b4$
for(x=B.q(this).j("cw.1"),w=e.a,v=e.b;s!=null;){u=s.e
u.toString
x.a(u)
t=u.a
d.ep(s,new B.o(t.a+w,t.b+v))
s=u.ax$}}}
A.yF.prototype={
an(d){this.Ps(0)}}
A.h1.prototype={$idi:1}
A.be.prototype={
gJt(){return this.dF$},
G1(d,e){var x,w,v,u=this,t=d.e
t.toString
x=B.q(u).j("be.1")
x.a(t);++u.dF$
if(e==null){t=t.ax$=u.b4$
if(t!=null){t=t.e
t.toString
x.a(t).cg$=d}u.b4$=d
if(u.f6$==null)u.f6$=d}else{w=e.e
w.toString
x.a(w)
v=w.ax$
if(v==null){t.cg$=e
u.f6$=w.ax$=d}else{t.ax$=v
t.cg$=e
t=v.e
t.toString
x.a(t).cg$=w.ax$=d}}},
U(d,e){},
H9(d){var x,w,v,u,t=this,s=d.e
s.toString
x=B.q(t).j("be.1")
x.a(s)
w=s.cg$
v=s.ax$
if(w==null)t.b4$=v
else{u=w.e
u.toString
x.a(u).ax$=v}v=s.ax$
if(v==null)t.f6$=w
else{v=v.e
v.toString
x.a(v).cg$=w}s.ax$=s.cg$=null;--t.dF$},
a6D(d,e){var x=this,w=d.e
w.toString
if(B.q(x).j("be.1").a(w).cg$==e)return
x.H9(d)
x.G1(d,e)
x.a4()},
i3(){var x,w,v,u=this.b4$
for(x=B.q(this).j("be.1");u!=null;){w=u.a
v=this.a
if(w<=v){u.a=v+1
u.i3()}w=u.e
w.toString
u=x.a(w).ax$}},
bf(d){var x,w,v=this.b4$
for(x=B.q(this).j("be.1");v!=null;){d.$1(v)
w=v.e
w.toString
v=x.a(w).ax$}},
ga4E(d){return this.b4$}}
A.wO.prototype={
o3(){this.a4()}}
A.e7.prototype={
i(d){var x=B.a(["offset="+B.d(this.a)],y.s)
x.push(this.qJ(0))
return C.c.be(x,"; ")}}
A.wU.prototype={
fU(d){if(!(d.e instanceof A.e7))d.e=new A.e7(null,null,C.i)},
scG(d,e){var x=this,w=x.E
switch(w.c.aQ(0,e).a){case 0:case 1:return
case 2:w.scG(0,e)
x.ah=x.O=null
x.xn(e)
x.aA()
x.ar()
break
case 3:w.scG(0,e)
x.ah=x.O=x.aS=null
x.xn(e)
x.a4()
break}},
xn(d){this.af=B.a([],y.y)
d.bf(new A.a2O(this))},
sls(d,e){var x=this.E
if(x.d===e)return
x.sls(0,e)
this.aA()},
sbH(d,e){var x=this.E
if(x.e===e)return
x.sbH(0,e)
this.a4()},
sOh(d){if(this.u===d)return
this.u=d
this.a4()},
sBs(d,e){var x,w=this
if(w.w===e)return
w.w=e
x=e===D.bC?"\u2026":null
w.E.sKm(0,x)
w.a4()},
snu(d){var x=this.E
if(x.f===d)return
x.snu(d)
this.aS=null
this.a4()},
sn3(d,e){var x=this.E
if(x.y==e)return
x.sn3(0,e)
this.aS=null
this.a4()},
siN(d,e){var x=this.E
if(J.f(x.x,e))return
x.siN(0,e)
this.aS=null
this.a4()},
sio(d,e){var x=this.E
if(J.f(x.z,e))return
x.sio(0,e)
this.aS=null
this.a4()},
snv(d){var x=this.E
if(x.Q===d)return
x.snv(d)
this.aS=null
this.a4()},
sq8(d,e){return},
d8(d){this.xZ(B.z.prototype.gbg.call(this))
return this.E.d8(C.L)},
fG(d){return!0},
cM(d,e){var x,w,v,u,t,s,r,q,p,o,n={},m=this.E,l=m.a.fS(e),k=m.c.Cx(l)
if(k!=null&&!0){x=new B.jU(y.B.a(k))
d.kC()
x.b=C.c.gI(d.b)
d.a.push(x)
w=!0}else w=!1
x=n.a=this.b4$
v=B.q(this).j("be.1")
u=y.k
t=0
while(!0){if(!(x!=null&&t<m.cx.length))break
x=x.e
x.toString
u.a(x)
s=x.a
r=s.a
s=s.b
q=new Float64Array(16)
p=new B.b7(q)
p.di()
q[14]=0
q[13]=s
q[12]=r
r=x.e
p.lF(0,r,r,r)
if(d.tg(new A.a2Q(n,e,x),e,p))return!0
x=n.a.e
x.toString
o=v.a(x).ax$
n.a=o;++t
x=o}return w},
GJ(d,e){var x=this.u||this.w===D.bC?d:1/0
this.E.ut(0,x,e)},
o3(){this.Dy()
this.E.a4()},
xZ(d){this.E.lJ(this.bd)
this.GJ(d.b,d.a)},
GI(d,e){var x,w,v,u,t,s,r,q=this,p="_placeholderSpans",o=q.dF$
if(o===0)return B.a([],y.S)
x=q.b4$
w=B.a5(o,D.Bq,!1,y.J)
v=new B.aC(0,d.b,0,1/0).eV(0,q.E.f)
for(o=B.q(q).j("be.1"),u=!e,t=0;x!=null;){if(u){x.dd(0,v,!0)
s=x.rx
s.toString
switch(J.aI(B.b(q.af,p),t).gdB()){case C.d0:x.nD(J.Ss(J.aI(B.b(q.af,p),t)))
break
case C.d1:case C.d2:case C.d4:case C.d5:case C.d3:break}r=s}else r=x.hk(v)
J.aI(B.b(q.af,p),t).gdB()
w[t]=new A.k7(r,J.Ss(J.aI(B.b(q.af,p),t)))
s=x.e
s.toString
x=o.a(s).ax$;++t}return w},
ZB(d){return this.GI(d,!1)},
ZC(){var x,w,v=this.b4$,u=y.k,t=this.E,s=B.q(this).j("be.1"),r=0
while(!0){if(!(v!=null&&r<t.cx.length))break
x=v.e
x.toString
u.a(x)
w=t.cx[r]
x.a=new B.o(w.a,w.b)
x.e=t.cy[r]
v=s.a(x).ax$;++r}},
ZA(){var x,w,v
for(x=B.b(this.af,"_placeholderSpans"),w=x.length,v=0;v<x.length;x.length===w||(0,B.K)(x),++v)switch(x[v].gdB()){case C.d0:case C.d1:case C.d2:return!1
case C.d3:case C.d5:case C.d4:continue}return!0},
cd(d){var x,w,v=this
if(!v.ZA())return C.t
x=v.E
x.lJ(v.GI(d,!0))
v.GJ(d.b,d.a)
w=x.gaI(x)
x=x.a
return d.bA(new B.M(w,Math.ceil(x.gaK(x))))},
c8(){var x,w,v,u,t,s,r,q,p,o=this,n=null,m=B.z.prototype.gbg.call(o)
o.bd=o.ZB(m)
o.xZ(m)
o.ZC()
x=o.E
w=x.gaI(x)
v=x.a
v=Math.ceil(v.gaK(v))
u=x.a
t=u.gKb(u)
u=o.rx=m.bA(new B.M(w,v))
t=u.b<v||t
s=u.a<w
if(s||t)switch(o.w.a){case 3:o.aa=!1
o.aS=null
break
case 0:case 2:o.aa=!0
o.aS=null
break
case 1:o.aa=!0
w=A.kp(n,x.c.a,"\u2026")
v=x.e
v.toString
u=x.f
r=A.a7B(n,x.x,n,n,w,C.bB,v,n,u,D.bk)
r.a6b(0)
if(s){switch(x.e.a){case 0:q=r.gaI(r)
p=0
break
case 1:p=o.rx.a
q=p-r.gaI(r)
break
default:q=n
p=q}o.aS=A.alN(new B.o(q,0),new B.o(p,0),B.a([D.m,D.kA],y.O),n,D.ee)}else{p=o.rx.b
x=r.a
o.aS=A.alN(new B.o(0,p-Math.ceil(x.gaK(x))/2),new B.o(0,p),B.a([D.m,D.kA],y.O),n,D.ee)}break}else{o.aa=!1
o.aS=null}},
aP(d,e){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k={}
l.xZ(B.z.prototype.gbg.call(l))
if(l.aa){x=l.rx
w=e.a
v=e.b
u=new B.x(w,v,w+x.a,v+x.b)
if(l.aS!=null){x=d.gco(d)
x.qv(0,u,new B.bc(new B.bg()))}else d.gco(d).cI(0)
d.gco(d).jH(0,u)}x=l.E
x.aP(d.gco(d),e)
w=k.a=l.b4$
v=y.k
t=e.a
s=e.b
r=B.q(l).j("be.1")
q=0
while(!0){if(!(w!=null&&q<x.cx.length))break
w=w.e
w.toString
v.a(w)
p=w.e
p.toString
o=B.b(l.fr,"_needsCompositing")
w=w.a
d.Mc(o,new B.o(t+w.a,s+w.b),B.GA(p,p,p),new A.a2R(k))
p=k.a.e
p.toString
n=r.a(p).ax$
k.a=n;++q
w=n}if(l.aa){if(l.aS!=null){d.gco(d).aZ(0,t,s)
m=new B.bc(new B.bg())
m.stn(C.ke)
m.sO5(l.aS)
x=d.gco(d)
w=l.rx
x.cV(0,new B.x(0,0,0+w.a,0+w.b),m)}d.gco(d).cF(0)}},
fD(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this
i.ip(d)
x=i.E
w=x.c
w.toString
v=B.a([],y.M)
w.JC(v)
i.bw=v
if(C.c.ix(v,new A.a2P()))d.a=d.b=!0
else{w=i.O
if(w==null){u=new B.bx("")
t=B.a([],y.L)
for(w=i.bw,s=w.length,r=0,q=0,p="";q<w.length;w.length===s||(0,B.K)(w),++q){o=w[q]
n=o.b
if(n==null)n=o.a
for(p=o.f,m=p.length,l=0;l<p.length;p.length===m||(0,B.K)(p),++l){k=p[l]
j=k.a
t.push(k.zD(0,new B.dW(r+j.a,r+j.b)))}p=u.a+=n
r+=n.length}w=i.O=new B.cn(p.charCodeAt(0)==0?p:p,t)}d.as=w
d.d=!0
x=x.e
x.toString
d.a_=x}},
mq(a4,a5,a6){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=null,a1=B.a([],y.T),a2=d.E,a3=a2.e
a3.toString
x=B.hc(a0,y.g)
w=d.ah
if(w==null){w=d.bw
w.toString
w=d.ah=A.apR(w)}for(v=w.length,u=a0,t=a3,s=0,r=0,q=0;q<w.length;w.length===v||(0,B.K)(w),++q,r=o){p=w[q]
a3=p.a
o=r+a3.length
n=r<o
m=n?o:r
n=n?r:o
l=B.z.prototype.gbg.call(d)
a2.lJ(d.bd)
k=l.b
k=d.u||d.w===D.bC?k:1/0
a2.ut(0,k,l.a)
j=a2.a.ql(n,m,C.ep,C.dj)
if(j.length===0)continue
n=C.c.gH(j)
i=new B.x(n.a,n.b,n.c,n.d)
h=C.c.gH(j).e
for(n=B.a7(j),m=new B.fN(j,1,a0,n.j("fN<1>")),m.qQ(j,1,a0,n.c),m=new B.d4(m,m.gn(m)),n=B.q(m).c;m.q();){l=n.a(m.d)
i=i.kZ(new B.x(l.a,l.b,l.c,l.d))
h=l.e}n=i.a
m=Math.max(0,n)
l=i.b
k=Math.max(0,l)
n=Math.min(i.c-n,B.z.prototype.gbg.call(d).b)
l=Math.min(i.d-l,B.z.prototype.gbg.call(d).d)
u=new B.x(Math.floor(m)-4,Math.floor(k)-4,Math.ceil(m+n)+4,Math.ceil(k+l)+4)
g=B.nG()
f=s+1
g.r2=new A.no(s,a0)
g.d=!0
g.a_=t
l=p.b
a3=l==null?a3:l
g.as=new B.cn(a3,p.f)
a3=d.bk
e=(a3==null?a0:!a3.gS(a3))===!0?d.bk.iW():B.IZ(a0,a0)
e.N2(0,g)
if(!e.x.k(0,u)){e.x=u
e.hw()}x.dO(0,e)
a1.push(e)
s=f
t=h}d.bk=x
a4.j3(0,a1,a5)},
mv(){this.wi()
this.bk=null}}
A.A0.prototype={
aq(d){var x,w,v
this.e1(d)
x=this.b4$
for(w=y.k;x!=null;){x.aq(d)
v=x.e
v.toString
x=w.a(v).ax$}},
an(d){var x,w,v
this.dw(0)
x=this.b4$
for(w=y.k;x!=null;){x.an(0)
v=x.e
v.toString
x=w.a(v).ax$}}}
A.Pf.prototype={}
A.Pg.prototype={
aq(d){this.QZ(d)
$.j2.pj$.a.K(0,this.go2())},
an(d){$.j2.pj$.a.B(0,this.go2())
this.R_(0)}}
A.ja.prototype={}
A.dT.prototype={
fU(d){if(!(d.e instanceof B.di))d.e=new B.di()},
cd(d){var x=this.u$
if(x!=null)return x.hk(d)
return this.oP(d)},
c8(){var x=this,w=x.u$
if(w!=null){w.dd(0,B.z.prototype.gbg.call(x),!0)
w=x.u$.rx
w.toString
x.rx=w}else x.rx=x.oP(B.z.prototype.gbg.call(x))},
oP(d){return new B.M(C.e.L(0,d.a,d.b),C.e.L(0,d.c,d.d))},
cM(d,e){var x=this.u$
x=x==null?null:x.bQ(d,e)
return x===!0},
ej(d,e){},
aP(d,e){var x=this.u$
if(x!=null)d.ep(x,e)}}
A.v0.prototype={
i(d){return"HitTestBehavior."+this.b}}
A.qh.prototype={
bQ(d,e){var x,w,v=this
if(v.rx.v(0,e)){x=v.cM(d,e)||v.A===D.aY
if(x||v.A===D.bL){w=new B.oM(e,v)
d.kC()
w.b=C.c.gI(d.b)
d.a.push(w)}}else x=!1
return x},
fG(d){return this.A===D.aY}}
A.I2.prototype={
sJ5(d){if(this.A.k(0,d))return
this.A=d
this.a4()},
c8(){var x=this,w=B.z.prototype.gbg.call(x),v=x.u$,u=x.A
if(v!=null){v.dd(0,u.mJ(w),!0)
v=x.u$.rx
v.toString
x.rx=v}else x.rx=u.mJ(w).bA(C.t)},
cd(d){var x=this.u$,w=this.A
if(x!=null)return x.hk(w.mJ(d))
else return w.mJ(d).bA(C.t)}}
A.Ie.prototype={
sa6t(d,e){if(this.A===e)return
this.A=e
this.a4()},
sa6r(d,e){if(this.X===e)return
this.X=e
this.a4()},
Gd(d){var x,w,v=d.a,u=d.b
u=u<1/0?u:C.e.L(this.A,v,u)
x=d.c
w=d.d
return new B.aC(v,u,x,w<1/0?w:C.e.L(this.X,x,w))},
GW(d,e){var x=this.u$
if(x!=null)return d.bA(e.$2(x,this.Gd(d)))
return this.Gd(d).bA(C.t)},
cd(d){return this.GW(d,A.S6())},
c8(){this.rx=this.GW(B.z.prototype.gbg.call(this),A.S7())}}
A.p3.prototype={
ae(d,e){var x=this.a
return x==null?null:x.ae(0,e)},
a5(d,e){var x=this.a
return x==null?null:x.a5(0,e)},
Ng(d){return new B.x(0,0,0+d.a,0+d.b)},
i(d){return"CustomClipper"}}
A.kG.prototype={
smw(d){var x,w=this,v=w.A
if(v==d)return
w.A=d
x=d==null
if(x||v==null||B.C(d)!==B.C(v)||d.D0(v))w.on()
if(w.b!=null){if(v!=null)v.a5(0,w.grE())
if(!x)d.ae(0,w.grE())}},
aq(d){var x
this.qP(d)
x=this.A
if(x!=null)x.ae(0,this.grE())},
an(d){var x=this.A
if(x!=null)x.a5(0,this.grE())
this.lT(0)},
on(){this.X=null
this.aA()
this.ar()},
sjG(d){if(d!==this.aD){this.aD=d
this.aA()}},
c8(){var x,w=this,v=w.rx
v=v!=null?v:null
w.qN()
x=w.rx
x.toString
if(!J.f(v,x))w.X=null},
hz(){var x,w,v=this
if(v.X==null){x=v.A
if(x==null)x=null
else{w=v.rx
w.toString
w=x.Ch(w)
x=w}v.X=x==null?v.gob():x}},
jL(d){var x,w=this.A
if(w==null)w=null
else{x=this.rx
x.toString
x=w.Ng(x)
w=x}if(w==null){w=this.rx
w=new B.x(0,0,0+w.a,0+w.b)}return w}}
A.I_.prototype={
gob(){var x=B.bX(),w=this.rx
x.h5(0,new B.x(0,0,0+w.a,0+w.b))
return x},
bQ(d,e){var x=this
if(x.A!=null){x.hz()
if(!x.X.v(0,e))return!1}return x.fW(d,e)},
aP(d,e){var x,w,v,u,t=this,s=t.dx
if(t.u$!=null){t.hz()
x=B.b(t.fr,"_needsCompositing")
w=t.rx
v=w.a
w=w.b
u=t.X
u.toString
s.saF(0,d.a7K(x,e,new B.x(0,0,0+v,0+w),u,A.dT.prototype.geR.call(t),t.aD,y.v.a(s.a)))}else s.saF(0,null)}}
A.CW.prototype={
i(d){return"DecorationPosition."+this.b}}
A.I6.prototype={
sa6(d,e){var x,w=this
if(e.k(0,w.X))return
x=w.A
if(x!=null)x.m(0)
w.A=null
w.X=e
w.aA()},
sc_(d,e){if(e===this.aD)return
this.aD=e
this.aA()},
soQ(d){if(d.k(0,this.bs))return
this.bs=d
this.aA()},
an(d){var x=this,w=x.A
if(w!=null)w.m(0)
x.A=null
x.lT(0)
x.aA()},
fG(d){var x=this.X,w=this.rx
w.toString
return x.AM(w,d,this.bs.d)},
aP(d,e){var x,w,v,u=this
if(u.A==null)u.A=u.X.tG(u.gdJ())
x=u.bs
w=u.rx
w.toString
v=x.JM(w)
if(u.aD===D.hR){x=u.A
x.toString
x.hg(d.gco(d),e,v)
if(u.X.gup())d.CW()}u.lS(d,e)
if(u.aD===D.HU){x=u.A
x.toString
x.hg(d.gco(d),e,v)
if(u.X.gup())d.CW()}}}
A.Ip.prototype={
sLY(d,e){return},
sdB(d){var x=this
if(J.f(x.X,d))return
x.X=d
x.aA()
x.ar()},
sbH(d,e){var x=this
if(x.aD==e)return
x.aD=e
x.aA()
x.ar()},
gaJ(){return!1},
sc9(d,e){var x,w=this
if(J.f(w.b_,e))return
x=new B.b7(new Float64Array(16))
x.bJ(e)
w.b_=x
w.aA()
w.ar()},
smO(d){return},
gxg(){var x,w,v=this,u=v.X,t=u==null?null:u.V(v.aD)
if(t==null)return v.b_
x=new B.b7(new Float64Array(16))
x.di()
u=v.rx
u.toString
w=t.zb(u)
x.aZ(0,w.a,w.b)
u=v.b_
u.toString
x.cr(0,u)
x.aZ(0,-w.a,-w.b)
return x},
bQ(d,e){return this.cM(d,e)},
cM(d,e){var x=this.bs?this.gxg():null
return d.tg(new A.a2U(this),e,x)},
aP(d,e){var x,w,v,u,t,s,r=this
if(r.u$!=null){x=r.gxg()
x.toString
w=B.a05(x)
if(w==null){v=B.b(r.fr,"_needsCompositing")
u=A.dT.prototype.geR.call(r)
t=r.dx
s=t.a
t.saF(0,d.BB(v,e,x,u,s instanceof B.qV?s:null))}else{r.lS(d,e.Y(0,w))
r.dx.saF(0,null)}}},
ej(d,e){var x=this.gxg()
x.toString
e.cr(0,x)}}
A.wV.prototype={
sa2U(d){if(this.A===d)return
this.A=d
this.ar()},
sa4l(d){if(this.X===d)return
this.X=d
this.ar()},
sa4d(d){return},
szv(d,e){return},
sjR(d,e){if(this.b_==e)return
this.b_=e
this.ar()},
svF(d,e){if(this.cL==e)return
this.cL=e
this.ar()},
szr(d,e){if(this.dG==e)return
this.dG=e
this.ar()},
svU(d){return},
sAZ(d){return},
siM(d){return},
sAJ(d){if(this.l6==d)return
this.l6=d
this.ar()},
sBO(d){return},
sq_(d,e){return},
sAt(d){if(this.mN==d)return
this.mN=d
this.ar()},
sAu(d,e){if(this.u3==e)return
this.u3=e
this.ar()},
sAO(d){return},
slg(d){return},
sBe(d,e){return},
svB(d){if(this.l0==d)return
this.l0=d
this.ar()},
sBf(d){if(this.mL==d)return
this.mL=d
this.ar()},
sAK(d,e){return},
sfH(d,e){if(this.en==e)return
this.en=e},
sB1(d){if(this.mM==d)return
this.mM=d
this.ar()},
spH(d){return},
smz(d){if(this.f5==d)return
this.f5=d
this.ar()},
sBX(d){return},
sa27(d){if(J.f(this.l1,d))return
this.l1=d
this.ar()},
sa28(d){if(J.f(this.l2,d))return
this.l2=d
this.ar()},
sa26(d){if(J.f(this.jS,d))return
this.jS=d
this.ar()},
sa24(d){if(J.f(this.eM,d))return
this.eM=d
this.ar()},
sa25(d){if(J.f(this.au,d))return
this.au=d
this.ar()},
sa5v(d){if(J.f(this.bT,d))return
this.bT=d
this.ar()},
sbH(d,e){if(this.bP==e)return
this.bP=e
this.ar()},
svV(d){if(this.bB==d)return
this.bB=d
this.ar()},
sa8U(d){if(J.f(this.by,d))return
this.ar()
this.by=d},
si_(d){var x,w=this
if(J.f(w.cg,d))return
x=w.cg
w.cg=d
if(d!=null!==(x!=null))w.ar()},
sn9(d){var x,w=this
if(J.f(w.ax,d))return
x=w.ax
w.ax=d
if(d!=null!==(x!=null))w.ar()},
siQ(d){var x,w=this
if(J.f(w.pd,d))return
x=w.pd
w.pd=d
if(d!=null!==(x!=null))w.ar()},
snh(d){return},
sni(d){return},
snj(d){return},
sng(d){return},
spR(d){return},
spP(d){return},
sn6(d,e){var x,w=this
if(J.f(w.pe,e))return
x=w.pe
w.pe=e
if(e!=null!==(x!=null))w.ar()},
sn7(d,e){var x,w=this
if(J.f(w.pf,e))return
x=w.pf
w.pf=e
if(e!=null!==(x!=null))w.ar()},
sne(d,e){var x,w=this
if(J.f(w.pg,e))return
x=w.pg
w.pg=e
if(e!=null!==(x!=null))w.ar()},
snc(d){return},
sna(d){return},
snd(d){return},
snb(d){return},
snk(d){return},
snl(d){return},
sn8(d){var x,w=this
if(J.f(w.ph,d))return
x=w.ph
w.ph=d
if(d!=null!==(x!=null))w.ar()},
spQ(d){return},
sa3p(d){return},
i9(d){this.wj(d)},
fD(d){var x,w,v=this
v.ip(d)
d.a=v.A
d.b=v.X
x=v.b_
if(x!=null){d.br(C.C4,!0)
d.br(C.BV,x)}x=v.cL
if(x!=null)d.br(C.C0,x)
x=v.dG
if(x!=null)d.br(C.C5,x)
x=v.l6
if(x!=null)d.br(C.C2,x)
x=v.mN
if(x!=null)d.br(C.BZ,x)
x=v.u3
if(x!=null)d.br(C.jf,x)
x=v.en
if(x!=null)d.br(C.BX,x)
x=v.l1
if(x!=null){d.as=x
d.d=!0}x=v.l2
if(x!=null){d.ad=x
d.d=!0}x=v.jS
if(x!=null){d.aN=x
d.d=!0}x=v.eM
if(x!=null){d.ba=x
d.d=!0}x=v.au
if(x!=null){d.aR=x
d.d=!0}v.bT!=null
x=v.l0
if(x!=null)d.br(C.BY,x)
x=v.mL
if(x!=null)d.br(C.C1,x)
x=v.mM
if(x!=null)d.br(C.C_,x)
x=v.f5
if(x!=null)d.smz(x)
x=v.bP
if(x!=null){d.a_=x
d.d=!0}x=v.bB
if(x!=null){d.r2=x
d.d=!0}x=v.by
if(x!=null){w=d.bK;(w==null?d.bK=B.bo(y.j):w).K(0,x)}if(v.cg!=null)d.si_(v.ga_0())
if(v.pd!=null)d.siQ(v.gZP())
if(v.ax!=null)d.sn9(v.gZN())
if(v.pe!=null)d.sn6(0,v.gZH())
if(v.pf!=null)d.sn7(0,v.gZJ())
if(v.pg!=null)d.sne(0,v.gZR())
if(v.ph!=null)d.sn8(v.gZL())},
a_1(){var x=this.cg
if(x!=null)x.$0()},
ZQ(){var x=this.pd
if(x!=null)x.$0()},
ZO(){var x=this.ax
if(x!=null)x.$0()},
ZI(){var x=this.pe
if(x!=null)x.$0()},
ZK(){var x=this.pf
if(x!=null)x.$0()},
ZS(){var x=this.pg
if(x!=null)x.$0()},
ZM(){var x=this.ph
if(x!=null)x.$0()}}
A.I8.prototype={
sa4e(d){if(d===this.A)return
this.A=d
this.ar()},
i9(d){if(this.A)return
this.wj(d)}}
A.A2.prototype={
aq(d){var x
this.e1(d)
x=this.u$
if(x!=null)x.aq(d)},
an(d){var x
this.dw(0)
x=this.u$
if(x!=null)x.an(0)}}
A.A3.prototype={
d8(d){var x=this.u$
if(x!=null)return x.ia(d)
return this.wh(d)}}
A.nx.prototype={
d8(d){var x,w=this.u$
if(w!=null){x=w.ia(d)
w=this.u$.e
w.toString
y.x.a(w)
if(x!=null)x+=w.a.b}else x=this.wh(d)
return x},
aP(d,e){var x,w=this.u$
if(w!=null){x=w.e
x.toString
d.ep(w,y.x.a(x).a.Y(0,e))}},
cM(d,e){var x=this.u$
if(x!=null){x=x.e
x.toString
y.x.a(x)
return d.kI(new A.a2S(this,e,x),x.a,e)}return!1}}
A.Ii.prototype={
rW(){var x=this
if(x.A!=null)return
x.A=x.X.V(x.aD)},
seb(d,e){var x=this
if(x.X.k(0,e))return
x.X=e
x.A=null
x.a4()},
sbH(d,e){var x=this
if(x.aD==e)return
x.aD=e
x.A=null
x.a4()},
cd(d){var x,w,v,u=this
u.rW()
if(u.u$==null){x=u.A
return d.bA(new B.M(x.a+x.c,x.b+x.d))}x=u.A
x.toString
w=d.zT(x)
v=u.u$.hk(w)
x=u.A
return d.bA(new B.M(x.a+v.a+x.c,x.b+v.b+x.d))},
c8(){var x,w,v,u,t,s,r=this,q=B.z.prototype.gbg.call(r)
r.rW()
if(r.u$==null){x=r.A
r.rx=q.bA(new B.M(x.a+x.c,x.b+x.d))
return}x=r.A
x.toString
w=q.zT(x)
r.u$.dd(0,w,!0)
x=r.u$
v=x.e
v.toString
y.x.a(v)
u=r.A
t=u.a
s=u.b
v.a=new B.o(t,s)
x=x.rx
r.rx=q.bA(new B.M(t+x.a+u.c,s+x.b+u.d))}}
A.qg.prototype={
rW(){var x=this
if(x.A!=null)return
x.A=x.X.V(x.aD)},
sdB(d){var x=this
if(x.X.k(0,d))return
x.X=d
x.A=null
x.a4()},
sbH(d,e){var x=this
if(x.aD==e)return
x.aD=e
x.A=null
x.a4()},
za(){var x,w,v,u,t=this
t.rW()
x=t.u$
w=x.e
w.toString
y.x.a(w)
v=t.A
v.toString
u=t.rx
u.toString
x=x.rx
x.toString
w.a=v.kJ(y.H.a(u.a0(0,x)))}}
A.In.prototype={
sa9t(d){if(this.bP==d)return
this.bP=d
this.a4()},
sa5q(d){if(this.bB==d)return
this.bB=d
this.a4()},
cd(d){var x,w,v=this,u=v.bP!=null||d.b===1/0,t=v.bB!=null||d.d===1/0,s=v.u$
if(s!=null){x=s.hk(new B.aC(0,d.b,0,d.d))
if(u){s=v.bP
if(s==null)s=1
s=x.a*s}else s=1/0
if(t){w=v.bB
if(w==null)w=1
w=x.b*w}else w=1/0
return d.bA(new B.M(s,w))}s=u?0:1/0
return d.bA(new B.M(s,t?0:1/0))},
c8(){var x,w,v=this,u=B.z.prototype.gbg.call(v),t=v.bP!=null||u.b===1/0,s=v.bB!=null||u.d===1/0,r=v.u$
if(r!=null){r.dd(0,new B.aC(0,u.b,0,u.d),!0)
if(t){r=v.u$.rx.a
x=v.bP
r*=x==null?1:x}else r=1/0
if(s){x=v.u$.rx.b
w=v.bB
x*=w==null?1:w}else x=1/0
v.rx=u.bA(new B.M(r,x))
v.za()}else{r=t?0:1/0
v.rx=u.bA(new B.M(r,s?0:1/0))}}}
A.A4.prototype={
aq(d){var x
this.e1(d)
x=this.u$
if(x!=null)x.aq(d)},
an(d){var x
this.dw(0)
x=this.u$
if(x!=null)x.an(0)}}
A.nY.prototype={
scX(d,e){var x,w=this
if(e===w.b)return
w.b=e
if(e)w.C4()
else{x=w.a!=null&&w.e==null
if(x)w.e=$.bY.qx(w.gyJ(),!1)}},
ga64(){if(this.a==null)return!1
if(this.b)return!1
var x=$.bY
x.toString
if(B.ia.prototype.gAy.call(x)&&x.ck$)return!0
if($.bY.cx$!==C.d9)return!0
return!1},
qI(d){var x,w,v=this
v.a=new A.nZ(new B.as(new B.S($.P,y.D),y.Q))
if(!v.b)x=v.e==null
else x=!1
if(x)v.e=$.bY.qx(v.gyJ(),!1)
x=$.bY
w=x.cx$.a
if(w>0&&w<4){x=x.fx$
x.toString
v.c=x}x=v.a
x.toString
return x},
nV(d,e){var x=this,w=x.a
if(w==null)return
x.c=x.a=null
x.C4()
if(e)w.Ic(x)
else w.Id()},
ee(d){return this.nV(d,!1)},
a0S(d){var x,w=this
w.e=null
x=w.c
if(x==null)x=w.c=d
w.d.$1(new B.az(d.a-x.a))
if(!w.b&&w.a!=null&&w.e==null)w.e=$.bY.qx(w.gyJ(),!0)},
C4(){var x,w=this.e
if(w!=null){x=$.bY
x.r$.B(0,w)
x.x$.K(0,w)
this.e=null}},
m(d){var x=this,w=x.a
if(w!=null){x.a=null
x.C4()
w.Ic(x)}},
a92(d,e){var x
""+"Ticker("
x=""+"Ticker()"
return x.charCodeAt(0)==0?x:x},
i(d){return this.a92(d,!1)}}
A.nZ.prototype={
Id(){this.c=!0
this.a.eG(0)
var x=this.b
if(x!=null)x.eG(0)},
Ic(d){var x
this.c=!1
x=this.b
if(x!=null)x.h7(new A.y1(d))},
a9s(d){var x,w,v=this,u=new A.a7I(d)
if(v.b==null){x=v.b=new B.as(new B.S($.P,y.D),y.Q)
w=v.c
if(w!=null)if(w)x.eG(0)
else x.h7(D.a2F)}v.b.a.ex(0,u,u,y.b9)},
mu(d,e){return this.a.a.mu(d,e)},
jF(d){return this.mu(d,null)},
ex(d,e,f,g){return this.a.a.ex(0,e,f,g)},
bI(d,e,f){return this.ex(d,e,null,f)},
fQ(d){return this.a.a.fQ(d)},
i(d){var x="<optimized out>#"+B.bZ(this)+"(",w=this.c
if(w==null)w="active"
else w=w?"complete":"canceled"
return x+w+")"},
$iai:1}
A.y1.prototype={
i(d){var x=this.a
if(x!=null)return"This ticker was canceled: "+x.i(0)
return'The ticker was canceled before the "orCancel" property was first used.'},
$ibQ:1}
A.qu.prototype={
i(d){return"SemanticsTag("+this.a+")"},
gam(d){return this.a}}
A.a4d.prototype={
ct(){return"SemanticsProperties"}}
A.lH.prototype={
aQ(d,e){var x=this.a3U(e)
return x},
$iaX:1,
gam(d){return this.a}}
A.no.prototype={
a3U(d){var x=d.b===this.b
if(x)return 0
return C.e.aQ(this.b,d.b)}}
A.PH.prototype={}
A.Cx.prototype={
aT(d){var x=new A.I_(this.e,this.f,null,B.an())
x.gaC()
x.gaJ()
x.fr=!1
x.sb9(null)
return x},
aW(d,e){e.smw(this.e)
e.sjG(this.f)},
p6(d){d.smw(null)}}
A.lQ.prototype={
aT(d){var x,w=this,v=A.eZ(d),u=new A.Ip(w.x,null,B.an())
u.gaC()
x=u.gaJ()
u.fr=x
u.sb9(null)
u.sc9(0,w.e)
u.sdB(w.r)
u.sbH(0,v)
u.smO(w.y)
u.sLY(0,null)
return u},
aW(d,e){var x=this
e.sc9(0,x.e)
e.sLY(0,null)
e.sdB(x.r)
e.sbH(0,A.eZ(d))
e.bs=x.x
e.smO(x.y)}}
A.f9.prototype={
aT(d){var x=new A.Ii(this.e,A.eZ(d),null,B.an())
x.gaC()
x.gaJ()
x.fr=!1
x.sb9(null)
return x},
aW(d,e){e.seb(0,this.e)
e.sbH(0,A.eZ(d))}}
A.fY.prototype={
aT(d){var x=new A.In(this.f,this.r,this.e,A.eZ(d),null,B.an())
x.gaC()
x.gaJ()
x.fr=!1
x.sb9(null)
return x},
aW(d,e){e.sdB(this.e)
e.sa9t(this.f)
e.sa5q(this.r)
e.sbH(0,A.eZ(d))}}
A.Cp.prototype={}
A.ic.prototype={
aT(d){return A.an0(A.l1(this.f,this.e))},
aW(d,e){e.sJ5(A.l1(this.f,this.e))},
ct(){var x,w=this,v=w.e
if(v===1/0&&w.f===1/0)x="SizedBox.expand"
else x=v===0&&w.f===0?"SizedBox.shrink":"SizedBox"
v=w.a
return v==null?x:x+"-"+v.i(0)}}
A.fp.prototype={
aT(d){return A.an0(this.e)},
aW(d,e){e.sJ5(this.e)}}
A.EG.prototype={
aT(d){var x=new A.Ie(this.e,this.f,null,B.an())
x.gaC()
x.gaJ()
x.fr=!1
x.sb9(null)
return x},
aW(d,e){e.sa6t(0,this.e)
e.sa6r(0,this.f)}}
A.Iu.prototype={
aT(d){var x,w,v,u=this,t=null,s=u.e,r=u.r
if(r==null){r=d.J(y.I)
r.toString
r=r.f}x=u.y
w=A.EO(d)
v=x===D.bC?"\u2026":t
x=new A.wU(A.a7B(v,w,u.Q,u.cx,s,u.f,r,u.db,u.z,u.cy),u.x,x,0,t,t,B.an())
x.gaC()
x.gaJ()
x.fr=!1
x.U(0,t)
x.xn(s)
return x},
aW(d,e){var x,w=this
e.scG(0,w.e)
e.sls(0,w.f)
x=w.r
if(x==null){x=d.J(y.I)
x.toString
x=x.f}e.sbH(0,x)
e.sOh(w.x)
e.sBs(0,w.y)
e.snu(w.z)
e.sn3(0,w.Q)
e.sio(0,w.cx)
e.snv(w.cy)
e.sq8(0,w.db)
x=A.EO(d)
e.siN(0,x)}}
A.lG.prototype={
gF6(){var x=this.e.k2
x=x==null?null:new B.cn(x,C.aa)
return x},
gF7(){var x=this.e.k4
x=x==null?null:new B.cn(x,C.aa)
return x},
gF5(){return null},
gF3(){return null},
gF4(){return null},
aT(d){var x=this,w=null,v=x.e
v=new A.wV(x.f,x.r,!1,v.b,v.a,v.d,v.e,v.y,v.z,v.f,v.r,v.x,v.Q,v.ch,v.cx,v.cy,v.dx,v.dy,v.fr,v.fx,v.db,v.fy,v.go,v.id,v.k1,v.c,x.gF6(),x.gF7(),x.gF5(),x.gF3(),x.gF4(),v.y2,x.Fy(d),v.N,v.as,v.ad,v.af,v.aN,v.ba,v.aR,v.aM,v.a3,v.ab,v.a_,v.ac,v.a1,v.b5,v.bY,v.bK,w,w,v.bU,v.E,v.O,v.ah,v.u,w,B.an())
v.gaC()
v.gaJ()
v.fr=!1
v.sb9(w)
return v},
Fy(d){var x,w=this.e,v=w.P
if(v!=null)return v
x=w.k2!=null||w.k4!=null||!1
if(!x)return null
return A.eZ(d)},
aW(d,e){var x,w,v=this
e.sa2U(v.f)
e.sa4l(v.r)
e.sa4d(!1)
x=v.e
e.svB(x.fr)
e.sjR(0,x.a)
e.szv(0,x.b)
e.sBX(x.c)
e.svF(0,x.d)
e.szr(0,x.e)
e.svU(x.y)
e.sAZ(x.z)
e.siM(x.f)
e.sAJ(x.r)
e.sBO(x.x)
e.sq_(0,x.Q)
e.sAt(x.ch)
e.sAu(0,x.cx)
e.sAO(x.cy)
e.slg(x.dx)
e.sBe(0,x.dy)
e.sAK(0,x.db)
e.sfH(0,x.fy)
e.sB1(x.go)
e.spH(x.id)
e.smz(x.k1)
e.sa27(v.gF6())
e.sa28(v.gF7())
e.sa26(v.gF5())
e.sa24(v.gF3())
e.sa25(v.gF4())
e.sa5v(x.y2)
e.sBf(x.fx)
e.sbH(0,v.Fy(d))
e.svV(x.N)
e.sa8U(x.as)
e.si_(x.ad)
e.siQ(x.aN)
e.snh(x.ba)
e.sni(x.aR)
e.snj(x.aM)
e.sng(x.a3)
e.spR(x.ab)
e.sn9(x.af)
e.spP(x.a_)
e.sn6(0,x.ac)
e.sn7(0,x.a1)
e.sne(0,x.b5)
w=x.bY
e.snc(w)
e.sna(w)
e.snd(null)
e.snb(null)
e.snk(x.bU)
e.snl(x.E)
e.sn8(x.O)
e.spQ(x.ah)
e.sa3p(x.u)}}
A.mI.prototype={
aT(d){var x=new A.I8(this.e,null,B.an())
x.gaC()
x.gaJ()
x.fr=!1
x.sb9(null)
return x},
aW(d,e){e.sa4e(this.e)}}
A.oV.prototype={
aT(d){var x=new A.zV(this.e,D.aY,null,B.an())
x.gaC()
x.gaJ()
x.fr=!1
x.sb9(null)
return x},
aW(d,e){y.dc.a(e).saG(0,this.e)}}
A.zV.prototype={
saG(d,e){if(e.k(0,this.au))return
this.au=e
this.aA()},
aP(d,e){var x,w,v,u,t,s=this,r=s.rx
if(r.a>0&&r.b>0){r=d.gco(d)
x=s.rx
w=e.a
v=e.b
u=x.a
x=x.b
t=new B.bc(new B.bg())
t.saG(0,s.au)
r.cV(0,new B.x(w,v,w+u,v+x),t)}r=s.u$
if(r!=null)d.ep(r,e)}}
A.CS.prototype={
aT(d){var x=new A.I6(this.e,this.f,A.S2(d,null),null,B.an())
x.gaC()
x.gaJ()
x.fr=!1
x.sb9(null)
return x},
aW(d,e){e.sa6(0,this.e)
e.soQ(A.S2(d,null))
e.sc_(0,this.f)}}
A.iH.prototype={
gZp(){var x,w=this.r
if(w==null||w.geb(w)==null)return this.e
x=w.geb(w)
w=this.e
if(w==null)return x
x.toString
return w.K(0,x)},
M(d,e){var x,w,v,u,t=this,s=null,r=t.c
if(r==null){x=t.y
if(x!=null)x=!(x.a>=x.b&&x.c>=x.d)
else x=!0}else x=!1
if(x)r=A.avG(new A.fp(D.hB,s,s),0,0)
x=t.d
if(x!=null)r=new A.fY(x,s,s,r,s)
w=t.gZp()
if(w!=null)r=new A.f9(w,r,s)
x=t.f
if(x!=null)r=new A.oV(x,r,s)
x=t.cx
if(x!==C.o){v=A.eZ(e)
u=t.r
u.toString
r=A.al2(r,x,new A.LT(v==null?C.x:v,u,s))}x=t.r
if(x!=null)r=A.alg(r,x,D.hR)
x=t.y
if(x!=null)r=new A.fp(x,r,s)
x=t.z
if(x!=null)r=new A.f9(x,r,s)
r.toString
return r}}
A.LT.prototype={
Ch(d){return this.c.vl(new B.x(0,0,0+d.a,0+d.b),this.b)},
D0(d){return!d.c.k(0,this.c)||d.b!==this.b}}
A.av.prototype={
ce(d){var x=($.bK+1)%16777215
$.bK=x
return new A.xE(x,this,C.ai,B.bn(y.h))}}
A.T.prototype={
ce(d){return A.axy(this)}}
A.adc.prototype={
i(d){return"_StateLifecycle."+this.b}}
A.U.prototype={
gF(){var x=this.a
x.toString
return x},
aO(){},
bj(d){},
fg(){},
aE(d){d.$0()
this.c.fJ()},
d9(){},
jy(){},
m(d){},
aw(){}}
A.aA.prototype={}
A.aE.prototype={
ce(d){return A.avw(this)}}
A.aV.prototype={
ce(d){return A.axp(this)}}
A.dE.prototype={
ce(d){return A.aw8(this)}}
A.tY.prototype={
fe(d,e){this.Dh(d,e)
this.xo()},
xo(){this.q0()},
kd(){var x,w,v,u,t,s,r=this,q=null
try{q=r.c3(0)
r.gF()}catch(t){x=B.a8(t)
w=B.ap(t)
s=B.Du(B.aja(B.bq("building "+r.i(0)),x,w,new A.UA(r)))
q=s}finally{r.cx=!1}try{r.dy=r.ec(r.dy,q,r.d)}catch(t){v=B.a8(t)
u=B.ap(t)
s=B.Du(B.aja(B.bq("building "+r.i(0)),v,u,new A.UB(r)))
q=s
r.dy=r.ec(null,q,r.d)}},
bf(d){var x=this.dy
if(x!=null)d.$1(x)},
hR(d){this.dy=null
this.ja(d)}}
A.xE.prototype={
gF(){return y.e.a(B.aG.prototype.gF.call(this))},
c3(d){return y.e.a(B.aG.prototype.gF.call(this)).M(0,this)},
bm(d,e){this.qK(0,e)
this.cx=!0
this.q0()}}
A.il.prototype={
c3(d){return this.P.M(0,this)},
gnU(d){var x=this.P
x.toString
return x},
fg(){var x=this
if(B.ap7(x.b,x.f))x.P.fg()
x.OQ()},
xo(){var x,w=this
try{w.dx=!0
x=w.P.aO()}finally{w.dx=!1}w.P.aw()
w.OE()},
kd(){var x=this
if(x.N){x.P.aw()
x.N=!1}x.OF()},
bm(d,e){var x,w,v,u,t=this
t.qK(0,e)
v=t.P
u=v.a
u.toString
x=u
t.cx=!0
u=t.f
u.toString
v.a=y.E.a(u)
try{t.dx=!0
w=v.bj(x)}finally{t.dx=!1}t.q0()},
jy(){this.OO()
this.P.jy()
this.fJ()},
d9(){this.P.d9()
this.De()},
lu(){var x=this
x.wc()
x.P.m(0)
x.P=x.P.c=null},
zV(d,e){return this.Df(d,e)},
aw(){this.OP()
this.N=!0}}
A.kd.prototype={
gF(){return y.d.a(B.aG.prototype.gF.call(this))},
c3(d){return this.gF().b},
bm(d,e){var x=this,w=x.gF()
x.qK(0,e)
x.Ca(w)
x.cx=!0
x.q0()},
Ca(d){this.uA(d)}}
A.de.prototype={
gF(){return y._.a(A.kd.prototype.gF.call(this))},
yR(){var x,w=this,v=w.a,u=v==null?null:v.z
v=y.n
x=y.q
v=u!=null?w.z=B.avn(u,v,x):w.z=B.dR(v,x)
v.p(0,B.C(w.gF()),w)},
MZ(d,e){this.bU.p(0,d,null)},
LP(d,e){e.aw()},
Ca(d){if(this.gF().cN(d))this.PA(d)},
uA(d){var x,w
for(x=this.bU,x=new B.rt(x,x.r4()),w=B.q(x).c;x.q();)this.LP(d,w.a(x.d))}}
A.qw.prototype={
gF(){return y.C.a(B.Y.prototype.gF.call(this))},
bf(d){var x=this.N
if(x!=null)d.$1(x)},
hR(d){this.N=null
this.ja(d)},
fe(d,e){var x=this
x.lR(d,e)
x.N=x.ec(x.N,x.gF().c,null)},
bm(d,e){var x=this
x.kq(0,e)
x.N=x.ec(x.N,x.gF().c,null)},
k_(d,e){var x=this.dy
x.toString
y.Y.a(x).sb9(d)},
ka(d,e,f){},
kg(d,e){var x=this.dy
x.toString
y.Y.a(x).sb9(null)}}
A.nj.prototype={
gF(){return y.f.a(B.Y.prototype.gF.call(this))},
gD(){return y.V.a(B.Y.prototype.gD.call(this))},
k_(d,e){var x=this.gD(),w=e.a
w=w==null?null:w.gD()
x.h6(d)
x.G1(d,w)},
ka(d,e,f){var x=this.gD(),w=f.a
x.a6D(d,w==null?null:w.gD())},
kg(d,e){var x=this.gD()
x.H9(d)
x.jP(d)},
bf(d){var x,w,v,u,t
for(x=B.b(this.N,"_children"),w=x.length,v=this.as,u=0;u<x.length;x.length===w||(0,B.K)(x),++u){t=x[u]
if(!v.v(0,t))d.$1(t)}},
hR(d){this.as.K(0,d)
this.ja(d)},
ul(d,e){return this.Dg(d,e)},
fe(d,e){var x,w,v,u,t,s,r=this
r.lR(d,e)
x=r.gF().c.length
w=B.a5(x,$.ak2(),!1,y.h)
for(v=y.r,u=null,t=0;t<x;++t,u=s){s=r.Dg(r.gF().c[t],new B.mZ(u,t,v))
w[t]=s}r.N=w},
bm(d,e){var x,w=this
w.kq(0,e)
x=w.as
w.N=w.a9d(B.b(w.N,"_children"),w.gF().c,x)
x.aL(0)}}
A.PX.prototype={}
A.cX.prototype={
oU(d,e,f){var x=this,w=d==null?x.a:d,v=e==null?x.gdX(x):e
return new A.cX(w,v,f==null?x.c:f)},
eI(d){return this.oU(d,null,null)},
bE(d){return this.oU(d.a,d.gdX(d),d.c)},
V(d){return this},
gdX(d){var x=this.b
return x==null?null:C.d.L(x,0,1)},
k(d,e){var x=this
if(e==null)return!1
if(J.R(e)!==B.C(x))return!1
return e instanceof A.cX&&J.f(e.a,x.a)&&e.gdX(e)==x.gdX(x)&&e.c==x.c},
gt(d){var x=this
return B.W(x.a,x.gdX(x),x.c,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a)}}
A.N9.prototype={}
A.px.prototype={}
A.p7.prototype={
cN(d){var x,w=this
if(w.x.k(0,d.x))if(w.z===d.z)if(w.Q===d.Q)x=w.cx!==d.cx||!1
else x=!0
else x=!0
else x=!0
return x}}
A.Oc.prototype={
M(d,e){throw B.c(B.DI("A DefaultTextStyle constructed with DefaultTextStyle.fallback cannot be incorporated into the widget tree, it is meant only to provide a fallback value returned by DefaultTextStyle.of() when no enclosing default text style is present in a BuildContext."))}}
A.nS.prototype={
M(d,e){var x,w,v,u,t,s,r,q,p,o=this,n=null,m=e.J(y.W)
if(m==null)m=D.HV
x=o.e
if(x==null||x.a)x=m.x.bE(x)
w=A.fz(e)
w=w==null?n:w.cy
if(w===!0)x=x.bE(D.a1W)
w=o.r
if(w==null)w=m.y
if(w==null)w=C.bB
v=o.x
u=o.Q
if(u==null)u=x==null?n:x.k3
if(u==null)u=m.Q
t=A.ahS(e)
s=o.cx
if(s==null)s=m.ch
r=A.alh(e)
q=o.d
q=q!=null?B.a([q],y.R):n
p=A.an6(n,s,u,m.z,n,A.kp(q,x,o.c),w,v,r,t,m.cx)
m=o.cy
return m!=null?A.c2(n,new A.mI(!0,p,n),!1,n,n,!1,n,n,n,n,m,n,n,n,n,n,n,n,n,n,n,n,n,n,n,v,n):p}}
A.XN.prototype={}
A.aaJ.prototype={}
A.Jj.prototype={
i(d){return"SmartManagement."+this.b}}
A.cg.prototype={
$1$0(d){return this.a4A(0,d)},
$0(){return this.$1$0(y.z)},
Md(d,e,f,g,h){var x,w=new A.XM(e,h),v=this.ht(0,B.aB(h),g)
if($.dd.a9(0,v)){x=$.dd.h(0,v)
if(x!=null&&x.x)$.dd.p(0,v,new A.m0(!0,!1,w,f,!1,h.j("m0<0>").a(x),g,h.j("m0<0>")))}else $.dd.p(0,v,new A.m0(!0,!1,w,f,!1,null,g,h.j("m0<0>")))
return this.dl(0,g,h)},
a7U(d,e,f,g){return this.Md(d,e,!1,f,g)},
Vq(d,e,f){var x,w
if(!$.dd.a9(0,d)){x=$.aZ()
w='Instance "'+d+'" is not registered.'
x.e.$2$isError(w,!0)
return null}else return $.dd.h(0,d)},
dl(d,e,f){var x,w,v,u,t,s=this,r='" is not registered',q='" has been initialized',p=s.ht(0,B.aB(f),e)
if($.dd.a9(0,s.ht(0,B.aB(f),e))){x=$.dd.h(0,p)
if(x==null)if(e==null)throw B.c('Class "'+B.aB(f).i(0)+r)
else throw B.c('Class "'+B.aB(f).i(0)+'" with tag "'+e+r)
p=s.ht(0,B.aB(f),e)
if(!$.dd.h(0,p).f){w=s.ht(0,B.aB(f),e)
v=f.a($.dd.h(0,w).Cm())
if(y.t.b(v)){v.dk$.$0()
if(e==null){u=$.aZ()
t='Instance "'+B.aB(f).i(0)+q
u.e.$1(t)}else{u=$.aZ()
t='Instance "'+B.aB(f).i(0)+'" with tag "'+e+q
u.e.$1(t)}$.dd.h(0,w).toString}$.dd.h(0,p).toString
u=$.dd.h(0,p)
u.f=!0
if($.aZ().a!==D.Cm)A.ax9(s.ht(0,B.aB(f),e))}else v=null
return v==null?f.a(x.Cm()):v}else throw B.c('"'+B.aB(f).i(0)+'" not found. You need to call "Get.put('+B.aB(f).i(0)+'())" or "Get.lazyPut(()=>'+B.aB(f).i(0)+'())"')},
a4A(d,e){return this.dl(d,null,e)},
ht(d,e,f){var x=e.a
return f==null?B.dY(x,null):B.dY(x,null)+f},
K3(d,e,f,g){var x,w,v,u,t,s='" deleted from memory',r=e==null?this.ht(0,B.aB(g),f):e
if(!$.dd.a9(0,r)){x=$.aZ()
w='Instance "'+r+'" already removed.'
x.e.$2$isError(w,!0)
return!1}v=$.dd.h(0,r)
if(v==null)return!1
if(v.x){u=v.r
if(u==null)u=v}else u=v
if(u.e&&!0){x=$.aZ()
w='"'+r+'" has been marked as permanent, SmartManagement is not authorized to delete it.'
x.e.$2$isError(w,!0)
return!1}t=u.c
if(y.t.b(t)){t.cm$.$0()
x=$.aZ()
w='"'+r+'" onDelete() called'
x.e.$1(w)}if(v.r!=null){v.r=null
x=$.aZ()
w='"'+r+s
x.e.$1(w)
return!1}else{$.dd.B(0,r)
if($.dd.a9(0,r)){x=$.aZ()
w='Error removing object "'+r+'"'
x.e.$2$isError(w,!0)}else{x=$.aZ()
w='"'+r+s
x.e.$1(w)}return!0}},
a3D(d,e,f){return this.K3(d,e,null,f)},
a3E(d,e,f){return this.K3(d,null,e,f)},
a60(d,e){var x=this.Vq(this.ht(0,B.aB(e),d),d,e)
if(x==null)return!1
if(!x.f)return!0
return!1}}
A.m0.prototype={
Cm(){var x,w,v=this,u=v.c
if(u==null){u=v.y
x=v.$ti.c
if(u==null){u=$.aZ()
x='Instance "'+B.aB(x).i(0)+'" has been created'
u.e.$1(x)}else{w=$.aZ()
u='Instance "'+B.aB(x).i(0)+'" has been created with tag "'+u+'"'
w.e.$1(u)}u=v.c=v.d.$0()}u.toString
return u}}
var z=a.updateTypes(["~()","y(fx)","~(az)","~(fb,o)","M(A,aC)","nZ({from:E?})","~(bj)","y(hT)","E?(bI?,bI?,E)","~(h{isError:y})"])
A.ZM.prototype={
$1(d){var x=d.Nw(this.b,this.c)
this.a.a=x
return x==null},
$S:z+1}
A.ZL.prototype={
$1(d){var x=d.a2I(this.b,this.c)
this.a.a=x
return x==null},
$S:z+1}
A.a2u.prototype={
$2(d,e){return this.a.a.bQ(d,e)},
$S:8}
A.a2O.prototype={
$1(d){return!0},
$S:z+1}
A.a2Q.prototype={
$2(d,e){return this.a.a.bQ(d,e)},
$S:8}
A.a2R.prototype={
$2(d,e){var x=this.a.a
x.toString
d.ep(x,e)},
$S:34}
A.a2P.prototype={
$1(d){return!1},
$S:z+7}
A.a2U.prototype={
$2(d,e){return this.a.qM(d,e)},
$S:8}
A.a2S.prototype={
$2(d,e){return this.a.u$.bQ(d,e)},
$S:8}
A.a7I.prototype={
$1(d){this.a.$0()},
$S:14}
A.a35.prototype={
$1(d){return!0},
$S:z+1}
A.UA.prototype={
$0(){var x=this
return B.dM(function(){var w=0,v=1,u
return function $async$$0(d,e){if(d===1){u=e
w=v}while(true)switch(w){case 0:w=2
return B.D9(new B.mD(x.a))
case 2:return B.dJ()
case 1:return B.dK(u)}}},y.P)},
$S:11}
A.UB.prototype={
$0(){var x=this
return B.dM(function(){var w=0,v=1,u
return function $async$$0(d,e){if(d===1){u=e
w=v}while(true)switch(w){case 0:w=2
return B.D9(new B.mD(x.a))
case 2:return B.dJ()
case 1:return B.dK(u)}}},y.P)},
$S:11}
A.XM.prototype={
$0(){return this.a},
$S(){return this.b.j("0()")}};(function aliases(){var x=A.b9.prototype
x.w6=x.v4
x=A.tw.prototype
x.w7=x.m
x=A.fx.prototype
x.P2=x.k
x=A.xB.prototype
x.Qi=x.ed
x=A.be.prototype
x.OG=x.i3
x.OH=x.bf
x=A.wO.prototype
x.Dy=x.o3
x=A.A0.prototype
x.QZ=x.aq
x.R_=x.an
x=A.dT.prototype
x.PP=x.cd
x.qN=x.c8
x.qM=x.cM
x.lS=x.aP
x=A.A2.prototype
x.qP=x.aq
x.lT=x.an
x=A.A3.prototype
x.DH=x.d8
x=A.A4.prototype
x.R0=x.aq
x.R1=x.an
x=A.nY.prototype
x.DD=x.m
x=A.U.prototype
x.bi=x.aO
x.bX=x.bj
x.Qk=x.fg
x.jc=x.d9
x.Qj=x.jy
x.b2=x.m
x.bW=x.aw
x=A.tY.prototype
x.OE=x.xo
x.OF=x.kd
x=A.kd.prototype
x.Py=x.c3
x.Pz=x.bm
x.PA=x.Ca
x=A.de.prototype
x.Dj=x.uA})();(function installTearOffs(){var x=a.installStaticTearOff,w=a._instance_0i,v=a.installInstanceTearOff,u=a._instance_1u,t=a._instance_0u,s=a._instance_2u,r=a._static_2
x(A,"aqD",3,null,["$3"],["V"],8,0)
var q
w(q=A.oy.prototype,"gMy","eu",0)
v(q,"gMD",1,0,function(){return{from:null}},["$1$from","$0"],["BM","ds"],5,0,0)
u(q,"gIb","a0P",2)
t(A.ml.prototype,"geQ","aH",0)
u(A.kZ.prototype,"gLQ","pO",6)
s(A.cw.prototype,"gK1","kR",3)
t(A.wU.prototype,"go2","o3",0)
v(A.dT.prototype,"geR",0,2,null,["$2"],["aP"],3,0,1)
t(A.kG.prototype,"grE","on",0)
t(q=A.wV.prototype,"ga_0","a_1",0)
t(q,"gZP","ZQ",0)
t(q,"gZN","ZO",0)
t(q,"gZH","ZI",0)
t(q,"gZJ","ZK",0)
t(q,"gZR","ZS",0)
t(q,"gZL","ZM",0)
u(A.nY.prototype,"gyJ","a0S",2)
r(A,"S6","al0",4)
r(A,"S7","aub",4)
x(A,"aCB",1,null,["$2$isError","$1"],["apX",function(d){return A.apX(d,!1)}],9,0)})();(function inheritance(){var x=a.mixin,w=a.mixinHard,v=a.inheritMany,u=a.inherit
v(B.t,[A.ai8,A.ae2,A.a0Y,A.uq,A.ur,A.J3,A.xs,A.nI,A.DZ,A.DY,A.uu,A.J8,A.tw,A.ml,A.kZ,A.fZ,A.v6,A.BN,A.hT,A.k7,A.a9z,A.K0,A.Qo,A.a6l,A.a9J,A.ac3,A.adT,A.y8,A.cw,A.h1,A.be,A.wO,A.dT,A.nY,A.nZ,A.y1,A.qu,A.PH,A.PX,A.N9,A.XN,A.cg,A.m0])
u(A.E2,A.uq)
v(B.eN,[A.y3,A.bj,A.KW,A.BT,A.wS,A.xW,A.K4,A.xC,A.v0,A.CW,A.adc,A.Jj])
v(B.aa,[A.b9,A.p3])
u(A.KT,A.b9)
u(A.KU,A.KT)
u(A.KV,A.KU)
u(A.oy,A.KV)
v(A.J8,[A.ab6,A.xB])
u(A.zu,B.e_)
u(A.b4,B.p)
u(A.hI,B.l)
u(A.he,A.hI)
v(A.fZ,[A.cd,A.zF])
v(B.D6,[A.fx,A.a4d])
v(B.bl,[A.ZM,A.ZL,A.a2O,A.a2P,A.a7I,A.a35])
u(A.qU,A.fx)
u(A.u,A.Qo)
u(A.yF,B.dy)
u(A.l7,A.yF)
v(B.eE,[A.a2u,A.a2Q,A.a2R,A.a2U,A.a2S])
u(A.e7,A.l7)
v(B.A,[A.A0,A.A2,A.A4])
u(A.Pf,A.A0)
u(A.Pg,A.Pf)
u(A.wU,A.Pg)
u(A.A3,A.A2)
u(A.ja,A.A3)
v(A.ja,[A.qh,A.I2,A.Ie,A.kG,A.I6,A.Ip,A.wV,A.I8])
u(A.I_,A.kG)
u(A.nx,A.A4)
v(A.nx,[A.Ii,A.qg])
u(A.In,A.qg)
u(A.lH,A.PH)
u(A.no,A.lH)
v(B.ar,[A.aV,A.dE])
v(A.aV,[A.Cx,A.lQ,A.f9,A.fY,A.ic,A.fp,A.EG,A.lG,A.mI,A.oV,A.CS])
u(A.Cp,A.fY)
u(A.Iu,A.dE)
u(A.zV,A.qh)
v(B.i,[A.av,A.T,A.aA])
v(A.av,[A.iH,A.Oc,A.nS])
u(A.LT,A.p3)
u(A.U,A.PX)
u(A.aE,A.aA)
u(A.tY,B.aG)
v(B.dz,[A.UA,A.UB,A.XM])
v(A.tY,[A.xE,A.il,A.kd])
u(A.de,A.kd)
v(B.Y,[A.qw,A.nj])
u(A.cX,A.N9)
u(A.px,A.aE)
u(A.p7,A.px)
u(A.aaJ,A.XN)
x(A.KT,A.tw)
x(A.KU,A.ml)
x(A.KV,A.kZ)
x(A.Qo,B.ag)
w(A.yF,A.h1)
w(A.A0,A.be)
x(A.Pf,A.cw)
w(A.Pg,A.wO)
w(A.A2,B.aK)
w(A.A3,A.dT)
w(A.A4,B.aK)
x(A.PH,B.ag)
x(A.PX,B.ag)
x(A.N9,B.ag)})()
B.cT(b.typeUniverse,JSON.parse('{"E2":{"uq":[]},"b9":{"aa":[]},"oy":{"b9":["E"],"aa":[]},"zu":{"e_":[]},"b4":{"p":["1"],"p.E":"1"},"he":{"hI":["k"],"l":[],"hI.T":"k"},"cd":{"fZ":[]},"zF":{"fZ":[]},"hI":{"l":[]},"qU":{"fx":[],"iX":[],"au":[]},"l7":{"dy":[],"h1":["1"],"di":[]},"h1":{"di":[]},"e7":{"dy":[],"h1":["A"],"di":[]},"wU":{"cw":["A","e7"],"A":[],"be":["A","e7"],"z":[],"G":[],"au":[],"be.1":"e7","cw.1":"e7"},"ja":{"A":[],"aK":["A"],"z":[],"G":[],"au":[]},"qh":{"A":[],"aK":["A"],"z":[],"G":[],"au":[]},"I2":{"A":[],"aK":["A"],"z":[],"G":[],"au":[]},"Ie":{"A":[],"aK":["A"],"z":[],"G":[],"au":[]},"p3":{"aa":[]},"kG":{"A":[],"aK":["A"],"z":[],"G":[],"au":[]},"I_":{"A":[],"aK":["A"],"z":[],"G":[],"au":[]},"I6":{"A":[],"aK":["A"],"z":[],"G":[],"au":[]},"Ip":{"A":[],"aK":["A"],"z":[],"G":[],"au":[]},"wV":{"A":[],"aK":["A"],"z":[],"G":[],"au":[]},"I8":{"A":[],"aK":["A"],"z":[],"G":[],"au":[]},"nx":{"A":[],"aK":["A"],"z":[],"G":[],"au":[]},"Ii":{"A":[],"aK":["A"],"z":[],"G":[],"au":[]},"qg":{"A":[],"aK":["A"],"z":[],"G":[],"au":[]},"In":{"A":[],"aK":["A"],"z":[],"G":[],"au":[]},"nZ":{"ai":["~"]},"y1":{"bQ":[]},"lH":{"aX":["lH"]},"no":{"aX":["lH"]},"cW":{"aE":[],"aA":[],"i":[]},"lQ":{"aV":[],"ar":[],"i":[]},"auz":{"aE":[],"aA":[],"i":[]},"lG":{"aV":[],"ar":[],"i":[]},"Cx":{"aV":[],"ar":[],"i":[]},"f9":{"aV":[],"ar":[],"i":[]},"fY":{"aV":[],"ar":[],"i":[]},"Cp":{"aV":[],"ar":[],"i":[]},"ic":{"aV":[],"ar":[],"i":[]},"fp":{"aV":[],"ar":[],"i":[]},"EG":{"aV":[],"ar":[],"i":[]},"Iu":{"dE":[],"ar":[],"i":[]},"mI":{"aV":[],"ar":[],"i":[]},"oV":{"aV":[],"ar":[],"i":[]},"zV":{"A":[],"aK":["A"],"z":[],"G":[],"au":[]},"iH":{"av":[],"i":[]},"CS":{"aV":[],"ar":[],"i":[]},"LT":{"aa":[]},"av":{"i":[]},"T":{"i":[]},"aA":{"i":[]},"aE":{"aA":[],"i":[]},"aV":{"ar":[],"i":[]},"dE":{"ar":[],"i":[]},"tY":{"aG":[],"a_":[]},"xE":{"aG":[],"a_":[]},"il":{"aG":[],"a_":[]},"kd":{"aG":[],"a_":[]},"de":{"aG":[],"a_":[]},"qw":{"Y":[],"aG":[],"a_":[]},"nj":{"Y":[],"aG":[],"a_":[]},"px":{"aE":[],"aA":[],"i":[]},"p7":{"aE":[],"aA":[],"i":[]},"auB":{"aE":[],"aA":[],"i":[]},"Oc":{"av":[],"i":[]},"nS":{"av":[],"i":[]},"dg":{"c0":[],"cu":[]},"h5":{"c0":[],"cu":[]},"c0":{"cu":[]},"dp":{"c0":[],"cu":[]},"amK":{"fx":[]},"ha":{"av":[],"i":[]},"lg":{"aE":[],"aA":[],"i":[]},"ob":{"aE":[],"aA":[],"i":[]},"dD":{"aE":[],"aA":[],"i":[]}}'))
B.iy(b.typeUniverse,JSON.parse('{"l7":1,"yF":1,"h1":1,"dT":1,"p3":1,"kG":1}'))
var y=(function rtii(){var x=B.F
return{x:x("dy"),V:x("be<z,h1<z>>"),i:x("auz"),w:x("auB"),W:x("p7"),P:x("cP"),I:x("cW"),h:x("aG"),t:x("dP"),B:x("au"),U:x("lg"),r:x("mZ<aG?>"),q:x("de"),_:x("aE"),O:x("n<l>"),R:x("n<fx>"),M:x("n<hT>"),S:x("n<k7>"),y:x("n<amK>"),T:x("n<bB>"),u:x("n<nI>"),l:x("n<xs>"),s:x("n<h>"),L:x("n<aio>"),G:x("n<jg>"),p:x("n<i>"),X:x("n<k>"),b:x("n<~()>"),A:x("n<~(bj)>"),m:x("dD"),f:x("dE"),K:x("t"),F:x("b4<~()>"),c:x("b4<~(bj)>"),H:x("o"),J:x("k7"),Z:x("e2"),d:x("aA"),Y:x("aK<z>"),g:x("bB"),j:x("qu"),C:x("aV"),E:x("T"),e:x("av"),N:x("h"),k:x("e7"),n:x("ds"),Q:x("as<~>"),D:x("S<~>"),o:x("ob"),dc:x("zV"),z:x("@"),v:x("tV?"),a:x("DZ?"),cM:x("t?"),b9:x("~"),aI:x("~()"),cT:x("~(bj)")}})();(function constants(){var x=a.makeConstList
D.Y=new A.cd(0,0)
D.Di=new A.BT(0,"normal")
D.Dj=new A.BT(1,"preserve")
D.M=new A.bj(0,"dismissed")
D.c5=new A.bj(1,"forward")
D.ba=new A.bj(2,"reverse")
D.J=new A.bj(3,"completed")
D.hB=new B.aC(1/0,1/0,1/0,1/0)
D.kj=new B.Cg(5,"strut")
D.a4=new A.zu()
D.m=new B.l(4294967295)
D.GS=new B.l(4293128957)
D.Gw=new B.l(4290502395)
D.Ge=new B.l(4287679225)
D.FS=new B.l(4284790262)
D.FC=new B.l(4282557941)
D.Fn=new B.l(4280391411)
D.Fl=new B.l(4280191205)
D.Fh=new B.l(4279858898)
D.Fg=new B.l(4279592384)
D.Fe=new B.l(4279060385)
D.aw=new B.aT([50,D.GS,100,D.Gw,200,D.Ge,300,D.FS,400,D.FC,500,D.Fn,600,D.Fl,700,D.Fh,800,D.Fg,900,D.Fe],B.F("aT<k,l>"))
D.bY=new A.he(D.aw,4280391411)
D.kA=new B.l(16777215)
D.hR=new A.CW(0,"background")
D.HU=new A.CW(1,"foreground")
D.a2k=new A.u(!0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ea=new A.xW(0,"clip")
D.bk=new A.K4(0,"parent")
D.a5r=new A.Oc(null)
D.HV=new A.p7(D.a2k,null,!0,D.ea,null,D.bk,null,D.a5r,null)
D.eB=new B.WG(1,"low")
D.l7=new B.h8(2)
D.l8=new B.h8(7)
D.cC=new A.v0(0,"deferToChild")
D.aY=new A.v0(1,"opaque")
D.bL=new A.v0(2,"translucent")
D.i8=new A.cX(C.v,1,24)
D.Jo=B.a(x([0,1]),B.F("n<E>"))
D.i7=new B.h8(0)
D.Ix=new B.h8(1)
D.O=new B.h8(3)
D.bd=new B.h8(4)
D.Iy=new B.h8(5)
D.l9=new B.h8(8)
D.Jx=B.a(x([D.i7,D.Ix,D.l7,D.O,D.bd,D.Iy,C.bp,D.l8,D.l9]),B.F("n<h8>"))
D.a62=B.a(x([]),y.p)
D.Y0=new B.lu(1/0)
D.Bq=new A.k7(C.t,null)
D.e2=new A.wS(0,"identical")
D.Yc=new A.wS(2,"paint")
D.d8=new A.wS(3,"layout")
D.Cl=new A.Jj(0,"full")
D.Cm=new A.Jj(1,"onlyBuilder")
D.ZY=new A.xC(0,"criticallyDamped")
D.ZZ=new A.xC(1,"underDamped")
D.a__=new A.xC(2,"overDamped")
D.h9=new B.kn("click")
D.bC=new A.xW(2,"ellipsis")
D.a_t=new A.xW(3,"visible")
D.HD=new B.l(4294967040)
D.a1W=new A.u(!0,null,null,null,null,null,null,C.bp,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.a2B=new A.K4(1,"longestLine")
D.a2F=new A.y1(null)
D.ee=new A.y3(0,"clamp")
D.a2G=new A.y3(1,"repeated")
D.CO=new A.y3(3,"decal")
D.cp=new A.y8(0.001,0.001)
D.a2J=new A.y8(0.01,1/0)
D.ah=new A.KW(0,"forward")
D.el=new A.KW(1,"reverse")
D.n=new A.adc(0,"created")})();(function staticFields(){$.a16=null
$.ajv=null
$.anY=null
$.YC=B.bD("_programCache")
$.b_=null
$.dd=B.w(y.N,B.F("m0<@>"))
$.x6=B.w(B.F("bH<@>?"),B.F("v<h>"))
$.nB=B.w(B.F("bH<@>?"),B.F("ahz<iM>"))
$.qk=null})();(function lazyInitializers(){var x=a.lazyFinal
x($,"aF0","arx",()=>B.ams(B.a([0,1,2,2,3,0],y.X)))
x($,"aG7","as8",()=>A.anr(1,1,500))
x($,"aE3","aZ",()=>new A.aaJ(D.Cl,A.aCB()))})()}
$__dart_deferred_initializers__["15d2XOXhh94UkQDl6DNUFYfYQEA="] = $__dart_deferred_initializers__.current
