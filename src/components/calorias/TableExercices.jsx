import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';



function TableExercices(props) {


    const newKey = props.id+"abcd"
    const otherKey = props.id+"allskks"
    const otherohter = props.id+"sdfdfdf"
    return (  
        <div>
        
        <table  >
         <thead>
          <tr>            
            <th>{props.dia}</th>            
            <th>{props.muscle}</th>           
          </tr>        
        </thead>
        
        <tbody>
            <tr >
              <td>Nombre</td>
              <td>Repeticiones</td>              
            </tr>
            {Object.entries(props.ejercicios).map(([clave,valor]) => (                
                <tr key={clave+"sdsdf"}>
                <td>{clave}</td>
                <td>{valor}</td>             
                </tr>          
            ))}                    

        </tbody> 
      </table>
    
        </div>
        
    );
}

export default TableExercices;