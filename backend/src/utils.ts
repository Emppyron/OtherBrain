export function RandomHashForShare(len:number):string{
      const hashKey="weefedrgvedgsfadadcdvdg12321453461221w21qw";
      let length=hashKey.length;
      let ans="";
      for(let i=0;i<len;i++){
         ans+=hashKey[(Math.floor(Math.random()*length))];
      }
      return ans;  
}
// learn why the browser has problem in reading the #value while sending requests