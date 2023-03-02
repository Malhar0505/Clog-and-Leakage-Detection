let button = document.getElementById('btn');

button.addEventListener('click', () => {
    var flow1 = parseInt(document.getElementById('flow1').value);
    var flow2 = parseInt(document.getElementById('flow2').value);
    var result1 = document.getElementById('output1');
    var result2 = document.getElementById('output2');
    var result3 = document.getElementById('output3');
    var result4 = document.getElementById('output4');
    let flow1_status = false , flow2_status = false;

    if(isNaN(flow1) || isNaN(flow2)) {
        document.getElementById('error').innerHTML = 'Please provide valid numbers';
    }else{
        document.getElementById('error').innerHTML = '';
        flow1_status = true;
        flow2_status = true;
    }

    if(flow1_status && flow2_status){
        var flow = flow1 - flow2; 
    if (flow >=6){
        if(flow <= 2 && flow >= 0){
          result1.innerHTML = 'Optimum rate of flow of water';
          result2.innerHTML = '';
          result3.innerHTML = '';
          result4.innerHTML = '';
          
        }else if (flow <= 5 && flow >= 3){
          result1.innerHTML = '';
          result2.innerHTML = 'There must be a clog in the water flow';
          result3.innerHTML = '';
          result4.innerHTML = '';
        }else if (flow <= 10 && flow >= 6){
          result1.innerHTML = '';
          result2.innerHTML = '';  
          result3.innerHTML = 'There must be leakage in the water pipe';
          result4.innerHTML = '';
        }
    }
    if (flow <= 5 && flow >= 2){
        if(flow <= 1 && flow >= 0){
            result1.innerHTML = 'Optimum rate of flow of water';
            result2.innerHTML = '';
            result3.innerHTML = '';
            result4.innerHTML = '';
            
          }else if (flow <= 3 && flow >= 2){
            result1.innerHTML = '';
            result2.innerHTML = 'There must be a clog in the water flow';
            result3.innerHTML = '';
            result4.innerHTML = '';
          }else if (flow <= 5 && flow >= 4){
            result1.innerHTML = '';
            result2.innerHTML = '';  
            result3.innerHTML = 'There must be leakage in the water pipe';
            result4.innerHTML = '';
          }  
    }
    
    }
});
