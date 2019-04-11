import React from 'react'

function ExamTable(props){
    
    var exam=props.exam;
    return (
        <>
            {
            exam.map(exam=>(
                    <React.Fragment key={exam.id}>
                    <tr>
                    <td>{exam.rollnumber}</td>
                    <td>{exam.subject1mark}</td>
                    <td>{exam.subject2mark}</td>
                    <td> {exam.subject3mark}</td>
                    <td> {exam.subject4mark}</td>
                    <td> {exam.subject5mark}</td>
                    <td> {exam.total}</td>
                    <td> {exam.rank}</td>
                    <td> {exam.semester}</td>
                    <td> {exam.percentage}</td>
                    </tr>
                    </React.Fragment>
                ))
            }
        </>
    )
}

export default ExamTable