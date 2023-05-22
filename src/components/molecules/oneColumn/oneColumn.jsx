import React from "react";
import CounterInColumn from "../../atoms/counterInColumn/conterInColumn";
import TextInColumn from "../../atoms/textInColumn/textInColumn"
import TitleInColumn from "../../atoms/titleInColumn/titleInColumn";

const OneColumn = ({ counter, title, text }) =>
  <div className='one-column-column'>
    <CounterInColumn counterColumn={counter} />
    <TitleInColumn titleColumn={title} />
    <TextInColumn textColumn={text} />
  </div>

export default OneColumn