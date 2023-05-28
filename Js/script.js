

function calculateTemp() {
    
    var temperature = parseFloat(document.getElementById('temp').value);
    var unit = document.getElementById('temp_diff').value;
    
  
    var result;
    if (unit === 'cel') {
      result = (temperature * 9/5) + 32; 
    } else if (unit === 'fah') {
      result = (temperature - 32) * 5/9; 
    }
    

    document.getElementById('convertedTemp').value = result.toFixed(2);
  }
  