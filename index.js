#!/usr/bin/env node
import {blue,green,yellow,underline,bgCyanBright,redBright} from 'colorette'
import open from 'open'

console.log(
  blue('waake')+
  green('me')+
  yellow('_')+
  underline('up')+
  bgCyanBright('Here🤓')
);

setTimeout(()=>{
  console.log(redBright("welcome to my world"));
},5000)

setTimeout(()=>{
  open('https://www.notion.so/9d661f445ceb4ad3915afdf67054f3cc?v=944105fc4c884faf905cf65164ce6fe1')
},10000)