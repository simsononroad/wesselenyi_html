function turizmus(melyik){
    document.getElementById('turizmusszovegkeret').style.display='none';
    document.getElementById('turizmuskep').src='kepek/'+melyik+'.jpg';
    document.getElementById('turizmuskepkeret').style.display='block';   
}

function keprejt(){
  document.getElementById('turizmuskepkeret').style.display='none';
  document.getElementById('turizmusszovegkeret').style.display='block';    
}