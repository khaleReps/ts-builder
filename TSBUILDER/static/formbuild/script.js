String.prototype.endsWith = function(suffix) {
  return this.indexOf(suffix, this.length - suffix.length) !== -1;
};
String.prototype.startsWith = function(needle) {
  return(this.indexOf(needle) == 0);
};


$('#formdown').keyup(function(){
  
  var inputs = $(this).val().split('\n');
  var x = '';
  var radio = false;
  var radiogroup = 0;
  
  $.each( inputs, function( i, val ) {
    
    if (val) {
      name = val.split(' ').join('-');
      
      if (val.startsWith('() ')) {
        if (!radio) {
          radiogroup++;
        }
        radio = true;
        val = val.split('() ').join('');
        name = name.split('()-').join('');
        x += '<label class="radio"><input type=radio name=radio'+radiogroup+' value="'+name+'"> '+val+'</label>\n';
      
      } else if (val.startsWith('(*) ')) {
        if (!radio) {
          radiogroup++;
        }
        radio = true;
        val = val.split('(*) ').join('');
        name = name.split('(*)-').join('');
        x += '<label class="radio"><input type=radio name=radio'+radiogroup+' value="'+name+'" checked> '+val+'</label>\n';
      
      } else if (val.startsWith('[] ')) {
        val = val.split('[] ').join('');
        name = name.split('[]-').join('');
        x += '<label><input type=checkbox name='+name+'> '+val+'</label>\n';
        
      } else if (val.startsWith('[*] ')) {
        val = val.split('[*] ').join('');
        name = name.split('[*]-').join('');
        x += '<label><input type=checkbox name='+name+' checked> '+val+'</label>\n';
        
      } else if (val.endsWith('>textarea')) {
        radio = false;
        val = val.split('>textarea').join('');
        name = name.split('>textarea').join('');
        x += '<label>\n\t'+val+'\n\t<textarea rows=3 name="'+name+'"></textarea>\n</label>\n';
        
      } else {
        radio = false;        
        x += '<label>\n\t'+val+'\n\t<input type="text" name="'+name+'">\n</label>\n';
      }
    }
  });
  
  x = '<form name="aform">\n'+x+'<input type="submit">\n</form>';
  $('#output').html(x);
  $('#code').text(x);
});