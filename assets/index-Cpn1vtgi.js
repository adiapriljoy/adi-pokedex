import{u as j,j as e,r as d,L as b}from"./index-D9p21Czz.js";import{c as p,G as h,u as k,T as N,S as L}from"./usePokemonQueries-ClA0hdAh.js";const v=({pokemonList:t,isGridView:a})=>{const o=j(),l=s=>{o(`/pokemon/${s.name}`,{state:{pokemon:s}})},r=localStorage.getItem("capturedPokemon"),c=r?JSON.parse(r):[];return e.jsx("div",{children:e.jsx("div",{className:a?"grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-4":"flex flex-col gap-4 mb-4",children:t.map((s,n)=>{const m=s.url.split("/").filter(Boolean).pop(),i=c.find(u=>u.pokemonId===Number(m));return a?e.jsxs("div",{className:"border dark:border-gray-600 rounded-lg shadow-md p-4 flex flex-col items-center justify-center",onClick:()=>l(s),style:{cursor:"pointer"},children:[e.jsx("div",{className:"bg-gray-200 dark:bg-gray-400 h-24 w-24 rounded-md mb-2",children:e.jsx("img",{src:`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${m}.png`,alt:s.name})}),e.jsx("h2",{className:"text-lg font-semibold dark:text-pokemonWhite",children:p(s.name)}),i?e.jsx("span",{className:"bg-green-200 text-green-800 rounded-full px-2 py-1 text-xs font-semibold",children:"Captured"}):e.jsx("span",{className:"bg-red-200 text-red-800 rounded-full px-2 py-1 text-xs font-semibold",children:"Not Captured"})]},n):e.jsxs("div",{className:"flex items-center border-b border-gray-300 p-4",onClick:()=>l(s),style:{cursor:"pointer"},children:[e.jsx("div",{className:"w-20 h-20",children:e.jsx("img",{src:`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${m}.png`,alt:s.name,className:"w-full h-full object-cover rounded-md"})}),e.jsxs("div",{className:"ml-4",children:[e.jsx("h2",{className:"text-lg font-semibold dark:text-pokemonWhite",children:p(s.name)}),e.jsxs("p",{className:"text-sm dark:text-pokemonWhite",children:["Nickname: ",i?i.nickname:"N/A"]}),e.jsxs("p",{className:"text-sm dark:text-pokemonWhite",children:["Date: ",i?i.dateCaptured:"N/A"]}),i?e.jsx("span",{className:"bg-green-200 text-green-800 rounded-full px-2 py-1 text-xs font-semibold",children:"Captured"}):e.jsx("span",{className:"bg-red-200 text-red-800 rounded-full px-2 py-1 text-xs font-semibold",children:"Not Captured"})]})]},n)})})})};function y(t){return h({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M48 48a48 48 0 1 0 48 48 48 48 0 0 0-48-48zm0 160a48 48 0 1 0 48 48 48 48 0 0 0-48-48zm0 160a48 48 0 1 0 48 48 48 48 0 0 0-48-48zm448 16H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0-320H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16zm0 160H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16z"},child:[]}]})(t)}function P(t){return h({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"rect",attr:{width:"176",height:"176",x:"48",y:"48",fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32",rx:"20",ry:"20"},child:[]},{tag:"rect",attr:{width:"176",height:"176",x:"288",y:"48",fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32",rx:"20",ry:"20"},child:[]},{tag:"rect",attr:{width:"176",height:"176",x:"48",y:"288",fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32",rx:"20",ry:"20"},child:[]},{tag:"rect",attr:{width:"176",height:"176",x:"288",y:"288",fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32",rx:"20",ry:"20"},child:[]}]})(t)}const w=({isGridView:t,toggleView:a,showCaptured:o,toggleFilter:l,searchTerm:r,setSearchTerm:c})=>e.jsxs("div",{className:"flex flex-col-reverse sm:flex-row items-start justify-between",children:[e.jsx("div",{className:"flex items-center",children:e.jsxs("button",{onClick:l,className:"relative inline-flex items-center mr-4 sm:mt-2 mb-4",children:[e.jsx("div",{className:`w-14 h-7 flex items-center rounded-full p-1 cursor-pointer ${o?"bg-pokemonRed dark:bg-gray-400":"bg-pokemonBlue dark:bg-pokemonWhite"}`,children:e.jsx("div",{className:`bg-pokemonWhite dark:bg-pokemonBlack w-6 h-6 rounded-full shadow-md transform transition-transform duration-300 ${o?"translate-x-7":"translate-x-1"}`})}),e.jsx("span",{className:"ml-2 font-semibold dark:text-pokemonWhite",children:o?"CAPTURED":"ALL"})]})}),e.jsxs("div",{className:"flex items-center mb-4",children:[e.jsx("button",{onClick:a,className:"text-xl mr-4",children:t?e.jsx(y,{className:"dark:text-pokemonWhite"}):e.jsx(P,{className:"dark:text-pokemonWhite"})}),e.jsx("input",{type:"text",placeholder:"Search...",value:r,onChange:s=>c(s.target.value),className:"border rounded-md p-2 w-full dark:bg-gray-900 dark:border-gray-600 dark:text-pokemonWhite"})]})]}),S=()=>{const[t,a]=d.useState({limit:20,offset:0}),{data:o,isLoading:l}=k(t),[r,c]=d.useState([]),s=d.useCallback(()=>{o!=null&&o.next&&a(n=>({...n,offset:(n.offset||0)+(n.limit||0)}))},[o]);return d.useEffect(()=>{o&&o.results&&c(n=>[...n,...o.results])},[o]),{pokemonList:r,loadMore:s,isPokemonListLoading:l}},W=()=>{const[t,a]=d.useState(""),[o,l]=d.useState([]),{data:r}=k({limit:150,offset:0}),c=d.useCallback(s=>{t&&(r!=null&&r.results)?l(r.results.filter(n=>n.name.toLowerCase().includes(t.toLowerCase()))):l(s)},[t,r]);return{searchTerm:t,setSearchTerm:a,filteredPokemonList:o,filterPokemonList:c}},C=t=>{const a=()=>{window.innerHeight+document.documentElement.scrollTop===document.documentElement.offsetHeight&&t()};d.useEffect(()=>(window.addEventListener("scroll",a),()=>{window.removeEventListener("scroll",a)}))},T=(t,a)=>{const[o,l]=d.useState([]);return d.useEffect(()=>{const r=localStorage.getItem("capturedPokemon"),c=r?JSON.parse(r):[],s=a?t.filter(m=>{const i=Number(m.url.split("/").filter(Boolean).pop());return c.some(u=>u.pokemonId===i)}):t,n=Array.from(new Set(s.map(m=>m.url))).map(m=>s.find(i=>i.url===m));l(n)},[t,a]),o},B=()=>{const{pokemonList:t,loadMore:a,isPokemonListLoading:o}=S(),{searchTerm:l,setSearchTerm:r,filteredPokemonList:c,filterPokemonList:s}=W(),[n,m]=d.useState(!0),[i,u]=d.useState(!1),g=()=>m(!n),f=()=>u(!i);C(a),d.useEffect(()=>{s(t)},[t,s]);const x=T(c,i);return e.jsxs("div",{className:"min-h-screen bg-pokemonWhite dark:bg-gray-900 p-4 sm:px-16",children:[e.jsxs("div",{className:"flex justify-between w-full mb-5 mt-3",children:[e.jsx("h1",{className:"text-2xl font-bold text-pokemonBlack dark:text-pokemonWhite",children:"Pokedex"}),e.jsx(N,{})]}),e.jsxs("div",{className:"sm:px-16",children:[e.jsx(w,{isGridView:n,toggleView:g,showCaptured:i,toggleFilter:f,searchTerm:l,setSearchTerm:r}),x.length<1&&e.jsxs(e.Fragment,{children:[e.jsx("hr",{}),e.jsx("p",{className:"text-lg font-semibold mt-2 dark:text-pokemonWhite",children:"No Pokemon Record"})]}),e.jsx(v,{pokemonList:x,isGridView:n})]}),o&&e.jsx(b,{loadingType:"loadingText"}),e.jsx(L,{})]})};export{B as default};
