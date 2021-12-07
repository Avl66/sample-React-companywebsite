import React,{useState, useEffect, useCallback} from 'react';
import axios from 'axios';

function EmployeeList({props}) {
    const [emp, getEmp]=useState(JSON.parse(localStorage.getItem("empList")) ?? []);
    const stylechange= (props.grid===false ? 'bar-view' :'');
    let emplist = JSON.parse(localStorage.getItem("emp"));

    useEffect(()=>{
        //fetching employee list though api
    axios.get('https://run.mocky.io/v3/6f472192-366f-4983-a4f1-8f761da500e2').then(
        (res)=>{
            let Emp= res.data.Employees;
            localStorage.setItem("empList", JSON.stringify(Emp));
        localStorage.setItem("emp", JSON.stringify(Emp));
        getEmp(Emp);
        }
    ).catch(e=>console.log(e.msg, "error"));
    //unmount comp cleanup
    return () => {
        getEmp([]); 
      };
    }, [])
   // Sort array by names
    const sortEmp = ()=>{     
    const sorted= [...emp].sort((a, b) => {
            let t1 = a.preferredFullName.toLowerCase(),
                t2 = b.preferredFullName.toLowerCase();
        
            if (t1 < t2) {
                return -1;
            }
            if (t1 > t2) {
                return 1;
            }
            return 0;
        });
     localStorage.setItem("empList", JSON.stringify(sorted));
    getEmp(sorted);
    }
  const clearEmployee =()=>{     
        getEmp( JSON.parse(localStorage.getItem("emp")) );
  }
    //search or filter the employee data
    const getEmployee =useCallback(()=>{
        if(props.inp!=='' && props.inp!==null){
            let filtrd=[...emp].filter((e)=>{
                let flag=false;
                   let objvalues=Object.values(e);
                      if(objvalues.includes(props.inp)){
                          flag=true;
                      } 
                return flag;
            });
            localStorage.setItem("empList", JSON.stringify(filtrd));
            getEmp(filtrd);                 
        } 
    },[props.inp])

    const unSortEmployee =useCallback(()=>{ 
        let filtrd=[];
       if(props.sort===false){
        filtrd=[...emplist].filter((e)=>{
            let flag=false;
               let objvalues=Object.values(e);
                  if(objvalues.includes(props.inp)){
                      flag=true;
                  } 
            return flag;
        });
        if(props.inp===null){filtrd=[...emplist]}
        localStorage.setItem("empList", JSON.stringify(filtrd));
        getEmp(filtrd);
       }
    },[props.sort,props.inp])

    useEffect(()=>{
        if(props.inp!==''){
         getEmployee();
        }
        if(props.inp===''){
            clearEmployee();
        }
        
    },[props.inp])

    useEffect(()=>{   
   },[props.grid])

   useEffect(()=>{
    if(props.sort===true){
        sortEmp();
     }
     if(props.sort===false){
        unSortEmployee();
     }    
},[props.sort])

    return (
        <>
        {   emp===null &&
           <h1 className="centered">Loading...</h1>
        }
        {emp &&
        <div className={`emp-container${' '}${stylechange}`}>
            {emp.map((a)=> { 
                let rand=Math.floor(Math.random()*100000+24-1);
               return <div className="emp-block" key={rand}>
                <table>
                    <tbody>
                    <tr>
                    <td>User Id:</td>   
                    <td>{a.userId}</td>
                    </tr>
                    <tr>
                    <td>Full Name:</td>   
                    <td>{a.preferredFullName}</td>
                    </tr>
                    <tr>
                    <td>Job Title:</td>   
                    <td>{a.jobTitleName}</td>
                    </tr>
                    <tr>
                    <td>Employee Code:</td>   
                    <td>{a.employeeCode}</td>
                    </tr>
                    <tr>
                    <td>Region:</td>   
                    <td>{a.region}</td>
                    </tr>
                    <tr>
                    <td>Phone No:</td>   
                    <td>{a.phoneNumber}</td>
                    </tr>
                    <tr>
                    <td>Email Id:</td>   
                    <td>{a.emailAddress}</td>
                   </tr> 
                   </tbody>                  
                </table>              
               </div>            
            })
            }
        </div>
       }
        {props.inp!==null && emp.length===0 &&
            <div className="fallback-ui">
                <h1>No Records Found..!</h1>
               <h4>Clear and search again.</h4>
            </div>
         }
         </>
    )
}

export default EmployeeList;
