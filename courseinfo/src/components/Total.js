// const Total = ({ sumArr }) => <p>Number of exercises {}</p>

const Total = ({sumArr}) => {
    const total = sumArr.reduce((accumulator, currObj) => {
        return accumulator + currObj.exercises;
    }, 0);
    return (
    <>
        <p>Number of exercises {total}</p>
    </>
    )
}

export default Total;