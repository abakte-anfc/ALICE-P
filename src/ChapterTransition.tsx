import React from 'react';
type Props = {number:string;title:string;from:string;to:string;dark?:boolean};
/** Cenário decorativo independente: nunca recorta texto ou recebe foco. */
export default function ChapterTransition({number,title,from,to,dark=false}:Props){
 return <div className="chapter-transition" data-tear-scene aria-hidden="true" style={{'--sheet-color':from,'--reveal-color':to,'--reveal-ink':dark?'var(--cream)':'var(--ink)'} as React.CSSProperties}>
 <div className="tear-stage"><div className="tear-underlay"><span className="transition-orbit"/><span className="transition-number">{number} / 05</span><span className="transition-star">✧</span><span className="transition-title">{title}</span><span className="transition-line"/><span className="transition-note">CADA HISTÓRIA, UM NOVO ENCONTRO</span></div><div className="tear-sheet tear-sheet-top"><span className="sheet-ring"/><span className="sheet-label">PROJETO FRIDA <span>·</span> ENCONTROS</span><span className="sheet-flower">❋</span></div><div className="tear-sheet tear-sheet-bottom"><span className="sheet-instruction">CONTINUE ROLANDO <span>↓</span></span><span className="sheet-flower">✧</span></div><div className="tear-thread"/></div>
 </div>
}
